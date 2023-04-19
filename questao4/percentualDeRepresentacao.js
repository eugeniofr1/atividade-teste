const faturamento = [
    {
        "estado": "SP",
        "faturado": 67836.43
    },
    {
        "estado": "RJ",
        "faturado": 36678.66
    },
    {
        "estado": "MG",
        "faturado": 29229.88
    },
    {
        "estado": "ES",
        "faturado": 27165.48
    },
    {
        "estado": "Outros",
        "faturado": 19849.53
    },
]

function calcularValorTotal(){
    let totalMensal = 0
    faturamento.forEach(Element =>{
        totalMensal += Element.faturado
    })

    calculaPercentual(totalMensal)
}

function calculaPercentual(totalMensal){
    let percentual = 0
    faturamento.forEach(Element =>{
        percentual = Element.faturado / totalMensal * 100

        console.log(`${Element.estado} faturou ${percentual.toFixed(2)}%`)
    })

}

calcularValorTotal()