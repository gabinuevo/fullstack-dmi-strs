/** custom error hamdler 
 * adds a status when we make an instance of it.
 *
 *  TODO: The error-handling middleware will return this.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    console.error(this.stack);
  }
}


module.exports = ExpressError;
