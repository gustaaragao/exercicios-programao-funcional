// Q10. Escreva uma função recursiva chamada tamanho que retorne o comprimento de uma string.

const tamanho = (str) => {
    if (str.charAt(0) === '') return 0
    else return 1 + tamanho(str.slice(1))
}
  
console.log(tamanho(''))
console.log(tamanho('Gustavo'))
console.log(tamanho(' Gustavo'))