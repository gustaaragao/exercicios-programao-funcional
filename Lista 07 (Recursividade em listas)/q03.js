/*
Q3. Criar uma função chamada somaAninhado que pega uma lista e devolve a soma de todos os itens. Atenção: o item de uma lista pode ser outra lista.
*/

const somaAninhado = ([x, ...xs]) => {
    if (typeof x == "undefined") return "Lista vazia"
    else if (xs.length === 0) return (Array.isArray(x) ? somaAninhado(x) : x)
    else return (Array.isArray(x) ? somaAninhado(x) : x) + somaAninhado([...xs])
}

console.log(somaAninhado([]))
console.log(somaAninhado([1,[2,3], 4]))