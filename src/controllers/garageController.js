const service = require("../services/garageService");

exports.getGarages = async (req, res) => {
  try {
    const garages = await service.getGarages();
    res.json(garages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGarage = async (req, res) => {
  try {
    const garage = await service.getGarage(req.params.id);
    res.json(garage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createGarage = async (req, res) => {
  try {
    const garage = await service.createGarage(req.body);
    res.status(201).json(garage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};