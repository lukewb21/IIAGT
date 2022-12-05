const axios = require("axios");

const options3 = {
  method: 'GET',
  url: 'https://flixster.p.rapidapi.com/reviews/list',
  params: {emsId: 'cbad9abb-8440-31a6-8caf-61ae45c2263b', limit: '20', offset: '0', withComments: 'true'},
  headers: {
    'X-RapidAPI-Key': '2ccadb270fmsh47baaaf5c69f6a1p12988cjsnab0cf8ac2ead',
    'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
  }
};

axios.request(options3).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

let rating = options3[1];

console.log('OUTPUT:', options3);
