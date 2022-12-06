const buttons = [...document.querySelectorAll(".buttons button")];
const buttons2 = [...document.querySelectorAll(".buttons2 button")];
const player1 = document.querySelector(".player1");
const cpu = document.querySelector(".cpu");
let images = ["rock", "scissors", "paper", "lizard", "spock"];

buttons.forEach((el, i) => {
  el.addEventListener("click", () => {
    player1.style.backgroundImage = `url(imagens/${images[i]}.png)`;
  });
});

buttons2.forEach((el, i) => {
  el.addEventListener("click", () => {
    cpu.style.backgroundImage = `url(imagens/${images[i]}.png)`;
  });
});

function check() {}
