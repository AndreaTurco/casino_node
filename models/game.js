var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : true
    },
    public_id: {
        type: Number
    },
    thumb_url: {
        type: String,
        trim: true,
        default : ""
    },
    mobile: {
        type: boolean,
        default: false
    },
    fun_mode: {
        type: boolean,
        default : true
    },
    active: {
        type : boolean,
        default : true
    },
    created_tstamp: {
        type: Date,
        default: Date.now()
    }
});

var Game = mongoose.exports = mongoose.model('Game',gameSchema);

module.exports.getGames = function (callback, limit) {
    Provider.find(callback).limit(limit);
};