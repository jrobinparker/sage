const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('app running successfully on port ' + port));
