// Q15. Um vendedor tem uma série de cidades para visitar. Deve-se calcular o número total de caminhos possíveis a percorrer, visitando cada cidade uma vez antes de regressar à casa. Devolver o número total de caminhos possíveis que um vendedor pode percorrer, dadas n cidades.

const caminhos = (n) => {
    if (n == 0) return undefined
    else if (n == 1) return 1
    else return n*caminhos(n-1)
}

console.log(caminhos(0))
console.log(caminhos(1))
console.log(caminhos(3))  