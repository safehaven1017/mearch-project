let playlist = JSON.parse(localStorage.getItem('playlist'));


function renderSongs(playlist) {

    const playlistArray = playlist.map(function(currentSong) {

        return `
    <div class = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4' id = 'movie-div'>
    <img class = 'w-100 border border-white' id = 'album-cover' src='${album cover placeholder}'/>
    <div class = 'movie-info'>
    <div class = 'd-flex justify-content-between'><h6>${album title}</h6>
    <div id = 'movie-year'>${song title}</div>
    </div>
    <div class = "mt-3"><button class = 'add-movie btn btn-primary btn-sm d-flex justify-content-start' data-imdbid= ${currentMovie.imdbID}>Remove Movie</button></div>
    </div>
    </div>
    `

    });
    const savedSongs = document.querySelector('#song-container');
    savedSong.innerHTML = playlistArray.join('');
}

renderMovies(playlist);