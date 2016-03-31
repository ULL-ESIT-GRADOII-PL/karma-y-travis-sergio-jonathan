(function(exports) {
  "use strict;"

  function Distancia(valor, tipo) {
    Medida.call(this, valor, tipo);

    this.toInches = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("metres".match(tipo))
        result = this.getValue() * 39.37;
      else
        result = this.getValue();
      return new Inches(result);
    };
    this.toMetres = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("inches".match(tipo))
        result = this.getValue() / 39.37;
      else
        result = this.getValue();
      return new Metres(result);
    };
  }

  Distancia.prototype = new Medida();
  Distancia.prototype.constructor = Distancia;

  function Metres(valor) {
    Distancia.call(this, valor, "metres");
  }

  Metres.prototype = new Distancia();
  Metres.prototype.constructor = Metres;
  Medida.measures.m = Metres;

  function Inches(valor) {
    Distancia.call(this, valor, "inches");
  }

  Inches.prototype = new Distancia();
  Inches.prototype.constructor = Inches;
  Medida.measures.in = Inches;

  exports.Distancia = Distancia;
  exports.Metres = Metres;
  exports.Inches = Inches;

})(this);
