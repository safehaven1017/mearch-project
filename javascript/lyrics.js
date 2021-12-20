const mainContainer = document.getElementById("myData");

function renderLyrics(currentLyrics) {

    mainContainer.innerHTML = currentLyrics.lyrics.substring(currentLyrics.lyrics.indexOf('\n') + 1).replaceAll('\r', '<br>').replace('Paroles de la chanson ', '').replace('par ', '').replaceAll('\n', '<br>').replaceAll('[]', '');

};

fetch('https://api.lyrics.ovh/v1/stone temple pilots/plush')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        renderLyrics(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });