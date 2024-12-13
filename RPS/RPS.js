function init() {
  document.querySelector(
    ".score"
  ).innerHTML = `win: ${obj.win} lose: ${obj.lose} tie: ${obj.tie} round: ${obj["round"]}`;
}

function computerMove() {
  const random = Math.random();
  if (random <= 1 / 3) {
    document.querySelector(".comp").src = "images/rock.png";
    return "rock";
  } else if (random <= 2 / 3 && random > 1 / 3) {
    document.querySelector(".comp").src = "images/paper.png";
    return "paper";
  } else if (random <= 1 && random > 2 / 3) {
    document.querySelector(".comp").src = "images/scissors.png";
    return "scissors";
  }
}

function match(move) {
  const computermove = computerMove();
  if (move === "rock") {
    if (computermove === "rock") {
      obj.tie++;
    } else if (computermove === "paper") {
      obj.lose++;
    } else if (computermove === "scissors") {
      obj.win++;
    }
    document.querySelector(".you").src = "images/rock.png";
  } else if (move === "paper") {
    if (computermove === "paper") {
      obj.tie++;
    } else if (computermove === "scissors") {
      obj.lose++;
    } else if (computermove === "rock") {
      obj.win++;
    }
    document.querySelector(".you").src = "images/paper.png";
  } else if (move === "scissors") {
    if (computermove === "scissors") {
      obj.tie++;
    } else if (computermove === "rock") {
      obj.lose++;
    } else if (computermove === "paper") {
      obj.win++;
    }
    document.querySelector(".you").src = "images/scissors.png";
  }
  obj.round++;
  document.querySelector(
    ".score"
  ).innerHTML = `win: ${obj.win} lose: ${obj.lose} tie: ${obj.tie} round: ${obj["round"]}`;
}

function reset() {
  obj.lose = 0;
  obj.win = 0;
  obj.tie = 0;
  obj.round = 0;
  document.querySelector(
    ".score"
  ).innerHTML = `win: ${obj.win} lose: ${obj.lose} tie: ${obj.tie} round: ${obj["round"]}`;
}

let obj = {
  win: 0,
  lose: 0,
  tie: 0,
  round: 0,
};
