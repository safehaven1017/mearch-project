var carousel = document.querySelector('.carousel');
var cellCount = 10;
var selectedIndex = 0;
let interval;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

function startCarousel() {
    interval = window.setInterval(function(){
        selectedIndex++;
        rotateCarousel();
    }, 1000);
}

function stopCarousel() {
    clearInterval(interval); 
}

$('.carousel__cell').on('mouseenter', function() {
    stopCarousel();
})

$('.carousel__cell').on('mouseleave', function(event) {
    // alert(event.target.classList);
    if (event.target.classList.contains('flip-card-back') == false && 
    event.target.classList.contains('tracklist') == false && 
    event.target.classList.contains('card-tracks') == false && 
    event.target.classList.contains('card-header-item') == false && 
    event.target.classList.contains('tracklist-item') == false && 
    event.target.classList.contains('card-header') == false) { 
      startCarousel(); 
    }
});

startCarousel();