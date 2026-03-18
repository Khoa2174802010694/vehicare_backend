const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM insurance_packages");
  return rows;
};

exports.createPackage = async (data) => {
  const { name, price, description } = data;

  const [result] = await db.query(
    `INSERT INTO insurance_packages (name,price,description)
     VALUES (?,?,?)`,
    [name, price, description]
  );

  return { id: result.insertId, ...data };
};