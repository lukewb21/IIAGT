const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://mdblist.p.rapidapi.com/',
  params: {s: 'Iron Man 2', m: 'movie'},
  headers: {
    'X-RapidAPI-Key': '2ccadb270fmsh47baaaf5c69f6a1p12988cjsnab0cf8ac2ead',
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
