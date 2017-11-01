import os
import json
root_dir = '.'

for directory, subdirectories, files in os.walk(root_dir):
    # if directory == ".DS_Store" or subdirectories == ".DS_Store":
    #     continue
    result = []
    for f in files:
        if f == "merged_file.json":
            continue
        os.remove(os.path.join(directory, f))
