const valores = [7.7, 8.9, 6.2, 9.4]

console.log("Array =", valores)

console.log("VALROES INDEXADOS NO 0 E 3 =",valores[0],valores[3])

valores[4] = 10
console.log("Array com acréscimo =", valores)

console.log("tamanho do Array =", valores.length)

valores.push({id:3},false,null,'teste')


console.log("Array com múltiplos elementos =", valores)


