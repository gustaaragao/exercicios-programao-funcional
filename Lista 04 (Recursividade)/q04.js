// Q4. Fatorial de um número natural qualquer.

const fat = (n) => {
    if (n==0) return 1
    else return n*fat(n-1)
}
  
console.log(fat(0)) // 1
console.log(fat(1)) // 1
console.log(fat(5)) // 120