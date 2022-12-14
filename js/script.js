const buttons = [...document.querySelectorAll(".buttons button")];
const buttons2 = [...document.querySelectorAll(".buttons2 button")];
const player1 = document.querySelector(".player1");
const cpu = document.querySelector(".cpu");
let images = ["rock", "scissors", "paper", "lizard", "spock"];
let botao = document.querySelector(".check");

function check() {
  if (
    player1.style.backgroundImage == buttons[0].style.backgroundImage &&
    cpu.style.backgroundImage == buttons2[0].style.backgroundImage
  ) {
    alert("empate");
  } else if (
    player1.style.backgroundImage == buttons[0].style.backgroundImage &&
    cpu.style.backgroundImage == buttons2[1].style.backgroundImage
  ) {
    alert("Ganhou");
  } else if (
    player1.style.backgroundImage == buttons[0].style.backgroundImage &&
    cpu.style.backgroundImage == buttons2[2].style.backgroundImage
  ) {
    alert("Perdeu");
  } else if (
    player1.style.backgroundImage == buttons[0].style.backgroundImage &&
    cpu.style.backgroundImage == buttons2[3].style.backgroundImage
  ) {
    alert("Pedra esmaga lagarto");
  } else if (
    player1.style.backgroundImage == buttons[0].style.backgroundImage &&
    cpu.style.backgroundImage == buttons2[4].style.backgroundImage
  ) {
    alert("spock vaporiza pedra");
  }
  player1.style.backgroundImage = "";
  cpu.style.backgroundImage = "";
}

buttons.forEach((el, i) => {
  el.addEventListener("click", () => {
    player1.style.backgroundImage = `url(imagens/${images[i]}.png)`;
  });
});

buttons2.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    cpu.style.backgroundImage = `url(imagens/${images[i]}.png)`;
  });
});

botao.addEventListener("click", check);
