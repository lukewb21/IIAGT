var userAge = 19;

var Group1 = 0;
var Group2 = 10;
var Group3 = 6;
var Group4 = 1;
var Group5 = 9;
var Group6 = 0;


if (userAge <= 8) {ageBracket = 1;}
else if (userAge >  8 && userAge <= 16) {ageBracket = 2;}
else if (userAge >  16 && userAge <= 21) {ageBracket = 3;}
else if (userAge >  21 && userAge <= 40) {ageBracket = 4;}
else if (userAge >  40 && userAge <= 60) {ageBracket = 5;}
else if (userAge >  60) {ageBracket = 6;}

switch (ageBracket) {//AGE:0-8                9-16              17-21              22-40              41-60               61+
	case 1: //                X
		LocalScore = ( ((Group1 * 1.000) + (Group2 * 0.500) + (Group3 * 0.250) + (Group4 * 0.125) + (Group5 * 0.125) + (Group6 * 0.125)) / 2.125 );
		console.log(LocalScore)
		break;
	case 2: //                                   X
		LocalScore = ( ((Group1 * 0.500) + (Group2 * 1.000) + (Group3 * 0.625) + (Group4 * 0.500) + (Group5 * 0.375) + (Group6 * 0.375)) / 3.375 );
		console.log(LocalScore)
		break;
	case 3: //                                                      X
		LocalScore = ( ((Group1 * 0.250) + (Group2 * 0.625) + (Group3 * 1.000) + (Group4 * 0.625) + (Group5 * 0.500) + (Group6 * 0.375)) / 3.375 );
		console.log(LocalScore)
		break;
	case 4: //                                                                         X
		LocalScore = ( ((Group1 * 0.125) + (Group2 * 0.500) + (Group3 * 0.625) + (Group4 * 1.000) + (Group5 * 0.625) + (Group6 * 0.500)) / 3.375 );
		console.log(LocalScore)
		break;
	case 5: //                                                                                            X
		LocalScore = ( ((Group1 * 0.125) + (Group2 * 0.250) + (Group3 * 0.500) + (Group4 * 0.750) + (Group5 * 1.000) + (Group6 * 0.750)) / 3.375 );
		console.log(LocalScore)
		break;
	case 6: //                                                                                                               X
		LocalScore = ( ((Group1 * 0.125) + (Group2 * 0.125) + (Group3 * 0.500) + (Group4 * 0.625) + (Group5 * 0.750) + (Group6 * 1.000)) / 3.125 );
		console.log(LocalScore)
  //break;
//default:
	//connection.connect();
	//LocalScore = connection.query("SELECT AVG(Rating) FROM film_reviews WHERE (FilmID ='" + FilmID + "')", function(err, rows, fields) {
	//if (err) throw err;
	//	console.log(rows);
  //});
}
