const repo = require("../repositories/garageServiceRepository");

exports.getServices = async (garageId) => {
  return await repo.findByGarage(garageId);
};

exports.createService = async (data) => {
  return await repo.createService(data);
};