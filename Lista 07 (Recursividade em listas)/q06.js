/*
Q6. Considere o problema de gerar o montante acumulado de casos de uma doença qualquer. 
Como entrada, existe uma sequência de valores onde cada termo representa o número de casos daquele dia. 

Ex: para a sequência [7,3,19,5,15,10] seria gerada a sequência [7,10,29,34,49,59].
*/

const casos = ([x, y, ...xs]) => {
    if (typeof x == "undefined") return []
    else return casosAux([x, y, ...xs])
}

const casosAux = ([x, y, ...xs], acc = x) => {
    if (typeof y == "undefined") return [acc]
    else return [acc, ...casosAux([y, ...xs], acc += y)]
}

console.log(casos([7,3,19,5,15,10])) // [ 7, 10, 29, 34, 49, 59 ]