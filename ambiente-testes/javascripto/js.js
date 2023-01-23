let stage = document.getElementById('stage');
let ctx = stage.getContext("2d");
let img = document.createElement("img");

let propsImg = {
    bX: 10,
    bY: 150,
    gravidade: 100,
}

let gravitySalve = propsImg.gravidade;


img.src = "images/bird.png";

document.addEventListener("click", () => {
    Moveup();
    console.log("subindoo")
})



function Render(){
    img.addEventListener('load',function(){
        ctx.drawImage(img, propsImg.bX, propsImg.bY);
    });
}
function Rerender() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.drawImage(img, propsImg.bX, propsImg.bY);
}

function Moveup() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.drawImage(img, propsImg.bX, propsImg.bY);
    propsImg.gravidade -= 80;
    img.style.transition = 'ease-in 1s';
    img.style.transform = "rotateY(45deg)";

}

function comecaAgora() {
    score = 0;
    propsImg.gravidade = gravitySalve;
    propsImg.bY = 150;   
    Render();
    gravidadeAgindo();
}

function gravidadeAgindo() {
    interval = setInterval(() => {
        if (propsImg.gravidade > -100) {
            propsImg.gravidade++;
            propsImg.bY = propsImg.gravidade;
            Rerender();
            console.log("gravidade caindo: " + propsImg.gravidade);
        }
        if (propsImg.gravidade >= 480) {
            clearInterval(interval);
            ctx.clearRect(0, 0, stage.width, stage.height)
            propsImg.bX = 10;
            propsImg.bY = 150;
            Rerender();
            propsImg.gravidade = gravitySalve;

            console.log("gravidade parou de agir");
        }
    }, 8);

}


