// Q4. Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda.

nomesBanco = ['Ana','Bia','Marcela','Carlos','Maria']
nomesVerificar = ['Bia','João', 'Marcela', 'Carlos','Camila']

const verificarNomes = (nomesBanco) => (nomesVerificar) => (nomesVerificar.map((x) => nomesBanco.indexOf(x) == -1 ? 0:1)).reduce(somar = (acc,x) => acc + x,0)

console.log(`Nomes do Banco: [${nomesBanco}]`)
console.log(`Nomes: [${nomesVerificar}]`)
console.log(`Números de elementos em comum nas listas: ${verificarNomes(nomesBanco)(nomesVerificar)}`)
