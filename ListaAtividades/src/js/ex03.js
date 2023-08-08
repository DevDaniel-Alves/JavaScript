import './libs'

let inputHrs = document.querySelector("#hrsTrabalhadas");
let inputsalario = document.querySelector("#salarioHora");
let inputTotal = document.querySelector("#total");
let btnCalcular = document.querySelector("#btnCalcular");

function calcularSalario() {
    let hrs = inputHrs.value
    let qtdHoras = inputsalario.value
    let salario = hrs * qtdHoras

    inputTotal.value = `Salário igual a R$ ${salario}`;
}

btnCalcular.onclick = calcularSalario;