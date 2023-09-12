/*
Q12. Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau. 
A expressão genérica para cálculo das raízes é dada por (-b +- sqrt(b² - 4ac))/2a
*/

function calcularDelta(a, b, c){
    return b**2 - 4*a*c
}

function calcularRaizesEqSegundoGrau(a, b, c){
    const delta = calcularDelta(a,b,c)
    
    const raiz1 = (-b - Math.sqrt(delta))/(2*a)
    const raiz2 = (-b + Math.sqrt(delta))/(2*a)
    
    if (raiz1 == raiz2){
        // Delta = 0
        return `x' = x" = ${raiz1}`
    }
    if (raiz1 == NaN && raiz2 == NaN){
        // Delta < 0    NaN -> Not a Number
        return `Não há raízes reais`
    }
    else{
        // Delta > 0
        return `x' = ${raiz1} (Menor raiz) e x" = ${raiz2} (Maior raiz)`
    }
}

// x² - x - 12 = 0 (a = 1, b = -1, c = -12)-> Solução: x' = -3 e x" = 4.
const solucaoEq1 = calcularRaizesEqSegundoGrau(1, -1, 12)
// x² - 6x + 9 = 0 (a = 1, b = -6, c = 9)-> Solução: x' = x" = 3.
const solucaoEq2 = calcularRaizesEqSegundoGrau(1, -6, 9)
// x² + 2x + 5 = 0 (a = 1, b = 2, c = 5)-> Solução: Não há raízes reais.
const solucaoEq3 = calcularRaizesEqSegundoGrau(1, 2, 5)

// Imprimir as soluções no Terminal
console.log(`A solução da equação x² - x - 12 = 0 é: ${solucaoEq1}.\n`)
console.log(`A solução da equação x² - 6x + 9 = 0 é: ${solucaoEq2}.\n`)
console.log(`A solução da equação x² + 2x + 5 = 0 é: ${solucaoEq3}.\n`)

/*  ISSO RESPEITA OS PRINCÍPIOS FUNCIONAIS?
function determinarMaiorNumeroArray(array){
    return Math.max(...array)   
    // (...#NOME_ARRAY) -> converte a array em variáveis distintas ==> [a,b,c] -> (a,b,c)
}
*/