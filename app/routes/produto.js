module.exports = function(app) {
    var controller = app.controllers.produto;

    app.post('/produtos', controller.insereProduto);

    app.get('/produtos', controller.listaProdutos);

    app.put('/produtos',controller.alteraProduto);
    
    app.delete('/produtos/:id',controller.removeProduto);
}