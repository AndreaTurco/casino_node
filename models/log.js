var mongoose = require('mongoose');

var logSchema = mongoose.Schema({
    description: {
        type: String,
        required : true
    },
    code : {
        type: Number,
        required : true
    },
    user_id : {
        type: Number,
        default : ""
    },
    created_tstamp: {
        type: Date,
        default: Date.now()
    }
});

var Log = mongoose.exports = mongoose.model('Log',logSchema);

module.exports.getLogs = function (callback, limit) {
    Log.find(callback).limit(limit);
};