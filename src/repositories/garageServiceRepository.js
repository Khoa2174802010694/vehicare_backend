const db = require("../config/db");

exports.findByGarage = async (garageId) => {
  const [rows] = await db.query(
    "SELECT * FROM garage_services WHERE garage_id = ?",
    [garageId]
  );
  return rows;
};

exports.createService = async (data) => {
  const { garage_id, maintenance_type_id, price } = data;

  const [result] = await db.query(
    `INSERT INTO garage_services
     (garage_id, maintenance_type_id, price)
     VALUES (?, ?, ?)`,
    [garage_id, maintenance_type_id, price]
  );

  return { id: result.insertId, ...data };
};