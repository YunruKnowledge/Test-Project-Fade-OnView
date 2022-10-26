



console.log("NEW SESSION: " + Date().toUpperCase());

require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(helmet());
app.use(cors());
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.use(require("./routes/router"))

mongoose.connect(process.env.adress, ()=> {
    console.log("Connection to MongoDB established.");
});

const port = 5000;
app.listen(port);
console.log("PORT OPEN: " + port);