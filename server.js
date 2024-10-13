const express = require('express');
const app = express();
const indexRouter = require('./route/index');

const PORT = 3000;

//set view engine --ejs
app.set("view engine", "ejs");

//middleware
app.use('/', indexRouter);
app.use(express.static("views"));



app.listen(PORT, ()=>{console.log(`Server listening on ${PORT}` )});