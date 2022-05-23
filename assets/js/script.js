let totalSlider = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;


document.querySelector('.slider--width').style.width = `calc(100vw *${totalSlider})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = totalSlider - 1;
  }
  updateMargin();
}

function goNext(){
  currentSlide++;
  if(currentSlide > (totalSlider - 1)){
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin(){
  let sliderItemWdth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWdth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 6000);

