(function(exports) {
  "use strict";

  exports.convertir = function() {
    var valor = document.getElementById('convert').value,
      elemento = document.getElementById('converted'),
      tipos_aceptados = ["c", "f", "k"],
      regexp = XRegExp(
        '(?<numero>    ^[ ]*[+-]?[0-9]+[ ]*        # Entero \n\
         (?<decimal>    (.[0-9])?)[ ]*             # Decimal \n\
         (?<exponente>  (e[+-]?[ ]*[0-9]+)?)[ ]*)  # Exponente \n\
         (?<tipo>       [a-z]+[ ]*$)               # Tipo', 'xi'),
      valor = XRegExp.exec(valor, regexp);

    if (valor) {
      var numero = valor.numero.replace(/\s+/g, ''),
        tipo = valor.tipo.toLowerCase();


      if (tipos_aceptados.indexOf(tipo) > -1) {
        console.log("Valor: " + numero + ", Tipo: " + tipo);
        numero = parseFloat(numero);
        switch (tipo) {
          case 'c':
            var celsius = new Celsius(numero);
            elemento.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
            break;
          case 'f':
            var fahrenheit = new Fahrenheit(numero);
            elemento.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
            break;
          case 'k':
            var kelvin = new Kelvin(numero);
            elemento.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
            break;
          default:
            console.log("No hay asignado un case para este valor");
        }
      } else {
        elemento.style.color = "darkred";
        elemento.innerHTML = "ERROR. Introduzca un tipo valido, por ejemplo: F o C";
      }
    } else {
      elemento.style.color = "darkred";
      elemento.innerHTML = "ERROR. Introduzca una temperatura valida, por ejemplo: 32.5e10 F";
    }
  }

})(this);
