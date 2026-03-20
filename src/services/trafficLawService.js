const trafficLawRepository = require("../repositories/trafficLawRepository");

exports.getAllTrafficLaws = async () => {
  return await trafficLawRepository.findAll();
};

exports.createTrafficLaw = async (data) => {
  if (!data.title) {
    throw new Error("Tiêu đề luật không được để trống");
  }
  return await trafficLawRepository.createTrafficLaw(data);
};