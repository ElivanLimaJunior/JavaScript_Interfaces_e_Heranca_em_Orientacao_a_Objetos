import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,cliente, 100)
    }

   sacar(valor){
       const taxa= 1.01;
       return this._sacar(valor, taxa);
   }
}



// Para que serve o SUPER()?

// Ele não é um operador, é uma forma de chamar um construtor de forma específica, então é uma construção da linguagem através de uma palavra chave. Ele serve justamente para chamar o construtor da classe herdada ali.
//Conhece o this, certo? Que é o que usa para acessar o objeto atual. Ele é o this do objeto base e não o atual.