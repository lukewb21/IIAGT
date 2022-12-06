async function Program(){
async function GetMovieID(search_query) {

  var resultsArray = [];
  const axios = require("axios");

  // ESTABLISH LINK WITH API//
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/find',
    params: {q: search_query},
    headers: {
      'X-RapidAPI-Key': '2ccadb270fmsh47baaaf5c69f6a1p12988cjsnab0cf8ac2ead',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  // MAKE REQUEST TO API//
  let output = await axios.request(options).then(function (response) {
    resultsArray = response.data;
  }).catch(function (error) {
    console.error(error);
  });

  // FIND INFO OF TOP RESULT//
  let movieID = resultsArray['results'][0]['id'].slice(7, 16);
  InfoReturn = movieID;
  return(InfoReturn);
}

let test = await GetMovieID('Sonic The Hedgehog');

console.log(test);
}

Program();
