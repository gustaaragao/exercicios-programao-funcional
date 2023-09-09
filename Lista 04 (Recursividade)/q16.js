/*
Q16. Crie uma função chamada dec2 que pega um número inteiro positivo na base 10 e o converte para uma outra base 
passada como argumento: base 2, base 8, ou base 16. A função deve retornar a string representativa do número nessa nova base.
*/

const decPara = (base) => (numero) => {
    const registro = {2: '01', 8: '01234567', 16: '0123456789abcdef'}
    
    if (numero < base) return registro[base][numero]
    else {
      const quociente = Math.floor(numero/base) // Divisão inteira (ou quociente da divisão)
      const resto = (numero % base) // % -> resto da divisão
      
      return decPara(base)(quociente) + registro[base][resto]
    }
}
  
const dec2 = decPara(2)
const dec8 = decPara(8)
const dec16 = decPara(16)
  
console.log(dec2(26)) //11010
console.log(dec8(26)) //32
console.log(dec16(26))  //1a