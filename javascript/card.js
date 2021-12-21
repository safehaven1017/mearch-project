setTimeout(function() {
    $('.flip-card .flip-card-inner').click(function(event) {
        if (event.target.classList.contains('lyrics-button')) {
            return
        }
        $(this).closest('.flip-card').toggleClass('hover');
        $(this).css('transform, rotateY(180deg)');
    });
}, 2000);