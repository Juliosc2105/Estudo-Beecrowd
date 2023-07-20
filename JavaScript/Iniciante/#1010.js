// Cálculo Simples

// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// Entrada

// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// Saída

// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

let lines = ["12 1 5.30", "16 2 5.10"]

let dados1 = lines.shift().split(' ')
let dados2 = lines.shift().split(' ')

let codigo1 = parseInt(dados1.shift())
let quantidade1 = parseInt(dados1.shift())
let valorUnitario1 = parseFloat(dados1.shift())

let codigo2 = parseInt(dados2.shift())
let quantidade2 = parseInt(dados2.shift())
let valorUnitario2 = parseFloat(dados2.shift())

let valorPagar = ((quantidade1 * valorUnitario1) + (quantidade2 * valorUnitario2))

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`)