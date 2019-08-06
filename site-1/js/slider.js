let slider = function () {
  let dots       = document.getElementsByClassName('slid-btn'),
      dotsArea   = document.getElementsByClassName('slaider-controll')[0],
      slides     = document.getElementsByClassName('item'),
      slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    if (n < 1) {
      slideIndex = slides.length;
    }else if (n > slides.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('slid-btn') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  }
}
slider();
