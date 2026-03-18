const db = require("../config/db");

exports.createRequest = async (data) => {
  const { user_id, vehicle_id, location, status } = data;

  const [result] = await db.query(
    `INSERT INTO rescue_requests
     (user_id, vehicle_id, location, status)
     VALUES (?, ?, ?, ?)`,
    [user_id, vehicle_id, location, status]
  );

  return { id: result.insertId, ...data };
};

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM rescue_requests");
  return rows;
};