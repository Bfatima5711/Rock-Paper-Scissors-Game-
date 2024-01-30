let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const rndmIdx = Math.floor(Math.random()*3);
    return options[rndmIdx];
}

const drowGame = () => {
    msg.innerText = "Is's a Draw. Play again."
    msg.style.backgroundColor = "#081031";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
       
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("user choice",userChoice);
    console.log("Comp choice",compChoice);
    if(userChoice===compChoice){
        drowGame();
    }else{
        let userWin = true;
        if(userChoice==="Rock"){
            // Comp choice should be scissors or Paper otherwise it will draw in above if condition only
            userWin = compChoice==="Paper"?false:true;
        }else if(userChoice==="Paper"){
            // comp choice should be scissors or Roch

            userWin = compChoice==="Scissors"?false:true;
        }else{
            //here user=scissers then compchoice should be paper or Roch
            userWin = compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

    
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});