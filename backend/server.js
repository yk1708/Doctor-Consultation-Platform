const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();


const app = express();

//Middleware
app.use(helmet())

app.use(morgan('dev'));
app.use(cors({
}))

