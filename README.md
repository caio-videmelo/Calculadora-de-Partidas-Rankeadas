# Performance Level Calculator

Este repositório contém um simples script em JavaScript que calcula o desempenho de um personagem com base em suas vitórias e derrotas, e determina o nível do personagem com base nesse desempenho.

## Como funciona

O script define duas funções principais:

1. **calculatePerformance(wins, defeats)**: Esta função calcula o desempenho subtraindo o número de derrotas do número de vitórias.
2. **determineLevel(performance)**: Esta função determina o nível do personagem com base no desempenho calculado.

### Estrutura do Código

```javascript
// Função para calcular o desempenho
function calculatePerformance(wins, defeats) {
    return wins - defeats;
}

// Função para determinar o nível com base no desempenho
function determineLevel(performance) {
    if (performance < 10) {
        return "Ferro";
    } else if (performance >= 10 && performance < 20) {
        return "Bronze";
    } else if (performance >= 20 && performance < 50) {
        return "Prata";
    } else if (performance >= 50 && performance < 80) {
        return "Ouro";
    } else if (performance >= 80 && performance < 90) {
        return "Diamante";
    } else if (performance >= 90 && performance < 100) {
        return "Lendário";
    } else {
        return "Nível desconhecido";
    }
}

// Definindo variáveis
let nameCharacter = "Caio_93";
let wins = 100;
let defeats = 20;

// Calculando o desempenho e determinando o nível
let performance = calculatePerformance(wins, defeats);
let level = determineLevel(performance);

// Exibindo a mensagem de saída no console
console.log("O Heroi", nameCharacter, "tem saldo de", performance, "e está no nível de", level);

### Executando o Código
Para executar o código, siga os passos abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.
Clone este repositório.
Navegue até o diretório do projeto.
Execute o seguinte comando no terminal:

node seu_arquivo.js

Substitua seu_arquivo.js pelo nome do arquivo que contém o script JavaScript.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Este `README.md` fornece uma visão geral do funcionamento do script, como executá-lo e informações adicionais sobre contribuições e licença. Ajuste conforme necessário para se adequar melhor ao seu projeto específico.
