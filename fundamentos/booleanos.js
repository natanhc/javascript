let isAtivo = false;
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(isAtivo)

//Negação
console.log(!isAtivo)

//Como descobrir através de operador lógico se um valor é TRUE or FALSE
console.log("Valores verdadeiros:")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(isAtivo=true)

console.log("Valores falsos:")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log("Finalizando:")
console.log(!!('' || null || 0 || ' N '))


console.log("Exemplo de aplicação:")
let nome = ''
console.log(nome || 'Desconhecido')
nome = "Natan"
console.log(nome || 'Desconhecido')