#!/bin/sh
echo "::debug::Running entrypoint.sh"
echo "Hello $1"
echo "INPUT_WHO_TO_GREET: $INPUT_WHO_TO_GREET"
echo "HELLO: $HELLO"
time=$(date)
echo "HELLO_TIME=$time" >> $GITHUB_ENV
echo "time=$time" >> $GITHUB_OUTPUT
echo '%d args:' "$#"
echo " '%s'" "$@"
