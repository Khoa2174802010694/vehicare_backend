const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM vehicles");
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM vehicles WHERE id = ?",
    [id]
  );
  return rows[0];
};

exports.findByUserId = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM vehicles WHERE user_id = ?",
    [userId]
  );
  return rows;
};

exports.createVehicle = async (vehicle) => {
  const { user_id, brand, model, year, license_plate, mileage } = vehicle;

  const [result] = await db.query(
    `INSERT INTO vehicles 
     (user_id, brand, model, year, license_plate, mileage)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [user_id, brand, model, year, license_plate, mileage]
  );

  return { id: result.insertId, ...vehicle };
};