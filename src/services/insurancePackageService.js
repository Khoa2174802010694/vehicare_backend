const repo = require("../repositories/insurancePackageRepository");

exports.getAll = async () => {
  return await repo.findAll();
};

exports.getById = async (id) => {
  return await repo.findById(id);
};

exports.create = async (data) => {
  return await repo.createPackage(data);
};

exports.update = async (id, data) => {
  return await repo.updatePackage(id, data);
};

exports.delete = async (id) => {
  return await repo.deletePackage(id);
};