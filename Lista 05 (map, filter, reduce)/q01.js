const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

console.log('Carrinho: ')
console.log(carrinho)

const carrinhoCopia = carrinho.map((x) => x)
// (a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes)

const converterCarrinhoMoeda = (cambio) => (carrinho) => carrinho.map((produto) => produto = {nome: produto.nome, qtde: produto.qtde, precoDol: Number((produto.preco * cambio).toFixed(2)), fragil: produto.fragil})

const carrinhoDolar = converterCarrinhoMoeda(4.72)(carrinho) // Convertendo o carrinho para a dólar (cotação = 4.72)

console.log('\nPreços em Dólar: ')
console.log(carrinhoDolar)
//? Como eu poderia fazer imprimir o carrinho novamente mas com os preços em Dólar e não apenas a lista -> Essa solução respeita os Par. Funcional?

// (b) Calcular o valor total gasto com a compra
//! Nas letras (b), (d), (e) será necessário calcular o gasto num carrinho, para isso criei uma função que faz isso. (Fatoração do código)

const calcularValorCarrinho = (carrinho) => (carrinho.map((produto) => produto.qtde*produto.preco)).reduce(somar = (aux, x) => aux + x,0)

const valorGasto = calcularValorCarrinho(carrinho) 

console.log(`\nValor total gasto na compra: R$${valorGasto}`)

// (c) Calcular o valor total gasto aplicando-se algum desconto
const aplicarDesconto = (desconto) => (preco) => Number((preco*(1 - (desconto/100))).toFixed(2))

const valorGastoDesconto20 = aplicarDesconto(20)(valorGasto)

console.log(`\nValor total gasto com desconto 20%: R$${valorGastoDesconto20}`)

// (d) Calcular o valor total gasto com os produtos frágeis
const filtrarFrageis = (carrinho) => carrinho.filter((produto) => produto.fragil)

const carrinhoFrageis = filtrarFrageis(carrinho)

const valorGastoFrageis = calcularValorCarrinho(carrinhoFrageis)

console.log(`\nValor total gasto com Frágeis: R$${valorGastoFrageis}`)

// (e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C')
const filtrarInicialC = (carrinho) => carrinho.filter((produto) => produto.nome[0] === 'C')

const carrinhoInicialC = filtrarInicialC(carrinho)

const valorGastoInicialC = calcularValorCarrinho(carrinhoInicialC)

console.log(`\nValor total gasto com Produtos com inicial C: R$${valorGastoInicialC}`)

// (f) Calcular o valor médio gasto por tipo de produto com a compra realizada.

const calcularGastoProdutos = (carrinho) => carrinho.map((produto) => produto = { nome: produto.nome, gastoMedio: produto.qtde * produto.preco, fragil: produto.fragil})

console.log(calcularGastoProdutos(carrinho))