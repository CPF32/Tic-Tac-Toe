'use strict'
const store = require('./../store')

const onPlayGameSuccess = function (response) {
  $('.sign-up').hide()
  $('.play-new-game').show()

  store.game = response.game
  store.currentPlayer = 'X'
}

const onPlayGameFailure = function () {
  $('#message3').text('Play Game Failed.')
}

const onBoxClickSuccess = function () {
  $(event.target).text(store.currentPlayer)
  $(event.target).text(store.index)
}

const onUpdateGameSuccess = function (response) {
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  store.game = response.game

  $('#message4').text('Valid Move.')
}

const onUpdateGameFailure = function () {
  $('#message4').text('Invalid Move.')
}

module.exports = {
  onPlayGameSuccess,
  onPlayGameFailure,
  onBoxClickSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
