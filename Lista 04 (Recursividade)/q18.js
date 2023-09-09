/*
Q.18 Função que determina se uma string é um palíndromo. 
Você deve desconsiderar todos caracteres que não sejam letras. Tanto faz maiúsculas e minúsculas. Você deve desconsiderar acentuações (substituir pelas letras sem acentos).
*/

const tratarStr = (str) => {
    return str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase()
}
  
const inverte = (str) => {
    if (str === '') return ''
    else return str.charAt(str.length - 1) + inverte(str.slice(0, str.length - 1))
    // str.split('').reverse().join('') -> Transforma em uma Array, usa o reverse() e une numa string novamente com o join().
    // join() recebe um parâmetro que será o separador na string: i) Quando omitido, será usado a ','. ii) Quando for '', ela une todos os caracteres.
}
  
const compararStr = (str1, str2) => {
    if (str1 === '' && str2 === '') return true
    else {
      return (str1.length === str2.length) && (str1.charAt(str1.length - 1) === str2.charAt(str2.length - 1)) && compararStr(str1.slice(0, str1.length - 1), str2.slice(0, str2.length - 1))
    }
}
  
const palindromo = (str) => {
    const strTratada = tratarStr(str)  
    const strInvertida = inverte(strTratada)
    console.log(`Texto original: ${str}`)
    console.log(`Texto tratado e invertido: ${strInvertida}`)
    return compararStr(strTratada, strInvertida)
}

console.log(palindromo('Socorram-me, subi no ônibus em marrocos!'))