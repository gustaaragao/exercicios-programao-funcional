/*
Q13. Um móvel com velocidade constante percorre uma trajetória retilínea. 
Conside t0 = 0, o instante inicial e x0 = 500 a posição inicial.
Escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x
*/

/*  CONHECIMENTO PRÉVIO: 
Da física, sabemos que v = dx/dt -> v = (x - x0)/(t - t0) -> v = (x - 500)/(t - 0) -> v = (x - 500)/t

Logo, vamos usar v = (x - 500)/t
*/

function calcularVelocidade(tempo, posicao){
    const velocidade = (posicao - 500)/tempo

    return velocidade
}

const tempo = 10
const posicao = 800

const velocidade = calcularVelocidade(tempo, posicao)

console.log(`O móvel na posição ${posicao}m e no instante ${tempo}s tem ${velocidade}m/s.`)
// O móvel na posição 800m e no instante 10s tem 30m/s.