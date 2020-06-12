const mongoose = require('mongoose');

const sendProductSchema = mongoose.Schema({
    products: {type: Array},
    quantity: {type: Array},
    generalSum: {type: Number},
    registrarId: {type: String},
    userId: {type: String},
    date: {type: String}
});

module.exports = mongoose.model('sendProduct', sendProductSchema);
