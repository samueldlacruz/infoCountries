const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//load env
dotenv.config({ path: './config.env' });

//init express app
const app = express();

//dev logging
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}

//countries routes
app.use('/api/v1/countries',require('./routes/countries'));

//handle production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static(__dirname + '/public/'));

  //handle SPA
  app.get(/.*/,(req,res) => res.sendfile(__dirname + '/public/index.html'));
}

//settings
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}!`);
});

