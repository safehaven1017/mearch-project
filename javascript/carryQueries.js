topLink = document.querySelector('#top-link');
albumLink = document.querySelector('#album-link');
artistLink = document.querySelector('#artist-link');
songLink = document.querySelector('#song-link');

topLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    if (window.location.href.indexOf("?") > -1) {
        window.open(`topresults.html${searchQuery}`,"_self")
      }
    else {
        window.open(`topresults.html`,"_self")
    }
})

albumLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    if (window.location.href.indexOf("?") > -1) {
        window.open(`albumresults.html${searchQuery}`,"_self")
      }
    else {
        window.open(`albumresults.html`,"_self")
    }
})

artistLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    if (window.location.href.indexOf("?") > -1) {
        window.open(`artistresults.html${searchQuery}`,"_self")
      }
    else {
        window.open(`artistresults.html`,"_self")
    }
})

songLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentURL = window.location.href;
    const mark = currentURL.indexOf('?');
    const searchQuery = currentURL.slice(mark);
    if (window.location.href.indexOf("?") > -1) {
        window.open(`songresults.html${searchQuery}`,"_self")
      }
    else {
        window.open(`songresults.html`,"_self")
    }
})