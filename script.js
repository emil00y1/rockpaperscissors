/* document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    document.querySelectorAll(".player").forEach((player) => {
      player.classList.toggle("shake");
      player.addEventListener("animationend", shakeResult);
    });
  });
}); */

/* Sources

https://chat.openai.com - Brugt til at forklare fejl ved removeEventListener
https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

 */
const player2 = document.querySelector("#player2");
const player1 = document.querySelector("#player1");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

document.querySelector(".rock").addEventListener("click", (event) => {
  document.querySelectorAll(".player").forEach((player) => {
    draw.classList.add("hidden");
    lose.classList.add("hidden");
    win.classList.add("hidden");
    player.classList.remove("rock", "paper", "scissors");
    player.classList.toggle("shake");
    player.removeEventListener("animationend", shakeResultRock);
    player.removeEventListener("animationend", shakeResultPaper);
    player.removeEventListener("animationend", shakeResultScissors);
    player.addEventListener("animationend", shakeResultRock);
    player2.addEventListener("animationend", playertwo);
  });
});

document.querySelector(".paper").addEventListener("click", (event) => {
  document.querySelectorAll(".player").forEach((player) => {
    draw.classList.add("hidden");
    lose.classList.add("hidden");
    win.classList.add("hidden");
    player.classList.remove("rock", "paper", "scissors");
    player.classList.toggle("shake");
    player.removeEventListener("animationend", shakeResultRock);
    player.removeEventListener("animationend", shakeResultPaper);
    player.removeEventListener("animationend", shakeResultScissors);
    player.addEventListener("animationend", shakeResultPaper);
    player2.addEventListener("animationend", playertwo);
  });
});

document.querySelector(".scissors").addEventListener("click", (event) => {
  document.querySelectorAll(".player").forEach((player) => {
    draw.classList.add("hidden");
    lose.classList.add("hidden");
    win.classList.add("hidden");
    player.classList.remove("rock", "paper", "scissors");
    player.classList.toggle("shake");
    player.removeEventListener("animationend", shakeResultRock);
    player.removeEventListener("animationend", shakeResultPaper);
    player.removeEventListener("animationend", shakeResultScissors);
    player.addEventListener("animationend", shakeResultScissors);
    player2.addEventListener("animationend", playertwo);
  });
});

function shakeResultRock() {
  this.classList.remove("shake");
  document.querySelector("#player1").classList.add("rock");
}

function shakeResultPaper() {
  this.classList.remove("shake");
  document.querySelector("#player1").classList.add("paper");
}

function shakeResultScissors() {
  this.classList.remove("shake");
  document.querySelector("#player1").classList.add("scissors");
}

function playertwo() {
  let rndNum = Math.ceil(Math.random() * 3);
  console.log(rndNum);
  if (rndNum > 2) {
    player2.classList.add("scissors");
  } else if (rndNum < 2) {
    player2.classList.add("rock");
  } else {
    player2.classList.add("paper");
  }
  finalresult();
}

function finalresult() {
  if (
    player1.classList.contains("rock") &&
    player2.classList.contains("paper")
  ) {
    lose.classList.remove("hidden");
  } else if (
    player1.classList.contains("rock") &&
    player2.classList.contains("scissors")
  ) {
    win.classList.remove("hidden");
  } else if (
    player1.classList.contains("paper") &&
    player2.classList.contains("rock")
  ) {
    win.classList.remove("hidden");
  } else if (
    player1.classList.contains("paper") &&
    player2.classList.contains("scissors")
  ) {
    lose.classList.remove("hidden");
  } else if (
    player1.classList.contains("scissors") &&
    player2.classList.contains("rock")
  ) {
    lose.classList.remove("hidden");
  } else if (
    player1.classList.contains("scissors") &&
    player2.classList.contains("paper")
  ) {
    win.classList.remove("hidden");
  } else {
    draw.classList.remove("hidden");
  }
}
