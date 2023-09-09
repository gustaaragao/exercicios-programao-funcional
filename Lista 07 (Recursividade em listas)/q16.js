// Q16. Implementar sua própria função de alta ordem filter(...).

const filterRec = ([x, ...xs], fn) => {
    if (typeof x == 'undefined') return []
    else return filterRecAux([x, ...xs], fn)
}
  
const filterRecAux = ([x, ...xs], fn) => {
    if (xs.length == 0) return (fn(x)) ? [x] : []
    else return fn(x) ? [x, ...filterRecAux(xs, fn)] : [...filterRecAux(xs, fn)]
}
  
console.log(filterRec([-1, 2, -7, 7, -4, 0, -2, 12], (x) => x > 0))  