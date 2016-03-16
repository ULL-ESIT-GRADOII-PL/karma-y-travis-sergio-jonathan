var expect = chai.expect;

describe("Distancia", function() {

  describe("Constructor", function() {
    it("Debería aceptar un valor y un tipo", function() {
      var distancia = new Distancia(45, 'm');
      expect(distancia.getValue()).to.equal(45);
      expect(distancia.getType()).to.equal('m');
    });

    it("Debería aceptar un valor y un tipo en un mismo parámetro", function() {
      var distancia = new Distancia("45in");
      expect(distancia.getValue()).to.equal(45);
      expect(distancia.getType()).to.equal('in');
    });
  });

  describe("Herencia", function() {
    it("Distancia debería ser hija de la clase Medida", function() {
      var distancia = new Distancia("54m");
      expect(distancia).to.be.instanceof(Medida);
    });
  });

  describe("#toMetres()", function() {
    it("Debería convertir de una Distancia cualquiera a Metros", function() {
      var distanciaIN = new Distancia("54in");
      var distanciaM = new Distancia("54m");
      expect(distanciaIN.toMetres()).to.be.instanceof(Metres);
      expect(distanciaM.toMetres()).to.be.instanceof(Metres);
    });
  });

  describe("#toInches()", function() {
    it("Debería convertir de una Distancia cualquiera a Inches", function() {
      var distanciaIN = new Distancia("54in");
      var distanciaM = new Distancia("54m");
      expect(distanciaIN.toInches()).to.be.instanceof(Inches);
      expect(distanciaM.toInches()).to.be.instanceof(Inches);
    });
  });
});

describe("Metres", function() {
  describe("Constructor", function() {
    it("Debería aceptar un valor numérico", function() {
      var metres = new Metres(45);
      expect(metres.getValue()).to.equal(45);
      expect(metres.getType()).to.equal('metres');
    });
  });

  describe("Herencia", function() {
    it("Metres debería ser hija de la clase Distancia", function() {
      var metres = new Metres(54);
      expect(metres).to.be.instanceof(Distancia);
    });
  });
});

describe("Inches", function() {
  describe("Constructor", function() {
    it("Debería aceptar un valor numérico", function() {
      var inches = new Inches(101);
      expect(inches.getValue()).to.equal(101);
      expect(inches.getType()).to.equal('inches');
    });
  });

  describe("Herencia", function() {
    it("Inches debería ser hija de la clase Distancia", function() {
      var inches = new Inches(101);
      expect(inches).to.be.instanceof(Distancia);
    });
  });
});
