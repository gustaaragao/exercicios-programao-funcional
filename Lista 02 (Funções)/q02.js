// Q2. Programa para calcular a área de uma circunferência dado o valor do raio.

function calcularAreaCirculo(raio, pi=3.14){
    return pi * raio**2
}

console.log('A área é', calcularAreaCirculo(10))