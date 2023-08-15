import './libs'
let inputValorDaConta = document.querySelector("#valorDaConta");
let inputQtdeClientes = document.querySelector("#qtdeClientes");
let inputTotalPorCliente = document.querySelector("#totalPorCliente");
let btnCalcular = document.querySelector("#btnCalcular");


function calcularValorPorCliente(){
    let valorDaConta = inputValorDaConta.value
    let qtdeDeClientes = inputQtdeClientes.value
    // calcular total por cliente
    let valorPorCliente = valorDaConta / qtdeDeClientes

    inputTotalPorCliente.value = valorPorCliente
}

btnCalcular.onclick = calcularValorPorCliente