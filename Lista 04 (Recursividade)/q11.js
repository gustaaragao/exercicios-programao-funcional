// Q11. Dado um número, devolva a soma total desse número multiplicado por cada número entre 1 e 10. Nome da função deve ser multiSoma.

const multiSoma = (n, count = 1) => {
    if (count == 10) return n*10
    else {
      const newCount = count + 1
      return (n*count) + multiSoma(n, newCount)
      /*
      return (n+count) + multiSoma(n, count + 1) ---> também funciona
      */
    }
}
  
console.log(10*1 + 10*2 + 10*3 + 10*4 + 10*5 + 10*6 + 10*7 + 10*8 + 10*9 + 10*10)
console.log(multiSoma(10))  