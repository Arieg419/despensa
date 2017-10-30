import json
from pprint import pprint
from bs4 import BeautifulSoup
import os
from os import listdir, makedirs
from os.path import isfile, join, basename, splitext, exists
from urlparse import urlparse
import requests
import re

RECIPE_URL = 'https://smittenkitchen.com/2009/04/artichoke-olive-crostini/';

def get_recipe_info(url):
    res = requests.get(url)
    html = res.content.decode('utf-8')
    html = re.sub(re.compile("<!--.*?-->",re.DOTALL),"",html)
    soup = BeautifulSoup(html, "html5lib")
    title = soup.find('h1', {'class': 'entry-title'}).find('a').string
    date = soup.find('time', {'class': 'entry-date'}).get('datetime')
    tag_element_list = soup.findAll('a', {'rel': 'category tag'})
    tag_list = [tag.getText() for tag in tag_element_list]
    ingredients = soup.find('div', {'class': 'jetpack-recipe-ingredients'})
    if ingredients is not None:
        ingredient_list = [ingredient.string for ingredient in ingredients.findAll('li')]
        direction_wrapper = soup.find('div', {'class': 'jetpack-recipe-directions'})
        directions = direction_wrapper.text.split(' \n')
    else:
        p_list = soup.find('div', {'class':'entry-content'}).findAll('br')
        ingredient_list = []
        directions = []
        parent_map = {}
        for br in p_list:
            if ((len(br.parent.getText()) > 1 and br.parent.getText()[0].isdigit() and br.parent.getText()[1] != '.') or br.parent.find('u') is not None):
                if not br.parent in parent_map:
                    ingredient_list += br.parent.getText().split('\n')
                    parent_map[br.parent] = br.parent
            elif (len(br.parent.getText()) > 1 and br.parent.getText()[0].isdigit() and br.parent.getText()[1] == '.'):
                if not br.parent in parent_map:
                    directions += br.parent.getText().split('\n')
                    parent_map[br.parent] = br.parent
            last_p = br.parent

        if len(p_list) == 0:
            last_p = False

        if len(directions) <= 0:
            p_list = soup.find('div', {'class':'entry-content'}).findAll('p')
            should_add_directions = False
            for p in p_list:
                if should_add_directions:
                    directions += [p.getText()]
                if last_p == p:
                    should_add_directions = True

    img_element = soup.find('div', {'class': 'post-thumbnail-container'}).find('img')
    if img_element is None:
        if soup.find('img') is not None:
            img = soup.find('img').get('src')
        else:
            img = None
    else:
        img = img_element.get('src')

    recipe_info = {"title": title,
                "ingredient_list": ingredient_list,
                "url": url,
                "date": date,
                "tags":tag_list,
                "directions": directions,
                "img": img}
    return recipe_info

def get_recipes_in_file(path):
    for file in os.listdir(path):
        create_recipe_json_file(path, os.path.join(path, file))

# gets recipes in Bars.json for example
def create_recipe_json_file(path, file):
    recipe_data = []
    dir_name = splitext(basename(file))[0]
    dir = os.path.join(path, dir_name)
    if exists(dir):
        return
    makedirs(dir)
    with open(file) as data_file:
        file_contents = json.load(data_file)
        i = 0
        while i < len(file_contents):
            recipe_path = urlparse(file_contents[i]).path
            recipe_file_name = filter(bool, recipe_path.split("/"))
            recipe_file_name = recipe_file_name[-1] + ".json"
            recipe_file = open(os.path.join(dir, recipe_file_name), "w")
            recipe_file.write(json.dumps(get_recipe_info(file_contents[i]), sort_keys=True, indent=2, separators=(',', ': ')))
            i += 1

# get_recipes_in_file("../Sweets_Recipe_Links")
# get_recipes_in_file("../Vegetable_Recipe_Links")
# get_recipes_in_file("../Fruit_Recipe_Links")
get_recipes_in_file("../General_Recipe_Links")
