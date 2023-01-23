var countdownTimer = document.querySelector("#countdown")
var startBtn = document.querySelector("#startBtn")
var container = document.querySelector(".box")
var pointCounter = document.querySelector(".wins")
var displayScore = document.querySelector(".score")
var win = document.querySelector("#correct")

var confirmation = document.querySelector(".confirmation")
var userWinCounterSpan = document.querySelector("#userWinCounterSpan")
var userInitialSpan = document.querySelector("#userInitialSpan")

var winCount = document.querySelector("#winCount")
var nextButton = document.querySelector("nextQuestion1")
var initialInput = document.querySelector("#initals")

var winCounter = 0;
var initalsInput = " ";
var timeLeft = 0;
var timer;
var isWin = false;
var timerCount;


//function for message on correct answer of button click - couldnt figure out how to remove when I went to next question
function message() {
    var message = document.createElement("div");
    message.textContent = "You are Correcto!";
    message.style.visibility = "visible";
    confirmation.appendChild(message);
    console.log("did it create the message?")
    return;
}


// called to start countdown when click start
function startQuiz() {
    timeLeft = 15;
    isWin = false;
    countdown();
}


//WORKING to run when the condition of winning a point is met
function winGame() {
    pointCounter.textContent = winCounter;
    winCounter++;
    setWins();
}
//WORKING on click of correct it enables the next question box
document.getElementById("answer1").addEventListener("click", () => {
    document.querySelector("#nextQuestion1").disabled = false;
    winGame();

})
document.getElementById("answer2").addEventListener("click", () => {
    document.querySelector("#nextQuestion2").disabled = false;
    winGame();

})
document.getElementById("answer3").addEventListener("click", () => {
    document.querySelector("#nextQuestion3").disabled = false;
    winGame();

})
document.getElementById("answer4").addEventListener("click", () => {
    document.querySelector("#nextQuestion4").disabled = false;
    winGame();

})
document.getElementById("answer5").addEventListener("click", () => {
    document.querySelector("#nextQuestion5").disabled = false;
    winGame();

})



// WORKING saving to local api score
function setWins() {
    pointCounter.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

function saveScore() {
    var intials = document.querySelector("#initials").value;
    localStorage.setItem("Initials", intials);
}

function displayScore() {
    userWinCounterSpan.textContent = winCounter;
    localStorage.getItem("Initials", initials);
}

//render previous users and score
function renderLastRegistered(event) {
    initials = document.querySelector("Initials");
    winCounterCounter = localStorage.querySelector("winCount");
    userInitialSpan.textContent = initials;
    userWinCounterSpan.textContent = winCounter;
    displayScore();

}


//WORKING change visibility to next question when correct answer is chosen
document.getElementById("startBtn").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "visible";
        document.getElementById("question2").style.visibility = "hidden";
        document.getElementById("question3").style.visibility = "hidden";
        document.getElementById("question4").style.visibility = "hidden";
        document.getElementById("question5").style.visibility = "hidden";
        document.getElementById("question6").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";
    }

)

document.getElementById("nextQuestion1").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question2").style.visibility = "visible";
        document.getElementById("question3").style.visibility = "hidden";
        document.getElementById("question4").style.visibility = "hidden";
        document.getElementById("question5").style.visibility = "hidden";
        document.getElementById("question6").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";

    }
)

document.getElementById("nextQuestion2").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question2").style.visibility = "hidden";
        document.getElementById("question3").style.visibility = "visible";
        document.getElementById("question4").style.visibility = "hidden";
        document.getElementById("question5").style.visibility = "hidden";
        document.getElementById("question6").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";

    }
)

document.getElementById("nextQuestion3").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question2").style.visibility = "hidden";
        document.getElementById("question3").style.visibility = "hidden";
        document.getElementById("question4").style.visibility = "visible";
        document.getElementById("question5").style.visibility = "hidden";
        document.getElementById("question6").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";

    }
)

document.getElementById("nextQuestion4").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question2").style.visibility = "hidden";
        document.getElementById("question3").style.visibility = "hidden";
        document.getElementById("question4").style.visibility = "hidden";
        document.getElementById("question5").style.visibility = "visible";
        document.getElementById("question6").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";

    }
)

document.getElementById("nextQuestion5").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question2").style.visibility = "hidden";
        document.getElementById("question3").style.visibility = "hidden";
        document.getElementById("question4").style.visibility = "hidden";
        document.getElementById("question5").style.visibility = "hidden";
        document.getElementById("question6").style.visibility = "visible";
        document.getElementById("thankYou").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "hidden";

    }
)
document.getElementById("submit").addEventListener(
    "click", () => {
        document.getElementById("question0").style.visibility = "hidden";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question2").style.visibility = "hidden";
        document.getElementById("question3").style.visibility = "hidden";
        document.getElementById("question4").style.visibility = "hidden";
        document.getElementById("question5").style.visibility = "hidden";
        document.getElementById("question6").style.visibility = "hidden";
        document.getElementById("thankYou").style.visibility = "visible";
        saveScore()

    }
)



// WORKING except if there is no time left Countdown timer
function countdown() {
    timer = setInterval(function () {
        countdownTimer.textContent = timeLeft + " seconds left!";
        timeLeft--;
        if (timeLeft === 0) {
            countdownTimer.textContent = "YOU LOSE";
            clearInterval(timer);
            winGame();
        }
    }, 1000);
}

startBtn.addEventListener("click", startQuiz);







