//Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(1,2)
imprimirSoma(1)
imprimirSoma(2,3,4,5)
imprimirSoma()

//Funcao com retorno
function soma(a,b=0){
    return a+b;
}

console.log(soma(1,2))
console.log(soma(4))
