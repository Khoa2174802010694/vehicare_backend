const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM traffic_laws");
  return rows;
};

exports.createLaw = async (data) => {
  const { title, description, fine_amount } = data;

  const [result] = await db.query(
    `INSERT INTO traffic_laws (title,description,fine_amount)
     VALUES (?,?,?)`,
    [title, description, fine_amount]
  );

  return { id: result.insertId, ...data };
};