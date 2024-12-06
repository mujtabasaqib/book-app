const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const path = require('path');
const app = express();
const port = 3000;

//Database connecrtion
const DATABASE_NAME = 'bookStore';
const CONNECTION_STRING = `mongodb://localhost:27017/${DATABASE_NAME}`;

mongoose.connect(CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use('/api/books', bookRoutes); //routes 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
