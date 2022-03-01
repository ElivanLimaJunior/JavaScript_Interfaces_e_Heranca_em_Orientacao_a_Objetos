import {Cliente} from "./Conta/Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456") //Cadastrar Senha

const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(diretor, "123456"); //Confirmar Senha
const estaLogadogerente = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogado);
console.log(estaLogadogerente);