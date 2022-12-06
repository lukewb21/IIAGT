

async function GetFilmInfo(FilmID) {
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://movie-database-alternative.p.rapidapi.com/',
  params: {r: 'json', i: 'tt3794354', type: 'movie'},
  headers: {
    'X-RapidAPI-Key': '2ccadb270fmsh47baaaf5c69f6a1p12988cjsnab0cf8ac2ead',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

await axios.request(options).then(function (response) {
  resultsArray = response.data;
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

let Title = resultsArray['Title'];
let Year = resultsArray['Year'];
let AgeRating = resultsArray['Rated'];
let Runtime = resultsArray['Runtime'];
let Genres = resultsArray['Genre'];
let IMDbRating = resultsArray['imdbRating'];
let RottenTomatoesScore = resultsArray['Ratings'][1]['Value'];
let MoviePosterSRC = resultsArray['Poster'];

let InfoReturn = [Title, Year, AgeRating, Runtime, Genres, IMDbRating, RottenTomatoesScore, MoviePosterSRC];

console.log(Title);
console.log(Year);
console.log(AgeRating);
console.log(Runtime);
console.log(Genres);
console.log(IMDbRating);
console.log(RottenTomatoesScore);
console.log(MoviePosterSRC);


return(InfoReturn);
}

FilmID = 'tt0371746';

GetFilmInfo(FilmID);
