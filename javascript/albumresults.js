// submitting from search bar adds value of search to URL. grabbing search query from URL...
const params = new URLSearchParams(window.location.search);
const search = params.get('search');
const formSubmission = document.querySelector("#content");

getSearchResults(`https://api.napster.com/v2.2/search/verbose${apiKey}&query=${search}`)
.then(musicData => {
    getTracksFromAlbums(musicData.albums).then(tracks => {
        printAlbumResults(musicData.albums,tracks,'#generated-content')
    });
});

formSubmission.addEventListener('submit', function(event) { 
    // event listener code goes here
    event.preventDefault();
    window.open(`albumresults.html?search=${input.value}`,"_self");
  });