let background = document.querySelector('span')

window.addEventListener('scroll', function(){
    var obstaculo = window.pageYOffset;

    background.style.backgroundPositionY = -obstaculo * 0.7 + 'px';
});