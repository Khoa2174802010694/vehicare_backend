const repo = require("../repositories/vehicleDocumentRepository");

exports.getByVehicle = async (vehicleId) => {
  return await repo.findByVehicle(vehicleId);
};

exports.getById = async (id) => {
  return await repo.findById(id);
};

exports.create = async (data) => {
  return await repo.createDocument(data);
};

exports.update = async (id, data) => {
  return await repo.updateDocument(id, data);
};

exports.delete = async (id) => {
  return await repo.deleteDocument(id);
};