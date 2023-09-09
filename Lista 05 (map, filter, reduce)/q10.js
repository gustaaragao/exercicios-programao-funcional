// Q10. Programa para replicar os elementos de uma lista um determinado número de vezes.

const lista = [1,2,3]

const replicarElementosLista = (reps) => (lista) => lista
    .map((numero) => numero.toString()) // Transfomar a lista de números em lista de strings
    .map((numeroStr) => numeroStr.repeat(reps)) // Repetir essas strings em "reps" vezes
    .reduce((x, acc) => x + acc,'') // Concatenar todas as strings dessa lista -> Retorna uma String
    .split('') // "Splitamos" essa string em uma lista de strings -> Retorna uma Array

console.log(replicarElementosLista(2)(lista))