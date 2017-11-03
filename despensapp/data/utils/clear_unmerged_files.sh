#!/bin/bash
clear
echo "Organizing directory..."
find . ! -name 'merged_file.json' -exec cp {} ~/Desktop/skdata/ \;

# find . ! -name 'merged_file.json' -delete
