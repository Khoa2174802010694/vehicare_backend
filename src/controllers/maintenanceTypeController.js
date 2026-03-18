const service = require("../services/maintenanceTypeService");

exports.getAllTypes = async (req, res) => {
  try {
    const types = await service.getAllTypes();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createType = async (req, res) => {
  try {
    const type = await service.createType(req.body);
    res.status(201).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};