const repo = require("../repositories/forumRepository");

exports.getPosts = async () => {
  return await repo.findAll();
};

exports.createPost = async (data) => {
  if (!data.title) {
    throw new Error("Title required");
  }

  return await repo.createPost(data);
};