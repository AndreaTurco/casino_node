var mongoose = require('mongoose');

var providerSchema = mongoose.schema({
    name: {
        type: String,
        required : true
    },
    public_id: {
        type: int,
        required : true
    },
    backoffice_url: {
        type: String,
        default : ""
    },
    games_list: {
        default: {}
    },
    configuration_api: {
        type: [],
        required : true
    },
    active: {
        default: true
    },
    created_tstamp: {
        type: Date,
        default: Date.now()
    }
});

var Provider = mongoose.exports = mongoose.modal('Provider',providerSchema);

module.exports.getProviders = function (callback, limit) {
    Provider.find(callback).limit(limit);
};