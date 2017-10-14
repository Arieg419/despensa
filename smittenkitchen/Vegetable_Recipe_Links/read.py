import json
from pprint import pprint
from bs4 import BeautifulSoup
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

recipe_data = []
with open('Cabbage.json') as data_file:
    data = json.load(data_file)

i = 0
while i < len(data):
    recipe_data.append(get_recipe_info(data[i]))
    i += 1

pprint(recipe_data)
