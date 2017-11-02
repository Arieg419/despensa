import os
import json
root_dir = '.'

dishes = []
for directory, subdirectories, files in os.walk(root_dir):
    dishes.append(directory[2:])

with open('Fruit_Dishes.json', 'w') as outfile:
    json.dump(dishes, outfile, indent=4)
