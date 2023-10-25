const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.post('/post', userController.createDocument);

router.get('/get', userController.getAllDocuments);

router.get('/get/:id', userController.getDocumentById);

router.delete('/delete/:id', userController.deleteDocumentById);

router.patch('/update/:id', userController.updateDocumentById);

module.exports = router;
