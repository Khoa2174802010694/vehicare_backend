const repo = require("../repositories/garageRepository");

exports.getGarages = async () => {
  return await repo.findAll();
};

exports.getGarage = async (id) => {
  return await repo.findById(id);
};

exports.createGarage = async (data) => {
  if (!data.name) {
    throw new Error("Garage name required");
  }

  return await repo.createGarage(data);
};