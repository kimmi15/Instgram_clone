const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');
const rout = require('./router/rout')


dotenv.config();
const app = express();

app.use(multer().any());
console.log(process.env.PORT);
// mongoose.connect(process.env.DB_URL).then( _ => console.log('DB connect')).catch((err) => console.log(err));

app.use('/',rout)


app.listen(process.env.PORT , ()=>{
    console.log('server is working');
})