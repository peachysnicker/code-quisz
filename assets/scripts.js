var countdownTimer = document.querySelector("#countdown")
var startBtn = document.querySelector("#startBtn")
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("incorrect")

var answer = document.querySelectorAll(".answer")


var container1 = document.querySelector(".container1")
var container2 = document.querySelector(".container2")
var container3 = document.querySelector(".container3")
var container4 = document.querySelector(".container4")
var container5 = document.querySelector(".container5")
/*
var button1 = document.querySelector("#1");
var button2 = document.querySelector("#2");
var button3 = document.querySelector("#3");
var button4 = document.querySelector("#4");
*/
var correct
var incorrect
var TimeLeft;

function startQuiz() {
    timeLeft = 75;
    startBtn.disabled = true;
    countdown();
}


// saving to local api score
function correctAns() {
    correct.textContent = correctCounter;
    localStorage.setItem("CorrectCount", correctCounter);
}
function incorrectAns() {
    incorrect.textContent = incorrectCounter;
    localStorage.setItem("incorrectCount", incorrectCounter);
}


//UNSURE IF CORRECT ISSUE ON LINE 42 with .container
//on click of correctAns it will change data-state to be showing not hidden
/*container.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".box") === true) {
        var state = element.getAttribute("data-state") //if it is we grab the data state

        if (state === "hidden") {  //if it is hidden then run
            // element.textContent = element.dataset.number; //if the card is clicked while in hidden it will become "visible"
            element.dataset.state = "visible";
        } else {
            //element.textContent = "";
            element.setAttribute("data-state", "hidden")
        }

    }
});


document.getElementById("okButton").addEventListener(
    "click",
    () => {
        document.getElementById("welcome").hidden = true;
        document.getElementById("awesome").hidden = false;
    },
    false
);
*/
document.getElementById("answer").addEventListener(
    "click", () => {
        document.getElementById("container1").hidden = true;
        document.getElementById("container2").hidden = false;
    },
    false
)






// Countdown timer
function countdown() {
    var timer = setInterval(function () {
        countdownTimer.textContent = timeLeft + " seconds left!";
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startBtn.addEventListener("click", startQuiz);




/*
var question = 1;

if (button2.pressed() && question == 1) {
    //correct
    question++;
}

*/