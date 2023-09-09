// Q8. Programa para retornar os n primeiros algarismos de um número inteiro qualquer

const algarismosNumero = (numero) => numero.toString().split('')//.reverse() 
// O módulo .toString() transforma um número em uma string
// O módulo .split() divide uma String em uma lista ordenada de substrings. A divisão é feita procurando um padrão, onde o padrão é fornecido como parâmetro.
// O módulo .reverse() inverte os valores de uma array

console.log(algarismosNumero(20))

// Vamos aplicar essa função algarismosNumero a uma lista de números inteiros
const listaNumeros = [102, 27, 42, 7, 1999]

const algarismosNumeroLista = (listaNumeros) => listaNumeros.map((numero) => algarismosNumero(numero))

console.log("\nLista de números: ", listaNumeros)
console.log('\nPrimeiros Algarismos dos números da Lista: ')
console.log(algarismosNumeroLista(listaNumeros))
