const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('scroll-container').scrollLeft += 400;
};
buttonLeft.onclick = function () {
  document.getElementById('scroll-container').scrollLeft -= 400;
};

