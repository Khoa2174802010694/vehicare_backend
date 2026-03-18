const vehicleRepository = require("../repositories/vehicleRepository");

exports.getAllVehicles = async () => {
  return await vehicleRepository.findAll();
};

exports.getVehicleById = async (id) => {
  return await vehicleRepository.findById(id);
};

exports.getVehiclesByUser = async (userId) => {
  return await vehicleRepository.findByUserId(userId);
};

exports.createVehicle = async (data) => {
  const { user_id, brand } = data;

  if (!user_id || !brand) {
    throw new Error("user_id and brand are required");
  }

  return await vehicleRepository.createVehicle(data);
};