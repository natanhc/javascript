Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log("Aprovado com excelência!")
    }else if(nota.entre(7,8.99)){
        console.log("Aprovado!")
    }else if(nota.entre(4,6.99)){
        console.log("Em recuperação!")
    }else{
        console.log("Reprovado!")
    }
}

imprimirResultado(8.5)