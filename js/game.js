// VARIABLES
let userChoice; // get value from R/P/S buttons
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; // Keeps track of wins/losses
let resultMessage;
// Startup functionality *NOT A IN FUNCTION*
// Add event listeners to all 3 buttons
// Onclick call getInput function
document.getElementById("reset").addEventListener("click", function() {
  resetScore();
});
document.getElementById("rock").addEventListener("click", function() {
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function() {
  getInput(this.id);
});
document.getElementById("scissors").addEventListener("click", function() {
  getInput(this.id);
});

// Get input (User's Choice of RPS)
function getInput(choice)
{
  userChoice = choice;
  // console.log(choice);
  getRandomChoice();
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  // randomly chose 1 of the 3 options
  compChoice = Math.floor(Math.random() * 3); // sets compChoice equal to 0 1 or 2
  // 0 is rock
  // 1 is paper
  // 2 is scissors
  // console.log(compChoice);
  compareChoices();
}

// Comparing user vs comp choices
function compareChoices()
{
  // switch statement for ALL possibilities
  switch (userChoice + compChoice)
  {
    case "scissors2": // scissors vs scissors
    case "paper1": // paper vs paper
    case "rock0": // rock vs rock
     resultMessage = "Draw!";
     break;
    case "scissors0": // scissors vs rock
    case "paper2": // paper vs scissors
    case "rock1": // rock vs paper
      resultMessage = "You Lose :(";
      updateScore("comp");
      break;
    case "scissors1": // scissors vs paper
    case "paper0": // paper vs rock
    case "rock2":  // rock vs scissors
      resultMessage = "You Win!";
      updateScore("user");
      break;
    default:
      resultMessage = "Something went wrong...";
  }
  displayResult();
}

// Display the round's winner
function displayResult()
{
  // get HTML element to display the text & assign resultMessage string
  document.getElementById("result").textContent = resultMessage;
  overlayOn();
  setTimeout(overlayOff, 500);
}

// Update Score
function updateScore(winner)
{
  if(winner == "user")
  {
    document.getElementById("astronaut").classList.add("glow");
    userScore++;
  }
  else
  {
    document.getElementById("robot").classList.add("glow");
    compScore++;
  }
  // increment user or comp score based on round winner
  // update score on screen
  document.getElementById('playerScore').innerHTML = "<h2>" + userScore + "</h2>";
  document.getElementById('compScore').innerHTML = "<h2>" + compScore + "</h2>";
  setTimeout(removeGlow, 500)
  // console.log(compScore + " : " + userScore);
}

function removeGlow()
{
  document.getElementById("astronaut").classList.remove("glow");
  document.getElementById("robot").classList.remove("glow");
}

// Reset Score
function resetScore()
{
  // set user and comp score to zero
  userScore = 0;
  compScore = 0;
  // update score on screen
  document.getElementById('playerScore').innerHTML = "<h2>" + userScore + "</h2>";
  document.getElementById('compScore').innerHTML = "<h2>" + compScore + "</h2>";
}
function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}
