// Programa para encontrar o último elemento de uma lista passada. Faça também para encontrar o penúltimo.

const nomes = ['Ana','Bia','Marcela','Carlos','Maria']

// Encontrar o último e o penúltimo elemento da lista

const ultimoElementoLista = (lista) => lista[lista.length - 1]
const penultimoElementoLista = (lista) => lista[lista.length - 2]

console.log(`Último elemento: ${ultimoElementoLista(nomes)}`)
console.log(`Penúltimo elemento: ${penultimoElementoLista(nomes)}`)