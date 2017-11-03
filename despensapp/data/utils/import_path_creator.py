import os
import json
root_dir = '.'

dishes = []
for directory, subdirectories, files in os.walk(root_dir):
    dishes.append("require('../data/Vegetable_Recipes/" + directory[2:] + "/merged_file.json'" + ")")

with open('Fruit_Dishes_Import_Paths.json', 'w') as outfile:
    json.dump(dishes, outfile, indent=4)
