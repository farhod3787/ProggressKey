const mongoose = require('mongoose');

const wareHouseSchema = mongoose.Schema({
    name: {type: String},
    filialId: {type: String},
    // nameRu: {type: String},
    // nameEn: {type: String},
    products : {type: Array},
    quantity : {type: Array}
});


module.exports = mongoose.model('wareHouse', wareHouseSchema);
