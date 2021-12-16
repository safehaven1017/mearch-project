//API KEY: MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx
//BASE URL: https://api.napster.com/v2.1/

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

fetch(`https://api.napster.com/v2.1/tracks/top?apikey=MTk2YWYyM2MtYTZjZC00MWUwLWE2NzUtNzA4ZTUyZjFjMWIx`)
.then(res => res.json())
.then(data => {
  console.log(data);
})
