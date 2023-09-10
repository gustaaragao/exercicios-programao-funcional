/*
Q13. Crie uma função que pega um número e retorna um dígito que é o resultado da soma de todos os dígitos do número de entrada. 
Quando a soma dos dígitos resultar em mais de um dígito, repita a soma até obter um único dígito. 
*/

const somaDigitos = (numero) => {
    const numeroStr = numero.toString()

    if (numeroStr.length === 1) return numero
    else return somaDigitos(parseInt(numeroStr.charAt(0)) + somaDigitos(parseInt(numeroStr.slice(1))))
}

console.log(somaDigitos(123))   // 6
console.log(somaDigitos(999888777)) // 9
console.log(somaDigitos(999999999998)) // 8
