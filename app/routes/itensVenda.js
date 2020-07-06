module.exports = function(app) {
    var controller = app.controllers.itensVenda;

    app.post('/itensVendas', controller.insereItensVenda);

    app.get('/itensVendas', controller.listaItensVenda);
    app.get('/itensVendas/:id', controller.obtemItensVenda);

    app.put('/itensVendas',controller.alteraItensVenda);
    
    app.delete('/itensVendas/:id',controller.removeItensVenda);
}