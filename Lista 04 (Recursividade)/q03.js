// Q3. Soma dos n primeiros números naturais.

const soma = (n) => {
    if (n==0) return 0
    else return n + soma(n-1)
}
  
console.log(soma(5))
console.log(5+4+3+2+1)