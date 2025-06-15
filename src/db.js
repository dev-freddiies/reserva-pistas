const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    if (!Database.instance) {
      Database.instance = new sqlite3.Database(':memory:');
    }
    return Database.instance;
  }
}

module.exports = new Database();
