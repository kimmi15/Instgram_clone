const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');
const rout = require('./router/rout')


dotenv.config();
const app = express();
console.log(app)

app.use(multer().any());
mongoose.connect(process.env.DB_URL).then( _ => console.log('DB connect')).catch((err) => console.log(err));

app.use('/',rout)


app.listen(process.env.PORT || 2360 , ()=>{
    console.log('server is working' + process.env.PORT);
})