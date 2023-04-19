let valor1 = 0;
let valor2 = 1;

function descobrirSeEFibbonaci(num){
    while (valor2 < num){
        const proxValor = valor1 + valor2;
        valor1 = valor2;
        valor2 = proxValor;
       
    }

    if(valor2 === num){
        console.log(`O número ${num} pertence a sequência de Fibonacci`)
    }else{
        console.log(`O número ${num} não pertence a sequência de Fibonacci`)
    }
}

descobrirSeEFibbonaci(7);