// Q6. Resto da divisão entre dois números inteiros positivos fornecidos, n e m. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

const resto = (n,m) => {
    if (n<m) return n
    else return resto(n-m,m)
}

console.log(resto(31,7)) // 3
console.log(resto(10,10)) // 0
console.log(resto(1,2)) // 1  