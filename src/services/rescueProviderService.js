const repo = require("../repositories/rescueProviderRepository");

exports.getProviders = async () => {
  return await repo.findAll();
};

exports.createProvider = async (data) => {
  if (!data.name) {
    throw new Error("Provider name required");
  }

  return await repo.createProvider(data);
};