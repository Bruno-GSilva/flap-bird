let canvas = document.getElementById("desenho");
let ctx = canvas.getContext("2d");

random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let obstacle1 = {
  positionX: 100,
  positionY: 450,
};

let obstacle2 = {
  positionX: 250,
  positionY: 0,
};

let cano1 = new Image();
let cano2 = new Image();

function render(img, url, arr1, arr2) {
  img.addEventListener("load", function () {
    ctx.drawImage(img, arr1, arr2);
  });
  img.src = url;
}

window.addEventListener("click", function () {

  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  let obs1 = obstacle1.positionX++;
  let obs2 = obstacle2.positionX++;

  console.log(obs1, obs2);
  render(
    cano1,
    "images/pipeSouth.png",
    obstacle1.positionX,
    obstacle1.positionY
  );
  render(
    cano2,
    "images/pipeNorth.png",
    obstacle2.positionX,
    obstacle2.positionY
  );
  
});
ctx.clearRect(0, 0, canvas.width, canvas.height);