let canvas = document.getElementById("desenho");
let ctx = canvas.getContext("2d");
//functions
random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
function Rerender() {
  ctx.clearRect(0, 0, ctx.width, ctx.height);
  ctx.drawImage(cano1, obstacle1.positionX, obstacle1.positionY);
  ctx.drawImage(cano2, obstacle2.positionX, obstacle2.positionY);
}
//objects
let obstacle1 = {
  positionX: 0,
  positionY: random(-150, 0),
};

let obstacle2 = {
  positionX: 0,
  positionY: random(450,550),
};

let cano1 = document.createElement("img");
cano1.src = "images/pipeNorth.png";
let cano2 = document.createElement("img");
cano2.src = "images/pipeSouth.png";

//playing game

moveCano = setInterval(function () {
  

  if(obstacle1.positionX === 650){
    clearInterval(moveCano)
    obstacle1.positionX = 0;
    obstacle2.positionX = 0;
  }

  obstacle1.positionX += 10
  obstacle2.positionX += 10

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  Rerender();
  console.log(obstacle1.positionX)

 

}, 5)


