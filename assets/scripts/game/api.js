'use strict'
const config = require('./../config')
// const store = require('../store')

const playGame = function () {
  return $.ajax({
    url: config.apiUrl + '/new-game',
    method: 'POST',
    data: '{}'
  })
}

module.exports = {
  playGame
}
