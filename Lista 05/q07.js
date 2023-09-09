// Q7. Programa para retornar a lista de todos os números primos menores que um número natural n qualquer

/* 
1 - Fazer uma função que identifica se um número é primo ---> Essa função deve retornar um valor booleano
2 - Criar uma lista com os números naturais menor que n (listaNum) ---> Na questão 05, já fizemos isso
3- Aplicar .filter() usando a função de (1) na lista criado em (2)
*/

/*
FORMAS PARA ACHAR UM PRIMO:
- PENEIRA: ao encontrar um primo, elimina os seus múltiplos da lista de números. -> Podemos descobrir se um número é múltiplo de outro usando %
*/

const criarListaNumeros = (limite) => [...Array(limite).keys()].map((x) => x+1) // Função que monta uma lista de 1 até (limite)

const verificarPrimo = (numero) => {
  if (numero <= 1) return false
  else{
    const possiveisDivisores = criarListaNumeros(numero)
    const divisores = possiveisDivisores.filter((x) => numero % x == 0)
    return (divisores.length === 2)
  }  
}

const criarListaPrimos = (limite) => criarListaNumeros(limite).filter((x) => verificarPrimo(x))

console.log(criarListaPrimos(100))

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 e 97.
