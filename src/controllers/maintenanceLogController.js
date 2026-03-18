const service = require("../services/maintenanceLogService");

exports.getLogsByVehicle = async (req, res) => {
  try {
    const logs = await service.getLogsByVehicle(req.params.vehicleId);
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLog = async (req, res) => {
  try {
    const log = await service.createLog(req.body);
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};