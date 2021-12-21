//API KEY: MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx
//BASE URL: https://api.napster.com/v2.1/
//GET ALBUM TEMPLATE: https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/600x600.jpg

const formSubmission = document.querySelector("#content");
const defaultLink = 'https://api.napster.com/v2.2/albums/top?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx&limit=10';

getAlbums(defaultLink).then(albums => {
  getTracksFromAlbums(albums).then(tracks => {
    printHtmlAlbums(albums, tracks, '.carousel');
  });
});

formSubmission.addEventListener('submit', function(event) { 
  event.preventDefault();
  if (input.value == '') {
    return 0;
  }
  window.open(`topresults.html?search=${input.value}`,"_self");
});