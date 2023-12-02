/**
 * Runs the first time the user interacts with the UI.
 *
 * @format
 */
function firstShake() {
  document.querySelector("#ball").removeEventListener("dragend", firstShake);
  document.querySelector("#button").removeEventListener("click", firstShake);

  shakeBall();
  rotateBall();
  runProgram();
}

/**
 * Animation that shakes the ball side-to-side.
 */
function shakeBall() {
  const outer = document.querySelector("#outer");
  outer.classList.add("shake-ball");

  setTimeout(() => {
    outer.classList.remove("shake-ball");
  }, 1000);
}

/**
 * Displays the content from Magic 8 Ball's sophisticated response algorithm.
 */
function rotateBall() {
  inner.classList.add("begin-rotate");

  setTimeout(() => {
    inner.classList.remove("begin-rotate");
    inner.classList.remove("solid");
    inner.classList.add("liquid");
    inner.classList.add("end-rotate");
  }, 1000);

  setTimeout(() => {
    inner.classList.remove("end-rotate");
  }, 2000);
}

/**
 * Toggles the displayButton class to change the UI for the button.
 */
function displayButton() {
  const button = document.querySelector("#button");
  button.style.visibility = "hidden";
  const p = document.querySelector("#bottom-note");
  p.style.visibility = "hidden";

  setTimeout(() => {
    button.style.visibility = "visible";
    p.style.visibility = "visible";
  }, 3000);
}

/**
 * Fades the response out and in.
 */
function fade() {
  const center = document.querySelector(".center");
  center.classList.toggle("fade");
  setTimeout(() => {
    center.classList.toggle("fade");
  }, 3000);
}

/**
 * Toggles event listeners to prevent premature ball activation.
 */
function toggleListeners() {
  const ball = document.querySelector("#ball");
  const button = document.querySelector("#button");
  ball.removeEventListener("dragend", runProgram);
  button.removeEventListener("click", runProgram);

  setTimeout(() => {
    ball.addEventListener("dragend", runProgram);
    button.addEventListener("click", runProgram);
  }, 2000);
}

/**
 * Generates a random response.
 *
 * @returns {string} - Returns a string of an answer to a question.
 */
function retrieveResponse() {
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
 * Creates the UI for Magic 8 Ball's response.
 */
function displayResponse() {
  const center = document.querySelector(".center");
  center.innerHTML = "";
  center.classList.add("response");

  const answer = retrieveResponse();
  const text = document.createTextNode(answer);
  center.appendChild(text);
}

/**
 * Displays the result of user's query in the UI.
 */
function runProgram() {
  displayButton();
  shakeBall();
  fade();

  setTimeout(() => {
    displayResponse();
    toggleListeners();
  }, 1000);
}

/**
 * Starts the app and adds event listeners.
 */
function startApp() {
  document.querySelector("#ball").addEventListener("dragend", firstShake);
  document.querySelector("#button").addEventListener("click", firstShake);
}

startApp();
