const escola = "cod3r"

//Retorna letra na quarta posição
console.log(escola.charAt(4))


//Retorna letra na quinta posição, inexistente
console.log(escola.charAt(5))

//Busca valor em ASC ou unicode
console.log(escola.charCodeAt(3))

//Busca o índice de um valro se ter na string
console.log(escola.indexOf('o'))

//Retorna a string a partir desse índice informado
console.log(escola.substring(1))
console.log(escola.substring(0,3))

//Trocar caracteres por outro
console.log(escola.replace(3,"e"))

//Transorma essa cadeia de palavras num array
console.log("Natan,Paloma,Wendell".split(','))