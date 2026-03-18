const userRepository = require("../repositories/userRepository");

exports.getAllUsers = async () => {
  return await userRepository.findAll();
};

exports.getUserById = async (id) => {
  return await userRepository.findById(id);
};

exports.createUser = async (data) => {
  const { name, email, password, phone } = data;

  if (!email) {
    throw new Error("Email is required");
  }

  return await userRepository.createUser(name, email, password, phone);
};