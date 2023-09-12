// Q14. Programa que escreva por extenso um determinado algarismo passado como argumento.

function escreverAlgarismo(algarismo){
    const nomeAlgarismo = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove']

    if (algarismo >= 0 && algarismo <= 9 ){
        return nomeAlgarismo[algarismo]
    }
    else{
        return `A entrada ${algarismo} não é válida.`
    }
}

console.log(escreverAlgarismo(0))   // zero
console.log(escreverAlgarismo(1))   // um
console.log(escreverAlgarismo(2))   // dois
console.log(escreverAlgarismo(3))   // três
console.log(escreverAlgarismo(4))   // quatro
console.log(escreverAlgarismo(5))   // cinco
console.log(escreverAlgarismo(6))   // seis
console.log(escreverAlgarismo(7))   // sete
console.log(escreverAlgarismo(8))   // oito
console.log(escreverAlgarismo(9))   // nove
console.log(escreverAlgarismo(10))  // A entrada 10 não é válida.
