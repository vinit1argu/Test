//all query here

// save etc

const Model = require('../../model/userModel');

const createUser = async (userData) => {
  try {
    const data = new Model(userData);
    const dataToSave = await data.save();
    return dataToSave;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const data = await Model.find();
    return data;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const data = await Model.findById(id);
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const data = await Model.findByIdAndDelete(id);
    return data;
  } catch (error) {
    throw error;
  }
};

const updateUserById = async (id, updatedData) => {
  try {
    const result = await Model.findByIdAndUpdate(id, updatedData);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
