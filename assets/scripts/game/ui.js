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
  console.log('Nice!', response)
}

const onUpdateGameFailure = function () {
  $('#message3').text('Invalid Move.')
}

module.exports = {
  onPlayGameSuccess,
  onPlayGameFailure,
  onBoxClickSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
