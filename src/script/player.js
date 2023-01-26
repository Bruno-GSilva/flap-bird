let stage = document.getElementById('personagem');
let ctxx = stage.getContext("2d");
let bird = document.createElement("img");


let player = {
    eixoX: 80,
    eixoY: 300,
    gravidade: 150,
}

let gravitySalve = player.gravidade;

bird.src = "src/images/bird.png";

stage.addEventListener("click", () => {
    Moveup();
    console.log("subindoo")
})

function Render(){
    bird.addEventListener('load',function(){
        ctxx.drawImage(bird, player.eixoX, player.eixoY);
    });
}
function Rerender() {
    ctxx.clearRect(0, 0, stage.width, stage.height);
    ctxx.drawImage(bird, player.eixoX, player.eixoY);
}

function Moveup() {
    ctxx.clearRect(0, 0, stage.width, stage.height);
    ctxx.drawImage(bird, player.eixoX, player.eixoY);
    player.gravidade -=100;
}

function comecaAgora() {
    player.gravidade = gravitySalve;
    player.eixoY = 300;   
    Render();
    gravidadeAgindo();
}

function gravidadeAgindo() {
    interval = setInterval(() => {       
        if (player.gravidade >= -100) {
            player.gravidade++;
            player.eixoY = player.gravidade;
            Rerender();
            console.log("gravidade caindo: " + player.gravidade);
        }
        if (player.gravidade >= 600) {
            clearInterval(interval);
            ctxx.clearRect(0, 0, stage.width, stage.height)
            player.eixoX = 80;
            player.eixoY = 300;
            Rerender();
            // player.gravidade = gravitySalve;
            console.log("gravidade parou de agir");
        }
    }, 1);
}