//Modelo de um objeto.

//Júlia está criando um código para a empresa de sua mãe e ela precisa cadastrar os funcionários da empresa. Com isso ela criou o seguinte código:

class Funcionario {
    constructor(nome, cpf, salario) {
      this.nome = nome;
      this.cpf = cpf;
      this._salario = salario;
      this._bonificacao;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, cpf) {
      super(nome, cpf, 2400);
      this._bonificacao = 1.2;
    }
  }
  
  class Assistente extends Funcionario {
    constructor(nome, cpf) {
      super(nome, cpf, 1200);
      this._bonificacao = 0.9;
    }
  }

//Com essas classes ela tem uma maneira de saber quem são os funcionários dentro da empresa dos seus pais. Porém existem alguns cargos dentro da empresa que só existe um funcionário preenchendo eles. Por isso Júlia decidiu não criar classes filhas e usar diretamente a classe Funcionário para identificar esses cargos.

//Qual o problema com essa decisão?

//A>
//Ela terá um grande trabalho no futuro quando quiser adicionar uma classe para um tipo de funcionário que atualmente está sendo representado pela classe funcionário.
//Além da quantidade de trabalho ser grande ela corre o risco de esquecer de alterar algum lugar que atualmente usa a representação de funcionário.

//C>
//Um dos problemas é que ela perde a informação de qual tipo de funcionário ela tem. Como ela está usando uma classe mais genérica ao invés de criar classes especificas ela não distingue cada tipo de funcionário.
//Exatamente! Ao desenvolvermos um sistema as classes mais abstratas e genéricas nos ajudam a delimitar os contextos de negócio que estamos trabalhando, mas as classes concretas e especificas nos dão informações mais granulares. Sempre é bom ter a quantidade certa de cada tipo de classe