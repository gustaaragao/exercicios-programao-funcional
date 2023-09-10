/*
Q12. A propriedade length de uma lista retorna o número de elementos presentes na lista. 
Por exemplo, a lista [1, [2, 3]] possui 2 elementos: o número 1 e a lista [2, 3]. 
Suponha que ao invés disso, queiramos saber o total de elementos não aninhados na lista. No exemplo anterior, então, teríamos 3 elementos: números 1, 2 e 3. 
Escreva uma função para realizar esta última contagem.
*/

const lengthAninhado = ([x, ...xs]) => {
    if (typeof x == "undefined") return 0
    else if (xs.length === 0) return (Array.isArray(x)) ? lengthAninhado(x) : 1
    else return (Array.isArray(x)) ? lengthAninhado(x) + lengthAninhado([...xs]) : 1 + lengthAninhado([...xs]) 
}

console.log([1, [2,3]].length)
console.log(lengthAninhado([1, [2,3], 4]))

/* FUNÇÃO QUE CONSEGUE DESANINHAR UMA LISTA
const desaninhar = ([x, ...xs]) => {
    if (typeof x == "undefined") return []
    else if (xs.length === 0) return (Array.isArray(x)) ? [...x] : [x]
    else return Array.isArray(x) ? [...x, ...desaninhar(xs)] : [x, ...desaninhar(xs)]
}

console.log(desaninhar([[5, 2], [4, 3], 42, [5, 6], 4]))
*/