const repo = require("../repositories/maintenanceLogRepository");

exports.getLogsByVehicle = async (vehicleId) => {
  return await repo.findByVehicle(vehicleId);
};

exports.createLog = async (data) => {
  if (!data.vehicle_id) {
    throw new Error("vehicle_id required");
  }

  return await repo.createLog(data);
};