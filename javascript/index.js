//API KEY: MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx
//BASE URL: https://api.napster.com/v2.1/
//GET ALBUM TEMPLATE: https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/600x600.jpg


const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const defaultLink = 'https://api.napster.com/v2.2/albums/top?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx&limit=10';
const apiKey = '?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx';

function getAlbums(link) {
  const albums = fetch(link).then(res => res.json())
  .then(data => data.albums);
  return albums;
}

function getTracksFromAlbums(albums) {
  const idArray = albums.map(album => album.id);
  const link = `https://api.napster.com/v2.2/albums/${idArray.join(',')}/tracks` + apiKey
  const tracklist = fetch(link).then(res => res.json()).then(data => data.tracks);
  return tracklist;
}

function getAlbumArtwork(albumID) {
  return `https://api.napster.com/imageserver/v2/albums/${albumID}/images/600x600.jpg`;
}

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

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

getAlbums(defaultLink).then(albums => {
  getTracksFromAlbums(albums).then(tracks => {
    printHtmlAlbums(albums, tracks, '.carousel');
    console.log(tracks);
  });
});