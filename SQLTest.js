let mysql = require('mysql2/promise');

async function mainProgram() {

let FilmID = 'tt0096283';
let Final6 = 0;

const connection = await mysql.createConnection({
	host     : 'localhost',
	database : 'isitgooddb',
	port     : '3306',
	user     : 'root',
	password : 'IsItGood?2022'
});

connection.connect(function(err) {
  				if (err) throw err;
 			  	console.log("Connected!");
});

let Group6AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age > 60)");
Final6 = Group6AVG[0][0].avg_rating;

console.log(Final6);

function NullToZero(group) {
    if (group === null){
        return 0;
    }
    return group;
}

Final6 = NullToZero(Final6);

console.log(Final6);
}

mainProgram();
