const font_score = document.getElementById('font_score');
const ctx_score = font_score.getContext("2d");


ctx_score.font = "bold 49px sans_serif";
ctx_score.strokeText(`Score ${setCount()}`, 50, 100);


function setCount(){
    let count = [];
   console.count(count);
   return count;
}
console.log(setCount());

