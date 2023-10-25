// // logic
// // create user function


// const data = new Model({
//     name: req.body.name,
//     address: req.body.address,
//     dob: req.body.dob,
//     gender: req.body.gender,
//     role: req.body.role
//   });

//   const dataToSave = await data.save();
// call repository function from here



const userRepository = require('./userRepository');

const createUser = async (userData) => {
  return userRepository.createUser(userData);
};

const getAllUsers = async () => {
  return userRepository.getAllUsers();
};

const getUserById = async (id) => {
  return userRepository.getUserById(id);
};

const deleteUserById = async (id) => {
  return userRepository.deleteUserById(id);
};

const updateUserById = async (id, updatedData) => {
  return userRepository.updateUserById(id, updatedData);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
