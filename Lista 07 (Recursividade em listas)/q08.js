/*
Q8. Escreva um programa para realizar uma Busca Binária em uma lista de elementos ordenados. 
Se o elemento existir, retorne sua posição na lista; caso contrário, retorne -1 (ou algum outro tipo de indicativo de inexistência). 
Exemplos: [-4,0,3,7,11].buscabin(7) ---> 3; [-4,0,3,7,11].buscabin(1) ---> -1 (ou NaN).
*/

// Lembrete: O algoritmo da Busca Binária pressupõe que a Lista está ordenada. 
// Caso não esteja, podemos usar a função qSort em q07.js (usar o algoritmo Quick sort).

const buscaBinaria = (lista, alvo) => {
    const buscaBinariaAux = (inicio, fim) => {
        const meio = Math.floor((inicio + fim) / 2)
        const valorMeio = lista[meio]
        
        if (inicio > fim) return -1; // Elemento não encontrado
        else if (valorMeio === alvo) return meio; // Elemento encontrado
        else if (alvo < valorMeio) return buscaBinariaAux(inicio, meio - 1); // Buscar metade esquerda
        else return buscaBinariaAux(meio + 1, fim); // Buscar metade direita
    }
    return buscaBinariaAux(0, lista.length - 1);
}

console.log(buscaBinaria([-4,0,3,4,7], 5)) // -1
console.log(buscaBinaria([-4,0,3,4,7], 0)) // 1
console.log(buscaBinaria([-4,0,3,4,7], 7)) // 4