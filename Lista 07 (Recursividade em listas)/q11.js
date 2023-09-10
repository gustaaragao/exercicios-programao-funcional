/*
Q11. Uma string é uma substring de outra se os elementos da primeira ocorrem na segunda, na mesma ordem. 
Por exemplo, 'ship' é uma substring de 'Fish & Chips', mas não de 'hippies'. 
Defina uma função que decida se uma string é uma substring de outra.
*/

const subString = (str1, str2) => {
    const str1Lower = str1.toLowerCase()
    const str2Lower = str2.toLowerCase()

    if (str1Lower === str2Lower) return true
    else if (str1Lower.length === 0) return false
    else return str2.indexOf(str1Lower.charAt(0)) > subString(str1.slice(1), str2)
}

console.log(subString('ship', 'fish & chips'))
console.log(subString('ship', 'hippies'))