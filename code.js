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
    //  There shouldn't need to be a default return I don't think
}
function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            return (computerSelection == 'paper') ? 'computer' : 'player'
            break;
        case 'paper':
            return (computerSelection == 'scissors') ? 'computer' : 'player'
            break;
        case 'scissors':
            return (computerSelection == 'rock') ? 'computer' : 'player'
            break;
        default:
            return 'Invalid round.'
    }
}
function game () {
    let playerScore = 0
    for (let a = 0; a < 5; a++) {
        let computerSelection = computerPlay ()
        let playerSelection = window.prompt('Shoot:').toLowerCase() //    Not sure if I need parens. here or not yet
        let result = playRound(playerSelection, computerSelection)
        switch (result) {
            case 'player':
                playerScore++
                alert('Player win!')
                alert('Score: ' + playerScore)
                break;
            case 'computer':
                playerScore--
                alert('Computer win..')
                alert('Score: ' + playerScore)
                break;
            default:
                a--
                alert('Invalid round.')
        }
    }
    alert((playerScore > 0) ? 'Player victory!' : 'Computer victory!')
}
game()