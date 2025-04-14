var current = 0;

var slides = document.getElementsByClassName("slide");
var total = slides.length;

var next = document.getElementById("next");
var previous = document.getElementById("previous");

next.addEventListener("click", function(){
    current +=1;

    if(current >= total)
    {
        current = 0;
    }

    for (var i = 0; i < total; i++) {
      slides[i].style.display = "none";
    }

    slides[current].style.display = "block";

});

previous.addEventListener("click", function () {
    current -= 1;;
  
    if (current < 1) {
      current = total - 1;
    }
  
    for (var i = 0; i < total; i++) {
      slides[i].style.display = "none";
    }
  
    slides[current].style.display = "block";
  });
  
  function slideShow() {
    current += 1;
  
    for (var i = 0; i < total; i++) {
      slides[i].style.display = "none";
    }
  
    if (current >= total) {
      current = 0;
    }
  
    slides[current].style.display = "block";
  }
  
  setInterval(slideShow, 5000);
  