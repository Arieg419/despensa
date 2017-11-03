import os
import json
root_dir = '.'

for directory, subdirectories, files in os.walk(root_dir):
    if directory == ".":
        continue

    result = []
    for f in files:
        if f.lower().endswith(".json") == False:
            continue
        print os.path.join(directory,f)
        with open(os.path.join(directory,f), "rb") as infile:
            result.append(json.load(infile))

    with open(os.path.join(directory, "merged_file.json"), "wb") as outfile:
        #  os.remove(os.path.join(directory,"merged_file.json"))
         json.dump(result, outfile, indent=4)
