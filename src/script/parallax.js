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
  positionX: 310,
  positionY: random(-100, 0),
};

let obstacle2 = {
  positionX: 310,
  positionY: random(270, 300),
};

let cano1 = document.createElement("img");
cano1.src = "src/images/pipeNorth.png";
let cano2 = document.createElement("img");
cano2.src = "src/images/pipeSouth.png";

//playing game
function loopingCano() {

  if(obstacle1.positionX === -50){
    obstacle1.positionX = 600;
    obstacle2.positionX = 600;
    obstacle1.positionY = random(-150, 0);
    obstacle2.positionY = random(450,550);
  }

  obstacle1.positionX--
  obstacle2.positionX--

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  Rerender();
  console.log(obstacle1.positionX)

}

moveCano = setInterval(loopingCano, 0.1)

// setTimeout(function(){
//   clearInterval(moveCano)
// }, 10000)