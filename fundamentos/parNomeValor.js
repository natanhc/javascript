//para nome valor
const saudacao = 'Opa"'


function exec(){
    const saudacao = 'Fala'
    return saudacao
}

//Objetos são grupos aninhados de pares chave e valor
const cliente = {
    nome: 'Pedro',
    idade: 27,
    peso: 90,
    endereco: {
        logradouro: "Rua qualquer",
        numero: 7
    }
}

console.log(saudacao)

console.log(exec())

console.log(cliente)