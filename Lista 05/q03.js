// Q3. Programa retornar o número de elementos numa lista.

lista = [3,5,-1,4,0]

somar = (acc, x) => acc + x
const somatorio = (lista) => lista.reduce(somar, 0)

const tamanhoLista = (lista) => somatorio(lista.map((x) => 1))

console.log(`A lista [${lista}] tem tamanho ${tamanhoLista(lista)}.`)
