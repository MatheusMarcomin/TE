var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        descricao: {
            type: String,
            required: true
        },
        valor: {
            type: Number,
            required: true,
            min: [this.valor >= 0]
        }, created: {
            type: Date,
            default: Date.now
        }, categoria: {
            type: String,
            required: true
        }, ativo: {
            type: Boolean,
            required: false,
            default: function(v) {
                return this.ativo = true
            }
        }
    });
    
    return mongoose.model('Produto', schema);
}