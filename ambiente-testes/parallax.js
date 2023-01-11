window.addEventListener("scroll", function() {
  const distance = window.scrollY;
  document.querySelector(".obstaculo:first-child").style.transform = `translateY(${distance *
    1}px)`;
});
