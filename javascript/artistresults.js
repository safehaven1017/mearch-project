// submitting from search bar adds value of search to URL. grabbing search query from URL...
const params = new URLSearchParams(window.location.search);
const search = params.get('search');
const formSubmission = document.querySelector("#content");

getSearchResults(`https://api.napster.com/v2.2/search/verbose${apiKey}&query=${search}`)
.then(musicData => {
    getArtistImages(musicData.artists).then(images => {
        printArtistResults(musicData.artists,images,'#generated-content');
    })
    setTimeout(() => {
        let emptyTag = document.querySelector('#generated-content');
    if (emptyTag.innerHTML == '') {
        emptyTag.classList.add("no-results");
        emptyTag.innerHTML = "No Search Results"
    }
    }, 1000)
});


formSubmission.addEventListener('submit', function(event) { 
    // event listener code goes here
    event.preventDefault();
    if (input.value == '') {
        return 0;
    }
    window.open(`artistresults.html?search=${input.value}`,"_self");
  });