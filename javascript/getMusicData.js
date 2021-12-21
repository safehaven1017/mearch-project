const apiKey = '?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx';

// if provided a query link, returns an array of objects for albums
function getAlbums(link) {
  const albums = fetch(link).then(res => res.json())
  .then(data => data.albums);
  return albums;
}

// returns a tracklist using the ids from an array of album objects
function getTracksFromAlbums(albums) {
  const idArray = albums.map(album => album.id);

  // another query is required to obtain a tracklisting
  const link = `https://api.napster.com/v2.2/albums/${idArray.join(',')}/tracks` + apiKey
  const tracklist = fetch(link).then(res => res.json()).then(data => data.tracks);
  return tracklist;
}

// gets album artwork using an album id
function getAlbumArtwork(albumID) {
  return `https://api.napster.com/imageserver/v2/albums/${albumID}/images/600x600.jpg`;
}

// provided a link based on user input (query will not be based on music data type), returns an object containing all 3 types of music data
function getSearchResults(link) {
  const resultsObject = fetch(link).then(res => res.json())
  .then(musicData => {
    // console.log(musicData);
    const musicDataObject = {
      albums: musicData.search.data.albums,
      artists: musicData.search.data.artists,
      tracks: musicData.search.data.tracks
    }
    return musicDataObject;
  });
  return resultsObject;
}

// after parsing an array of artist objects for their ids, this function will fetch an array of images. returns highest res images.
function getArtistImages(results) {
  const idArray = results.map(artist => artist.id);
  const hiResImages = fetch(`https://api.napster.com/v2.2/artists/${idArray.join(',')}/images${apiKey}`)
  .then(res => res.json())
  .then(images => {
    console.log(images);
    const artistImageArray = [];
    let sameImageArray = [];
    let currentPicNumStart = 0;
    let lastPicNumStart = 0;
    
    for (let i = 0; i < images.images.length; i++) {
      if (i > 0) {
        currentPicNumStart = images.images[i].url.lastIndexOf('/') + 1;
        lastPicNumStart = images.images[i-1].url.lastIndexOf('/') + 1;
      }
      // there are multiple images per artist. This loop organizes the images by artist using image url.
      if ( i > 0 && images.images[i].url.substring(currentPicNumStart,currentPicNumStart + 4) != images.images[i-1].url.substring(lastPicNumStart,lastPicNumStart + 4)) {
        artistImageArray.push(sameImageArray);
        sameImageArray = [];
        sameImageArray.push(images.images[i]);
      }
      else {
        sameImageArray.push(images.images[i]);
      }
    }

    // now we grab the image with the highest res per artist.
    // console.log(artistImageArray);
    const finalArray = artistImageArray.map(imageAllSizes => {
      let tempHighestRes = imageAllSizes[0];
      for (let i = 0; i <imageAllSizes.length; i++) {
        if (imageAllSizes[i].width > tempHighestRes.width) {
          tempHighestRes = imageAllSizes[i];
        }
      }
      return tempHighestRes;
    });
    console.log(finalArray);
    return finalArray;
  })
  return hiResImages;
}