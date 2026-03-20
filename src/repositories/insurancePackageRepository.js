const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM insurance_packages");
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM insurance_packages WHERE id=?",
    [id]
  );
  return rows[0];
};

exports.createPackage = async (data) => {
  const { name, price, description } = data;

  const [result] = await db.query(
    `INSERT INTO insurance_packages (name, price, description)
     VALUES (?, ?, ?)`,
    [name, price, description]
  );

  return { id: result.insertId, ...data };
};

exports.updatePackage = async (id, data) => {
  const { name, price, description } = data;

  await db.query(
    `UPDATE insurance_packages
     SET name=?, price=?, description=?
     WHERE id=?`,
    [name, price, description, id]
  );

  return { id, ...data };
};

exports.deletePackage = async (id) => {
  await db.query(
    "DELETE FROM insurance_packages WHERE id=?",
    [id]
  );
};