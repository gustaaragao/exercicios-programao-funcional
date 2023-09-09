// Q5. Programa para somar todos os múltiplos de 3 e os múltiplos de 5, que são menores que 1000

// São os númneros que são múltiplos de 3 e 5 ao mesmo tempo?
const somar = (valor1, valor2) => valor1 + valor2 // Soma dois valores

const somarLista = (lista) => lista.reduce(somar,0)

const criarListaNumeros = (limite) => [...Array(limite).keys()].map((x) => x+1)

const multiplosTres = (listaNumeros) => listaNumeros.filter((numero) => (numero % 3) == 0)
const multiplosCinco = (listaNumeros) => listaNumeros.filter((numero) => (numero % 5) == 0)

const listaNum = criarListaNumeros(999) // Lista com valores menores que 1000
const listaNumFiltradaTres = multiplosTres(listaNum) // Lista com valores menor que 1000 múltiplos de 3
const listaNumFiltradaCinco = multiplosCinco(listaNum) // Lista com valores menor que 1000 múltiplos de 5

const somaTres = somarLista(listaNumFiltradaTres)
const somaCinco = somarLista(listaNumFiltradaCinco)

console.log(`Soma = ${somar(somaTres,somaCinco)}.`)
