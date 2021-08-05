
//Compara valor
console.log('A)','1' == 1)

//Compara valor E TIPO
console.log('B)','1' === 1)

//Compara se é diferente ou igual
console.log('C)','1' != 1)

//Compara valor E TIPO
console.log('D)','1' !== 1)

//Compara maior e menor
console.log('E)', 3 < 2)
console.log('F)', 3 > 2)
console.log('G)', 3 <= 2)
console.log('H)', 3 >= 2)

//Comparando datas
const d1 = new Date(0)
const d2 = new Date(0)
//Dão falsos porque compara a posição na memória
console.log('I)', d1 === d2)
console.log('J)', d1 == d2)
//Dão true porque comparam numbers (milisegundos)
console.log('K)', d1.getTime() === d2.getTime())
console.log('L)', d1.getTime() == d2.getTime())

console.log('M)', undefined == null)
console.log('N)', undefined === null)