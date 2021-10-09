let lives = [5, 5];
let round = 1;

function computerPlay()
{
    let hand = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return hand[index];
}

function updateHealth()
{

    const player = document.querySelectorAll('.health');
    player[0].textContent = lives[0];
    player[1].textContent = lives[1];
}   

function updateDisplay(text)
{
    const disptext = document.querySelector('#display-text');
    disptext.textContent = text;
}

function resetAll()
{
    lives = [5, 5];
    updateHealth();
    round = 1;
    
    const winlose = document.querySelector('#win-lose');
        winlose.textContent = "Round "+String(round);

    updateDisplay("Start by choosing your weapon:");
    
}

function updateAll(text)
{
    updateHealth();
    updateDisplay(text);
    round += 1;
    const winlose = document.querySelector('#win-lose');
        winlose.textContent = "Round "+String(round);
    //won or lose?
    if (lives[0] <= 0)
    {
        console.log("Lose")
        const winlose = document.querySelector('#win-lose');
        winlose.textContent = "LOSE!";
        
        setTimeout( () => {
            alert("YOU LOSE!");
            resetAll()
        }, 100);

        
    }
    else if (lives[1] <= 0)
    {
        console.log("Win")
        const winlose = document.querySelector('#win-lose');
        winlose.textContent = "WIN!";
        setTimeout( () => {
            alert("YOU WON!");
            resetAll()
        }, 100);
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            return "Tie! You both choose Rock";
        }
        else if (computerSelection == "paper") {
            lives[0] -= 1;
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection == "scissors") {
            lives[1] -= 1;
            return "You Win! Rock beats Scissors";
        }   
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "paper") {
            return "Tie! You both choose Paper";
        }
        else if (computerSelection == "scissors") {
            lives[0] -= 1;
            return "You Lose! Scissors beats Paper";
        }
        else if (computerSelection == "rock") {
            lives[1] -= 1;
            return "You Win! Paper beats Rock";
        }   
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "scissors") {
            return "Tie! You both choose Scissors";
        }
        else if (computerSelection == "rock") {
            lives[0] -= 1;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper") {
            lives[1] -= 1;
            return "You Win! Scissors beats Paper";
        }   
    }
}

//rock
const btn_rock = document.querySelector('#rock');
btn_rock.addEventListener('click', () => {
    updateAll(playRound("rock",computerPlay()))
});
//paper
const btn_paper = document.querySelector('#paper');
btn_paper.addEventListener('click', () => {
    updateAll(playRound("paper",computerPlay()))
});
//scissors
const btn_scissors = document.querySelector('#scissors');
btn_scissors.addEventListener('click', () => {
    updateAll(playRound("scissors",computerPlay()))
});
