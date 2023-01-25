let imported  = document.createElement('script')
imported.src = 'src/script/parallax.js'
let imported2 = document.createElement('script')
imported2.src = 'src/script/js.js'
let imported3 = document.createElement('script')
imported3.src = 'src/script/score.js'

document.body.appendChild(imported);
document.body.appendChild(imported2);
document.body.appendChild(imported3);

let btn = document.getElementById('btn')
let telaLogin = document.getElementById('telaLogin')

btn.addEventListener('click', function(){
    telaLogin.style.display = 'none'
    comecaAgora()
    loopingCano()
})

