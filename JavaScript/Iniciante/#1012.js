// Área

// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

// Entrada

// O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// Saída

// O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

let lines = ["3.0 4.0 5.2"]

let dados = lines.shift().split(' ')

let A = parseFloat(dados.shift())
let B = parseFloat(dados.shift())
let C = parseFloat(dados.shift())

let pi = 3.14159

let trianguloRetangulo = ((A * C) / 2)
let circulo = (pi * Math.pow(C, 2))
let trapezio = (((A + B) * C) / 2)
let quadrado = Math.pow(B, 2)
let retangulo = (A * B)

console.log(`TRIANGULO: ${trianguloRetangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)