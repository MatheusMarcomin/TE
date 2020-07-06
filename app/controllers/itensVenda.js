module.exports=function(app) {
    var controller = {};
    var itensVenda = app.models.itensVenda;
console.log("carrego")
    controller.insereItensVenda = function(req, res) {
        itensVenda.create(req.body).then(
            function(itensVenda) {
                res.status(201).json(itensVenda);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.listaItensVenda = function(req, res) {
        itensVenda.find().populate('venda').populate('produto').exec().then(
          function(itensVenda) {
              res.status(200).json(itensVenda);
          }, function(erro) {
              console.error(erro);
              res.status(500).json(erro);
            }
        );
    }

    controller.alteraItensVenda = function(req, res) {
        var _id = req.body._id;
        itensVenda.findByIdAndUpdate(_id, req.body).exec().then(
            function(itensVenda) {
                res.status(200).json(itensVenda);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeItensVenda = function(req, res) {
        var _id = req.params.id;
        itensVenda.remove({"_id": _id}).exec().then(
            function(itensVenda) {
                res.status(204).end();
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemItensVenda = function(req, res) {
        var _id = req.params.id;
        itensVenda.findById(_id).populate('venda').populate('produto').exec().then(
            function(itensVenda) {
                if(!itensVenda) {
                    res.status(404).end();
                }
                else {
                    res.status(200).json(itensVenda);
                }
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }
 
    return controller;
}