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
    origin: (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean) || '*',
    credentials: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "OK",
        time: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
