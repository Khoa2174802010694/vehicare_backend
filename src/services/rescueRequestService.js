const repo = require("../repositories/rescueRequestRepository");

exports.getRequests = async () => {
  return await repo.findAll();
};

exports.createRequest = async (data) => {
  if (!data.user_id || !data.vehicle_id) {
    throw new Error("user_id and vehicle_id required");
  }

  return await repo.createRequest(data);
};