/*
Q20. A operação de deslocamento de bit à direita (shift right) é semelhante ao piso (floor) da divisão de inteiros por potências de 2. 
Portanto, o processo é repetitivo e pode ser feito de forma recorrente.
Existe um operador para realizar essa operação de deslocamente em JS; trata-se do operador lógico >>. 
Você deve criar uma função que imita esse operador, sem usar o operador, obviamente!
*/

const deslocaDir = (numero, exp) => {
    if (exp == 1) return numero/2
    else return deslocaDir(numero, exp - 1)/2
}
  
console.log(deslocaDir(80,3))
console.log(deslocaDir(80,3) == 80 >> 3)
  