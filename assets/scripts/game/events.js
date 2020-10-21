'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')

const onPlayGame = function (event) {
  event.preventDefault()

  $('.box').text('')
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
      .then(onWinCondition)
      .catch(ui.onUpdateGameFailure)
  } else {
    ui.onUpdateGameFailure()
  }
}

const onWinCondition = function () {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8]) {
    ui.onWinGameSuccess()
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6]) {
    ui.onWinGameSuccess()
  } else {
    if (store.game.cells.every(element => element !== '')) {
      $('#winner').text('Tie Game!')
      $('.container2').hide()
      $('.sign-up').show()
    } else {
      ui.onWinGameFailure()
    }
  }
}

module.exports = {
  onPlayGame,
  onBoxClick,
  onWinCondition
}
