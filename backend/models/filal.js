const mongoose = require('mongoose');

const filialSchema = mongoose.Schema({
    province: {type: String},
    region: {type: String},
    name: {type: String}
});

module.exports = mongoose.model('filial', filialSchema);
