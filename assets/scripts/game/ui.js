'use strict'
// const store = require('./../store')

const onPlayGameSuccess = function () {
  $('.sign-up').hide()
  $('.play-new-game').show()
}

const onPlayGameFailure = function () {
  $('#message3').text('Play Game Failed.')
}

const onUpdateGame = function () {
  $()
}

module.exports = {
  onPlayGameSuccess,
  onPlayGameFailure,
  onUpdateGame
}
