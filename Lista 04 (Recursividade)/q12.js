// Q12. Escreva uma função recursiva que inverte uma string. Nome deve ser inverte.

const inverte = (str) => {
    if (str === '') return ''
    else return str.charAt(str.length - 1) + inverte(str.slice(0,str.length - 1))
}

console.log(inverte('Gustavo Henrique')) // "euqirneH ovatsuG"