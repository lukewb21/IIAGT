# IIAGT
Is It Actually Good Though? is a one stop site to decide which film to watch. Users will spend minimal time here as the aim is to spend more time actually watching. Based on the age of the user and their favourite movies, the website will provide accurate statistics and recommendations.

# Analysis

## Problem Identification

There is currently no one-stop website for movie enthusiasts (like myself) to find all the stats they want to decide what to watch. Based on the age of the user and their favourite movies my website will provide accurate statistics and recommendations.

### Stakeholders:

The target demographic of this website would be computer or mobile device users that also watch movies frequently. This could be younger people such as students or older people such as parents or retired people. Due to the large age range of the demographic, the site will need features representative of this.

There should be sections of the website specifically tailored to certain age ranges to prevent younger users accidentally choosing films outside of their age range and to aid parents in selecting appropriate films for children. The site will have a design that is easy to navigate for users of any age.

### Approach:

There are various ways a user could find movie information but there is yet to be 1 easy solution that can help you decide in 1 click.

One of the most common websites is Rotten Tomatoes, however the rating on this site can be misleading and most people don’t understand what it means, a film scoring 100% could only have an average of 5 stars whereas a film scoring 75% could have an average rating of 8.5.

Wikipedia is another common website that hosts more than just film information, the layout can be quite overwhelming, especially to younger users as it is primarily used for educational research, and it does not always provide ratings.

You could also keep a record of the information yourself on paper or on a hard drive but it would use a lot of physical or digital storage space, and paper copies would take a long time to read through, a common example of this would be television guides, that can take up a lot of physical space and cost more over time than searching for the information, providing you own a computer or smartphone.

Another option is to Google the name of the movie but this doesn't always work if it has a basic name. For example, ‘Cars’ does not come up with results relating to the film at the top.

### Computational Methods:

My project is suitable to be solved using computational methods as the large volume of movies available today can only be searched through efficiently by a computer. A computer can send requests to my web server over the internet and my server can return results after compiling a dynamic webpage using data from other web sources and its own database. This can happen very quickly which is ideal for the user because they don’t have to spend lots of time searching themselves, as my website will get all the information they need for them.

Abstraction can be used to remove any information about a film that is not necessary to the decision process.  It can also be solved using inputs and outputs. The user simply inputs a title, the server processes this title and outputs information related. This can be split up into individual stages that are linked, the output of one process becomes the input of another.

## Research

### Existing similar solution 1: Google Knowledge Panel

