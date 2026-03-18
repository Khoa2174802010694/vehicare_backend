const service = require("../services/rescueProviderService");

exports.getProviders = async (req, res) => {
  try {
    const providers = await service.getProviders();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProvider = async (req, res) => {
  try {
    const provider = await service.createProvider(req.body);
    res.status(201).json(provider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};