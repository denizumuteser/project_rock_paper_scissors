let scores = [0, 0]

function computerPlay()
{
    let hand = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random()*3)
    return hand[index]
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            return "Tie!"
        }
        else if (computerSelection == "paper") {
            scores[1] += 1
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection == "scissors") {
            scores[0] += 1
            return "You Win! Rock beats Scissors"
        }   
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "paper") {
            return "Tie!"
        }
        else if (computerSelection == "scissors") {
            scores[1] += 1
            return "You Lose! Scissors beats Paper"
        }
        else if (computerSelection == "rock") {
            scores[0] += 1
            return "You Win! Paper beats Rock"
        }   
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "scissors") {
            return "Tie!"
        }
        else if (computerSelection == "rock") {
            scores[1] += 1
            return "You Lose! Rock beats Scissors"
        }
        else if (computerSelection == "paper") {
            scores[0] += 1
            return "You Win! Scissors beats Paper"
        }   
    }
}



function game()
{
    scores = [0, 0]
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper or Scissors?")
        let computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection))        
    }
    console.log(scores)
    if (scores[0] > scores[1])
    {
        console.log("Player Wins The Game!")
    }
    else if (scores[0] < scores[1])
    {
        console.log("Computer Wins The Game!")
    }
    else if (scores[0] == scores[1])
    {
        console.log("Tie???")
    }

}

game()