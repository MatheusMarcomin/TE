module.exports=function(app) {
    var controller = {};
    var produto = app.models.produto;

    controller.insereProduto = function(req, res) {
        produto.create(req.body).then(
            function(produto) {
                res.status(201).json(produto);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.listaProdutos = function(req, res) {
        produto.find().exec().then(
          function(produtos) {
              res.status(200).json(produtos);
          }, function(erro) {
              console.error(erro);
              res.status(500).json(erro);
            }
        );
    }

    controller.alteraProduto = function(req, res) {
        var _id = req.body._id;
        produto.findByIdAndUpdate(_id, req.body).exec().then(
            function(produto) {
                res.status(200).json(produto);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeProduto = function(req, res) {
        var _id = req.params.id;
        produto.remove({"_id": _id}).exec().then(
            function(produto) {
                res.status(204).end();
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}