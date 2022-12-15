async function CalcWeightedScore(FilmID, userAge) {

let mysql = require('mysql2/promise');

let LocalScore = 0;
let ageBracket = 0;



//Establishes connection with database using a login without DELETE priviledges for security//
const connection = await mysql.createConnection({
	host     : 'localhost',
	database : 'isitgooddb',
	port     : '3306',
	user     : 'root',
	password : 'IsItGood?2022'
});

//Queries database for number of ratings//
let TotalRatings = await connection.query("SELECT COUNT(FilmID) as total_ratings FROM film_reviews WHERE (FilmID ='" + FilmID + "')");
TotalRatings = TotalRatings[0][0].total_ratings;
console.log('Total Ratings: ', TotalRatings)
//ADD CODE TO WARN USER OF LOW RATING COUNT HERE//


//Queries database for ratings by users under 8 years of age//
let Group1AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age <= 8)");
let Final1 = Group1AVG[0][0].avg_rating;

//Queries database for ratings by users between age 8 and 16//
let Group2AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age > 8) AND (age <= 16)");
let Final2 = Group2AVG[0][0].avg_rating;

//Queries database for ratings by users between age 16 and 21//
let Group3AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age > 16) AND (age <= 21)");
let Final3 = Group3AVG[0][0].avg_rating;

//Queries database for ratings by users between age 21 and 40//
let Group4AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age > 21) AND (age <= 40)");
let Final4 = Group4AVG[0][0].avg_rating;

//Queries database for ratings by users between age 40 and 60//
let Group5AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age > 40) AND (age <= 60)");
let Final5 = Group5AVG[0][0].avg_rating;

//Queries database for ratings by users over 60//
let Group6AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = Users.UserID WHERE (FilmID ='" + FilmID + "') AND (age > 60)");
let Final6 = Group6AVG[0][0].avg_rating;


function NullToZero(group) {
	if (group === null){
		return 0;
	}
	return group;
}

function BoolZero(group) {
	if (group > 0){
		bool = 'false';
		return 1;
	}
	bool = 'true';
	return 0;
}

Final1 = NullToZero(Final1);
Final2 = NullToZero(Final2);
Final3 = NullToZero(Final3);
Final4 = NullToZero(Final4);
Final5 = NullToZero(Final5);
Final6 = NullToZero(Final6);

let bool = '';

let Bool1 = BoolZero(Final1);
console.log('Group 1 is zero?', bool);
let Bool2 = BoolZero(Final2);
console.log('Group 2 is zero?', bool);
let Bool3 = BoolZero(Final3);
console.log('Group 3 is zero?', bool);
let Bool4 = BoolZero(Final4);
console.log('Group 4 is zero?', bool);
let Bool5 = BoolZero(Final5);
console.log('Group 5 is zero?', bool);
let Bool6 = BoolZero(Final6);
console.log('Group 6 is zero?', bool);

console.log('Group 1 Average:', Final1);
console.log('Group 2 Average:', Final2);
console.log('Group 3 Average:', Final3);
console.log('Group 4 Average:', Final4);
console.log('Group 5 Average:', Final5);
console.log('Group 6 Average:', Final6);

if (userAge <= 8) {ageBracket = 1;}
else if (userAge >  8 && userAge <= 16) {ageBracket = 2;}
else if (userAge >  16 && userAge <= 21) {ageBracket = 3;}
else if (userAge >  21 && userAge <= 40) {ageBracket = 4;}
else if (userAge >  40 && userAge <= 60) {ageBracket = 5;}
else if (userAge >  60) {ageBracket = 6;}
console.log('Age of user:', userAge);
console.log('Age group of user:', ageBracket);

switch (ageBracket) {//AGE:0-8                9-16              17-21              22-40              41-60               61+
	case 1: //                X
		LocalScore = ( ((Final1 * 1.000) + (Final2 * 0.500) + (Final3 * 0.250) + (Final4 * 0.125) + (Final5 * 0.125) + (Final6 * 0.125)) / ((Bool1 * 1.000) + (Bool2 * 0.500) + (Bool3 * 0.250) + (Bool4 * 0.125) + (Bool5 * 0.125) + (Bool6 * 0.125)) );
		console.log('Group 1 Score:', LocalScore);
		break;
	case 2: //                                   X
		LocalScore = ( ((Final1 * 0.500) + (Final2 * 1.000) + (Final3 * 0.625) + (Final4 * 0.500) + (Final5 * 0.375) + (Final6 * 0.375)) / ((Bool1 * 0.500) + (Bool2 * 1.000) + (Bool3 * 0.625) + (Bool4 * 0.500) + (Bool5 * 0.375) + (Bool6 * 0.375)) );
		console.log('Group 2 Score:', LocalScore);
		break;
	case 3: //                                                      X
		LocalScore = ( ((Final1 * 0.250) + (Final2 * 0.625) + (Final3 * 1.000) + (Final4 * 0.625) + (Final5 * 0.500) + (Final6 * 0.375)) / ((Bool1 * 0.250) + (Bool2 * 0.625) + (Bool3 * 1.000) + (Bool4 * 0.625) + (Bool5 * 0.500) + (Bool6 * 0.375)) );
		console.log('Group 3 Score:', LocalScore);
		break;
	case 4: //                                                                         X
		LocalScore = ( ((Final1 * 0.125) + (Final2 * 0.500) + (Final3 * 0.625) + (Final4 * 1.000) + (Final5 * 0.625) + (Final6 * 0.500)) / ((Bool1 * 0.125) + (Bool2 * 0.500) + (Bool3 * 0.625) + (Bool4 * 1.000) + (Bool5 * 0.625) + (Bool6 * 0.500)) );
		console.log('Group 4 Score:', LocalScore);
		break;
	case 5: //                                                                                            X
		LocalScore = ( ((Final1 * 0.125) + (Final2 * 0.250) + (Final3 * 0.500) + (Final4 * 0.750) + (Final5 * 1.000) + (Final6 * 0.750)) / ((Bool1 * 0.125) + (Bool2 * 0.250) + (Bool3 * 0.500) + (Bool4 * 0.750) + (Bool5 * 1.000) + (Bool6 * 0.750)) );
		console.log('Group 5 Score:', LocalScore);
		break;
	case 6: //                                                                                                               X
		LocalScore = ( ((Final1 * 0.125) + (Final2 * 0.125) + (Final3 * 0.500) + (Final4 * 0.625) + (Final5 * 0.750) + (Final6 * 1.000)) / ((Bool1 * 0.125) + (Bool2 * 0.125) + (Bool3 * 0.500) + (Bool4 * 0.625) + (Bool5 * 0.750) + (Bool6 * 1.000)) );
		console.log('Group 6 Score:', LocalScore);
		break;
	default:
		connection.connect();
		LocalScore = connection.query("SELECT AVG(Rating) FROM film_reviews WHERE (FilmID ='" + FilmID + "')", function(err, rows, fields) {
		if (err) throw err;
			console.log(rows);
		});
}

let IMDbScoreQ = await connection.query("SELECT averageRating as avg_rating FROM imdb_ratings WHERE (tconst ='" + FilmID + "')");

let IMDbScore = IMDbScoreQ[0][0];

console.log('IMDb Rating:', IMDbScore);

connection.end();

}

CalcWeightedScore();
