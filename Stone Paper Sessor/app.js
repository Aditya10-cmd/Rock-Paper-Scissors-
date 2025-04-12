let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const yoursc = document.querySelector("#your-score");
const compsc = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        yoursc.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        compsc.innerText = compScore;
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor = "red";
        
    }
};

const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor = "#212f45";
    
};

const playGame = (userChoice) => {
    console.log("user-chocie = " , userChoice);
    const compChoice = genCompChoice();
    console.log("comp-chocie = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            // computer = paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //computer = rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //computer = rock, paper
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});