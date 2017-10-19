#!/usr/bin/python

import json
import os


invalid_json_files = []
read_json_files = []

def parse():
    for files in os.listdir(os.getcwd()):
        print(files)
        with open(files) as json_file:
            try:
                json.load(json_file)
                read_json_files.append(files)
            except ValueError, e:
                print ("JSON object issue: %s") % e
                invalid_json_files.append(files)
    print invalid_json_files, len(read_json_files)

parse()
