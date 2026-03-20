const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM parts_catalog");
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM parts_catalog WHERE id=?",
    [id]
  );
  return rows[0];
};

exports.create = async (data) => {
  const { name, brand, vehicle_brand, price, description } = data;

  const [result] = await db.query(
    `INSERT INTO parts_catalog (name, brand, vehicle_brand, price, description)
     VALUES (?, ?, ?, ?, ?)`,
    [name, brand, vehicle_brand, price, description]
  );

  return { id: result.insertId, ...data };
};

exports.update = async (id, data) => {
  const { name, brand, vehicle_brand, price, description } = data;

  await db.query(
    `UPDATE parts_catalog 
     SET name=?, brand=?, vehicle_brand=?, price=?, description=? 
     WHERE id=?`,
    [name, brand, vehicle_brand, price, description, id]
  );

  return { id, ...data };
};

exports.delete = async (id) => {
  await db.query("DELETE FROM parts_catalog WHERE id=?", [id]);
};