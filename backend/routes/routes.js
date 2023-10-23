const express = require('express');
const controller = require('../controllers/user.controllers');
// const Model = require('../model/model');

const router = express.Router();

// post request

// router.post('/post', async (req, res) => {
//     console.log('working');
//     const data = new Model({
//         name: req.body.name,
//         address: req.body.address,
//         dob: req.body.dob,
//         gender: req.body.gender,
//         role: req.body.role
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

router.post('/post', controller.createDocument);

// get all routes
// router.get('/get', async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

router.get('/get', controller.getAllDocuments);

// get data by id
// router.get('/get/:id', async (req, res) => {
//     try{
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

router.get('/get/:id', controller.getDocumentById);

// delete data by id
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Model.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })
router.delete('/delete/:id', controller.deleteDocumentById);



//Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })
router.patch('/update/:id', controller.updateDocumentById);


module.exports = router;