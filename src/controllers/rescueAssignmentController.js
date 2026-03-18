const service = require("../services/rescueAssignmentService");

exports.getAssignments = async (req, res) => {
  try {
    const data = await service.getAssignments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAssignment = async (req, res) => {
  try {
    const data = await service.createAssignment(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};