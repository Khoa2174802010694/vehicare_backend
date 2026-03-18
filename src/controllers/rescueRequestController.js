const service = require("../services/rescueRequestService");

exports.getRequests = async (req, res) => {
  try {
    const requests = await service.getRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRequest = async (req, res) => {
  try {
    const r = await service.createRequest(req.body);
    res.status(201).json(r);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};