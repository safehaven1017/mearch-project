let playlist = JSON.parse(localStorage.getItem('playlist'));

function printHtmlAlbums(albumArray, trackArray, parentTag) {
    const albumHtmlArray = albumArray.map(album => {
        const date = album.released.substring(0, 4);
        const albumTracks = trackArray.filter(track => track.albumId == album.id);
        const trackHtmlArray = albumTracks.map(track => `<li class="tracklist-item">${track.index}. "${track.name}"</li>`);
        return `

      <div class = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4' id = 'playlist-div'>
      <img class="album-cover" src="${getAlbumArtwork(album.id)}" alt="${album.name} Album Cover">
      </div>
      <div class = 'song-info'>
        <div class="card-header">
          <span class="card-header-item">Album: ${album.name}&nbsp<em>(${date})</em></span>
          <span class="card-header-item">Artist: ${album.artistName}</span>
          <span class="card-header-item">Track: ${track.index}. "${track.name}</span>
        </div>
      `
    });
    document.querySelector(parentTag).innerHTML = albumHtmlArray.join('');
}

printHtmlAlbums(parameters, needed, here);

// this is the function to save album and track data to local storage (just needs proper parameters) -- THIS NEEDS TO GO INTO THE INDEX.JS in order and be connected to an "Add Button" when data is rendered

// printHtmlAlbums(parameters, needed, here);

// function saveToPlayList(trackID) {
//     const track = trackData.find(function(currentTrack) {
//         return currentTrack.trackID == trackID;
//     });
//     let playlistJSON = localStorage.getItem('playlist');
//     let playlist = JSON.parse(playlistJSON);

//     if (playlist === null) {
//         playlist = [];
//     }
//     playlist.push(track);
//     playlistJSON = JSON.stringify(playlist);
//     localStorage.setItem('playlist', playlistJSON);