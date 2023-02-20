let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputbox");
let looser = new Audio("looser.wav");
let music = new Audio("music.wav");
let winner = new Audio("winner.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("firstpage").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

//reload the page
const newGameBegin = () => {
  looser.play();
  window.location.reload();
};

//start new game
const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

//main logic of our app
const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputbox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is High😱";
      userNumberUpdate.value = "";
      music.play();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is Low 😒";
      userNumberUpdate.value = "";
      music.play();
    } else {
      userGuessUpdate.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      winner.play();
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}😔`;
      userNumberUpdate.value = "";
      looser.play();
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}😔`;
      userNumberUpdate.value = "";
      looser.play();
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      winner.play();
      startNewGame();
    }
  }
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const hardMode = () => {
  music.play();
  maxGuess = 10;
  startGame();
};

const EasyMode = () => {
  music.play();
  maxGuess = 5;
  startGame();
};