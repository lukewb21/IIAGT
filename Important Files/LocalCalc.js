var mysql = require('mysql');

//Establishes connection with database using a login without DELETE priviledges for security//
var connection = mysql.createConnection({
	host     : 'localhost',
	database : 'IsItGood',
	port     : '1433',
	user     : 'WebRequests',
	password : '%Fs567mFk@9wbk95Q$*Y'
});

connection.connect();

//Queries database for number of ratings//
TotalRatings =  connection.query('SELECT COUNT(FilmID) FROM film ratings', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

//Sets flag to display accuracy warning if film has few ratings//
If TotalRatings < 100 {
	WarnUser = True;
}

//Queries database for ratings by users under 8 years of age//
Group1 = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ') AND (age <= 8)', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

//Queries database for ratings by users between age 8 and 16//
Group2 = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ') AND (age >  8) AND (age <= 16)', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

//Queries database for ratings by users between age 16 and 21//
Group3 = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ') AND (age > 16) AND (age <= 21)', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

//Queries database for ratings by users between age 21 and 40//
Group4 = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ') AND (age > 21) AND (age <= 40)', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

//Queries database for ratings by users between age 40 and 60//
Group5 = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ') AND (age > 40) AND (age <= 60)', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

//Queries database for ratings by users over 60//
Group6 = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ') AND (age > 60)', function(err, rows, fields) {
if (err) throw err;
	console.log(rows);
});

connection.end();

//Determines age bracket of user (case statement not used due to incompatibility with <>=)//
if (userAge <= 8) {ageBracket = 1}
else if (userAge >  8) AND (userAge <= 16) {ageBracket = 2}
else if (userAge >  16) AND (userAge <= 21) {ageBracket = 3}
else if (userAge >  21) AND (userAge <= 40) {ageBracket = 4}
else if (userAge >  40) AND (userAge <= 60) {ageBracket = 5}
else if (userAge >  60) {ageBracket = 6}

switch (ageBracket) {//AGE:0-8                9-16              17-21              22-40              41-60               61+
	case 1: //                X
		LocalScore = ( ((Group1 * 1.000) + (Group2 * 0.500) + (Group3 * 0.250) + (Group4 * 0.125) + (Group5 * 0.125) + (Group6 * 0.125)) / 2.125 );

		break;
	case 2: //                                   X
		LocalScore = ( ((Group1 * 0.500) + (Group2 * 1.000) + (Group3 * 0.625) + (Group4 * 0.500) + (Group5 * 0.375) + (Group6 * 0.375)) / 3.375 );

		break;
	case 3: //                                                      X
		LocalScore = ( ((Group1 * 0.250) + (Group2 * 0.625) + (Group3 * 1.000) + (Group4 * 0.625) + (Group5 * 0.500) + (Group6 * 0.375)) / 3.375 );

		break;
	case 4: //                                                                         X
		LocalScore = ( ((Group1 * 0.125) + (Group2 * 0.500) + (Group3 * 0.625) + (Group4 * 1.000) + (Group5 * 0.625) + (Group6 * 0.500)) / 3.375 );

		break;
	case 5: //                                                                                            X
		LocalScore = ( ((Group1 * 0.125) + (Group2 * 0.250) + (Group3 * 0.500) + (Group4 * 0.750) + (Group5 * 1.000) + (Group6 * 0.750)) / 3.375 );

		break;
	case 6: //                                                                                                               X
		LocalScore = ( ((Group1 * 0.125) + (Group2 * 0.125) + (Group3 * 0.500) + (Group4 * 0.625) + (Group5 * 0.750) + (Group6 * 1.000)) / 3.125 );
	default:
		connection.connect();
		LocalScore = connection.query('SELECT AVG(score) FROM film ratings WHERE (FilmID =' + FilmID + ')', function(err, rows, fields) {
		if (err) throw err;
			console.log(rows);
});
}

console.log(LocalScore)
