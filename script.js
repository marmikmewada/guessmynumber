// agin <button>
const againBtn = document.getElementsByClassName("again");
// header <h1>
const headerH1 = document.querySelector("h1");

let highscore = 0;
let score = 20;

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener(
  "click", function () {
    // console.log(document.querySelector(".guess").value);
    // score <input>
    const inputIn = parseInt(document.querySelector(".guess").value);
    //
    // let message = document.getElementsByClassName("message").textContent;
    const message = document.querySelector(".message");

    const displayScore = () => {
      document.querySelector(".score").innerHTML = score;
    };
    const resetScore = () => {
      score = 20;
      document.querySelector(".score").textContent = 20;
    };
    //displayscore func closing bracket
    if (!inputIn) {
      //1 if s
      message.textContent = "not a number";
    } else {
      if (score === 0) {
        message.textContent = "You Lost, Try again";
        resetScore();
        displayScore();
      } else {
        //    if score is greater than 19

        if (score > 20) {
          highscore = highscore + score;
          document.querySelector(".highscore").textContent = highscore;
          resetScore();
          displayScore();
        } else {
          if (score > 0) {
            //2; if s
            // const randomNumber = 5;
            const randomNumber = Math.floor(Math.random() * 9) + 1;

            if (inputIn === randomNumber) {
              message.textContent = "Perfect Guess";
              score++;
              displayScore();
                 document.querySelector("body").style.backgroundColor = "#60b347";
                 document.querySelector(".number").textContent = randomNumber;
            // document.body.classList.add(".win");
            
            } else {
                if(inputIn < randomNumber) {
                    message.textContent = "Too Low";
                    score = score - 1;
                    displayScore();
                    document.querySelector("body").style.backgroundColor = "#222";
                    document.querySelector(".number").textContent = "?";
                  } else if (inputIn > randomNumber) {
                    message.textContent = "Too High";
                    score = score - 1;
                    displayScore();
                  }
            } 
          }
        }

        //60 if score > 0 closing
      } //else closing
    } // 45 else closing;
  } //event listener function closing
  ); // event listener bracket closing;
