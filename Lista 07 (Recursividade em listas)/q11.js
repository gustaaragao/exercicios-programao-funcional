/*
Q11. Uma string é uma substring de outra se os elementos da primeira ocorrem na segunda, na mesma ordem. 
Por exemplo, 'ship' é uma substring de 'Fish & Chips', mas não de 'hippies'. 
Defina uma função que decida se uma string é uma substring de outra.
*/

const caracteresLista = (str) => str.toLowerCase().replace(/ /g,'').split('')

const subString = (str1, str2) => {
    const str1Lista = caracteresLista(str1)
    const str2Lista = caracteresLista(str2)

    if (str1Lista.length > str2Lista.length) return false // Se a str1 for maior que str2, é impossível str1 ser substring de str2.
    else if (str1Lista.length === 0 || str2Lista.length === 0) return (str1Lista[0] === str2Lista[0]) // str1 ou str2 é uma string com apenas um caracter.
    else return subStringAux(str1Lista, str2Lista)
}

const subStringAux = ([x, ...xs], [y, ...ys]) => {
    if (typeof x == "undefined") return true
    else if (typeof y == "undefined") return false
    else return (x === y) ? subStringAux(xs, ys) : subString([x, ...xs], ys)
}

console.log(subString('ship', 'Fish & Chips'))
console.log(subString('ship', 'hippies'))
