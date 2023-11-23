/**
 * Generates a random response.
 *
 * @format
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
 * Displays the content from Magic 8 Ball's sophisticated response algorithm.
 */
function rotateBall() {
  document.querySelector("#ball").removeEventListener("dragend", rotateBall);
  document.querySelector("#button").removeEventListener("click", rotateBall);

  document.querySelector("#ball").addEventListener("dragend", displayAnswer);
  document.querySelector("#button").addEventListener("click", displayAnswer);

  inner.classList.add("begin-animation");

  setTimeout(function () {
    inner.style.backgroundColor = "rgb(93, 93, 255)";
    inner.classList.add("end-animation");
  }, 1000);
  displayAnswer();
}

/**
 * Displays the result of user's query in the UI.
 */
function displayAnswer() {
  checkUI();
  setTimeout(function () {
    const answer = retrieveAnswer();
    const text = document.createTextNode(answer);
    const center = document.querySelector(".center");
    center.innerHTML = "";
    center.classList.add("center-answer");
    center.appendChild(text);
  }, 1000);
}

/**
 * Toggles the blinker class to change the UI for the button.
 */
function checkUI() {
  document.querySelector("#button").classList.toggle("blinker");
  setTimeout(function () {
    document.querySelector("#button").classList.toggle("blinker");
  }, 2500);
}

/**
 * Starts the app and adds event listeners.
 */
function startApp() {
  document.querySelector("#ball").addEventListener("dragend", rotateBall);
  document.querySelector("#button").addEventListener("click", rotateBall);
}

startApp();
