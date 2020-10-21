'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#play-game-form').on('submit', gameEvents.onPlayGame)
  $('.box').on('click', gameEvents.onBoxClick)
  $('#games-played-form').on('click', gameEvents.onGameCount)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#play-game-form').hide()
  $('#games-played-form').hide()
  $('.play-new-game').hide()
})
