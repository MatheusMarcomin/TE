var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        valorTotal: {
            type: Number,
            required: true,
            min: [this.valorTotal >= 0]
        },
        valorPago: {
            type: Number,
            required: true,
            min: [this.valorPago >= 0]
        }, created: {
            type: Date,
            default: Date.now
        }
    });
    
    return mongoose.model('Venda', schema);
}