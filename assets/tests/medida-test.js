var expect = chai.expect;

describe("Medida", function() {

  describe("constructor", function() {
    it("debería aceptar un valor y un tipo", function() {
      var medida = new Medida(23, 'f');
      expect(medida.getValue()).to.equal(23);
      expect(medida.getType()).to.equal('f');
    });

    it("debería aceptar un valor y un tipo en un mismo parámetro", function() {
      var medida = new Medida("32c");
      expect(medida.getValue()).to.equal(32);
      expect(medida.getType()).to.equal('c');
    });
  });

  describe("#toString()", function() {
    it("debería devolver una cadena literal que represente al objeto", function() {
      var string = (new Medida("33k")).toString();
      expect(string).to.equal("33.00 k");
    });
  });

  describe("Medida#match()", function() {
    it("debería casar la cadena con la expresión regular REGEXP de la clase Medida", function() {
      var match = Medida.match("32.5e10 K to C");
      expect(match.numero).to.equal("32.5e10");
      expect(match.tipo).to.equal("K");
      expect(match.nuevo_tipo).to.equal("C");
    });
  });

  describe("Medida#measures()", function() {
    it("debería devolver una tabla hash con los valores reconocidos por el conversor", function() {
      var measures = Medida.measures();
      expect(measures['f']).to.equal(Fahrenheit);
      expect(measures['c']).to.equal(Celsius);
      expect(measures['k']).to.equal(Kelvin);
    });
  });

  describe("Medida#convertir()", function() {
    it("debería devolver la conversión especificada", function() {
      var valor = "32.5e10 C to K",
        elemento = document.createElement("DIV"),
        convertir = Medida.convertir(valor, elemento);
      expect(convertir.toString()).to.equal("325000000273.15 Kelvin");
    });
    it("debería devolver un error por desconocer como convertir de Celsius a Metros", function() {
      var valor = "32.5e10 C to m",
        elemento = document.createElement("DIV"),
        convertir = Medida.convertir(valor, elemento);
      expect(convertir.toString()).to.equal('ERROR. Introduzca una medida y conversión válida. Desconozco como convertir desde "c" hasta "m"');
    });
    it("debería devolver un error por introducir una conversión no válida", function() {
      var valor = "32.5e10 C a K",
        elemento = document.createElement("DIV"),
        convertir = Medida.convertir(valor, elemento);
      expect(convertir.toString()).to.equal("ERROR. Introduzca una conversión válida, por ejemplo: 32.5e10 F to K");
    });
  });
});
