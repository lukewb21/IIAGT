async function server(){

  // Load Node modules //
  const express = require('express');
  const ejs = require('ejs');
  const cors = require('cors');
  const axios = require('axios');
  const http = require('http');
  const path = require('path');
  const favicon = require('serve-favicon');
  const bodyParser = require('body-parser');
  const mysql = require('mysql2/promise');
  const crypto = require('crypto');
  require('dotenv').config();

  // store port so i dont have to remember it //
  const PORT = 80;

  // Initialise Express //
  const app = express();
  // Render static files //
  app.use(express.static(path.join(__dirname, '/public')));
  // set view engine to ejs //
  app.set('view engine', 'ejs');
  // Port website will run on //


  // FUNCTIONS //

  // GET MOVIE ID //
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
    let movieID = resultsArray['results'][0]['id'].slice(7, 17);
    InfoReturn = movieID.replace('/', '');
    console.log('MOVIE ID FROM FUNCTION:', InfoReturn);
    return(InfoReturn);
  }

  // SCORE CALCULATOR //

  async function CalcWeightedScore(FilmID, userAge) {


    let LocalScore = 0;
    let ageBracket = 0;



    //Establishes connection with database using a login without DELETE priviledges for security//
    const connection = await mysql.createConnection({
      host     : 'localhost',
      database : 'isitgooddb',
      port     : '3306',
      user     : 'root',
      password : 'IsItGood?2022root'
    });

    //Queries database for number of ratings//
    let TotalRatings = await connection.query("SELECT COUNT(FilmID) as total_ratings FROM film_reviews WHERE (FilmID ='" + FilmID + "')");
    TotalRatings = TotalRatings[0][0].total_ratings;
    console.log('Total Ratings: ', TotalRatings)
    //ADD CODE TO WARN USER OF LOW RATING COUNT HERE//


    //Queries database for ratings by users under 8 years of age//
    let Group1AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = users.userID WHERE (FilmID ='" + FilmID + "') AND (age <= 8)");
    let Final1 = Group1AVG[0][0].avg_rating;

    //Queries database for ratings by users between age 8 and 16//
    let Group2AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = users.userID WHERE (FilmID ='" + FilmID + "') AND (age > 8) AND (age <= 16)");
    let Final2 = Group2AVG[0][0].avg_rating;

    //Queries database for ratings by users between age 16 and 21//
    let Group3AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = users.userID WHERE (FilmID ='" + FilmID + "') AND (age > 16) AND (age <= 21)");
    let Final3 = Group3AVG[0][0].avg_rating;

    //Queries database for ratings by users between age 21 and 40//
    let Group4AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = users.userID WHERE (FilmID ='" + FilmID + "') AND (age > 21) AND (age <= 40)");
    let Final4 = Group4AVG[0][0].avg_rating;

    //Queries database for ratings by users between age 40 and 60//
    let Group5AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = users.userID WHERE (FilmID ='" + FilmID + "') AND (age > 40) AND (age <= 60)");
    let Final5 = Group5AVG[0][0].avg_rating;

    //Queries database for ratings by users over 60//
    let Group6AVG = await connection.query("SELECT AVG(Rating) as avg_rating FROM film_reviews INNER JOIN users ON film_reviews.UserID = users.userID WHERE (FilmID ='" + FilmID + "') AND (age > 60)");
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

    let IMDbScoreQ = await connection.query("SELECT averageRating FROM imdb_ratings WHERE (tconst ='" + FilmID + "')");

    let IMDbScore = IMDbScoreQ[0][0];

    CalcReturn = LocalScore;


    connection.end();
    return(CalcReturn);
  }

  // GET FILM INFORMATION //

  async function GetFilmInfo(FilmID) {
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {r: 'json', i: FilmID, type: 'movie'},
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
    let MoviePosterSRC = resultsArray['Poster'];


    if (JSON.stringify(resultsArray).includes("Rotten Tomatoes")){
      let RottenTomatoesScore = resultsArray['Ratings'][1]['Value'];
      let InfoReturn = [Title, Year, AgeRating, Runtime, Genres, IMDbRating, MoviePosterSRC, RottenTomatoesScore];
      return(InfoReturn);
    } else {
      let InfoReturn = [Title, Year, AgeRating, Runtime, Genres, IMDbRating, MoviePosterSRC, null];
      return(InfoReturn);
    }





    console.log(Title);
    console.log(Year);
    console.log(AgeRating);
    console.log(Runtime);
    console.log(Genres);
    console.log(IMDbRating);
    console.log(MoviePosterSRC);

  }

  //  GET Routes - display pages without user input  //
  // Root Route //


  // GET FAVICON //
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));



  //DEFAULT PAGE//
  app.get('/', function (req, res) {
    res.render('pages/_homeStatic');
  });

  //SEARCH PAGE//
  app.get('/search', async function (req, res) {
    console.log('parameters:', req.query);
    let parameters = req.query;

    // GET USERS SEARCH TERM //
    let SearchQuery = parameters['ID'];
    SearchQuery = SearchQuery.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

    // GET USERS AGE //
    let UserAge = parameters['AGE'];
    UserAge = UserAge.replace(/\D/g,'');

    if ((SearchQuery === ' ') || (SearchQuery === '')){
      let Redirect = true;

      let IMDbRating = '';
      let RottenTomatoesScore = '';
      let FinalScore = '';
      let LocalScore = '';
      let Title = '';
      let Year = '';
      let Runtime = '';
      let AgeRating = '';
      let Genres = '';
      let MoviePosterSRC = '';
      let TitleText = 'Redirecting...';
      let DevLoves = '';

      console.log(Redirect);

      res.render('pages/_Search', {
        IMDbRating: IMDbRating,
        RTScore: RottenTomatoesScore,
        LocalRating: FinalScore,
        AgeScore: LocalScore,
        FilmName: Title,
        FilmYear: Year,
        FilmRuntime: Runtime,
        AgeRating: AgeRating,
        Genres: Genres,
        PosterSRC: MoviePosterSRC,
        TitleText: TitleText,
        DevLoves: DevLoves,
        redirect: true
      });
    } else {

      // GET IMDB ID OF FILM //
      let FilmID = await GetMovieID(SearchQuery);

      // GET FILM INFO IN ARRAY [Title, Year, AgeRating, Runtime, Genres, IMDbRating, RottenTomatoesScore, MoviePosterSRC] //
      let InfoArray = await GetFilmInfo(FilmID);
      console.log('ARRAY:', InfoArray);
      let Title = InfoArray[0];
      let Year = InfoArray[1];
      let AgeRating = InfoArray[2];
      let Runtime = InfoArray[3];
      let Genres = InfoArray[4];
      let IMDbRating = InfoArray[5];
      let MoviePosterSRC = InfoArray[6];
      let RottenTomatoesScore = InfoArray[7];
      console.log('IMG SRC', MoviePosterSRC);

      // Error Handling for Missing IMDb Data //
      if (IMDbRating == 'N/A') {
        IMDbRating = false;
        let IMDbBool = false;
      } else {
        let IMDbBool = true;
      }

      // Error Handling for Missing RT Data //
      if (RottenTomatoesScore == null) {
        RottenTomatoesScore = false;
        let RTBool = false;
      } else {
        RottenTomatoesScore = parseInt(RottenTomatoesScore.replace('%', ''));
        let RTBool = true;
      }

      // Error Handling for Final Score //
      if ((RTBool = true) && (IMDbBool = true)) {
        FinalScore = Math.round((IMDbRating * RottenTomatoesScore));
      } else {
        FinalScore = false;
      }

      // GET LOCAL SCORE BASED ON AGE //
      let LocalScore = await CalcWeightedScore(FilmID, UserAge);
      LocalScore = (Math.round(LocalScore * 10) / 10);
      // Error Handling for Age Based Score //
      if (isNaN(LocalScore)) {
        LocalScore = false;
      }

      console.log(FinalScore);
      // TITLE GENERATION //
      let TitleText = "Maybe good, maybe bad (we don't know)";
      if (FinalScore != false){
        switch(true){

          case FinalScore < 100.0:
          TitleText = "It's the worst!";
          break;

          case FinalScore >= 100.0 && FinalScore < 200.0:
          TitleText = "It's pretty bad...";
          break;

          case FinalScore >= 200.0 && FinalScore < 400.0:
          TitleText = "It's OK if you've seen everything else.";
          break;

          case FinalScore >= 400.0 && FinalScore < 600.0:
          TitleText = "It's actually decent";
          break;

          case FinalScore >= 600.0 && FinalScore < 700.0:
          TitleText = "It's very good";
          break;

          case FinalScore >= 700.0 && FinalScore < 850.0:
          TitleText = "It's AMAZING!";
          break;

          case FinalScore >= 850.0:
          TitleText = "It's probably the best.";
        }
      }
      console.log(TitleText);

      let DevLoves = false;

      if (Title == "Spirited Away" ||
      Title == "Breakfast at Tiffany's" ||
      Title == "Kiki's Delivery Service" ||
      Title == "My Neighbor Totoro" ||
      Title == "Guardians of the Galaxy" ||
      Title == "Gilmore Girls" ||
      Title == "New Girl" ||
      Title == "Fight Club" ||
      Title == "How To Steal A Million"){
        DevLoves = true;
      }

      console.log('Title:', Title);
      console.log('Developer loves?', DevLoves);

      let Redirect = false;
      res.render('pages/_Search', {
        IMDbRating: IMDbRating,
        RTScore: RottenTomatoesScore,
        LocalRating: FinalScore,
        AgeScore: LocalScore,
        FilmName: Title,
        FilmYear: Year,
        FilmRuntime: Runtime,
        AgeRating: AgeRating,
        Genres: Genres,
        PosterSRC: MoviePosterSRC,
        TitleText: TitleText,
        DevLoves: DevLoves,
        redirect: false
      });

      console.log('Redirect?', Redirect);

    }

  });




  // Parse incoming request bodies in a middleware before your handlers
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));



