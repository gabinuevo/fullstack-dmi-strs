<div align="center"><strong>Instructions for setting up the application</strong></div>

<br />

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2. Clone this repo using git clone and either the HTTPS or SSH url.
3.  Run `npm run setup` from the FRONTEND folder in order to install dependencies and clean the git repo.<br />
4.  Run `psql < seed.sql` from the BACKEND folder in order to set up the database (PostgreSQL).<br />
5.  Run the backend server using `nodemon server.js` from the BACKEND folder.
6.  Run `npm start` to see the example app at `http://localhost:3000`

Now you're ready to rumble!

7. To run the tests (all frontend), use the command `npm run test` from the FRONTEND folder. As explained in the comments, a few tests will fail as I ran out of time. Given more time, I would figure out how to effectively build mocks for the tests that fail.