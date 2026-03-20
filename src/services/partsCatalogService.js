const repo = require("../repositories/partsCatalogRepository");

exports.getAll = async () => {
  return await repo.findAll();
};

exports.getById = async (id) => {
  return await repo.findById(id);
};

exports.create = async (data) => {
  return await repo.create(data);
};

exports.update = async (id, data) => {
  return await repo.update(id, data);
};

exports.delete = async (id) => {
  return await repo.delete(id);
};