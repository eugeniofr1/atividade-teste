

function inverteString(string){

    let stringInvertida = []

    let stringSeparada = string.split('')
    stringSeparada.forEach(Element => {
        stringInvertida.unshift(Element)
    });
    return stringInvertida.join('')
}

console.log(inverteString("Eugênio"));