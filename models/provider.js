var mongoose = require('mongoose');

var providerSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : true
    },
    public_id: {
        type: Number,
        required : true
    },
    backoffice_url: {
        type: String,
        trim: true,
        default : ""
    },
    games_list: {
        type: Array,
        default: {}
    },
    configuration_api: {
        type: Array,
        required : true
    },
    active: {
        type : String,
        default : '1'
    },
    created_tstamp: {
        type: Date,
        default: Date.now()
    }
});

var Provider = mongoose.exports = mongoose.model('Provider',providerSchema);

module.exports.getProviders = function (callback, limit) {
    Provider.find(callback).limit(limit);
};