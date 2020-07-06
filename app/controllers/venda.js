module.exports=function(app) {
    var controller = {};
    var venda = app.models.venda;

    controller.insereVenda = function(req, res) {
        venda.create(req.body).then(
            function(venda) {
                res.status(201).json(venda);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.listaVendas = function(req, res) {
        venda.find().exec().then(
          function(vendas) {
              res.status(200).json(vendas);
          }, function(erro) {
              console.error(erro);
              res.status(500).json(erro);
            }
        );
    }

    controller.alteraVenda = function(req, res) {
        var _id = req.body._id;
        venda.findByIdAndUpdate(_id, req.body).exec().then(
            function(venda) {
                res.status(200).json(venda);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeVenda = function(req, res) {
        var _id = req.params.id;
        venda.remove({"_id": _id}).exec().then(
            function(venda) {
                res.status(204).end();
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }
 
    return controller;
}