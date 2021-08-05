let valor
console.log(valor)
//console.log(valor2)

valor = null
console.log(valor)

//Aqui acontecem os erros de tentar acessar ou manipular algo vazio muito comuns em produção
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)

produto.preco=3.70
console.log(produto.preco)
