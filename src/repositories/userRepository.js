const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

exports.createUser = async (name, email, password, phone) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)",
    [name, email, password, phone]
  );

  return {
    id: result.insertId,
    name,
    email,
    phone
  };
};