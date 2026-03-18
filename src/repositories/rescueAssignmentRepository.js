const db = require("../config/db");

exports.createAssignment = async (data) => {
  const { request_id, provider_id, status } = data;

  const [result] = await db.query(
    `INSERT INTO rescue_assignments
     (request_id, provider_id, status)
     VALUES (?, ?, ?)`,
    [request_id, provider_id, status]
  );

  return { id: result.insertId, ...data };
};

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM rescue_assignments");
  return rows;
};