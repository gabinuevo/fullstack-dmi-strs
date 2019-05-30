const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ExpressError = require("./expressError")

app.get('/', function (req, res, next) {
  try {
    const { input } = req.body;
    return res.send({
      message: "Success!"
    });
  } catch (e) {
    return next(err);
  }
});


// handles 404s only.
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});


// main error handler. Sets status and alerts client.
app.use(function (err, req, res, next) {
  let status = err.status || 500;

  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});


module.exports = app;