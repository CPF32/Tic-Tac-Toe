'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}

const signUpFailure = function () {
  $('#message').text('Sign up failed. Please, try again.')
}

const signInSuccess = function (response) {
  $('#message').text('Your token is ' + response.user.token)
  // save user in the api resonse to our store object
  store.user = response.user

  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const signInFailure = function () {
  $('#message').text('Sign in failed. Please, try again.')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully.')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed.')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password successfully changed!')
}

const onChangePasswordFailure = function () {
  $('#message').text('Password change failed. Please, try again.')
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
