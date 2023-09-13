/*
Q8. Máximo Divisor Comum (MDC) entre dois números inteiros positivos, n e m. 
Naturalmente, você não deve utilizar operadores de divisão da linguagem.
*/

// Na resolução, utilizaremos o conceito do Algoritmo de Euclides para MDC.

/* Fonte: http://clubes.obmep.org.br/blog/sala-de-estudos-algoritmo-de-euclides-para-determinacao-de-mdc/ 
Sejam a, b naturais positivos, suponha que a > b (> 0) para facilitar o raciocínio.
O mdc(a, b) = mdc(b, r), onde r é o resto da divisão entre a e b (a/b).

A partir daí, com o Algoritmo de Euclides podemos resolver o mdc(b, r) = mdc(r, r'), onde r' é o resto da divisão  b/r. (Um processo recursivo)

O caso base da nossa recursividade, o "stop", é o caso mdc(N, 0) = N.

Além dessa propriedade, outras serão de grande utilidade:

i) mdc(0, 0) não está definido. 
ii) mdc(n, n) = n.
iii) mdc(n, m) = mdc(m, n)
iv) mdc(n, 0) = n
*/

/* 
A divisão que efetuaremos é a divisão euclidiana (ou inteira), ou seja, só nos importamos em encontrar dois números inteiros q e r tais que:

A divisão inteira de a e b (a//b, vamos denotar dessa maneira) => a = b*q + r. Onde q é o "quociente" e r é o "resto"

Iremos dividir os números da maneira mais primitiva de todas: usando a ideia de que a divisão que é um conjunto de subtrações consecutivas 
de um número com outro. Ou seja, a//b seria igual a (((a - b) - b) - b) - ...). O momento de parada seria quando o resultado de uma subtração
parcial fosse menor que o número b (o divisor), esse resultado é o nosso resto "r".
Note que, 
i) se r = 0, temos que a divisão a/b é um número inteiro. (a/b === a//b)
ii) caso contrário, temos que a divisão a/b não é um inteiro. (a/b != a//b)

Além disso, o "quociente" q é o número de vezes que efetuamos a operação subtração durante nossa divisão inteira.
*/

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

console.log(mdc(42, 12))
console.log(mdc(0, 0))