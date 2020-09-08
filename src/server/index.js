var path = require('path')
const express = require('express')
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
var aylien = require("aylien_textapi");
dotenv.config();

const app = express()

app.use(express.static('dist'))

/* Middleware*/
var bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

console.log(__dirname);

const STORE = [];
// console.log(STORE)
let data;

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });  


app.get('/aylien', function(req, res) {
  textapi.sentiment(data, function(error, response) {
    if (error === null) {
      STORE.push(response)
      res.send(STORE);
      console.log(STORE)
    }
  });  
})


app.post('/url', function(req,res) {
  // URL.push(req.body);
  data = req.body;
  res.json({
    status: "success",
    term: req.body
  })
});  

// app.get('/all', function (req, res) {
//   // console.log(STORE)
//     res.send(STORE)
// })

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


