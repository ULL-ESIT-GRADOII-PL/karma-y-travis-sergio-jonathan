(function(exports) {
  "use strict";

  function Medida(valor, tipo) {
    var value = valor;
    var type = tipo || "indefinido";

    this.getValue = function() {
      return value;
    };
  }

  function Temperatura(valor, tipo) {
    Medida.call(this, valor, tipo);

    this.toCelsius = function() {
      return this.getValue();
    }
    this.toFahrenheit = function() {
      return this.getValue();
    }
  }

  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

  function Celsius(valor) {
    Temperatura.call(this, valor, "Celsius");
  }

  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  function Fahrenheit(valor) {
    Temperatura.call(this, valor, "Fahrenheit");
  }

  Fahrenheit.prototype = new Temperatura();
  Fahrenheit.prototype.constructor = Fahrenheit;

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Fahrenheit = Fahrenheit;

  exports.convertir = function() {
    var valor = document.getElementById('convert').value,
      elemento = document.getElementById('converted'),
      /* Extienda la RegeExp a la especificación. use una XRegExp */
      regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i,
      valor = valor.match(regexp);

    if (valor) {
      var numero = valor[1],
        tipo = valor[2].toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          elemento.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          break;

        default:
          /* rellene este código */
      }
    } else
      elemento.innerHTML = "";
  }

})(this);
