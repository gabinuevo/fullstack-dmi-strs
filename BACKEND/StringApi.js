/** String class for DMI Connect */
const db = require("./db");

/**
 * Abstracts logic from making API calls to server.
 */
class StringApi {

  /** Get a list of strings 
   * -- returns
   * [{id, string}, ...]
   */

  static async getAll() {
    const result = await db.query(
      `SELECT id, string FROM strings`);

    return result.rows;
  }

  /** Insert a new String into the database
   * -- returns
   * {id, string}
   * */
  static async addString(str) {
    try {
      const result = await db.query(
        `INSERT INTO strings (string) VALUES ($1) RETURNING id, string`, [str]);

      return result.rows[0];
    } catch (err) {
      console.error(err.message)
    }
  }

}

module.exports = StringApi;