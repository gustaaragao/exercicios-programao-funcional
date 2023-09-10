/* 
Q9. Função para eliminar de uma lista todas as ocorrências de um dado elemento. Exemplo: [-4,0,3,7,11].elimina(7) ---> [-4,0,3,11].
*/

const elimina = ([x, ...xs], item) => {
    if (typeof x == "undefined") return []
    else if (xs.length === 0) return (x === item ? [] : [x])
    else return (x === item) ? [...elimina([...xs], item)] : [x, ...elimina([...xs], item)] 
}

console.log(elimina([-4,0,3,7,11], 7)) // [-4, 0, 3, 11]