const randomNum = Math.floor((Math.random() * 100) + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true


function validateGuess(guess){
    // validates the user input; valid input is given or not
    
}

function checkGuess(guess){
    // checks the guessed number is correct or not according to that user gets something
    

}

function displayMessage(message){
    // displays the message for the user regarding the game info
}

function displayGuess(guess){

}

function newGame(){

}

function endGame(){

}