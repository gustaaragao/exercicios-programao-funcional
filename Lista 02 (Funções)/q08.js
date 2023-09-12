/*
Q8. Escrever um programa que calcule o valor de um número elevado à quarta potência. 
Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.
*/

function elevarQuadrado(numero){
    return numero**2
}

function elevarQuarta(numero){
    return elevarQuadrado(elevarQuadrado(numero))
}

console.log('O número 2 elevado a quatro é:', elevarQuarta(2))
// O número 2 elevado a quatro é: 16