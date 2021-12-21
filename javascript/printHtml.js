function printHtmlAlbums(albumArray, trackArray, parentTag) {
    const albumHtmlArray = albumArray.map(album => {
      const date = album.released.substring(0,4);
      const albumTracks = trackArray.filter(track => track.albumId == album.id);
      const trackHtmlArray = albumTracks.map(track => `<li class="tracklist-item">${track.index}. "${track.name}"</li>`);
      return `<div class="carousel__cell">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="album-cover" src="${getAlbumArtwork(album.id)}" alt="${album.name} Album Cover">
            </div>
            <div class="flip-card-back">
              <div class="card-header">
                <span class="card-header-item">Album: ${album.name}&nbsp<em>(${date})</em></span>
                <span class="card-header-item">Artist: ${album.artistName}</span>
              </div>
              <div class="card-tracks">
                <ul class="tracklist">${trackHtmlArray.join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`
    });
    document.querySelector(parentTag).innerHTML = albumHtmlArray.join('');
}

function printAlbumResults(albumArray, albumTrackArray, parentTag) {
    const albumHtmlArray = albumArray.map(album => {
      const date = album.released.substring(0,4);
      const albumTracks = albumTrackArray.filter(track => track.albumId == album.id);
      const trackHtmlArray = albumTracks.map(track => `<li class="tracklist-item">${track.index}. "${track.name}"</li>`);
      return  `<div class="album-names">
      <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <img class="album-cover" src="${getAlbumArtwork(album.id)}" alt="${album.name} Album Cover">
              </div>
              <div class="flip-card-back">
                  <div class="card-header">
                      <span class="card-header-item">Album: ${album.name}&nbsp<em>(${date})</em></span>
                      <span class="card-header-item">Artist: ${album.artistName}</span>
                  </div>
                  <div class="card-tracks">
                      <ul class="tracklist">${trackHtmlArray.join('')}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
     <h5 class="album-description">
         ${album.name}
     </h5>
     <p class="album-description">Album by ${album.artistName}</p>
  </div>`
    });
    document.querySelector(parentTag).innerHTML = albumHtmlArray.join('');
}

function printArtistResults(artistArray, imageArray, parentTag) {
    const artistHtmlArray = [];
    console.log(artistArray);
    for (let i = 0; i < imageArray.length; i++) {
        artistArray[i].name = artistArray[i].name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        artistHtmlArray.push(`<div class="bodyforinfo">
        <img src="${imageArray[i].url}" class="artist-image rounded-circle"
            alt="...">
            <h5>Artist: ${artistArray[i].name}</h5>
    </div>`)
    }
    const parent = document.querySelector(parentTag)
    if (parentTag.innerHTML == '') {
      parent.innerHTML = artistHtmlArray.join('');
    }
    else {
      parent.innerHTML += artistHtmlArray.join('');
    }
}