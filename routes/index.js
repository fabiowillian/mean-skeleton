var express = require('express');
var nodemailer = require('nodemailer');

var MensagemModel = require('./../models/mensagens');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fabio Willian' });
});

router.post('/sendMessage', function(req, res, next) {
    var mensagem = new MensagemModel({
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      empresa: req.body.empresa,
      mensagem: req.body.mensagem
    });

    mensagem.save(function(err) {
      if (err) throw err;

      res.statusCode = 200;
      res.end();
    });
});

module.exports = router;
