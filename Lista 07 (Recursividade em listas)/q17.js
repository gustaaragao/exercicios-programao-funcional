// Q17. Implementar sua própria função de alta ordem reduce(...).

const reduceRec = ([x, ...xs], fn, acc) => {
    if (typeof x == "undefined") return 'Lista vazia'
    else if (xs.length === 0) return fn(x, acc)
    else return reduceRec([...xs], fn, fn(x, acc))
}

const somar = (x, acc) => x + acc

console.log([1, 2, 3].reduce(somar, 0))
console.log(reduceRec([1, 2, 3], somar, 0))