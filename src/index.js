import { Personagem } from "./modules/personagem.js";

// const personagemPedrinho = {
//   nome: "Pedrinho",
//   vida: 7,
//   mana: 12,
//   level: 5,
//   tipo: "Mago",
// };

// const personagemJose = {
//   nome: "Jose",
//   vida: 7,
//   mana: 6,
//   level: 3,
//   tipo: "Arqueiro",
// };

const personagemPedrinho = new Personagem();
personagemPedrinho.nome = "Pedrinho";
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.tipo = "Mago";
personagemPedrinho.level = 5;

const personagemJose = new Personagem();
personagemJose.nome = "José";
personagemJose.vida = 7;
personagemJose.mana = 6;
personagemJose.tipo = "Arqueiro";
personagemJose.level = 3;

console.log(
  "Insignia de " +
    personagemPedrinho.nome +
    ": " +
    personagemPedrinho.obterInsignia()
);

console.log(
  "Insignia de " + personagemJose.nome + ": " + personagemJose.obterInsignia()
);