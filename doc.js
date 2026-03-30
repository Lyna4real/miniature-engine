
//to get the computer choice

function getCompChoice(){
    const options=["rock","paper","scissors"];
    let aValue=Math.floor(Math.random()*options.length);
    let compPick=options[aValue];
    return(compPick);
}



let humanScore=0;
let compScore=0;

//DOM references

let textContainer=document.querySelector('div');
let text= document.createElement('p');
let finalWinnerText=document.createElement('p');
textContainer.append(finalWinnerText);
let body=document.querySelector("body");
let rockChoice=document.querySelector(".r");
let paperChoice=document.querySelector(".p");
let scissorsChoice=document.querySelector(".s");
let resetBtn=document.createElement('button');
resetBtn.textContent="Reset";


function playRound(playerSelection){

    getCompChoice();
    let compChoice=getCompChoice();
    
    if(playerSelection===compChoice){
        console.log(`you chose ${playerSelection} and computer chose ${compChoice}`);
        text.textContent=`Tie! Both you and the computer chose ${playerSelection}.`;
        textContainer.append(text);
        console.log(`computer got ${compScore}`);
        console.log(`human got ${humanScore}`)
    } else if(playerSelection==="rock"&&compChoice==="scissors"|| playerSelection==="scissors" && compChoice==="paper" || playerSelection==="paper"&&compChoice==="rock"){
        console.log(`you chose ${playerSelection} and computer chose ${compChoice}`);
        text.textContent=`Congrats! ${playerSelection} beats ${compChoice}`
        textContainer.append(text);
        humanScore++;
        console.log(`computer got ${compScore}`);
        console.log(`human got ${humanScore}`)
    } else{
        console.log(`you chose ${playerSelection} and computer chose ${compChoice}`);
        text.textContent=`You lose :( ${playerSelection} is beaten by ${compChoice}`;
        textContainer.append(text);
        compScore++;
        console.log(`computer got ${compScore}`);
        console.log(`human got ${humanScore}`)
    }

// to stop when one reaches 5 pts
    if(humanScore===5){
    let buttons=document.querySelectorAll('.r,.p, .s');
    buttons.forEach(button => {
        button.disabled=true;
    });
    text.textContent="";
    finalWinnerText.innerText=`You won this game! Congratulations! \n final score: \n You: ${humanScore} ; Computer: ${compScore}`;
    body.append(resetBtn);

        function resetting (){
            humanScore=0;
            compScore=0;
            text.textContent="";
            finalWinnerText.textContent="";
            resetBtn.remove();
            let buttons=document.querySelectorAll('.r,.p, .s');
            buttons.forEach(button => {
            button.disabled=false;
            })
        }

    resetBtn.addEventListener('click',()=> resetting ())
    return
    } else if(compScore===5){
    let buttons=document.querySelectorAll('.r,.p, .s');
    buttons.forEach(button => {
    button.disabled=true;
    });
    text.textContent="";
    finalWinnerText.innerText=`You lost this game :( \n Final score: \n You: ${humanScore} ; Computer: ${compScore} \n That's okay, you can try again.`;
    body.append(resetBtn);

        function resetting (){
            text.textContent="";
            finalWinnerText.textContent="";
            humanScore=0;
            compScore=0;
            resetBtn.remove();
            let buttons=document.querySelectorAll('.r,.p, .s');
            buttons.forEach(button => {
            button.disabled=false;
            });
        }
        
    resetBtn.addEventListener('click',()=> resetting ())
    return
    }
}


rockChoice.addEventListener("click", ()=> playRound("rock"));
paperChoice.addEventListener("click", ()=> playRound("paper"));
scissorsChoice.addEventListener("click", ()=> playRound("scissors"));

