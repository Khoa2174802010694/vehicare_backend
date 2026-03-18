const db = require("../config/db");

exports.findByVehicle = async (vehicleId) => {
  const [rows] = await db.query(
    "SELECT * FROM maintenance_reminders WHERE vehicle_id = ?",
    [vehicleId]
  );
  return rows;
};

exports.createReminder = async (data) => {
  const { vehicle_id, maintenance_type_id, remind_km, status } = data;

  const [result] = await db.query(
    `INSERT INTO maintenance_reminders
     (vehicle_id, maintenance_type_id, remind_km, status)
     VALUES (?, ?, ?, ?)`,
    [vehicle_id, maintenance_type_id, remind_km, status]
  );

  return { id: result.insertId, ...data };
};