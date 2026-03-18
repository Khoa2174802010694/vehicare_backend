const repo = require("../repositories/rescueAssignmentRepository");

exports.getAssignments = async () => {
  return await repo.findAll();
};

exports.createAssignment = async (data) => {
  return await repo.createAssignment(data);
};