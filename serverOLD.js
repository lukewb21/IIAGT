// OLD CODE //

// Load Node modules //
const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

// store port so i dont have to remember it //
const PORT = 3000;

// Initialise Express //
const app = express();
// Render static files //
app.use(express.static('public'));
// set view engine to ejs //
app.set('view engine', 'ejs');
// Port website will run on //
app.listen(PORT, () => console.log('SERVER RUNNING ON PORT ' + PORT));

//  GET Routes - display pages without user input  //
// Root Route //

//DEFAULT PAGE//
app.get('/', function (req, res) {
    res.render('pages/_homeStatic')
});

//SEARCH PAGE//
app.get('/search', function (req, res) {
    console.log(req.query);
    res.render('pages/_Search');
});
