/** custom error hamdler 
 * adds a status when we make an instance of it.
 *
 *  The error-handling middleware will be handled by this.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    console.error(this.stack);
  }
}


module.exports = ExpressError;
