/*
Q5. Programa para calcular a distância euclidiana entre dois pontos [(x1,y1),(x2,y2)] no 
plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não 
for paralela a nenhum dos eixos (abscissas ou ordenadas) e as versões simplificadas quando for paralela.
*/

function CalcularDistPontos(x1,y1,x2,y2){
    if (x1 == x2){  
        // Nesse caso, a reta formada pelos pontos é paralela ao eixo Y
        return Math.abs(y2 - y1)
    }
    if (y1 == y2){  
        // Nesse caso, a reta formada pelos pontos é paralela ao eixo X
        return Math.abs(x2 - x1)
    }
    else{
        // Nesse caso, a reta não é paralela a nenhum dos eixos ordenados 
        return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    }
}

console.log('Distância =', CalcularDistPontos(-3,-11,2,1)) // Distância = 13

console.log('Distância =', CalcularDistPontos(-3,22,-3,14)) // Distância = 8

console.log('Distância =', CalcularDistPontos(9,7,2,7)) // Distância = 7