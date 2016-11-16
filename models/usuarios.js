var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  dataCadastro: { type: Date, default: Date.now },
});

var Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
