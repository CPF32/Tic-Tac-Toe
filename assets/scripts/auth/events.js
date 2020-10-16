'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()

  // get the form from the event
  const form = event.target

  // get the data from the form
  const data = getFormFields(form)

  // send the data to the api
  api.signUp(data)
    // handle successful response
    .then(ui.signUpSuccess)
    // handle failed response
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  // get the form from the event
  const form = event.target

  // get the data from the form
  const data = getFormFields(form)

  // send the data to the api
  api.signIn(data)
    // handle successful response
    .then(ui.signInSuccess)
    // handle failed response
    .catch(ui.signInFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}
