// Q4. Função para retornar o número de vogais numa string. Considere que todas as letras estão minúsculas.

const isVogal = (char) => (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u')

const vogais = (str) => {
    if (str.length === 0) return 0
    else return (isVogal(str.charAt(0)) ? 1:0) + vogais(str.slice(1, str.length + 1))
}

console.log(vogais('gustavo'))