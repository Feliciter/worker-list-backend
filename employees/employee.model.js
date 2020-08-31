const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    id: {type: String},
    gender: {type: String},
   
    firstName: {type: String},
    middleName: {type: String},
    lastName: {type: String},
    phone: {type: Number},
    position: {type: String},
    dob: {type: Date},
    salary: {type: Number},
    addinfo: {type: String},
    createdDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Employee', schema);
