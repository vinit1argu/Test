const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    date:{
        type: String
    },
    gender:{
        type: String
    },
    role:{
        type: String
    }

})

module.exports = mongoose.model('Data', userSchema)