const service = require("../services/garageServiceService");

exports.getServices = async (req, res) => {
  try {
    const services = await service.getServices(req.params.garageId);
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createService = async (req, res) => {
  try {
    const s = await service.createService(req.body);
    res.status(201).json(s);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};