'use strict'
const config = require('./../config')
const store = require('../store')

const playGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = function (currentBox) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: currentBox,
          value: store.currentPlayer
        },
        over: false
      }
    }
  })
}

const gameCount = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

module.exports = {
  playGame,
  updateGame,
  gameCount
}
