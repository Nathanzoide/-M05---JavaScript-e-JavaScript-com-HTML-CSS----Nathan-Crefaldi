class Forma {
    constructor(cor) {
      this.cor = cor;
    }
  
    desenhar() {
      console.log(`Desenhando uma forma ${this.cor}`);
    }
  }
  class Circulo extends Forma {
    constructor(raio, cor) {
      super(cor);
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }}
  const formaBase = new Forma("azul");
  formaBase.desenhar();
  const circulo = new Circulo(5, "vermelho");
  circulo.desenhar();
  console.log(circulo.calcularArea());
  