// selecionar os elementos do DOM
let inputvalorDaConta = document.querySelector("#valorDaConta")
let inputQtdeCliente = document.querySelector("#qtdeCliente")
let inputtotalPorCliente = document.querySelector("#totalPorCliente")
let btnCalcular = document.querySelector("#btnCalcular")

function calcularValorPorCliente(){
    let valorDaConta = inputvalorDaConta.value
    let qtdDeClientes = inputQtdeCliente.value
    //CALCULAR TOTAL POR CLIENTE
    let valorPorCliente = valorDaConta / qtdDeClientes
    

    inputtotalPorCliente.value = valorPorCliente
           

}

btnCalcular.onclick = calcularValorPorClient