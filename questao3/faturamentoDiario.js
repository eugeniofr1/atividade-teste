// Importando dados do Json
const dadosJson = require('./dados.json');
//console.log(dadosJson)


function calcularMenorFaturamento(){
    let menorFaturamento = 0
    dadosJson.forEach(Element =>{
        if (menorFaturamento === 0){
            menorFaturamento = Element
        }
        if(menorFaturamento.valor > Element.valor && Element.valor !== 0){
            menorFaturamento = Element
        }
        
    })
    console.log(`O menor faturamento foi do dia ${menorFaturamento.dia} no valor de R$ ${menorFaturamento.valor.toFixed(2)}`)
}

function calcularMaiorFaturamento(){
    let maiorFaturamento = 0
    dadosJson.forEach(Element =>{
        if (maiorFaturamento === 0){
            maiorFaturamento = Element
        }
        if(maiorFaturamento.valor < Element.valor && Element.valor !== 0){
            maiorFaturamento = Element
        }
        
    })
    console.log(`O maior faturamento foi do dia ${maiorFaturamento.dia} no valor de R$ ${maiorFaturamento.valor.toFixed(2)}`)
}



function calcularMediaDeFaturamento(){
    let media = 0
    let tamanhoDaListaSemOsZeros = 0
    dadosJson.forEach(Element =>{
        if(Element.valor !== 0){
            tamanhoDaListaSemOsZeros += 1
        }
        media += Element.valor

    })
    media = media / tamanhoDaListaSemOsZeros
    compararMediaDiariaComMensal(media)

}

function compararMediaDiariaComMensal(media){
    let diasComMediaMaiorQueMensal = 0;
    dadosJson.forEach(Element =>{
        if(Element.valor > media){
            diasComMediaMaiorQueMensal += 1
        }
    })
    console.log(`${diasComMediaMaiorQueMensal} dias tiveram o valor de faturamento diário superior à média mensal`)
}


calcularMenorFaturamento()
calcularMaiorFaturamento()
calcularMediaDeFaturamento()