import Database from 'better-sqlite3';

const db = new Database('./path/to/your/database.db', { verbose: console.log });

export default db;