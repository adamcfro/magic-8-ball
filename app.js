/**
 * Main function
 *
 * @format
 */
function answerQuestion() {
  const answer = retrieveAnswer();
  displayAnswer(answer);
}

/**
 * Generates a random response.
 *
 * @returns {string} - Returns a string of an answer to a question.
 */
function retrieveAnswer() {
  const responses = [
    "YES",
    "NO",
    "DEFINITELY",
    "MAYBE",
    "HMM...",
    "TRY AGAIN LATER",
    "MY SOURCES SAY NO",
    "DON'T COUNT ON IT",
    "OUTLOOK NOT SO GOOD",
    "WITHOUT A DOUBT",
    "SIGNS POINT TO YES",
  ];
  const answer = Math.floor(Math.random() * responses.length);
  return responses[answer];
}

/**
 * Shakes the ball.
 */
function shakeBall() {
  // const center = document.querySelector(".center");
  answerQuestion();
}

/**
 * Displays the content from Magic 8 Ball's sophisticated response algorithm.
 *
 * @param {string} answer
 */
function displayAnswer(answer) {
  const ans = document.createTextNode(answer);
  const center = document.querySelector(".center");
  center.innerHTML = "";
  center.classList.add("center-answer");
  center.appendChild(ans);
}

/**
 * Starts the app.
 */
function startApp() {
  document.querySelector("#button").addEventListener("click", answerQuestion);
  document.querySelector("#ball").addEventListener("drag", shakeBall);
  document.querySelector("#ball").addEventListener("touchmove", shakeBall);
}

startApp();
