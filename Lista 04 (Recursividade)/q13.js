// Q13. Criar uma função que calcula a soma dos quadrados diferentes até um número n. Nome deve ser somaQuadrados.

const somaQuadrados = (n) => {
    if (n==0) return 0
    else return n**2 + somaQuadrados(n-1)
}

console.log(somaQuadrados(0))
console.log(somaQuadrados(1))
console.log(somaQuadrados(4))
console.log(0**2 + 1**2 + 2**2 + 3**2 + 4**2)  