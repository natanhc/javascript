const valores = [7.7,8.9,6.3,9.2]
console.log("Todos os valores: ",valores)

console.log("Alguns índices: ", valores[0],valores[2],valores[9])

valores[9]=10
console.log("Alguns índices: ", valores[0],valores[2],valores[9])

console.log("Tamanho do array: ", valores.length)

valores.push({id: 3},null,'teste',false)

console.log("Todos os valores: ",valores)
console.log("Último valor do array: ",valores.pop())