'use strict'
const store = require('./../store')

const onPlayGameSuccess = function (response) {
  $('.sign-up').hide()
  $('.container2').show()
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
  store.game = response.game

  $('#message4').text('Valid Move.')
}

const onUpdateGameFailure = function () {
  $('#message4').text('Invalid Move.')
}

const onWinGameSuccess = function () {
  $('#winner').text('Winner is: ' + store.currentPlayer + '!')

  // create new game

  $('.container2').hide()
  $('.sign-up').show()
}

const onWinGameFailure = function () {
  $('#message5').text('Game is Ongoing.')
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
}

module.exports = {
  onPlayGameSuccess,
  onPlayGameFailure,
  onBoxClickSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onWinGameSuccess,
  onWinGameFailure
}
