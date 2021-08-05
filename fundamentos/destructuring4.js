function  rand([min = 0,max = 1000]){
    //Aqui eu inverto os valores caso caia no If
    if(min>max) [min, max] = [max, min]
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([510]))