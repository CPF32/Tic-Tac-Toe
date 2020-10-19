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

// initialize first player as 'X'
let currentPlayer = 'X'

const onBoxClick = (event) => {
  console.log('click')

  // select the box that the mouse clicked on
  const box = $(event.target)
  const boxIndex = box.data('cell-index')
  box.data('index', boxIndex)
  box.data('value', store.currentPlayer)

  // change background on clicked box to transparent then set text to player
  box.css('background', 'transparent').text(currentPlayer)

  // ternary op to change value of the currentPlayer after turn
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

// event handler for when a box is clicked
$('.box').on('click', onBoxClick)

module.exports = {
  onPlayGame
}
