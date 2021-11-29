// VARIABLES
let userChoice; // get value from R/P/S buttons
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; // Keeps track of wins/losses
// Maybe result variable?

// Startup functionality *NOT A IN FUNCTION*
// Add event listeners to all 3 buttons
// Onclick call getInput function
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
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  // randomly chose 1 of the 3 options
}

// Comparing user vs comp choices
function compareChoices()
{
  // switch statement for ALL possibilities
}

// Display the round's winner
function displayResult()
{
  // get HTML element to display the text
  // assign string value
}

// Update Score
function updateScore()
{
  // increment user or comp score based on round winner
  // update score on screen
}

// Reset Score
function resetScore()
{
  // set user and comp score to zero
  // update score on screen
}
