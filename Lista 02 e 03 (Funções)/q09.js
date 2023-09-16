/*
Q09. Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso), 
dado por a⊗b=(a∨b)∧¬(a∧b).
*/

// Feature futura = ADICIONAR UMA MANEIRA DE IMPRIMIR UMA TABELA-VERDADE NO CONSOLE

function calcularOuExclusivo(proposicao1, proposicao2){
    return (proposicao1 || proposicao2) && (!(proposicao1 && proposicao2))
}

console.log(calcularOuExclusivo(true, true))    // Falso
console.log(calcularOuExclusivo(true, false))   // Verdade
console.log(calcularOuExclusivo(false, true))   // Verdade
console.log(calcularOuExclusivo(false, false))  // Falso

/*  OPERADORES LÓGICOS DO JAVASCRIPT
logical OR (||) -> (disjunção lógica)
logical AND (&&) -> (conjunção lógica)
logical NOT (!) -> (negação lógica)
*/