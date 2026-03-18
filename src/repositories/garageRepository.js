const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM garages");
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM garages WHERE id = ?",
    [id]
  );
  return rows[0];
};

exports.createGarage = async (garage) => {
  const { name, address, phone, latitude, longitude } = garage;

  const [result] = await db.query(
    `INSERT INTO garages (name,address,phone,latitude,longitude)
     VALUES (?,?,?,?,?)`,
    [name, address, phone, latitude, longitude]
  );

  return { id: result.insertId, ...garage };
};