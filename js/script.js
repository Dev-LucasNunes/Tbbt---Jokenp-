const buttons = [...document.querySelectorAll(".buttons button")];
const buttons2 = [...document.querySelectorAll(".buttons2 button")];
const player1 = document.querySelector(".player1");
const cpu = document.querySelector(".cpu");
let images = ["rock", "scissors", "paper", "lizard", "spock"];
let botao = document.querySelector(".check");
const gate = document.querySelector(".gate");

function upGate() {
  gate.classList.toggle("on");
}

function check() {
  setTimeout(() => {
    upGate();
  }, 1500);
  setTimeout(() => {
    //rock
    if (
      player1.style.backgroundImage == buttons[0].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[0].style.backgroundImage
    ) {
      alert("Draw");
    } else if (
      player1.style.backgroundImage == buttons[0].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[1].style.backgroundImage
    ) {
      alert("Win!!! \nRock crushes scissor");
    } else if (
      player1.style.backgroundImage == buttons[0].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[2].style.backgroundImage
    ) {
      alert("Lose!!! \nPaper cover rock");
    } else if (
      player1.style.backgroundImage == buttons[0].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[3].style.backgroundImage
    ) {
      alert("Win!!! \nRock crushes lizard");
    } else if (
      player1.style.backgroundImage == buttons[0].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[4].style.backgroundImage
    ) {
      alert("Lose!!! \nSpock vaporizes rock");
    }

    //scissor
    if (
      player1.style.backgroundImage == buttons[1].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[0].style.backgroundImage
    ) {
      alert("Lose!!! \nRock crushes scissor");
    } else if (
      player1.style.backgroundImage == buttons[1].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[1].style.backgroundImage
    ) {
      alert("Draw");
    } else if (
      player1.style.backgroundImage == buttons[1].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[2].style.backgroundImage
    ) {
      alert("Win!!! \nscissor cut paper");
    } else if (
      player1.style.backgroundImage == buttons[1].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[3].style.backgroundImage
    ) {
      alert("Win!!! \nscissor decapitates lizard");
    } else if (
      player1.style.backgroundImage == buttons[1].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[4].style.backgroundImage
    ) {
      alert("Lose!!! \nSpock smashes scissor");
    }

    //paper
    if (
      player1.style.backgroundImage == buttons[2].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[0].style.backgroundImage
    ) {
      alert("Win!!! \nPaper cover rock");
    } else if (
      player1.style.backgroundImage == buttons[2].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[1].style.backgroundImage
    ) {
      alert("Win!!! \nScissor cut paper");
    } else if (
      player1.style.backgroundImage == buttons[2].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[2].style.backgroundImage
    ) {
      alert("Draw");
    } else if (
      player1.style.backgroundImage == buttons[2].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[3].style.backgroundImage
    ) {
      alert("Lose!!! \nLizard eats paper");
    } else if (
      player1.style.backgroundImage == buttons[2].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[4].style.backgroundImage
    ) {
      alert("Win!!! \nPaper disproves Spock");
    }

    //lizard
    if (
      player1.style.backgroundImage == buttons[3].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[0].style.backgroundImage
    ) {
      alert("Lose!!! \nRock crushes lizard");
    } else if (
      player1.style.backgroundImage == buttons[3].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[1].style.backgroundImage
    ) {
      alert("Lose!!! \nScissor decapitates lizard");
    } else if (
      player1.style.backgroundImage == buttons[3].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[2].style.backgroundImage
    ) {
      alert("Win!!! \nLizard eats paper");
    } else if (
      player1.style.backgroundImage == buttons[3].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[3].style.backgroundImage
    ) {
      alert("Draw");
    } else if (
      player1.style.backgroundImage == buttons[3].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[4].style.backgroundImage
    ) {
      alert("Lose!!! \nLizard poisons Spock");
    }

    //spock
    if (
      player1.style.backgroundImage == buttons[4].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[0].style.backgroundImage
    ) {
      alert("Win!!! \nSpock vaporizes rock");
    } else if (
      player1.style.backgroundImage == buttons[4].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[1].style.backgroundImage
    ) {
      alert("Win!!! \nSpock smashes scissor");
    } else if (
      player1.style.backgroundImage == buttons[4].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[2].style.backgroundImage
    ) {
      alert("Lose!!! \nPaper disproves Spock");
    } else if (
      player1.style.backgroundImage == buttons[4].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[3].style.backgroundImage
    ) {
      alert("Lose!!! \nLizard poisons Spock");
    } else if (
      player1.style.backgroundImage == buttons[4].style.backgroundImage &&
      cpu.style.backgroundImage == buttons2[4].style.backgroundImage
    ) {
      alert("Draw");
    }
    player1.style.backgroundImage = "";
    cpu.style.backgroundImage = "";
    gate.classList.add("on");
  }, 2000);
}

buttons.forEach((el, i) => {
  el.addEventListener("click", () => {
    player1.style.backgroundImage = `url(imagens/${images[i]}.png)`;
    cpu.style.backgroundImage = `url(imagens/${
      images[Math.round(Math.random() * 4)]
    }.png)`;
  });
});

// buttons2.forEach((el, i) => {
//   el.addEventListener("click", (e) => {
//     cpu.style.backgroundImage = `url(imagens/${images[i]}.png)`;
//   });
// });

botao.addEventListener("click", check);
