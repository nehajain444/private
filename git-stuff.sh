#!/bin/bash


git add *
git commit -m $1
echo $1
git push

if [[ "$1" = "-h" ]] || [[ "$1" = "--help" ]]; then
    echo $1 "comment in commit -m" 
    exit 1
fi

