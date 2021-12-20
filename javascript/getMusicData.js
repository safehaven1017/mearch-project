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

function getSearchResults(link) {
  const resultsObject = fetch(link).then(res => res.json())
  .then(musicData => {
    const musicDataObject = {
      albums: musicData.search.data.albums,
      artists: musicData.search.data.artists,
      tracks: musicData.search.data.tracks
    }
    console.log(musicDataObject);
    return musicDataObject;
  });
  return resultsObject;
}

getSearchResults(`https://api.napster.com/v2.2/search/verbose?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx&query=black&per_type_limit=10`)

