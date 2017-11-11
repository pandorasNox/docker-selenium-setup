#!/bin/bash

# Starts test runner execution of all tests
# TODO: add arguments to specify nodes and number of concurrent nodes, e.g. scale firefox=4

container=nightwatch_grid_results

function cleanup() {
  exit_code=$?

  docker cp $container:/home/docker/app/tests_output .
  docker rm -fv $container > /dev/null

  if [[ "$exit_code" == "1" ]]; then
    printf "\n Test failure! View screenshots in tests_output/screenshots. \n"
  fi
}

trap cleanup INT TERM EXIT

docker-compose run --name $container nightwatch
