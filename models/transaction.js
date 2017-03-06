var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    performed_by : {
        type: Number
    },
    received_by : {
        type: Number
    },
    type : {
        type: Number
    },
    new_balance : {
        type: Number
    },
    ref_provider: {
        type: Number
    },
    id_provider: {
        type: Number
    },
    game_ref : {
        type: Number
    },
    credit: {
        type: Number
    },
    debit: {
        type : Number
    },
    credit_id: {
        type: Number
    },
    debit_id: {
        type : Number
    },
    xrate: {
        type : Number,
        default : '1'
    },
    comment: {
        type : String,
        default : ''
    },
    created_tstamp: {
        type: Date,
        default: Date.now()
    }
});

var Transaction = mongoose.exports = mongoose.model('Transaction',transactionSchema);

module.exports.getTransactions = function (callback, limit) {
    Transaction.find(callback).limit(limit);
};