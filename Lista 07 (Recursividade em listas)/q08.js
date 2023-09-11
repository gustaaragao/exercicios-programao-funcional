/*
Q8. Escreva um programa para realizar uma Busca Binária em uma lista de elementos ordenados. 
Se o elemento existir, retorne sua posição na lista; caso contrário, retorne -1 (ou algum outro tipo de indicativo de inexistência). 
Exemplos: [-4,0,3,7,11].buscabin(7) ---> 3; [-4,0,3,7,11].buscabin(1) ---> -1 (ou NaN).
*/

  
const buscaBinaria = (lista, item) => {
    const meio = Math.floor(lista.length/2)
    if (meio === item) return meio
    else if (meio === 0) return -1 // A lista é vazia
    else return (meio > item) ? buscaBinaria(lista.slice(0, meio), item) : meio + buscaBinaria(lista.slice(meio), item)
}

console.log(buscaBinaria([-4,0,3,4,7], 7)) // 2 + b([7, 11], 7) -> 2 + 1 + b([])