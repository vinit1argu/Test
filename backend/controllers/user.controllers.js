const Model = require('../model/model');

// const Model = require('../model/model');

// Create a new document
const createDocument = async (req, res) => {
  try {
    const data = new Model({
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      gender: req.body.gender,
      role: req.body.role
    });

    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all documents
const getAllDocuments = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a document by ID
const getDocumentById = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a document by ID
const deleteDocumentById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a document by ID
const updateDocumentById = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
  
      const result = await Model.findByIdAndUpdate(
        id, updatedData, options
      );
  
      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
    deleteDocumentById,
    updateDocumentById,
  };