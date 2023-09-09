// Q7. Quociente da divisão entre dois números inteiros positivos fornecidos, n e m. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

const quociente = (n,m) => {
    if (n < m) return 0
    else return 1+quociente(n-m,m)
}
  
console.log(quociente(31,7)) // 4
console.log(quociente(10,10)) // 1
console.log(quociente(1,2)) // 0