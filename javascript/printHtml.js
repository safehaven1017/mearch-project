function printHtmlAlbums(albumArray, trackArray, parentTag) {
    const albumHtmlArray = albumArray.map(album => {
        const date = album.released.substring(0, 4);
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
        const date = album.released.substring(0, 4);
        const albumTracks = albumTrackArray.filter(track => track.albumId == album.id);
        const trackHtmlArray = albumTracks.map(track => `<li class="tracklist-item">${track.index}. "${track.name}"</li>`);
        return `<div class="album-names">
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
    for (let i = 0; i < imageArray.length; i++) {
        artistArray[i].name = artistArray[i].name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        artistHtmlArray.push(`<div class="bodyforinfo">
        <img src="${imageArray[i].url}" class="artist-image rounded-circle"
            alt="...">
            <h5 class="artist-name">Artist: ${artistArray[i].name}</h5>
    </div>`)
    }
    const parent = document.querySelector(parentTag)
    if (parentTag.innerHTML == '') {
        parent.innerHTML = artistHtmlArray.join('');
    } else {
        parent.innerHTML += artistHtmlArray.join('');
    }
}

function printSongResults(songArray, parentTag) {
    const songHtmlArray = songArray.map(song => `<div class="album-names">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="album-cover" src="${getAlbumArtwork(song.albumId)}" alt="${song.name} Album Cover">
            </div>
            <div class="flip-card-back">
                <div class="card-header">
                    <span class="card-header-item">Song: ${song.name}</span>
                    <span class="card-header-item">Artist: ${song.artistName}</span>
                </div>
                <div class="card-tracks">
                    <button class="lyrics-button" data-artistName='${song.artistName}' data-name='${song.name}'>Lyrics</button>
                </div>
            </div>
        </div>
    </div>
    <h5 class="track-description">
        ${song.name}
    </h5>
    <p class="album-description">Song by ${song.artistName}</p>


    <div class="custom-model-main">
        <div class="custom-model-inner">
            <div class="close-btn">??</div>
            <div class="custom-model-wrap">
                <div class="pop-up-content-wrap myData">
                </div>
            </div>
        </div>
        <div class="bg-overlay"></div>
    </div>
</div>
`)
    document.querySelector(parentTag).innerHTML += songHtmlArray.join('');


}

function printGenreSongs(songArray, genre, parentTag) {
    const songHtmlArray = songArray.map(song => {
        if (song.links.genres.ids[0] == genre) {
            return `<div class="album-names">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="album-cover" src="${getAlbumArtwork(song.albumId)}" alt="${song.name} Album Cover">
                </div>
                <div class="flip-card-back">
                    <div class="card-header">
                        <span class="card-header-item">Song: ${song.name}</span>
                        <span class="card-header-item">Artist: ${song.artistName}</span>
                    </div>
                    <div class="card-tracks">
                    <button class="lyrics-button" data-artistName='${song.artistName}' data-name='${song.name}'>Lyrics</button>
                    </div>
                </div>
            </div>
        </div>
      <h5 class="track-description">
          ${song.name}
      </h5>
      <p class="album-description">Song by ${song.artistName}</p>
      <div class="custom-model-main">
        <div class="custom-model-inner">
            <div class="close-btn">??</div>
            <div class="custom-model-wrap">
                <div class="pop-up-content-wrap myData">
                </div>
            </div>
        </div>
        <div class="bg-overlay"></div>
    </div>
    </div>`
        }
    })
    document.querySelector(parentTag).innerHTML += songHtmlArray.join('');

}