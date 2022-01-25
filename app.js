let firstCard = getRandom();

let secondCard = getRandom();

let messagePara = getRandom();
let message = "";

let sum = firstCard + secondCard;

function getRandom() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function startGame() {
  renderGame();
}
let paraCards = document.querySelector(".paragraph-cards");

const cards = [firstCard, secondCard];
function renderGame() {
  if (sum > 21) {
    message = "Out of the game";
  } else if (sum < 21) {
    message = "Want to draw a new Card?";
  } else if (sum === 21) {
    message = "You win you are BlackJack";
  }

  messagePara.textContent = message;

  let paraCards = document.querySelector(".paragraph-cards");
  paraCards.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    paraCards.textContent = paraCards.textContent + " " + cards[i];
  }

  let sumPara = document.querySelector(".sum-para");
  sumPara.textContent = "Sum: " + sum;
}

function newGame() {
  let card = getRandom();

  paraCards.textContent = paraCards.textContent + " " + card;

  sum = sum + card;

  cards.push(card);
  console.log(cards);
  renderGame();
}
