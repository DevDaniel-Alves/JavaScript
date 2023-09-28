const contas = [
    { descricao: 'Conta de Luz', valor: 100.50 },
    { descricao: 'Aluguel', valor: 800.00 },
    { descricao: 'Supermercado', valor: 250.75 },
    { descricao: 'Internet', valor: 55.30 },
    { descricao: 'Restaurante', valor: 70.90 }
];

const total = contas.reduce((res, quant) => {
    return (res + quant.valor)
}, 0)
const menores = contas.filter(contas => (contas.valor < 250))
console.log(total)
for (let i = 0; i < menores.length; i++) {
    console.log(menores[i])
}