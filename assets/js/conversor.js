(function(exports) {
  "use strict";

  exports.convertir = function() {
    var valor = document.getElementById('convert').value,
      elemento = document.getElementById('converted'),
      tipos_aceptados = ["c", "f", "k", "m", "in"],
      regexp = XRegExp(
        '(?<numero>    ^[ ]*[+-]?[0-9]+[ ]*        # Entero \n\
         (?<decimal>    (.[0-9]+)?)[ ]*            # Decimal \n\
         (?<exponente>  (e[+-]?[ ]*[0-9]+)?)[ ]*)  # Exponente \n\
         (?<tipo>       [a-z]+)[ ]+(?:to[ ]+)?     # Tipo \n\
         (?<nuevo_tipo> [a-z]+)[ ]*$               # Nuevo tipo', 'xi');
    valor = XRegExp.exec(valor, regexp);

    if (valor) {
      var numero = valor.numero.replace(/\s+/g, ''),
        tipo = valor.tipo.toLowerCase(),
        nuevo_tipo = valor.nuevo_tipo.toLowerCase();

      if (tipos_aceptados.indexOf(tipo) > -1 && tipos_aceptados.indexOf(nuevo_tipo) > -1) {
        elemento.style.color = "rgb(115, 231, 179)";
        console.log("Valor: " + numero + ", Tipo: " + tipo + ", Nuevo: " + nuevo_tipo);
        numero = parseFloat(numero);
        var inicial;
        switch (tipo) {
          case 'c':
            inicial = new Celsius(numero);
            break;
          case 'f':
            inicial = new Fahrenheit(numero);
            break;
          case 'k':
            inicial = new Kelvin(numero);
            break;
          case 'm':
            inicial = new Metres(numero);
            break;
          case 'in':
            inicial = new Inches(numero);
            break;
          default:
            console.log("No hay asignado un case para este valor");
            break;
        }

        switch (nuevo_tipo) {
          case 'c':
            elemento.innerHTML = inicial.toCelsius().toFixed(2) + " Celsius";
            break;
          case 'f':
            elemento.innerHTML = inicial.toFahrenheit().toFixed(2) + " Fahrenheit";
            break;
          case 'k':
            elemento.innerHTML = inicial.toKelvin().toFixed(2) + " Kelvin";
            break;
          case 'm':
            elemento.innerHTML = inicial.toMetres().toFixed(2) + " metres";
            break;
          case 'in':
            elemento.innerHTML = inicial.toInches().toFixed(2) + " inches";
            break;
          default:
            console.log("No hay asignado un case para este valor");
            break;
        }
      } else {
        elemento.style.color = "rgb(242, 92, 39)";
        elemento.innerHTML = "ERROR. Introduzca una medida y conversión válida: <br>&emsp;Temperatura: K, F o C <br>&emsp;Distancia: m o in";
      }
    } else {
      elemento.style.color = "rgb(242, 92, 39)";
      elemento.innerHTML = "ERROR. Introduzca una conversión válida, por ejemplo: 32.5e10 F to K";
    }
  };

})(this);
