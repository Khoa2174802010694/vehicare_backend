const db = require("./config/db");

async function testConnection() {
  try {
    const [rows] = await db.query("SELECT 1");
    console.log("Database OK");
  } catch (err) {
    console.error(err);
  }
}

testConnection();