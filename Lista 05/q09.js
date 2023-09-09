// Q9. Programa para retornar o número total de letras usadas na escrita por extenso em inglês dos números cardinais presentes numa sequência de valor máximo 1000 ('one thousand').

// Lista com os números de 0 até 9.
const unidadeIngles = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

// Lista com os números de 10 até 19.
const dezenaEspecialIngles = ["ten", "eleven", "twelve", "tirthteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

// Lista com os números das dezenas de 20 até até 90.
const dezenaIngles = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]


const transformarDezenas = (numero) => {
    if (numero >=10 && numero <= 19) return dezenaEspecialIngles[numero - 10]
    else if (numero >= 20 && numero <= 99){
        if ((numero % 10) == 0) return dezenaIngles[(numero/10 - 2)] // (numero % 10) == 0 é uma maneira de verificar se o número (numero/10) é inteiro (Ou seja, tou verificando se é 20, 30, 40, ..., 90)
        // Nos demais casos, a composição do texto desse ser assim "Dezena" + "-" + "Unidade". Por exemplo, 23 = "twenty-three" 
        else{
            const dezena = Math.floor(numero/10) // A parte da dezena do Número
            const unidade = (numero % 10) // A parte da unidade do Número
            return `${(dezenaIngles[dezena - 2])}-${(unidadeIngles[unidade])}`
        }
    } 
}

const transformarMilhares = (numero) => {
    if ((numero % 100) == 0) return `${(unidadeIngles[numero/100])} hundred`
    else{
        const centena = Math.floor(numero/100) // A parte do centena do Número
        const dezena = numero - centena*100 // A parte da dezena do Número   
        return `${unidadeIngles[centena]} hundred and ${transformarDezenas(dezena)}`
    }
}

const escreverNumeroIngles = (numero) => {
    if (numero >=0 && numero <= 9) return unidadeIngles[numero]
    else if (numero >=10 && numero <= 99) return transformarDezenas(numero)
    else if (numero >= 100 && numero <= 999) return transformarMilhares(numero)
    else if (numero == 1000) return 'one thousand'
}

listaNumeros = [23, 1, 127, 300, 520, 1000] 

const traduzirNumerosIngles = (listaNumeros) => listaNumeros.map((numero) => escreverNumeroIngles(numero))

listaNumerosIngles = traduzirNumerosIngles(listaNumeros)

console.log('Lista Números:', listaNumeros)
console.log('Lista Números em Inglês:', listaNumerosIngles)

//! Ideia futura: Transformar em um Registro!

const contarLetrasLista = (listaPalavras) => listaPalavras.reduce(contarLetras = (acc, x) => acc + x.replace(' ','').length,0) // o método .replace(' ', '') retira os espaços em branco.

console.log(`\nNúmero total de letras usadas na escrita: ${contarLetrasLista(listaNumerosIngles)}.`)