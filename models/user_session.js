var mongoose = require('mongoose');

var sessionSchema = mongoose.Schema({
    ref_provider: {
        type: Number
    },
    id_provider: {
        type: Number
    },
    user_id: {
        type: Number
    },
    user_session_id: {
        type: Number
    },
    session_id: {
        type: String
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

var Session = mongoose.exports = mongoose.model('Session', sessionSchema);

module.exports.getSessions = function (callback, limit) {
    Session.find(callback).limit(limit);
};