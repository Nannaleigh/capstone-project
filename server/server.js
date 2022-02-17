console.log("hit")

const express = require('express');
const morgan = require('morgan');
const { Prohairesis } = require('prohairesis');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5050;

app 
    .use(express.static('public'))
    .use(morgan('dev'))

    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .listen(port, () => {`Server hearing you on port ${port}`});


    console.log('hit2')