// SIGNUP PAGE //

    // RENDER PAGE //
    app.get('/signup', function (req, res) {
      res.render('pages/_Signup');
    });

    // HANDLE SIGNUP FORM //
  app.post('/signup', async function (req, res) {

    const connection = await mysql.createConnection({
      host     : 'localhost',
      database : 'isitgooddb',
      port     : '3306',
      user     : 'root',
      password : 'IsItGood?2022root'
    });

    // Get the values of the form fields from the request body
    let firstname = req.body.firstname;
    console.log('First Name:', firstname);

    let lastname = req.body.lastname;
    console.log('Last Name:', lastname);

    let age = req.body.age;
    console.log('Age:', age);

    let username = req.body.username;
    console.log('Username:', username);

    let email = req.body.email;
    console.log('Email', email);

    let password = req.body.password;
    console.log('Password', password);

    let passwordhash = crypto.createHash('sha256').update(password).digest('hex');

    console.log('Hash', passwordhash);

    // CHECK IF USERNAME ALREADY EXISTS //
    let usernameInDB = await connection.query("SELECT count(*) as count FROM users WHERE Username = '" + username + "'");
    usernameInDB = usernameInDB[0][0].count;

    if (usernameInDB != 0) {
      usernameExists = true;
      usernameInvalid = '<p style="color: red;"> Username is already in use </p>';
    } else {
      usernameExists = false;
      usernameInvalid = '';
    }

    console.log('username exists?', usernameExists);

    // CHECK IF EMAIL ALREADY EXISTS //
    let emailInDB = await connection.query("SELECT count(*) as count FROM users WHERE Email = '" + email + "'");
    emailInDB = emailInDB[0][0].count;

    if (emailInDB != 0) {
      emailExists = true;
      emailInvalid = '<p style="color: red;"> Email address is already in use </p>';
    } else {
      emailExists = false;
      emailInvalid = '';
    }

    if (email == ''){
      emailExists = false;
      emailInvalid = '';
    }

    console.log('email exists?', emailExists);

    if (firstname == '' || lastname == '' || username == '' || email == '' || password == '' || age == '') {
      emptyFields = '<p style="color: red;"> Please complete all fields </p>'
      missingFields = true;
    } else {
      emptyFields = '';
      missingFields = false;
    }
    console.log('missing fields?', missingFields);

    if (emailExists == false && usernameExists == false && missingFields == false) {
      signupSuccess = true;

      connection.query("INSERT INTO users (FirstName, LastName, Username, Age, Email, Password) VALUES ('" + firstname + "', '" + lastname + "', '" + username + "', '" + age + "', '" + email + "', '" + passwordhash + "')");
      console.log('User Added!');
    } else {
      signupSuccess = false;
    }


    if (signupSuccess == true) {
      console.log('Signup successful!');
      res.send('<head> <!-- REQUESTS CRAWLERS DONT INDEX THE SITE --> <meta name="robots" content="noindex"> <!-- EXTERNAL CSS, JS, FONTS --> <link rel="stylesheet" href="/css/styles.css" /> <script src=""></script> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet"> <meta charset="utf-8"> <link rel="preconnect" href="https://fonts.googleapis.com"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js%22%3E"></script> <!-- BROWSER TAB TITLE --> <title>IsItGood</title> </head> <body> <meta http-equiv="Refresh" content="0; url=' + '/' + '" /> <video autoplay muted loop id="background_video"> <source src="background3.mp4" type="video/mp4"> </video> <div class="content"> <header> <h1 id="pagetitle">SIGNUP SUCCESSFUL! REDIRECTING...</h1> </header> </body>');
    } else {
      console.log('Signup unsuccessful.');
      res.send('<head> <title>Sign Up</title> <style> /* Style the form elements */ body { font-family: "Helvetica", serif; margin: 0; height: 100%; } h1 { font-size: 60px; color: #4ecda7; white-space: nowrap; border: none; } form { width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 4px; } label { display: block; margin-bottom: 8px; } input[type="text"], input[type="email"], input[type="password"] { width: 100%; padding: 12px 20px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; } input[type="submit"] { background-color: #4ecda7; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; } input[type="submit"]:hover { background-color: #00000; } #background_video { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; } </style> <!-- REQUESTS CRAWLERS DONT INDEX THE SITE --> <meta name="robots" content="noindex"> <!-- EXTERNAL CSS, JS, FONTS --> <link rel="stylesheet" href="/css/styles.css" /> <script src="scraper.js"></script> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet"> <meta charset="utf-8"> <link rel="preconnect" href="https://fonts.googleapis.com"> </head> <body> <video autoplay muted loop id="background_video"> <source src="background3.mp4" type="video/mp4"> </video> <div class="content"> <header> <h1 id="pagetitle">IS IT ACTUALLY GOOD?</h1> </header> <br> <form id="signup-form" action="/signup" method="POST" name="signup-form"> <h2>Sign Up</h2> <div> <div id="FirstNameDiv" style="display: inline-block; float: left; width: 47%; margin: 5px;"> <label for="firstname">First Name:</label> <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" value="' + firstname + '"> </div> <div id="LastNameDiv" style="display: inline-block; float: left; width: 47%; margin: 5px;"> <label for="lastname">Last Name:</label> <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" value="' + lastname + '"> </div> </div> <div style="clear: both;"></div> <label for="username">Username:</label> <input type="text" id="username" name="username" placeholder="Enter your username" value="' + username + '">' + usernameInvalid + ' <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Enter your email" value="' + email + '"> ' + emailInvalid + ' <label for="password">Password:</label> <input type="password" id="password" name="password" placeholder="Enter your password" value="' + password + '"> <div id="AgeDiv" style="width: 100%;"> <label for="age">Age:</label> <input type="number" id="age" name="age" placeholder="Enter your age" style="width: 98%; height: 30px;" value="' + age + '"> </div> <br> <input type="submit" value="Sign Up" onclick="submitForm()">' + emptyFields + ' </form> <script> function submitForm() { const form = document.getElementById("signup-form"); form.submit(); } </script> <br> <br> <br> <br> <br> </body>');
    }
  });




