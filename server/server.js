const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 3500;

const config = require('../config.js')

app.use(express.static(path.join(process.cwd(), "/client/public")));

const state = 'california';
const city = 'hanford';

app.get('/location/:city.:state', (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.params.city},${req.params.state}&units=imperial&appid=${config.apiKey}`)
    .then(res => res.data)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
