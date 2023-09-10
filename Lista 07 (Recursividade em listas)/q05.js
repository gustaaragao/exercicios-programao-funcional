/*
Q5. Criar uma função que transforma frases terminadas com múltiplos pontos de interrogação ? ou pontos de exclamação ! numa frase que termina apenas com um, 
sem alterar a pontuação no meio das frases. 
Ex: eliminaIntExc("O que é isso?????") ---> "O que é isso?"
*/

const eliminarIntExc = (str) => {
    if (str.slice(-1) === "?" && str.slice(-2).charAt(0) !== "?") return str.slice(0, -1) + "?"
    else if (str.slice(-1) === "!" && str.slice(-2).charAt(0) !== "!") return str.slice(0, -1) + "!"
    else return eliminarIntExc(str.slice(0,-1))
}

console.log(eliminarIntExc("O que é isso?????"))
console.log(eliminarIntExc("É isso mesmo!!!!!"))