[https://lh5.googleusercontent.com/7rRhicxcyZw2sEiFKsOjosPtf8Gr3yudNSyu9t7V0c7BkaOOccYtbJ297eq3UbElSKCWlE6mGUj7VGo1MwriLAgcPAm4_p8hRKJOeiRLH6IxEdkGiGxskbMzIvbdJ5Mow40yta-oq1nCAhcPdaXh2azHYZ8CDaQbiEXzDxX4WG7sw8XMJ9tWLkmOc1Q8SQ](https://lh5.googleusercontent.com/7rRhicxcyZw2sEiFKsOjosPtf8Gr3yudNSyu9t7V0c7BkaOOccYtbJ297eq3UbElSKCWlE6mGUj7VGo1MwriLAgcPAm4_p8hRKJOeiRLH6IxEdkGiGxskbMzIvbdJ5Mow40yta-oq1nCAhcPdaXh2azHYZ8CDaQbiEXzDxX4WG7sw8XMJ9tWLkmOc1Q8SQ)

The Google Knowledge Panel is an information box that appears when you search for something that is popular or well known such as a celebrity, film, book etc. For films, this panel shows:

- Movie name
- Images related to the film
- Year of release
- Genre
- Runtime
- Where to watch (usually Google’s payed or sponsored services)
- Ratings from various sources
- Movie Description
- Director
- Composer
- Box Office
- Screenplay
- Awards
- Full cast
- Google user reviews

This solution also has a feature that can correct typos for you if no relevant results are found as shown below:

[https://lh5.googleusercontent.com/a2L2Sv1ZDrUuBRP-nUuhvof1s7unXhq6JJiQnDXpJT938bAedsDtX3ku2X2VloTXtvXug01EdqMvbF5V3nBEmj-qTxCk3IwIObn4WqzMDMLGXowq2SVMX1LA3hyhg8jJIy3QiaOcst10Nxixm8M6P_P7j4QFGob2lrwuEIHo_irGPfLc9EXhjEf2PQknzg](https://lh5.googleusercontent.com/a2L2Sv1ZDrUuBRP-nUuhvof1s7unXhq6JJiQnDXpJT938bAedsDtX3ku2X2VloTXtvXug01EdqMvbF5V3nBEmj-qTxCk3IwIObn4WqzMDMLGXowq2SVMX1LA3hyhg8jJIy3QiaOcst10Nxixm8M6P_P7j4QFGob2lrwuEIHo_irGPfLc9EXhjEf2PQknzg)

### Existing similar solution 2: whatmovieshouldiwatchtonight.com (WMSIWT)

[https://lh5.googleusercontent.com/31EVbG8idpB68AtmJcz8lzwO57hIh50wg3S62zGk70RmI0ZiZkyDlZjChfXfifiwHRTVvbuvqeeAgEXqEz8w1zjY6ZglhrtQwAGRP1VQ8nhVVqUwxYn2S2z5TJuqeWtAqYjhz28DujQeMy6gmdU2T-BIKVSq7ZD4kZm0IP-DHDQ2kAZvsOAsUBDE9BzXMw](https://lh5.googleusercontent.com/31EVbG8idpB68AtmJcz8lzwO57hIh50wg3S62zGk70RmI0ZiZkyDlZjChfXfifiwHRTVvbuvqeeAgEXqEz8w1zjY6ZglhrtQwAGRP1VQ8nhVVqUwxYn2S2z5TJuqeWtAqYjhz28DujQeMy6gmdU2T-BIKVSq7ZD4kZm0IP-DHDQ2kAZvsOAsUBDE9BzXMw)

WMSIWT is a website that serves random trailers to the user to find a movie to watch. You can also filter by genre and video platform to find a movie. The design of the movie pages is minimal, providing just the name, trailer, ratings and credits at the bottom. I like the design and simple descriptions but don’t use the website myself as it is buggy and dysfunctional with even the signup and login pages displaying 404 errors. It is also lacking in a search bar and its catalogue of movies is just too small as they are hand picked by real humans.

### Existing similar solution 3: JustWatch

[https://lh5.googleusercontent.com/6r_MVldsbCTGPizR6cwTkrqUmnVLOJh21nbnoRzOtxcqzoTmDiEwVeA4JLmI9mbAxeCD_aqW-w7KPDkCJtdEnTDF_ae42_-r-6BpllYX4sJP9amH3M7qo2y8_UBGTjhVd3gz2hqykSw2Mlu2sOvXqMs3PHjd6vrYa04YrmeYHdRdmq7jXyqUoAoQ6eJTow](https://lh5.googleusercontent.com/6r_MVldsbCTGPizR6cwTkrqUmnVLOJh21nbnoRzOtxcqzoTmDiEwVeA4JLmI9mbAxeCD_aqW-w7KPDkCJtdEnTDF_ae42_-r-6BpllYX4sJP9amH3M7qo2y8_UBGTjhVd3gz2hqykSw2Mlu2sOvXqMs3PHjd6vrYa04YrmeYHdRdmq7jXyqUoAoQ6eJTow)

This website is one a friend uses frequently. They are particularly fond of the ‘Where To Watch’ feature which I had not considered including until now, however it seems to be the main unique feature of this site with other key aspects taking a background role. The ratings are under the cover image and I find them to be too small and not immediately noticeable. The options to add the film to certain lists such as ‘Seen’ or ‘Liked’ are great features to include in a site with this purpose.

### Features to include in my solution:

Solution 1 provides a lot of information that is useful when choosing a movie but also a lot of extra that, while useful in research, is not useful for deciding what to watch. For this reason I will be using the following information in my own solution:

- Movie name
- Images related to film (Official cover image)
- Genre
- Runtime (users may be time restricted)
- Ratings from various sources (IMDb, Rotten Tomatoes and Metacritic)
- User reviews area

Solution 2 provides great minimalistic design but little functionality and practicality due to the use of humans hand-picking each recommendation, and broken pages. I won’t be using any of the features of this site however I will take inspiration from the design aspects.

Solution 3 has a neat and organised design and some great features I intend to include in my solution such as the list options and the large cover image.

Other features I intend to add to my solution include:

- Recommendations based on the current search
- Recent tweets related to the current search
- A login system for users to store lists of favourites on the server

My solution should include these features to provide an easier user experience than the above examples, by aiming to find the most relevant film related to the search and immediately presenting the information the user needs with no intermediate step. All they need to do is type the name, press the button and the information should be there providing a relevant match is found. After the user has the info there should be the option to like the film for future reference and see similar titles.

### Limiting Scope:

To ensure the project is achievable it is necessary to limit the scope so that it doesn’t become too big.

- Very basic login system for testing as a quality, secure login system could take a long time to implement.
- I won't be hosting the website due to the need for permission to use copyright materials such as film covers commercially, and the cost of a domain name and 24/7 server hosting. However, I will be testing the website on my own home network to ensure the server processes do function as they should.
- Users' information in the database will be made up and only for testing purposes, only 1 user account will be usable for this reason.

## Requirements

### Software Requirements:

### Users:

- An Operating System capable of running a modern web browser.
- A Web browser capable of running HTML Version 4.1 or Higher (support for external style sheets)

### Developers:

- **Atom (open source, hackable text editor with support for many languages)**

I have chosen this IDE as it has very useful unique features including:

- Tabs for different files I am currently editing.
- Built in command line
- Support for HTML, CSS, Javascript and node.js formatting with automatic language detection.
- Support for github plugins that allow me to preview and test things I am currently working on in real time.
- **Axios (HTTP Client for node.js)**

I have chosen Axios as the HTTP client my web server will use as it has wide browser support and backwards compatibility for users with older machines/browsers. It also provides built-in CSRF (Cross Site Request Forgery) protection. It will also be used with the IMDb API for making and receiving requests.

- **IMDb API by Api Dojo**

This API works with node.js and axios and sends back data in a JSON format which is easy to work with using node. It is also free for up to 500 requests per month and 5 requests per second which will be enough for the development and testing stage.

- **SQLyog (MySQL GUI for developers)**

I will be using SQLyog to manage my database through a GUI as this is a more visually appealing interface than a command line and it will make working with the database easier if I can see the tables and records graphically.

- **XAMPP (Web Server Package)**

### Hardware Requirements:

### Users:

- Computer with network adapter and internet access.
- Keyboard and mouse to navigate the site.
- Monitor to view the site.

### Developers:

- Computer capable of running server side processes.
- Computer capable of running development software.

## Success Criteria

| Target | How to measure | Justification |
| --- | --- | --- |
| A system to gather the required information from an IMDb API. | Test a range of search terms within the command line before implementing into the server. | This is to ensure there are no scenarios where a film that does exist cannot be found. |
| Function server and scripts that generate dynamic pages correctly. | Test with example data collected myself before linking the API system. | This is to make sure the server is able to generate a dynamic page that displays the data how it should |
| Room for some minor typos in the search function. | Test some simple typos such as letters close on the keyboard or extra letters. | If the engine can't handle any errors it could be frustrating to use. This needs to be tested |
| Database for user data and lists. | Populate database with some user-made lists and test retrieving this data and generating a page with the information. | The database is an essential system for the site so I need to make sure users are able to add things to their lists and be able to access them in a different session. |
| A system to gather related tweets from the Twitter Developer API. | Test the system in the command line with select film names. | If the system gathers unrelated tweets or none at all, this section of the webpage would be useless. |
| A highly usable interface for people of all ages. | Get stakeholders from various age groups to test and give feedback on the overall site and usability. | The aim of the website is to appeal to all ages and simplify the current process of choosing a film, if users don’t like the design they will likely stick with what they are used to. |
| Working buttons that cannot be pressed without a valid input and that lead to the correct destination. | Test buttons with no input, valid input, invalid input. | It is essential that these buttons function as intended and do not send the user to 404s or empty pages. |
|  |  |  |

# Design

## Program Structure

| Program Part | Description | Explanation | Justification |
| --- | --- | --- | --- |
| Home Page | The main page of the website with a large search box and button in the centre and other navigation buttons at the side. | Allows the user to navigate the site easily from the first page they reach. | This means the user does not need to memorise the different paths and parameters to navigate the website. |
| Search Button | Large search button in the centre of the homepage. | Allows the user to click to search after typing the movie name. This will also be triggered by the ‘Enter’ key. | This button makes it clear to the user what the textbox above it is for. |
| Bottom Menu | Navigation buttons to access other key parts of the site. | Allows the user to access all relevant pages without remembering and typing the correct URL paths. | This makes the site easier to navigate and more convenient for users. |
| Dynamic Webpage Script | Script that makes use of pages and partials to generate result pages. | Pages: HTML files of pages with paths that can be accessed through the website.

Partials: Elements that can be repeatedly used across the site. Such as headers, menus, scripts etc. | Reduces the number of web pages needing to be stored as they can be generated in real time based on a user’s query. Saves a lot of storage space and saves time in development as a page does not need to be made for every film. Also makes development less repetitive when sections of HTML are reused. |
| Recommendation Pages |  |  |  |
| Database |  |  |  |
| Scoring Algorithm |  |  |  |

## Algorithm Design

## Scoring Algorithms

### Local Rating (Out of 10)

This algorithm will use data (provided by users of the website) from the database to calculate a weighted score based on users age and ratings. This rating is more personalised and can account for biases across age groups. The following factors will be used:

- User Ratings
- Age of Raters
- Age of Searcher

```jsx
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
```

### Third Party Rating (Out of 1000)

This algorithm will use data collected from third party websites to calculate a more accurate overall score using a larger dataset.

- IMDb Rating (X/10)
- Rotten Tomatoes User Rating (X%)

```jsx
var TPScore = 0
var IMDb = 0
var IMDbCount = 0
var Rotten = 0
var RottenCount = 0
var WarnUser = False

// If a movie has few ratings, the data is unlikely to be as accurate so the can be
// warned with a non-intrusive notice at the bottom of the page.
If ( (IMDbCount < 1000) || (RottenCount < 1000) ) {
	WarnUser = True
}
```

## User Interface Design

### Homepage:

The image on the right is a design for the homepage of the site. It features a webform to input a movie title and a clear search button. It also includes a navigation menu at the bottom for other pages on the site to search by age and genre, find new releases and an about page for FAQ and other information.

[https://lh4.googleusercontent.com/bE15RDna2RCL-o1sWWwT6cTyluPHMS5cHvJUACTVvRSzlGw12kUw1AsJyyk1cdkEH_ma_qyKcHi9kCaHgxPUC6AfViKR7E9JGQwB3pxlhYK8tiT0bpKpC2eJ7NYF3qsDlZ2BhVBnfKhTx7oFp_y7NN0H4xuOECcGpYCABAcp2Bj86WwI996oNKubN6PNNA](https://lh4.googleusercontent.com/bE15RDna2RCL-o1sWWwT6cTyluPHMS5cHvJUACTVvRSzlGw12kUw1AsJyyk1cdkEH_ma_qyKcHi9kCaHgxPUC6AfViKR7E9JGQwB3pxlhYK8tiT0bpKpC2eJ7NYF3qsDlZ2BhVBnfKhTx7oFp_y7NN0H4xuOECcGpYCABAcp2Bj86WwI996oNKubN6PNNA)

## Search Result Page:

[https://lh4.googleusercontent.com/aQQKWGHfJOXSn9xG9bthWqm2ihYPvnYmGOv3lZqm_Z5xm-4wpX5YhMDnZv7t-XgmfEm4ti8NuKcWJQdBkC51mDY_Mivsn1YwnI2lMsuTtZnhhF3cfCTfl5001Tk6p5wT35pvMEoybwFF_Cjhr39PwfIT-F8qhJKIu3qQE0jeE0MbZbgQ76LajqYd9EpI5Q](https://lh4.googleusercontent.com/aQQKWGHfJOXSn9xG9bthWqm2ihYPvnYmGOv3lZqm_Z5xm-4wpX5YhMDnZv7t-XgmfEm4ti8NuKcWJQdBkC51mDY_Mivsn1YwnI2lMsuTtZnhhF3cfCTfl5001Tk6p5wT35pvMEoybwFF_Cjhr39PwfIT-F8qhJKIu3qQE0jeE0MbZbgQ76LajqYd9EpI5Q)

The search page will be dynamically generated using the template shown on the left. This shows the closest matching title, cover photo, IMDb and rotten tomatoes ratings and my website's custom rating. The page title will become a phrase based on the score out of 1000. Some examples are shown below, the phrases may be changed in the final product.

[https://lh6.googleusercontent.com/PI048FwZalrhRclUW2fU1phz2Fec7_7qlhx7bGbuCydtUDJdIfj2GXNSE6c5DSs88VT86Ktrzt2OLT8PPEIVb7gWFtCDMdtz2kQ0HfqOj8r2TpcG5ASziALWKornVFmITr1sap925ZvrO61Eu4NY6Et48n4_yhb-SGtq8EFoenuInmLs8EZhwC5DdJ0r](https://lh6.googleusercontent.com/PI048FwZalrhRclUW2fU1phz2Fec7_7qlhx7bGbuCydtUDJdIfj2GXNSE6c5DSs88VT86Ktrzt2OLT8PPEIVb7gWFtCDMdtz2kQ0HfqOj8r2TpcG5ASziALWKornVFmITr1sap925ZvrO61Eu4NY6Et48n4_yhb-SGtq8EFoenuInmLs8EZhwC5DdJ0r)

[https://lh3.googleusercontent.com/f_vLMajy1k-kc-8KZw7YRZNgXvcGf8dDCxXw31XGaoYOc8Jj8Jkfpc6W5wMI5WQb24vNSkTN1Urp4KYzwbFkXHj8ETDAY9BsuUynJ2EWBLIKoVTh9VGwWRk9wOS_BqfKLHmAOkw0TMwzmxWv9dq8VB1648PYydsbck6olrTyUjrD9ia0XenX6M5pKTnt](https://lh3.googleusercontent.com/f_vLMajy1k-kc-8KZw7YRZNgXvcGf8dDCxXw31XGaoYOc8Jj8Jkfpc6W5wMI5WQb24vNSkTN1Urp4KYzwbFkXHj8ETDAY9BsuUynJ2EWBLIKoVTh9VGwWRk9wOS_BqfKLHmAOkw0TMwzmxWv9dq8VB1648PYydsbck6olrTyUjrD9ia0XenX6M5pKTnt)

[https://lh5.googleusercontent.com/JP3oCGuD7TNgUXAQECa-CSXz6CCEawdkeRugDibru5wu6HYdurZxI8NZGW7vIP2BM8AutkjvXgJe-mz9coF5Nr3bjcgP-40lFqv_IMwtAT4Ojo-GSmayVRpSh8lXnGiEmEqg9vAlpVANbCYcKrHIOHlbBo_ppoOAJLShF7FXTYOaEn7EcnhKxaM9z4ui](https://lh5.googleusercontent.com/JP3oCGuD7TNgUXAQECa-CSXz6CCEawdkeRugDibru5wu6HYdurZxI8NZGW7vIP2BM8AutkjvXgJe-mz9coF5Nr3bjcgP-40lFqv_IMwtAT4Ojo-GSmayVRpSh8lXnGiEmEqg9vAlpVANbCYcKrHIOHlbBo_ppoOAJLShF7FXTYOaEn7EcnhKxaM9z4ui)

[https://lh4.googleusercontent.com/sFFg9LEJaPEdoIdWrSwiUvs3wO951FSzZ7b7pyddYDIL4LQitL-gSalXrZwabNHkXw72AS0OC5tM7OAMkZ3kgf3n0ssHRd21VlTSLvU_ffk32FyXa_lA7_C539qnBalQSE_o1JEDFmSdxxALHr-nmSYea5QVcBFroyslfaART-J8UMXy2riIBIRmLSPL](https://lh4.googleusercontent.com/sFFg9LEJaPEdoIdWrSwiUvs3wO951FSzZ7b7pyddYDIL4LQitL-gSalXrZwabNHkXw72AS0OC5tM7OAMkZ3kgf3n0ssHRd21VlTSLvU_ffk32FyXa_lA7_C539qnBalQSE_o1JEDFmSdxxALHr-nmSYea5QVcBFroyslfaART-J8UMXy2riIBIRmLSPL)

[https://lh3.googleusercontent.com/ZRkrKIh_B7JeAUe1X3wmnF4As8jYhPJ4ndvqoVrUkzsAtT4x7zlsvBoLVcK7V2nzJNOqKb1gz22dsrC47brCB9A2gcwVfIfHNFF8Qb4lxSJF355-dwAScUPvRZ6TDCgbbYepV1YhxMoDX69ceo6mmQ_CDFINqYDlMe6emNjfbvG9FF1-YsJOZXJ652nc](https://lh3.googleusercontent.com/ZRkrKIh_B7JeAUe1X3wmnF4As8jYhPJ4ndvqoVrUkzsAtT4x7zlsvBoLVcK7V2nzJNOqKb1gz22dsrC47brCB9A2gcwVfIfHNFF8Qb4lxSJF355-dwAScUPvRZ6TDCgbbYepV1YhxMoDX69ceo6mmQ_CDFINqYDlMe6emNjfbvG9FF1-YsJOZXJ652nc)

Scrolling down on the search result page will show relevant tweets gathered from Twitter’s Developer API.

## Key Variables, Data Structures and Classes

| Module/Routine | Identifier | Data type/structure | Description | Justification |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

## Validation

| Module/ routine | Input/File input | Validation rule(s) used | Explanation of validation rule(s) | Justification of validation rule | Test data | Justification of chosen test data |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

## Test Data

## Post-Development Data

# Development and Testing

## Stage x: Local Ratings Algorithm
