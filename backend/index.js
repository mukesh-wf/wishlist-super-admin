const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

const PORT = 7000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());

// ------------- route path ---------------
const userRouter = require('./router/UserRouter');


app.use('/store', userRouter);


app.listen(PORT, ()=> {
    console.log(`Connected on port ${PORT}`)
});