// SIGN IN PAGE //

    // RENDER PAGE //
    app.get('/signin', function (req, res) {
      res.render('pages/_SignIn');
    });

    // HANDLE SIGNIN FORM //
    app.post('/signin', async function (req, res) {

    // SIGN IN TO DATABASE //
    const connection = await mysql.createConnection({
      host     : 'localhost',
      database : 'isitgooddb',
      port     : '3306',
      user     : 'root',
      password : 'IsItGood?2022root'
    });

    // GET VALUES FROM FORM //

    let email = req.body.email;
    console.log('Email', email);

    let password = req.body.password;
    console.log('Password', password);

    let passwordhash = crypto.createHash('sha256').update(password).digest('hex');

    console.log('Hash', passwordhash);
    // CHECK IF EMAIL ALREADY EXISTS //
    let emailInDB = await connection.query("SELECT count(*) as count FROM users WHERE Email = '" + email + "'");
    emailInDB = emailInDB[0][0].count;

    if (emailInDB != 0) {
      emailExists = true;
      emailInvalid = '';
    } else {
      emailExists = false;
      emailInvalid = '<a style="color: red;" href="/signup"> No account is associated with this email. Click here to signup </a>';
    }

    console.log('email exists?', emailExists);

    // CHECK IF FIELDS ARE BLANK //
    if (email == '' || password == '') {
      emptyFields = '<p style="color: red;"> Please complete all fields </p>'
      missingFields = true;
    } else {
      emptyFields = '';
      missingFields = false;
    }

    console.log('missing fields?', missingFields);

    // IF FIELDS ARE FILLED AND EMAIL IS VALID //
    if (emailExists == true && missingFields == false) {

      // GET CORRECT PASSWORD FROM DATABASE //
      let databasePass = await connection.query("SELECT Password as pass FROM users WHERE Email = '" + email + "'");
      databasePass = databasePass[0][0].pass;
      console.log(databasePass);

      // IF PASSWORDS MATCH, LOGIN ACCEPTED //
      if (databasePass == passwordhash) {
        signinSuccess = true;
        console.log('User Logged In!');
        passwordInvalid = '';
      } else {
        signinSuccess = false;
        passwordInvalid = '<p style="color: red;">Incorrect Password</p>';
      }


    if (signinSuccess == true) {
      console.log('Signin successful!');
      res.send('<head> <!-- REQUESTS CRAWLERS DONT INDEX THE SITE --> <meta name="robots" content="noindex"> <!-- EXTERNAL CSS, JS, FONTS --> <link rel="stylesheet" href="/css/styles.css" /> <script src=""></script> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet"> <meta charset="utf-8"> <link rel="preconnect" href="https://fonts.googleapis.com"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js%22%3E"></script> <!-- BROWSER TAB TITLE --> <title>IsItGood</title> </head> <body> <meta http-equiv="Refresh" content="0; url=' + '/' + '" /> <video autoplay muted loop id="background_video"> <source src="background3.mp4" type="video/mp4"> </video> <div class="content"> <header> <h1 id="pagetitle">LOGIN SUCCESSFUL! REDIRECTING...</h1> </header> </body>');
    } else {
      console.log('Signin unsuccessful.');
      res.send('<head> <title>Sign Up</title> <style> /* Style the form elements */ body { font-family: "Helvetica", serif; margin: 0; height: 100%; } h1 { font-size: 60px; color: #4ecda7; white-space: nowrap; border: none; } form { width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 4px; } label { display: block; margin-bottom: 8px; } input[type="text"], input[type="email"], input[type="password"] { width: 100%; padding: 12px 20px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; } input[type="submit"] { background-color: #4ecda7; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; } input[type="submit"]:hover { background-color: #00000; } #background_video { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; } </style> <!-- REQUESTS CRAWLERS DONT INDEX THE SITE --> <meta name="robots" content="noindex"> <!-- EXTERNAL CSS, JS, FONTS --> <link rel="stylesheet" href="/css/styles.css" /> <script src="scraper.js"></script> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet"> <meta charset="utf-8"> <link rel="preconnect" href="https://fonts.googleapis.com"> </head> <body> <video autoplay muted loop id="background_video"> <source src="background3.mp4" type="video/mp4"> </video> <div class="content"> <header> <h1 id="pagetitle">IS IT ACTUALLY GOOD?</h1> </header> <br> <form id="signin-form" action="/signin" method="POST" name="signin-form"> <h2>Log In</h2> <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Enter your email" value="' + email + '"> ' + emailInvalid + ' <label for="password">Password:</label> <input type="password" id="password" name="password" placeholder="Enter your password" value="' + password + '"> ' + passwordInvalid + ' <input type="submit" value="Sign In" onclick="submitForm()"> ' + emptyFields + ' </form> <script> function submitForm() { const form = document.getElementById("signin-form"); form.submit(); } </script> <br> <br> <br> <br> <br> </body>');
    }
  } else {
    console.log('Signin unsuccessful.');
    res.send('<head> <title>Sign Up</title> <style> /* Style the form elements */ body { font-family: "Helvetica", serif; margin: 0; height: 100%; } h1 { font-size: 60px; color: #4ecda7; white-space: nowrap; border: none; } form { width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 4px; } label { display: block; margin-bottom: 8px; } input[type="text"], input[type="email"], input[type="password"] { width: 100%; padding: 12px 20px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; } input[type="submit"] { background-color: #4ecda7; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; } input[type="submit"]:hover { background-color: #00000; } #background_video { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; } </style> <!-- REQUESTS CRAWLERS DONT INDEX THE SITE --> <meta name="robots" content="noindex"> <!-- EXTERNAL CSS, JS, FONTS --> <link rel="stylesheet" href="/css/styles.css" /> <script src="scraper.js"></script> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet"> <meta charset="utf-8"> <link rel="preconnect" href="https://fonts.googleapis.com"> </head> <body> <video autoplay muted loop id="background_video"> <source src="background3.mp4" type="video/mp4"> </video> <div class="content"> <header> <h1 id="pagetitle">IS IT ACTUALLY GOOD?</h1> </header> <br> <form id="signin-form" action="/signin" method="POST" name="signin-form"> <h2>Log In</h2> <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Enter your email" value="' + email + '"> ' + emailInvalid + ' <label for="password">Password:</label> <input type="password" id="password" name="password" placeholder="Enter your password" value="' + password + '"> <input type="submit" value="Sign In" onclick="submitForm()"> ' + emptyFields + ' </form> <script> function submitForm() { const form = document.getElementById("signin-form"); form.submit(); } </script> <br> <br> <br> <br> <br> </body>');
  }
  })


  // ABOUT PAGE //

      // RENDER PAGE //
      app.get('/about', function (req, res) {
        res.render('pages/_About');
      });

  app.listen(PORT, () => console.log('SERVER RUNNING ON PORT ' + PORT));

}
server();
