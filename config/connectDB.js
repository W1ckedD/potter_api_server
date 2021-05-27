const db = require('./db');

module.exports = async () => {
  try {
    const conn = await db.sync({ force:false });
    console.log(`Connected to PG: ${conn.getDatabaseName()}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}