// selecionar os elementos do DOM
let inputvalorDaConta = document.querySelector("#valorDaConta")
let inputqtdeCliente = document.querySelector("#qtdeCliente")
let inputtotalPorCliente = document.querySelector("#totalPorCliente")
let btnCalcular = document.querySelector("#btnCalcular")

function calcularValorPorCliente(){
    let varlorDaConta = inputValorDaConta.value
    let qtdDeClientes = inputQtdeClientes.value
    //CALCULAR TOTAL POR CLIENTE
    let valorPorCliente = valorDaConta / qtdeDeClientes

    inputtotalPorCliente.value = valorPorCliente        
}

btnCalcular.onClick = calcularValorPorCliente