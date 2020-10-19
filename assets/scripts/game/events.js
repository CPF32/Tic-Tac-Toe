'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onPlayGame = function (event) {
  event.preventDefault()

  api.playGame()
    // handle successul response
    .then(ui.onPlayGameSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onPlayGame
}
