/*
Q14. Crie um programa para representar um joguinho de dados simples. 
O usuário escolhe quantas vezes ele deseja jogar um par de dados. A pontuação será a soma total de todos os lançamentos. 
Entretanto, se algum lançamento gerar um valor duplo, a pontuação total será zerada. 
Represente o lançamento de cada par de dados como uma lista com dois elementos e o conjunto total de lançamentos seria então uma lista de listas. 
Exemplos: pontuacao([[5, 2], [4, 3], [5, 6]]) ➞ 25, pontuacao([[5, 6], [1, 1], [6, 4], [6, 3]]) ➞ 0.
*/

// Importando o módulo prompt-sync
const prompt = require('prompt-sync')()

const criarJogadasDado = (numJogadas) => {
    const resultado1 = Math.floor(Math.random() * 6 + 1)
    const resultado2 = Math.floor(Math.random() * 6 + 1)

    if (numJogadas === 0) return []
    else return [[resultado1, resultado2], ...criarJogadasDado(numJogadas - 1)]
}

const pontuacao = ([x, ...xs]) => pontuacaoAux([x, ...xs])

const pontuacaoAux = ([x, ...xs], acc = 0) => {
    if (typeof x == "undefined") return acc
    if (x[0] === x[1]) return 0
    else return acc + pontuacaoAux([...xs], x[0] + x[1])
}

const main = () => {
    const numJogadasUsuario = parseInt(prompt('Quantas jogadas você deseja? '))
    
    const jogadasUsuario = criarJogadasDado(numJogadasUsuario)
    console.log('\nJogadas =', jogadasUsuario)

    const pontuacaoUsuario = pontuacao(jogadasUsuario)
    console.log(`\nPontuação: ${pontuacaoUsuario}`)
}

main()

/*
Quantas jogadas você deseja? 4

Jogadas = [ [ 4, 4 ], [ 3, 5 ], [ 2, 2 ], [ 4, 2 ] ]

Pontuação: 0

======================================================
Quantas jogadas você deseja? 2

Jogadas = [ [ 2, 5 ], [ 4, 1 ] ]

Pontuação: 12
*/