/**
 * config for DMI connect
 */


require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "test";

const PORT = +process.env.PORT || 3001;

const BAD_REQUEST = 400;
const NOT_FOUND = 404;


let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "dmi-connect-test";
} else {
  DB_URI = process.env.DATABASE_URL || "connectdmi";
}


module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI,
  BAD_REQUEST,
  NOT_FOUND
};
