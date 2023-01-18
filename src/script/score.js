let canvas1 = document.getElementById("score");
let ctx1 = canvas1.getContext("2d");

let updtScore = 0;
// ctx_score.font = "bold 49px sans_serif";ctx_score.fillText(`Score`, 100, 100);
interval = setInterval(() => {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
    if(updtScore === Infinity){
        clearInterval(interval)
    }else if(updtScore !== Infinity){
        ctx1.font='50px arial';
        ctx1.fillStyle='blue';
        ctx1.fillText(`${updtScore.toString()}` ,50 ,150);
        updtScore++;
    }
    // ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
    console.log(typeof(updtScore))
}, 1000)

console.log(typeof(interval))

// ctx1.font='100px arial';
// ctx1.fillStyle='blue';
// ctx1.fillText(interval ,50 ,150);