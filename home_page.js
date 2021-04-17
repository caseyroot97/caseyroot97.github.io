var index = 0;

function nextSlide() {
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
  if (index > slides.length - 2){
    slides[index].classList.add('hidden');
    dots[index].classList.remove("active");
    index = 0;
    slides[index].classList.remove('hidden');
    dots[index].classList.add("active");
  }
  else{
      slides[index].classList.add('hidden'); 
      dots[index].classList.remove("active");
      index++;
      slides[index].classList.remove('hidden');
      dots[index].classList.add("active"); 
  }
}

function toSlide(n){
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i<slides.length; i++){
    if(i == n){
      slides[i].classList.remove('hidden');
      dots[i].classList.add("active");
    }
    else{
      slides[i].classList.add('hidden'); 
      dots[i].classList.remove("active");
    }
  }
}

function previousSlide() {
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
  if (index < 1){
    slides[index].classList.add('hidden'); 
    dots[index].classList.remove("active");
    index = slides.length - 1;
    slides[index].classList.remove('hidden');
    dots[index].classList.add("active");
  }
  else{
      slides[index].classList.add('hidden');
      dots[index].classList.remove("active");
      index--;
      slides[index].classList.remove('hidden');
      dots[index].classList.add("active");
  }
}