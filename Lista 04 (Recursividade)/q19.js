/*
Q19. Função para retornar o número de dígitos do valor total de permutações possíveis para o conjunto formado por n elementos diferentes. 
O valor de n é a entrada da função. 
*/

const permutacao = (n) => {
  if (n === 0) return 1 // No caso (n = 0), temos a permutação de 0 elementos que há apenas uma possibilidade: a sequência vazia (). 
  else return (n*permutacao(n - 1))
}

const contarDigitos = (numero) => {
  if (numero.toString().length == 1) return 1
  else return 1 + contarDigitos(Math.floor(numero/10))
}

const ndigitospermut = (n) => contarDigitos(permutacao(n))

console.log(ndigitospermut(5)) // 5! = 120 -> 3 dígitos