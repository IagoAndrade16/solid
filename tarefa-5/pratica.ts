
interface Batedor {
  bater(): void;
}

class BatedorGlobo implements Batedor {
  bater() {
    console.log("Com esse batedor eu posso fazer sorvete!");
  }
}

class BatedorLeque implements Batedor {
  bater() {
    console.log("Com esse batedor eu posso fazer biscoito!");
  }
}

class BatedorGancho implements Batedor {
  bater() {
    console.log("Com esse batedor eu posso fazer pão!");
  }
}

class Maquina {

  constructor(private batedor: Batedor) {}

  bater(): void {
    this.batedor.bater();
  }
}

const maquina = new Maquina(new BatedorLeque());
maquina.bater();
