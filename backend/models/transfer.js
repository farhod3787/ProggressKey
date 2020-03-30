const mongoose = require('mongoose');

const transferSchema = mongoose.Schema({
    from: {type: String},
    to: {type: String},
    howMuch: {type: Number},
    date : {type: String}
});


module.exports = mongoose.model('transfer', transferSchema);
