const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Work = new Schema({
    employee: 
        { type: mongoose.SchemaTypes.ObjectId, ref: 'User' ,
        required: true,
    },
    shift:[{ type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Schedule' ,
        required: true}],
    week:{
        type: Number,
        required:true
    }
},{ timestamps: true })
Work.pre(/^find/, function (next) {
    this.populate({
        path: 'shift'
    });
    this.populate({
        path: 'employee',
        select: '-password', 
    })
    next();
});
// Work.pre(/^find/, function (next) {
//     this.populate({
//         path: 'employee',
//         select: '-password',
//     });
//     next();
// });
module.exports = mongoose.model('Work', Work)