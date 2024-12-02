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

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // validates the user input; valid input is given or not
    if(isNaN(guess)){
        alert('Please enter a valid guess!!')
    }
    else if(guess < 1 || guess > 100){
        alert('Number should be between 1 to 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess >= 10){
            displayGuess(guess)
            displayMessage(`Game Over!! NO more guesses!!`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // checks the guessed number is correct or not according to that user gets something
    if(guess === randomNum){
        displayMessage(`Bravo!! You guessed the number 🥳`)
        endGame()
    }
    else if(guess < randomNum){
        displayMessage(`You are halfway there ;)`)
    }

    else if(guess > randomNum){
        displayMessage(`You got further buddy :(`)
    }
}

function displayMessage(message){
    // displays the message for the user regarding the game info
    
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remainGuess.innerHTML = `${11 - numGuess}`
}

function newGame(){

}

function endGame(){

}