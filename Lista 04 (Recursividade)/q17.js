// Q17."A Conjectura de Collatz". Considere a seguinte operação sobre um número inteiro positivo arbitrário: Se n é par -> n / 2. Se n é ímpar -> n * 3 + 1. Criar uma função chamada collatz para avaliar repetidamente estas operações, até atingir 1. Devolver o número de passos realizados. 

const collatz = (numero) => {
    if (numero == 1) return 0
    else return 1 + collatz((numero % 2 == 0) ? numero/2 : numero*3 + 1)
}
  
console.log(collatz(10))  