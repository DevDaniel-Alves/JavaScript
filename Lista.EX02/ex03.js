const carrinhoDeCompras = [
    { descricao: 'Teclado mecânico', precoUnitario: 120.00, quantidade: 10 },
    { descricao: 'Mouse sem fio', precoUnitario: 50.00, quantidade: 2 },
    { descricao: 'Monitor LED 24"', precoUnitario: 300.00, quantidade: 5 },
    { descricao: 'HD Externo 1TB', precoUnitario: 80.00, quantidade: 3 }
];
const subtotalCarrinho = carrinhoDeCompras.map((item) => {
    const subTotal = item.quantidade * item.precoUnitario
    return { item, subTotal }
})
const totalCompras = subtotalCarrinho.reduce((precoTotal, item) =>
    precoTotal + item.subTotal, 0)
console.log(subtotalCarrinho)
console.log("Total da compra é: R$" , totalCompras.toFixed(2))