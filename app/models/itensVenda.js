var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        venda: {
            type: mongoose.Schema.ObjectId,
            ref: 'Venda',
            required: true
        },
        produto: {
            type: mongoose.Schema.ObjectId,
            ref: 'Produto',
            required: true
        }, quantidade: {
            type: Number,
            required: true,
            min: [this.quantidade >= 1]
        }, valorUnitario: {
            type: Number,
            required: true,
            min: [this.valorUnitario >= 0]
        }, subTotal: {
            type: Number,
            required: false,
            default: function(v) {
                return (this.valorUnitario*this.quantidade);
            }
        }
    });
    
    return mongoose.model('itensVenda', schema);
}