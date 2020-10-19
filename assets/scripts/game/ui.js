'use strict'
// const store = require('./../store')

const onPlayGameSuccess = function () {
  console.log('new game worked')

  $('#change-password-form').hide()
  $('#sign-out-form').hide()
}

const onPlayGameFailure = function () {
  $('#message3').text('Play Game Failed.')
}

module.exports = {
  onPlayGameSuccess,
  onPlayGameFailure
}
