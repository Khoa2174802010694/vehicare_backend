const repo = require("../repositories/maintenanceTypeRepository");

exports.getAllTypes = async () => {
  return await repo.findAll();
};

exports.createType = async (data) => {
  const { name, recommended_km, description } = data;

  if (!name) {
    throw new Error("Maintenance type name required");
  }

  return await repo.createType(name, recommended_km, description);
};