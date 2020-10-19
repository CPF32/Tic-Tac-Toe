'use strict'
const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#play-game-form').on('submit', events.onPlayGame)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#play-game-form').hide()
})
