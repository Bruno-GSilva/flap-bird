// import "./parallaxAnimation.js";

let score = document.getElementById('text_score');

// const ctx_score = score.getContext("2d");

let updtScore = 0;
// ctx_score.font = "bold 49px sans_serif";ctx_score.fillText(`Score`, 100, 100);
const setCount = setInterval(() => {
    if(updtScore === Infinity){
        clearInterval(setCount)
    }else{
        updtScore++;
    }
    score.innerText = `Score ${updtScore}`;
}, 10)



console.log(setCount);



