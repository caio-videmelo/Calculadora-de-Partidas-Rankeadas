
// declarando uma constante com o nome do herói
const nome="doragon"
//declarando uma variável global com "var"
var vitorias= 78
var derrota= 50

// Função para calcular a diferença entre vitórias e derrotas
function vitoriasEDERROTA(vitorias,derrota){
    
return vitorias-derrota
}

// Calculando o resultado
let resultado= vitoriasEDERROTA(vitorias, derrota)
//console.log(`${resultado}`)//para no terminal não sair amarelo

// Função para categorizar o resultado
function calculo(resultado){
  //quando for usa a estrurar de decisão dentro de uma função
  //use dessa forma para da certo.
    if (resultado < 10) {
        return "Ferro";
      } else if (resultado >= 11 && resultado <= 20) {
        return "Bronze";
      } else if (resultado >= 21 && resultado <= 50) {
        return "Prata";
      } else if (resultado >= 51 && resultado <= 80) {
        return "Ouro";
      } else if (resultado >= 81 && resultado <= 90) {
        return "Diamante";
      } else if (resultado >= 91 && resultado <= 100) {
        return "Lendário";
      } else if (resultado >= 101) {
        return "Imortal";
      }
     
}

// Chamando a função calculo com o resultado
let categoria = calculo(resultado)
console.log(`O herói tem de saldo :${resultado} vitórias e está no nivel :${categoria}`)