


// agin <button> 
const againBtn = document.getElementsByClassName("again");
// header <h1>
const headerH1 = document.querySelector("h1");
// question mark remove on win 
// < div > ?
const questionMark = document.querySelector("div");
// Start, wrong, right < p > /23

// score < p > /24
// const score = document.getElementsByClassName("score");
//high score < p > /25
const highScore = document.getElementsByClassName("highscore");
// body < body > to change color on win
const bodyTag = document.getElementsByTagName("body");
// const addGuessInVariable = () => {
//     const guess = inputIn.value;
//     return guess;
// }
// check <button>
// const randomNumber = Math.floor(Math.random() * 19) + 1;
// console.log(randomNumber);
let highscore = 0;
let score = 20;

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener('click', function(){
    // console.log(document.querySelector(".guess").value);
    // score <input> 
    const inputIn = parseInt(document.querySelector(".guess").value);
// const randomNumber = Math.floor(Math.random() * 9) + 1;
    const randomNumber = 5;
// let message = document.getElementsByClassName("message").textContent;
    const message = document.querySelector(".message");

    const displayScore = () => {
    document.querySelector(".score").innerHTML = score;
}
if(!inputIn){ //1 if s
    message.textContent = "not a number";
}; //1 if e
 //1 else s
    
    
 if(score>0){ //2 if s
         if(inputIn===randomNumber){
        message.textContent = "Perfect Guess";
        score = score + 1;
        displayScore();
        }
        else if (inputIn<randomNumber){
        message.textContent = "Too Low";
        score = score - 1;
        displayScore();
        }
        else if(inputIn>randomNumber) {
        message.textContent = "Too High";
        score = score - 1;
        displayScore();
        } // 2 if e


    else if(score>20) { //2 else if s
        message.textContent = "you won, and your highscore is increased";
        highScore = highScore + score;
        document.querySelector(".highscore").value = highScore;
        score = 20;
        displayScore();
        } //2 else if e
    else { // 3 else s
        message.textContent = "You Lost, Try again";
        score=20;
        displayScore();
        } // 3 else e
 } //2 if ends
} //1 else e
);



