let stage = document.getElementById('stage');
let ctx = stage.getContext("2d");
let img = document.createElement("img");

let bX = 10;
let bY = 150;
let gravidade = 100;
let gravitySalve = gravidade

img.src = "images/bird.png";

document.addEventListener("click", () => {
    Moveup();
    console.log("subindoo")
})

function again(){
    comecaAgora()
}

function Render(){
    img.addEventListener('load',function(){
        ctx.drawImage(img, bX, bY);
    });
}
function Rerender() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.drawImage(img, bX, bY);
}

function Moveup() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.drawImage(img, bX, bY);
    gravidade -= 80;
    img.style.transition = 'ease-in 1s';
    img.style.transform = "rotateY(45deg)";

    // Render();
    // if (!continua) {
    //     return false;
    // }
    // gravidade = -6.0;
    // // fly.play();

    // setTimeout(function() {
    //     gravidade =  gravitySalve;
    // }, 80);

}

function comecaAgora() {
    score = 0;
    gravidade = gravitySalve;
    bY = 150;   
    Render();
    gravidadeAgindo();
}

function gravidadeAgindo() {
    interval = setInterval(() => {
        if (gravidade > -100) {
            gravidade++;
            bY = gravidade;
            Rerender();
            console.log("gravidade caindo: " + gravidade);
        }
        if (gravidade >= 500) {
            clearInterval(interval);
            ctx.clearRect(0, 0, stage.width, stage.height)
            gravidade = gravitySalve;

            console.log("gravidade parou de agir");
        }
    }, 8);

}


