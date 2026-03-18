const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM maintenance_types");
  return rows;
};

exports.createType = async (name, recommended_km, description) => {
  const [result] = await db.query(
    `INSERT INTO maintenance_types (name, recommended_km, description)
     VALUES (?, ?, ?)`,
    [name, recommended_km, description]
  );

  return { id: result.insertId, name, recommended_km, description };
};