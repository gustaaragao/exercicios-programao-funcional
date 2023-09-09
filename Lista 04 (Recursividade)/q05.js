// Q5. Potência natural do número 2: 2^n .Naturalmente, você não deve utilizar o operador de expoente da linguagem.

const potencia = (base) => (expoente) => {
    if (expoente == 0) return 1
    else return base*potencia(base)(expoente-1)
}
  
const potencia2 = potencia(2)
  
lista = [potencia2(0),potencia2(1),potencia2(2),potencia2(3),potencia2(4),potencia2(5)]
  
console.log(`Potências de 2: ${lista},...`)
  