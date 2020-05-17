const mongoose = require('mongoose');

const reqProductSchema = mongoose.Schema({
    products: {type: Array},
    quantity: {type: Array},
    adminId: {type: String},
    registerId: {type: String},
    date: {type: String}
});

module.exports = mongoose.model('reqProduct', reqProductSchema);
