const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ExpressError = require("./expressError");
const StringApi = require("./StringApi");

const cors = require('cors');

//app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

/** Get all strings. 
 * returns => [{id, string}, {id, string}, ...]
 */
app.get('/', async function (req, res, next) {
  try {
    const result = await StringApi.getAll();
    console.log("BACKEND PINGED")
    return res.send({ result });
  } catch (err) {
    return next(err);
  }
});


/** Posts new string to db
 * returns => {result: {id, string}}
 */
app.post('/', async function (req, res, next) {
  try {
    const { input } = req.body;
    console.log("%%%%%%%%%%", req.body)
    const result = await StringApi.addString(input);
    return res.send({ result });
  } catch (err) {
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