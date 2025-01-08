const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = process.env.PORT;
const url = process.env.DB_URL;


app.use(express.static('static'));

mongoose.connect(url)
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((error) => {
    console.error('Error', error.message);
  });


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
