module.exports = function(app) {
    var controller = app.controllers.venda;

    app.post('/vendas', controller.insereVenda);

    app.get('/vendas', controller.listaVendas);

    app.put('/vendas',controller.alteraVenda);
    
    app.delete('/vendas/:id',controller.removeVenda);
}