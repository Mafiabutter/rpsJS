const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('#score').textContent = document.getElementById('#score').textContent + playRound(button.id, computerPlay())
        //  Not sure if this will work ATM
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