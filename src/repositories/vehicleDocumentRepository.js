const db = require("../config/db");

exports.findByVehicle = async (vehicleId) => {
  const [rows] = await db.query(
    "SELECT * FROM vehicle_documents WHERE vehicle_id=?",
    [vehicleId]
  );
  return rows;
};

exports.createDocument = async (data) => {
  const { vehicle_id, document_type, file_url } = data;

  const [result] = await db.query(
    `INSERT INTO vehicle_documents
     (vehicle_id,document_type,file_url)
     VALUES (?,?,?)`,
    [vehicle_id, document_type, file_url]
  );

  return { id: result.insertId, ...data };
};