let canvas = document.getElementById("desenho");
let ctx = canvas.getContext("2d");

random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let obstacle1 = {
  positionX: 0,
  positionY: 0,
};

let obstacle2 = {
  positionX: 250,
  positionY: 0,
};

let cano1 = document.createElement("img");
cano1.src = "images/pipeNorth.png";

let cano2 = document.createElement("img");
cano2.src = "images/pipeSouth.png";

function render(img, arr1, arr2) {
  img.addEventListener("load", function () {
    ctx.drawImage(img, arr1, arr2);
  });
}
render(cano1, obstacle1.positionX, obstacle1.positionY)

setInterval(function () {
  obstacle1.positionX -= 100
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
}, 800);

// setInterval(() => {
//   ;
// }, 400);


// window.addEventListener("click", function () {
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//   let obs1 = obstacle1.positionX++;
//   let obs2 = obstacle2.positionX++;
//   console.log(obs1, obs2);
//   render(
//     cano1,
//     "images/pipeSouth.png",
//     obstacle1.positionX,
//     obstacle1.positionY
//   );
//   render(
//     cano2,
//     "images/pipeNorth.png",
//     obstacle2.positionX,
//     obstacle2.positionY
//   );
// });
// ctx.clearRect(0, 0, canvas.width, canvas.height);
