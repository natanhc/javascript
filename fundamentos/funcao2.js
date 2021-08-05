//Armazenando uma função em um variável
const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(1,2)

//Armazenando uma rrow function em uma variável
const soma = (a,b)=>{
    return a+b;
}

console.log(soma(2,3))

//Retorno simplificado OU IMPLICITO
const subtracao = (a,b)=>a-b;
console.log(subtracao(7,3))

