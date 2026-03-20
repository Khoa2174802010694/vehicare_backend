const trafficLawService = require("../services/trafficLawService");

exports.getAllTrafficLaws = async (req, res) => {
  try {
    const trafficLaws = await trafficLawService.getAllTrafficLaws();
    res.json(trafficLaws);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTrafficLaw = async (req, res) => {
  try {
    const newLaw = await trafficLawService.createTrafficLaw(req.body);
    res.status(201).json(newLaw);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};