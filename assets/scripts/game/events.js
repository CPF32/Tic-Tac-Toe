'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')

const onPlayGame = function (event) {
  event.preventDefault()

  api.playGame()
    // handle successul response
    .then(ui.onPlayGameSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

const onBoxClick = function (event) {
  event.preventDefault()

  const box = $(event.target)

  const cellIndex = box.data('cell-index')

  const boxValue = box.data('value')

  if (boxValue === undefined) {
    box.data('value', store.currentPlayer)

    box.css('background', 'transparent').text(store.currentPlayer)

    api.updateGame(cellIndex)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  } else {
    ui.onUpdateGameFailure()
  }
}

module.exports = {
  onPlayGame,
  onBoxClick
}
