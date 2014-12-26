#!/bin/sh
 
# Clean-up / start-up script for Docker/Fig and MEAN app
# Gary A. Stafford
# https://github.com/garystafford
 
# remove all exited containers
echo "Removing all 'Exited' containers..."
docker rm -f $(docker ps --filter 'status=Exited' -a) > /dev/null 2>&1
 
# remove all <none> images
echo "Removing all untagged (<none>) images..."
docker rmi $(docker images | grep "^<none>" | awk "{print $3}") > /dev/null 2>&1
 
# build and start containers with fig
fig build && fig up
