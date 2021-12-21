// submitting from search bar adds value of search to URL. grabbing search query from URL...
const params = new URLSearchParams(window.location.search);
const search = params.get('search');
const parentHtmlDiv = document.querySelector("#generated-content");
const formSubmission = document.querySelector("#content");

function getGenres() { 
    const genres = fetch('https://api.napster.com/v2.2/genres?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx')
    .then(res => res.json())
    .then(data => {
        let string = '';
        for(let i = 0; i < data.genres.length; i++) {
            string += data.genres[i].id + ',';    
        }
        string = string.slice(0, -1);
        return [data.genres,string];
    });
    return genres;
}

getGenres().then(genres => {
    // console.log(genres);
    fetch(`https://api.napster.com/v2.2/genres/${genres[1]}/tracks/top?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx`)
    .then(res => res.json())
    .then(tracks => {
        for(let i = 0; i < genres[0].length; i++) {
            parentHtmlDiv.innerHTML += `<div class="genre-container"><h3 class="genre-header"><em>${genres[0][i].name}</em></h3><div class="track-container genre${i}"></div></div>`;
            printGenreSongs(tracks.tracks, genres[0][i].id, `.track-container.genre${i}`);
            
        }
    });
});

formSubmission.addEventListener('submit', function(event) { 
    // event listener code goes here
    event.preventDefault();
    if (input.value == '') {
        return 0;
    }
    window.open(`topresults.html?search=${input.value}`,"_self");
});

