// Q7. Pesquise sobre o algoritmo de ordenação QUICKSORT e o implemente

const qSort = ([x, ...xs]) => {
    if (typeof x == "undefined") return []
    else {
        const listaMenores = filtrarMenores([...xs], x)
        const listaMaiores = filtrarMaiores([...xs], x)
        // Também é possível usar o .filter()
    
        return [...qSort(listaMenores), x, ...qSort(listaMaiores)] // Lembrete: O pivô x já está no lugar correto.
    }
}

const filtrarMenores = ([x, ...xs], item) => {
    if (typeof x == "undefined") return []
    else return (x <= item) ? [x, ...filtrarMenores(xs, item)] : [...filtrarMenores(xs, item)]
}

const filtrarMaiores = ([x, ...xs], item) => {
    if (typeof x == "undefined") return []
    else return (x >= item) ? [x, ...filtrarMaiores(xs, item)] : [...filtrarMaiores(xs, item)]
}

console.log(qSort([3,0,1,4,2,5]))
// [ 0, 1, 2, 3, 4, 5 ]

// Exportando a função qSort para o exercício Q08
module.exports = {qSort}