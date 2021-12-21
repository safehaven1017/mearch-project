const mainContainer = document.getElementById("myData");

function renderLyrics(currentLyrics) {

    mainContainer.innerHTML = currentLyrics.lyrics.substring(currentLyrics.lyrics.indexOf('\n') + 1).replaceAll('\r', '<br>').replace('Paroles de la chanson ', '').replace('par ', '').replaceAll('\n', '<br>').replaceAll('[]', '');

};

//fetches lyrics (needs variable based on specific song that is clicked)
fetch('https://api.lyrics.ovh/v1/stone temple pilots/interstate love song')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        renderLyrics(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

// lyrics pop-up button
$(".lyrics-button").on('click', function() {
    $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function() {
    $(".custom-model-main").removeClass('model-open');
});