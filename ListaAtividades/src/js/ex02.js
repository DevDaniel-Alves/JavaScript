import './libs';
let inputValorProduto = document.querySelector("#valorProduto");
let select = document.querySelector("#formaPagamento");
let inputTotal = document.querySelector("#totalParcelado");
let inputParcela = document.querySelector('#infoParcela')

function calcular(){
    let valorProduto = inputValorProduto.value;
    let formaPagamento = select.value; 
    let total = valorProduto;

    if(formaPagamento === "V"){
        total = valorProduto -(valorProduto * 0.1);
        inputTotal.value = total
        inputParcela.textContent = ""
    } else {
        inputTotal.value = total
        inputParcela.textContent = `3x de R$ ${(total/3).toFixed(2)}`
        inputTotal.value = ""
    }

}

select.onchange = calcular