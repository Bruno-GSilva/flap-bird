let stage = document.getElementById('stage');
let ctx = stage.getContext("2d");
let continua = true;
let gap = 85;
let bX = 10;
let bY = 150;
let gravidade = 100;
let gravitySalve = gravidade
let correr = 7.2;
let anima;
let interval;

let img = document.createElement("img");
img.src = "images/bird.png";

let rotate = {
    rotateY: 45,
}

document.addEventListener("click",() => {
    Moveup();
    console.log("subindoo")
})



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
    gravidade -= 80;
    img.style.transition = 'ease-in 1s';
    img.style.transform = "rotateY(45deg)";

    // Render();
    // if (!contiginua) {
    //     return false;
    // }
    // gravidade = -6.0;
    // // fly.play();

    // setTimeout(function() {
    //     gravidade =  gravitySalve;
    // }, 80);

}


const reset = () => {
    // continua = true;
    // score = 0;
    gravidade = () =>{
        if(gravidade === 100){
            gravidade = 0;
        }
    };
    bY = 150;
    // Render();
    gravidadeAgindo();
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
        if(gravidade > -100){
            gravidade++;
            bY = gravidade;
            Rerender();
            console.log("gravidade caindo: "+gravidade);
        }
        if(gravidade >= 500){
            clearInterval(interval);
            console.log("gravidade parou de agir");
            reset();
        }
    }, 8);
    

}




