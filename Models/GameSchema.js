const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const gameSchema = appSchema({

    id : String,
    player : String,
    date : Date,
    time : Number,
    moves : Number,
    score : Number
})

module.exports = mongoose.model('games',gameSchema);