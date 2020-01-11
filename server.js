'use strict';

const express = require('express');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

// app.get('/', (request, response) => {
//   response.send(('Good is Good'));
// }
// );

app.get('/hello', (request, response) => {
  response.send(('I am happy'));
});

app.get('/hi', (request, response) => {
  response.send(('Always happy'));
}

);



app.listen(PORT, () => console.log('app is up and running'));

