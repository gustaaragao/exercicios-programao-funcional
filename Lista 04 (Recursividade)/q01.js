// Q1. N-ésimo termo da sequência {3,6,12,24,48,...}.

const f = (n) => {
    if (n == 0) return 3
    else return f(n-1) * 2
}
  
console.log([f(0), f(1), f(2), f(3), f(4)])  