const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const dogSchema = appSchema({

    id : String,
    breed : String,
    img : Buffer,
})

module.exports = mongoose.model('dogs',dogSchema);