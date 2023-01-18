let canvas1 = document.getElementById("score");
let ctx1 = canvas1.getContext("2d");

let updtScore = 0;
// ctx_score.font = "bold 49px sans_serif";ctx_score.fillText(`Score`, 100, 100);
function setCount(){
    if(updtScore === 100){
        clearInterval(setCount)
    }else{
        updtScore++;
    }
    
}

setInterval(setCount(), 10)


console.log(setCount);

ctx1.font='100px arial';
ctx1.fillStyle='blue';
ctx1.fillText(updtScore ,50 ,150);