const repo = require("../repositories/maintenanceReminderRepository");

exports.getReminders = async (vehicleId) => {
  return await repo.findByVehicle(vehicleId);
};

exports.createReminder = async (data) => {
  if (!data.vehicle_id) {
    throw new Error("vehicle_id required");
  }

  return await repo.createReminder(data);
};