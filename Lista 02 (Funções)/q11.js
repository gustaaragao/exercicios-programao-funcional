/*
Q11. Dados três valores, escreva um programa que retorne quantos desses três valores 
são maiores que o valor médio entre eles.
*/

function calcularMedia(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3)/3
}

function contarNumerosMaioresMedia(valor1, valor2, valor3){
    const media = calcularMedia(valor1, valor2, valor3)

    if (valor1 > media && valor2 > media && valor3 > media){
        return 3
    }
    if (valor1 > media && valor2 > media || valor1 > media && valor3 > media || valor2 > media && valor3 > media){
        return 2
    }
    else{
        return 1
    }
}

const valorA = 3
const valorB = 7
const valorC = 9

console.log(`Quantos desses três valores ${valorA}, ${valorB} e ${valorC} são maiores que a média?\nResp.: ${contarNumerosMaioresMedia(valorA, valorB, valorC)}`)

/*
Quantos desses três valores 3, 7 e 9 são maiores que a média?
Resp.: 2
*/