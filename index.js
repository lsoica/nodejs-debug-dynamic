const debug = require('debug');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  debug('test')("Test debug log")
  res.send('Homepage! Hello world.');
});
app.get('/enable', (req, res) => { // new
  debug.enable('*');
  res.send('Enable');
});
app.get('/disable', (req, res) => { // new
  debug.enable('');
  res.send('Disable');
});
app.listen(3000, () => console.log('listening on port 3000'));
