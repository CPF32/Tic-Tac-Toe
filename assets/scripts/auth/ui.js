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
}

const signInFailure = function () {
  $('#message').text('Sign in failed. Please, try again')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
}

const onChangePasswordFailure = function () {
  $('#message').text('Change password failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
