var mongoose = require('mongoose');

var betSchema = mongoose.Schema({
    ref_provider: {
        type: Number
    },
    id_provider: {
        type: Number
    },
    game_ref: {
        type: Number
    },
    game_table: {
        type: String
    },
    game_description: {
        type: String
    },
    session_id: {
        type: String
    },
    stake: {
        type: Number
    },
    win: {
        type: Number
    },
    status: {
        type: Number,
        min: 0,
        max: 3 //0- place, 1 - settled, 2 - canceled
    },
    description: {
        type: String,
        trim: true,
        default: ""
    },
    settled_tstamp: {
        type: Date,
        default: Date.now()
    },
    created_tstamp: {
        type: Date,
        default: Date.now()
    }
});

var Bet = mongoose.exports = mongoose.model('Bet', betSchema);

module.exports.getBets = function (callback, limit) {
    Bet.find(callback).limit(limit);
};