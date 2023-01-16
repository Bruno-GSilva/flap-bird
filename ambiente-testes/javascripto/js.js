let stage = document.getElementById('stage');
let ctx = stage.getContext("2d");
var continua = true;
let gap = 85;
let bX = 10;
let bY = 150;
let gravidade= 100;
let gravitySalve = gravidade
let correr = 7.2;
let anima;
let interval;

let img = document.createElement("img");
img.src = "images/bird.png";

document.addEventListener("click",() => {
    Moveup();
    console.log("subindo")
})

function again(){
    comecaAgora()
}

function Render(){
    img.addEventListener('load',function(){
        ctx.drawImage(img, bX, bY);
    });
}
function Rerender(){
    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.drawImage(img, bX, bY);
}

function Moveup() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    // bY += 20;
    ctx.drawImage(img, bX, bY);
    gravidade += 50;

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
    continua = true;
    score = 0;
    gravidade = gravitySalve;
    bY = 150;
    Render();
    gravidadeAgindo();

} comecaAgora();

function gravidadeAgindo(){
    interval = setInterval(() => {
        if(gravidade > 0){
            gravidade--;
            bY = gravidade;
            Rerender();
            console.log("gravidade caindo: "+gravidade);
        }else{
            clearInterval(interval);
            console.log("gravidade parou de agir");
        }
    }, 200);

}




