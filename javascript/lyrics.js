const mainContainer = document.querySelector(".myData");

function getLyricsHTML(currentLyrics) {

    return currentLyrics.lyrics.substring(currentLyrics.lyrics.indexOf('\n') + 1).replaceAll('\r', '<br>').replace('Paroles de la chanson ', '').replace('par ', '').replaceAll('\n', '<br>').replaceAll('[]', '');

};

// lyrics pop-up button
$(document).ready(function() {

    $(document).on('click', '.lyrics-button', function(event) {
        console.log('button press')
        $(event.target).closest('.album-names').find('.custom-model-main').addClass('model-open');
        fetch(`https://api.lyrics.ovh/v1/${$(this).attr("data-artistName")}/${$(this).attr("data-name")}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                const html = getLyricsHTML(data);
                $(event.target).closest('.album-names').find('.myData').html(html)
            })
    })

    $(document).on('click', '.close-btn, .bg-overlay', function() {
        $(".custom-model-main").removeClass('model-open');
    });
});