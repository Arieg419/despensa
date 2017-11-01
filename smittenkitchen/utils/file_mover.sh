#!/bin/bash

clear
welcomemsg='Moving directories in: '
newdirdestination='../../despensapp/data/'
echo 'Starting up file mover...'
echo $welcomemsg`pwd`

for file in `ls`
do
  if [ -d $file ]; then
    echo "$file being moved to $newdirdestination"
    cp -r $file $newdirdestination
  fi
done
