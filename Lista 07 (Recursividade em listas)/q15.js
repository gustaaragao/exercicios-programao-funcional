// Q15. Implementar sua própria função de alta ordem map(...).

const mapRec = ([x, ...xs], fn) => {
    if (typeof x == 'undefined') return []
    else return [fn(x), ...mapRec(xs, fn)]
}
  
console.log(mapRec([1,2,3], (x) => 2*x))