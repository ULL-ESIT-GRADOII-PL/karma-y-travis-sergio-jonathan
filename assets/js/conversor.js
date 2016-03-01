(function(exports) {
  "use strict";

  function Medida(valor, tipo) {
    var value = valor;
    var type = tipo || "indefinido";

    this.getValue = function() {
      return value;
    };
    this.getType = function() {
      return type;
    }
  }

  function Temperatura(valor, tipo) {
    Medida.call(this, valor, tipo);

    this.toCelsius = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("fahrenheit".match(tipo))
        result = (this.getValue() - 32) * 5 / 9;
      else
        result = this.getValue();
      return result;
    };
    this.toFahrenheit = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("celsius".match(tipo))
        result = (this.getValue() * 9 / 5) + 32;
      else
        result = this.getValue();
      return result;
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
      regexp = XRegExp(
        '(?<numero>     [+-]?[0-9]+         # Entero \n' +
        '(?<decimal>    (\.[0-9])?)         # Decimal \n' +
        '(?<exponente>  (e[+-]?[0-9]+)?)) + # Exponente \n' +
        '(?<tipo>       [a-z]+)             # Tipo', 'xi'),
      valor = XRegExp.exec(valor, regexp);

    if (valor) {
      var numero = valor.numero,
        tipo = valor.tipo.toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo[0]) {
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
