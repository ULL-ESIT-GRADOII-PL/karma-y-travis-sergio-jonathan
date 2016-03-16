var expect = chai.expect;

describe("Temperatura", function() {

  describe("Constructor", function() {
    it("Debería aceptar un valor y un tipo", function() {
      var temperatura = new Temperatura(23, 'f');
      expect(temperatura.getValue()).to.equal(23);
      expect(temperatura.getType()).to.equal('f');
    });

    it("Debería aceptar un valor y un tipo en un mismo parámetro", function() {
      var temperatura = new Medida("32c");
      expect(temperatura.getValue()).to.equal(32);
      expect(temperatura.getType()).to.equal('c');
    });
  });

  describe("Herencia", function() {
    it("Temperatura debería ser hija de la clase Medida", function() {
      var temperatura = new Temperatura("32c");
      expect(temperatura).to.be.instanceof(Medida);
    });
  });

  describe("#toCelsius()", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {
      var temperaturaF = new Temperatura("32F");
      var temperaturaK = new Temperatura("32K");
      var temperaturaC = new Temperatura("32C");
      expect(temperaturaF.toCelsius()).to.be.instanceof(Celsius);
      expect(temperaturaK.toCelsius()).to.be.instanceof(Celsius);
      expect(temperaturaC.toCelsius()).to.be.instanceof(Celsius);
    });
  });

  describe("#toFahrenheit()", function() {
    it("Debería convertir de una temperatura cualquiera a Fahrenheit", function() {
      var temperaturaF = new Temperatura("32F");
      var temperaturaK = new Temperatura("32K");
      var temperaturaC = new Temperatura("32C");
      expect(temperaturaF.toFahrenheit()).to.be.instanceof(Fahrenheit);
      expect(temperaturaK.toFahrenheit()).to.be.instanceof(Fahrenheit);
      expect(temperaturaC.toFahrenheit()).to.be.instanceof(Fahrenheit);
    });
  });

  describe("#toKelvin()", function() {
    it("Debería convertir de una temperatura cualquiera a Kelvin", function() {
      var temperaturaF = new Temperatura("32F");
      var temperaturaK = new Temperatura("32K");
      var temperaturaC = new Temperatura("32C");
      expect(temperaturaF.toKelvin()).to.be.instanceof(Kelvin);
      expect(temperaturaK.toKelvin()).to.be.instanceof(Kelvin);
      expect(temperaturaC.toKelvin()).to.be.instanceof(Kelvin);
    });
  });
});

describe("Celsius", function() {
  describe("Constructor", function() {
    it("Debería aceptar un valor numérico", function() {
      var celsius = new Celsius(23);
      expect(celsius.getValue()).to.equal(23);
      expect(celsius.getType()).to.equal('Celsius');
    });
  });

  describe("Herencia", function() {
    it("Celsius debería ser hija de la clase Temperatura", function() {
      var celsius = new Celsius(32);
      expect(celsius).to.be.instanceof(Temperatura);
    });
  });
});

describe("Fahrenheit", function() {
  describe("Constructor", function() {
    it("Debería aceptar un valor numérico", function() {
      var fahrenheit = new Fahrenheit(100);
      expect(fahrenheit.getValue()).to.equal(100);
      expect(fahrenheit.getType()).to.equal('Fahrenheit');
    });
  });

  describe("Herencia", function() {
    it("Fahrenheit debería ser hija de la clase Temperatura", function() {
      var fahrenheit = new Fahrenheit(100);
      expect(fahrenheit).to.be.instanceof(Temperatura);
    });
  });
});

describe("Kelvin", function() {
  describe("Constructor", function() {
    it("Debería aceptar un valor numérico", function() {
      var kelvin = new Kelvin(280);
      expect(kelvin.getValue()).to.equal(280);
      expect(kelvin.getType()).to.equal('Kelvin');
    });
  });

  describe("Herencia", function() {
    it("Kelvin debería ser hija de la clase Temperatura", function() {
      var kelvin = new Kelvin(280);
      expect(kelvin).to.be.instanceof(Temperatura);
    });
  });
});
