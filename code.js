const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (document.getElementById('score').innerText == 5) {
            alert('Player victory!')
        }
        else if (document.getElementById('computerScore').innerText == 5) {
            alert('Computer victory..')
        }
        else {
            let result = playRound(button.id, computerPlay())
            if (result === 1) {
                document.getElementById('score').innerText = parseInt(document.getElementById('score').innerText) + 1
                if (document.getElementById('score').innerText == 5) {
                    alert('Player victory!')
                }
            } else {
                document.getElementById('computerScore').innerText = parseInt(document.getElementById('computerScore').innerText) + 1
                if (document.getElementById('computerScore').innerText == 5) {
                    alert('Computer victory..')
                }
            }
        }
    })
})

function computerPlay () {
    let selection = Math.floor(Math.random() * 3)
    switch (selection) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
        default:
            return undefined
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            return (computerSelection == 'paper') ? -1 : 1
            break;
        case 'paper':
            return (computerSelection == 'scissors') ? -1 : 1
            break;
        case 'scissors':
            return (computerSelection == 'rock') ? -1 : 1
            break;
        default:
            return 'Invalid round.'
    }
}