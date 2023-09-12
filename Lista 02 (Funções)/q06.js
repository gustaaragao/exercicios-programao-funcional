/*
Q6. Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. 
A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).
*/

function VerificarIguais(a, b, c){
    if (a == b && b == c){
        return 3
    }
    
    if (a != b && b != c && a != c){
        return 0
    }
    return 2
}

console.log(VerificarIguais(42, 42, 42)) // 3 (Todos iguais)
console.log(VerificarIguais(1,1,0)) // 2 (Apenas um diferente)
console.log(VerificarIguais(27,5,2002)) // 0 (Todos diferentes)