# Performance Level Calculator

Este repositório contém um simples script em JavaScript que calcula o desempenho de um personagem com base em suas vitórias e derrotas, e determina o nível do personagem com base nesse desempenho.

## Como funciona

O script define duas funções principais:

1. **calculatePerformance(wins, defeats)**: Esta função calcula o desempenho subtraindo o número de derrotas do número de vitórias.
2. **determineLevel(performance)**: Esta função determina o nível do personagem com base no desempenho calculado.

### Explicando o Código

Linha 1: Definimos uma função chamada calculatePerformance que recebe dois parâmetros: wins (vitórias) e defeats (derrotas).
Linha 2: A função retorna o resultado da subtração de defeats de wins, calculando assim o desempenho do personagem.
Linha 5: Definimos uma função chamada determineLevel que recebe um parâmetro performance.
Linhas 6-8: Se o performance for menor que 10, a função retorna o nível "Ferro".
Linhas 9-11: Se o performance for entre 10 (inclusive) e 20 (exclusivo), a função retorna o nível "Bronze".
Linhas 12-14: Se o performance for entre 20 (inclusive) e 50 (exclusivo), a função retorna o nível "Prata".
Linhas 15-17: Se o performance for entre 50 (inclusive) e 80 (exclusivo), a função retorna o nível "Ouro".
Linhas 18-20: Se o performance for entre 80 (inclusive) e 90 (exclusivo), a função retorna o nível "Diamante".
Linhas 21-23: Se o performance for entre 90 (inclusive) e 100 (exclusivo), a função retorna o nível "Lendário".
Linhas 24-26: Se o performance não se enquadrar em nenhum dos intervalos acima, a função retorna "Nível desconhecido".
Linha 28: Declaramos uma variável nameCharacter e atribuímos a ela o valor "Caio_93".
Linha 29: Declaramos uma variável wins e atribuímos a ela o valor 100, representando o número de vitórias.
Linha 30: Declaramos uma variável defeats e atribuímos a ela o valor 20, representando o número de derrotas.
Linha 32: Calculamos o performance chamando a função calculatePerformance com os argumentos wins e defeats. O resultado é atribuído à variável performance.
Linha 33: Determinamos o level chamando a função determineLevel com o argumento performance. O resultado é atribuído à variável level.
Linha 35: Usamos console.log para exibir uma mensagem no console. A mensagem inclui o nome do personagem, o saldo de vitórias e derrotas (performance), e o nível determinado com base no desempenho.

#### Executando o Código
Para executar o código, siga os passos abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.
Clone este repositório.
Navegue até o diretório do projeto.
Execute o seguinte comando no terminal:

node seu_arquivo.js

Substitua seu_arquivo.js pelo nome do arquivo que contém o script JavaScript.

##### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

###### Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Este `README.md` fornece uma visão geral do funcionamento do script, como executá-lo e informações adicionais sobre contribuições e licença. Ajuste conforme necessário para se adequar melhor ao seu projeto específico.
