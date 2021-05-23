const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let reqSchema = new Schema({
    batchcode: {
        type: String
    },
    name: {
        type: String
    },
    LastName: {
        type: String
    },
    UserType: {
        type: String
    },
    UserId: {
        type: String
    },
    Password: {
        type: String
    },
    EmailID: {
        type: String
    },
    Mobile: {
        type: Number
    },
    Gender: {
        type: String
    },
    Hometown: {
        type: String
    },
    State: {
        type: String
    },
    Tenth: {
        type: Number
    },
    XIIth_Diploma_ITI_Aggregate: {
        type: Number
    },
    Degree_Aggregate: {
        type: Number
    },
    Degree: {
        type: String
    },
    Degree_Stream: {
        type: String
    },
    Degree_YOP: {
        type: Number
    },
    College_Name: {
        type: String
    },
    CollegeLocation: {
        type: String
    }
})

module.exports = mongoose.model('upload', reqSchema);