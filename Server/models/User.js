const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true,
        default: '',
    },
    role:{
        type: String,
        enum: ['FULLTIME','PARTTIME','ADMIN'],
        default: 'PARTTIME'
    },
    address:{
        type: String,
        required: true
    },
    IDcard:{
        type: Number,
        required: true,
        unique: true
    },
    telephone:{
        type: Number,
        required: true
    },
    birthday:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['WORKING','RESTED'],
        default: 'WORKING'
    },
},

{
    timestamps: true
})

// User.pre(/^find/, function (next) {
//     this.populate({
//         path: 'schedule'
//     });
//     next();
// });
module.exports =mongoose.model('User', User)