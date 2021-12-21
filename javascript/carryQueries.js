topLink = document.querySelector('#top-link');
albumLink = document.querySelector('#album-link');
artistLink = document.querySelector('#artist-link');
songLink = document.querySelector('#song-link');

topLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    window.open(`topresults.html${searchQuery}`,"_self")
})

albumLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    window.open(`albumresults.html${searchQuery}`,"_self")
})

artistLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    window.open(`artistresults.html${searchQuery}`,"_self")
})

songLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    window.open(`songresults.html${searchQuery}`,"_self")
})