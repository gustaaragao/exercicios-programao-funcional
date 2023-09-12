/*
Q4. Programa para classificar um triângulo em Equilátero, Isósceles ou 
Escaleno a partir dos valores de seus três lados.
*/

function verificarTriangulo(lado1, lado2, lado3){ 
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        return true
    }
    return false
}

function identificarTriangulo(lado1, lado2, lado3){
    if (verificarTriangulo(lado1, lado2, lado3)){
        if (lado1 == lado2){
            if (lado3 == lado2){
                return 'Equilátero'
            }
            else{
                return 'Isósceles'
            }
        }
        else{
            return 'Escaleno'
        }
    }
    return 'Esses lados não formam um triângulo.'
}

console.log(identificarTriangulo(3,4,5)) // Escaleno
console.log(identificarTriangulo(7,7,7)) // Equilátero
console.log(identificarTriangulo(3,3,4)) // Isósceles
console.log(identificarTriangulo(3,1,6)) // Esses lados não formam um triângulo

/* 
Correção de Bug n° 1: A adição da função verificarTriangulo foi necessária já que era possível o usuário
inserir valores para (lado1, lado2, lado3) que não formam um triângulo.
*/