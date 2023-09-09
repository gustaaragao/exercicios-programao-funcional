// Q14. Criar uma função recursiva chamada repita que pega dois parâmetros e repete a string n vezes. 

const repita = (txt, n) => {
    if (n==0) return ''
    else return txt + repita(txt,n-1)
}

console.log(repita('gusta',3))