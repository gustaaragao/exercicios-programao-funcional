// Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.

function verificarTriangulo(lado1, lado2, lado3){
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        return 'SIM!'
    }
    
    return 'NÃO!'
}

console.log(verificarTriangulo(3,4,5))

console.log(verificarTriangulo(1,2,3))