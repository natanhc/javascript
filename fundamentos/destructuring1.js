const pessoa = {
    nome: 'Ana',
    idade: 1,
    endereco: {
        logradouro: 'Rua qualquer',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(nome,idade)

const { sobrenome, altura = true} = pessoa
console.log(sobrenome,altura)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log( logradouro, numero, cep)

