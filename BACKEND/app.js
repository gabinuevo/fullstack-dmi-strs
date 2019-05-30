const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  const { input } = req.body;
  return res.send({
    fname: req.body.fname
  });
});
 

