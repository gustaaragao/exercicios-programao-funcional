/*
Q.07 Programa para retornar o menor valor entre três números quaisquer. 
Tente resolver considerando o sub-problema de determinar o menor valor entre dois números quaisquer
(obs: em caso de valores iguais, deve-se retornar como resultado o próprio valor).
*/

function determinarMenorValorEntreDois(valor1, valor2){
    if (valor1 < valor2){
        return valor1
    }
    else{
        return valor2
    }
}

function determinarMenorValor(valor1, valor2, valor3){
    const menorValorTemporario = determinarMenorValorEntreDois(valor1, valor2)

    const menorValorDefinitivo = determinarMenorValorEntreDois(menorValorTemporario, valor3)

    return menorValorDefinitivo
}

console.log(`Menor valor entre (1, 1, 1) é ${determinarMenorValor(1, 1, 1)}.`)
console.log(`Menor valor entre (21, 7, 3) é ${determinarMenorValor(21, 7, 3)}.`)

// Menor valor entre (1, 1, 1) é 1.
// Menor valor entre (21, 7, 3) é 3.