const nome = "Natan"
const concatenacao = "Olá " + nome + '!';
const template = `
    Hello 
    ${nome}!`

console.log(concatenacao,template)

//Expressões
console.log(`1 + 1 = ${1+1}`)

//Usando arrow functions em templates de strings
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`)