function getCompChoice(){
    const options=["rock","paper","scissors"];
    let aValue=Math.floor(Math.random()*options.length);
    let compPick=options[aValue];
    return(compPick);
}
function getHumanChoice(){
    let humanInput=window.prompt("Pick rock, paper or scissors. You'll have 5 rounds against the computer. Good luck.").toLowerCase();
    let humanPick=""
    if(humanInput==="rock"){
        humanPick="rock";
    } else if(humanInput==="paper"){
        humanPick="paper";
    } else if(humanInput==="scissors"){
        humanPick="scissors"
    } else{
        console.log("That's not funny btw, please choose an available option :( ")
        humanPick="";
    }
    console.log(humanPick);
    return(humanPick);
}


function playGame(){
let humanScore=0;
let compScore=0;
function playRound (humanChoice, compChoice){
    if(humanChoice===compChoice){
        console.log("tie! both of you picked the same thing.");
    } else if((humanChoice==="rock"&& compChoice==="scissors" )|| (humanChoice==="paper"&&compChoice==="rock" )||( humanChoice==="scissors"&&compChoice==="paper")){
        console.log(`you won this round! you picked ${humanChoice} and computer picked ${compChoice}`);
        humanScore++;
    } else if((humanChoice==="scissors"&& compChoice==="rock")||(humanChoice==="rock"&&compChoice==="paper")||(humanChoice==="paper"&&compChoice==="scissors")){
        console.log(`you lose this round:( you picked ${humanChoice} and computer picked ${compChoice}`);
        compScore++;
    }
}
let humanSelection=getHumanChoice();
let compSelection=getCompChoice();
playRound(humanSelection, compSelection);
console.log(`You:${humanScore}, Computer:${compScore}`);
let humanSelection1=getHumanChoice();
let compSelection1=getCompChoice();
playRound(humanSelection1, compSelection1);
console.log(`You:${humanScore}, Computer:${compScore}`);
let humanSelection2=getHumanChoice();
let compSelection2=getCompChoice();
playRound(humanSelection2, compSelection2);
console.log(`You:${humanScore}, Computer:${compScore}`);
let humanSelection3=getHumanChoice();
let compSelection3=getCompChoice();
playRound(humanSelection3, compSelection3);
console.log(`You:${humanScore}, Computer:${compScore}`);
let humanSelection4=getHumanChoice();
let compSelection4=getCompChoice();
playRound(humanSelection4, compSelection4);
console.log(`FINAL SCORE! You:${humanScore}, Computer:${compScore}`);
if(humanScore>compScore){
    console.log('You won the game! you won most rounds! congrats!')
} else if(humanScore<compScore){
    console.log('You lost the game :( you lost most rounds... Try again!')
} else{
    console.log("It's all a tie! none of you won!")
}
}
playGame();