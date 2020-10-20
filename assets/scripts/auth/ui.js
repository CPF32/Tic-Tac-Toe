'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message1').text('Thanks for signing up ' + response.user.email)
}

const signUpFailure = function () {
  $('#message1').text('Sign up failed. Please, try again.')
}

const signInSuccess = function (response) {
  // save user in the api resonse to our store object
  store.user = response.user

  $('#play-game-form').show()
  $('#games-played-form').show()
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const signInFailure = function () {
  $('#message2').text('Sign in failed. Please, try again.')
}

const onSignOutSuccess = function () {
  $('#message3').text('Signed out successfully.')

  store.user = null

  $('#play-game-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignOutFailure = function () {
  $('#message3').text('Sign out Failed.')
}

const onChangePasswordSuccess = function () {
  $('#message3').text('Password successfully changed!')
}

const onChangePasswordFailure = function () {
  $('#message3').text('Password change failed. Please, try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
