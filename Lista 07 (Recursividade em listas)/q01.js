/* 
Q1. Criar uma função recursiva chamada busca que busca o índice de um determinado item em uma lista ORDENADA. 
Se o item estiver presente, ele deve retornar o índice, caso contrário, deve retornar -1.
*/

const busca = (item, [x, ...xs]) => buscaAux(item, [x, ...xs]) 
// Estou fazendo esse passo intermediário para impossibilitar do usuário modificar o contador/acumulador "acc".

const buscaAux = (item, [x, ...xs], acc = 0) => {
    if (typeof x == "undefined") return -1
    else if (item == x) return acc
    else return (buscaAux(item, [...xs], acc + 1))
}

console.log(busca(1, []))
console.log(busca(1, [1]))
console.log(busca(1, [2]))

console.log(busca(1, [2,3,4]))
console.log(busca(1, [2,3,4,1]))