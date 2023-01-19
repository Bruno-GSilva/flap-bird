let stage = document.getElementById('stage');
let ctx = stage.getContext("2d");
let img = document.createElement("img");
img.src = "images/bird.png";

let propsImg = {
    bX: 10,
    bY: 150,
    gravidade: 100,
    positionImg: img.getBoundingClientRect(render()),
}
let gravitySalve = propsImg.gravidade;

function start(){
    let positionProps = propsImg.positionImg;
    propsImg.gravidade = gravitySalve;
    propsImg.bY = 150;
    render();
    return positionProps;
}

console.log(start())

document.addEventListener("click", () => {
    function moveUp() {
        ctx.clearRect(0, 0, stage.width, stage.height);
        ctx.drawImage(img, propsImg.bX, propsImg.bY);
        propsImg.gravidade -= 80;
        
    }
    moveUp();
    gravidadeAgindo();
    console.log("subindoo");
})

function render() {
    img.addEventListener('load', function () {
        ctx.drawImage(img, propsImg.bX, propsImg.bY);
    });
}
function reRender() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.drawImage(img, propsImg.bX, propsImg.bY);
}

function comecaAgora() {
    score = 0;
    propsImg.gravidade = gravitySalve;
    propsImg.bY = 150;
    render();
}

function gravidadeAgindo() {
    interval = setInterval(() => {
        if (propsImg.gravidade > -100) {
            propsImg.gravidade++;
            propsImg.bY = propsImg.gravidade;
            reRender();
            console.log("gravidade caindo: " + propsImg.gravidade);
        }
        if (propsImg.gravidade >= 500) {
            clearInterval(interval);
            ctx.clearRect(0, 0, stage.width, stage.height)
            start();
            console.log("gravidade parou de agir");
        }
    }, 8);
}


