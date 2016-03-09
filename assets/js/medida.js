(function(exports) {
  "use strict";

  function Medida(valor, tipo) {
    var value = valor;
    var type = tipo;
    if (!tipo && valor) {
      var match = valor.match(/[a-z]+$/i);
      type = match[0];
    }

    this.getValue = function() {
      return value;
    };
    this.getType = function() {
      return type;
    };
  }

  exports.Medida = Medida;

})(this);
