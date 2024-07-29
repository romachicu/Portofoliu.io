const buttonRight_edu = document.getElementById('slideRight_edu');
const buttonLeft_edu = document.getElementById('slideLeft_edu');

buttonRight_edu.onclick = function () {
  document.getElementById('scroll-container-edu').scrollLeft += 400;
};
buttonLeft_edu.onclick = function () {
  document.getElementById('scroll-container-edu').scrollLeft -= 400;
};