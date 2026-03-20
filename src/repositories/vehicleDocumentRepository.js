const db = require("../config/db");

exports.findByVehicle = async (vehicleId) => {
  const [rows] = await db.query(
    "SELECT * FROM vehicle_documents WHERE vehicle_id=?",
    [vehicleId]
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM vehicle_documents WHERE id=?",
    [id]
  );
  return rows[0];
};

exports.createDocument = async (data) => {
  const { vehicle_id, document_type, file_url } = data;

  const [result] = await db.query(
    `INSERT INTO vehicle_documents
     (vehicle_id, document_type, file_url)
     VALUES (?, ?, ?)`,
    [vehicle_id, document_type, file_url]
  );

  return { id: result.insertId, ...data };
};

exports.updateDocument = async (id, data) => {
  const { vehicle_id, document_type, file_url } = data;

  await db.query(
    `UPDATE vehicle_documents
     SET vehicle_id=?, document_type=?, file_url=?
     WHERE id=?`,
    [vehicle_id, document_type, file_url, id]
  );

  return { id, ...data };
};

exports.deleteDocument = async (id) => {
  await db.query(
    "DELETE FROM vehicle_documents WHERE id=?",
    [id]
  );
};