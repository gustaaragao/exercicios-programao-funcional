/*
Q10. Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, 
retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.
*/

function criarCitacaoBibliografica(primeiro_nome, ultimo_sobrenome){
    return `${ultimo_sobrenome}, ${primeiro_nome}`
}

const primeiro_nome = 'Gustavo'
const ultimo_sobrenome = 'Silva'

const citacaoBibliografica = criarCitacaoBibliografica(primeiro_nome, ultimo_sobrenome) 

console.log(
    `O nome "${primeiro_nome} ${ultimo_sobrenome}" em citação bibliográfica fica: "${citacaoBibliografica}".`
) 

// O nome "Gustavo Silva" em citação bibliográfica fica: "Silva, Gustavo".