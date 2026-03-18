const db = require("../config/db");

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM forum_posts");
  return rows;
};

exports.createPost = async (data) => {
  const { user_id, title, content } = data;

  const [result] = await db.query(
    `INSERT INTO forum_posts (user_id,title,content)
     VALUES (?,?,?)`,
    [user_id, title, content]
  );

  return { id: result.insertId, ...data };
};