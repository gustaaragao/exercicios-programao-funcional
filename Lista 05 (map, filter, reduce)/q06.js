// Q6. Programa para retornar a diferença entre o quadrado da soma dos 10 primeiros números naturais e a soma dos quadrados dos primeiros 10 números naturais.

const listaNum = [1,2,3,4,5,7,9,10]

const calcularQuadradoSoma = (listaNumeros) => (listaNumeros.reduce(somar = (acc, x) => acc + x,0))**2 // (a + b + c + ...)²
const calcularSomaDosQuadrados = (listaNumeros) => listaNumeros.reduce(somarQuadrados = (acc, x) => acc + (x**2),0) // (a² + b² + c² + ...)

const calcularDiferença = (valor1) => (valor2) => valor1 - valor2

console.log(`Lista de Números: ${listaNum}`)
console.log(`\nQuadrado da Soma: ${calcularQuadradoSoma(listaNum)}`)
console.log(`\nSoma dos Quadrados: ${calcularSomaDosQuadrados(listaNum)}`)

console.log('\nDiferença: ', calcularDiferença(calcularQuadradoSoma(listaNum))(calcularSomaDosQuadrados(listaNum)))
