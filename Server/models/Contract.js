const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Contract = new Schema({
    salary: {
        type: String,
        required: true
    },
    employee: 
        { type: mongoose.SchemaTypes.ObjectId, ref: 'User' ,
        required: true,
    }
    

}, { timestamps: true })
Contract.pre(/^find/, function (next) {
    this.populate({
        path: 'employee',
        select: '-password',
    });
    next();
});
module.exports = mongoose.model('Contract', Contract)