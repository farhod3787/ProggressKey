const mongoose = require('mongoose');

const reqProductSchema = mongoose.Schema({
    products: {type: Array},
    quantity: {type: Array},
    registrarId: {type: String},
    status: {type: Boolean},
    date: {type: String}
});

module.exports = mongoose.model('reqProduct', reqProductSchema);
