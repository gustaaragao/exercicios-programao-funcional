/*
Q9. Mínimo Múltiplo Comum (MMC) entre dois inteiros positivos fornecidos, n e m. 
Naturalmente, você não deve utilizar operadores de divisão da linguagem.
*/

// Utilizaremos o fato de que MMC(a,b) * MDC(a,b) = a*b --> MMC(a,b) = (a*b)/MDC(a,b).
const mmc = (n, m) => (n*m)/mdc(n,m)

const mdc = (n, m) => {
    const mdcAux = (n, m) => {
        if (n < m) return mdc(m, n)
        else if (m === 0) return n // Encontramos o MDC. Chegamos no nosso caso base (mdc(N, 0) = N)
        else return mdc(n - m, m)
    }

    if (n === 0 && m === 0) return NaN // mdc(0, 0) não está definido
    else if (n < 0 || m < 0) return NaN // no mdc as entradas devem ser naturais positivos.
    else return mdcAux(n, m)
}

console.log(mmc(12,10))