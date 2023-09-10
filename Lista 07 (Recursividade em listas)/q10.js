/* 
Q10. Defina uma função que, dada uma lista, retorne a (sub)lista contendo os elementos que ocorrem exatamente uma vez na lista original. 
Exemplos: [4,2,1,3,2,3].unicos() ---> [4,1]; [1,4,4,2,1,3,2,3].unicos() ---> []
*/

const elimina = ([x, ...xs], item) => {
    if (typeof x == "undefined") return []
    else if (xs.length === 0) return (x === item ? [] : [x])
    else return (x === item) ? [...elimina([...xs], item)] : [x, ...elimina([...xs], item)] 
}


const unicos = ([x, ...xs]) => {
    if (typeof x == "undefined") return []
    else if (xs.length === 0) return [x]
    else return (xs.indexOf(x) === -1) ? [x, ...unicos(xs)] : [...unicos(elimina(xs, x))]
}

console.log(unicos([4,2,1,3,2,3])) // [4, 1]
console.log(unicos([1,4,4,2,1,3,2,3])) // []