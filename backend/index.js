// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
// const router = express.Router();
const Model = require('./model/model');

const app = express();
const PORT = process.env.PORT || 3000;


// Middlewareconst routes = require('./routes/routes');
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(routes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mydbtest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

const db = mongoose.connection;

db.on('error', (error)=>{console.log(error);});
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running  on port ${PORT}`);
});

module.exports = app;
// global.app = app;
