const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM rescue_providers");
  return rows;
};

exports.createProvider = async (data) => {
  const { name, phone, vehicle_type } = data;

  const [result] = await db.query(
    `INSERT INTO rescue_providers (name, phone, vehicle_type)
     VALUES (?, ?, ?)`,
    [name, phone, vehicle_type]
  );

  return { id: result.insertId, ...data };
};