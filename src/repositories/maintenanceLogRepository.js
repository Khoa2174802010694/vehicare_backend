const db = require("../config/db");

exports.findByVehicle = async (vehicleId) => {
  const [rows] = await db.query(
    "SELECT * FROM maintenance_logs WHERE vehicle_id = ?",
    [vehicleId]
  );
  return rows;
};

exports.createLog = async (log) => {
  const { vehicle_id, maintenance_type_id, garage_id, cost, mileage, service_date, note } = log;

  const [result] = await db.query(
    `INSERT INTO maintenance_logs
     (vehicle_id, maintenance_type_id, garage_id, cost, mileage, service_date, note)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [vehicle_id, maintenance_type_id, garage_id, cost, mileage, service_date, note]
  );

  return { id: result.insertId, ...log };
};