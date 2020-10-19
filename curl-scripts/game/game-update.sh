#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games:id"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}"
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "X"
      },
      "over": false
    }
  }'


echo
