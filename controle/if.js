
function boaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota)
    }
}

boaNoticia(8)
boaNoticia(5)

function imprimeSeVerdadeiro(valor){
    if(valor){
        console.log('É verdade: ' + valor)
    }
}

imprimeSeVerdadeiro(" ")
imprimeSeVerdadeiro(NaN)
imprimeSeVerdadeiro(7)
