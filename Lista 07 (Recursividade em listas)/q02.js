/*
Q2. Criar uma função que encontre o maior valor numa lista de inteiros usando a recursividade. Considere que a lista possui pelo menos um elemento.
*/

const maior = ([x, y, ...xs]) => {
    if (typeof x == "undefined") return "Lista vazia."
    else return maiorAux([x, y, ...xs])
}

const maiorAux = ([x, y, ...xs]) => {
    if (typeof y == "undefined") return x
    else return (x > y ? maiorAux([x, ...xs]) : maiorAux([y, ...xs]))
}

console.log(maior([]))
console.log(maior([7]))
console.log(maior([1,2,4,3]))