//elementos
let btn1 = document.getElementById("btn1");
let telaLogin = document.getElementById("telaLogin");

let btn2 = document.getElementById("btn2");
let telaGameover = document.getElementById("telaGameover");

let canvas = document.getElementById("cenario");
let ctx = canvas.getContext("2d");

let bird = document.createElement("img");
let cano1 = document.createElement("img");
let cano2 = document.createElement("img");


let setaEsquerda = document.getElementById("setaEsquerda")
let setaDireta = document.getElementById("setaDireita")

let gleid = document.getElementById("gleidinho")
let suellen = document.getElementById("suellen")
let fong = document.getElementById("fong")
let eduardo = document.getElementById("eduardo")
let adel = document.getElementById("adel")

bird.src = "src/images/bird.png";
cano1.src = "src/images/pipeNorth.png";
cano2.src = "src/images/pipeSouth.png";

window.addEventListener("load", render());

//functions
random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//objects
let obstacle1 = {
  c1PositionX: 310,
  // c1PositionY: random(-100, 0),
  c1PositionY: -100
};

let obstacle2 = {
  c2PositionX: 310,
  // c2PositionY: random(270, 370),
  c2PositionY: 270
};
let { c1PositionX, c1PositionY } = obstacle1;
let { c2PositionX, c2PositionY } = obstacle2;


function render() {
  window.addEventListener("load", function () {
    ctx.drawImage(cano1, c1PositionX, c1PositionY);
    ctx.drawImage(cano2, c2PositionX, c2PositionY);
    ctx.drawImage(bird, player.eixoX, player.eixoY);
  });
}

function reRender() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(cano1, c1PositionX, c1PositionY);
  ctx.drawImage(cano2, c2PositionX, c2PositionY);
  ctx.drawImage(bird, player.eixoX, player.eixoY);
}

function Moveup() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bird, player.eixoX, player.eixoY);
  player.gravidade -= 100;
}

function comecaAgora() {
  render();
  gravidadeAgindo();
  // startScore()
}


let player = {
  eixoX: 80,
  eixoY: 300,
  gravidade: 300,
};


//playing game
canvas.addEventListener("touchmove", () => {
  Moveup();
});
canvas.addEventListener("click", () => {
  Moveup();
});
function loopingCano() {
  setInterval(function () {
    reRender()
    if (c1PositionX === -50) {
      c1PositionX = 600;
      // c1PositionY = random(-100, 0);
      c2PositionX = 600;
      // c2PositionY = random(270, 370);
    }
    
    c1PositionX--;
    c2PositionX--;
    // console.log(save)
    // console.log(c1PositionX, c2PositionX);
    if(player.eixoX + 10 == c1PositionX){
      saveArea()
    }
  }, 10);
}

let save = {
  value1: 150,
  value2: 270,
}
if(c1PositionY <= -100){
  
}
function saveArea() {
  if (player.eixoY > save.value1 && player.gravidade <save.value2) {
    console.log("deu certo")
  } else{
    morreu = true;
    console.log("deu errado")
  }
  console.log(player.gravidade, c1PositionY, c2PositionY)
}

function gravidadeAgindo() {
  interval = setInterval(() => {
    if (player.eixoY != 0) {
      player.gravidade++;
      player.eixoY = player.gravidade;
      reRender();
      // console.log(`gravidade = ${player.gravidade}, eixoY = ${player.eixoY}`);
    }
    gameOver();
  }, 10);
}

let morreu = false;

function gameOver() {
  if (player.eixoY === 600 || player.eixoY <= 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.eixoX = 80;
    player.eixoY = 300;
    player.gravidade = 300;
    reRender();
    morreu = true;
    clearInterval(interval);

    // console.log(`personagem esta morto = ${morreu}`);
  }
  if (morreu !== false) {
    GameOver();
  }
}

//funcionalidades game

let GameOver = () => {
  telaGameover.style.display = "flex";
};

btn1.addEventListener("click", function () {
  telaLogin.style.display = "none";
  comecaAgora();
  loopingCano();
});

let restart = false;

btn2.addEventListener("click", function () {
  comecaAgora();
  loopingCano();
  morreu = false;
  telaGameover.style.display = "none";
});
let passar = [suellen, gleid, eduardo, fong, adel];

setaDireta.addEventListener('click',function(){
  // console.log()
  passar[random(0,4)].style.zIndex = 2;
})
setaEsquerda.addEventListener('click',function(){
  passar[random(0,4)].style.zIndex = 1;
})