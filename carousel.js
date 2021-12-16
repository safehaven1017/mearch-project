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

carouselBool = $('.carousel-image').on('mouseenter', function() {
    stopCarousel();
})

$('.carousel-image').on('mouseleave', function(){
    // this.iid && clearInterval(this.iid);
    startCarousel(); 
    carouselBool = false;
});

startCarousel();
// function animationLoop(intervalVar) {
//     var stopAnimationBool = false;
//     document.addEventListener("mouseover", stopAnimation(event))
//     document.removeEventListener();
// }

// const carouselImage = document.querySelectorAll('.carousel-image');

// function animationLoop(interval) {
//     carouselImage.forEach(image => {
//         image.addEventListener('mouseenter', () => clearInterval(interval))
//         image.addEventListener('mouseleave', animateLoop(startCarousel()))
//     })
// }

// animationLoop(startCarousel());






