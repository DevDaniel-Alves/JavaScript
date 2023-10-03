let pessoa = {
    nome: 'Gabriel Prates',
    idade: 36
}

console.log(pessoa.nome)
console.log(pessoa.idade)

let pessoas = [
    {
        nome: "Gabriel Prates",
        idade: 36
    },
    {
        nome: "Joao da silva",
        idade: 24
    },
    {
        nome: "Predo",
        idade: 18
    }

]

console.log(pessoas[0])
console.log(pessoas[0].nome)

for(let p of pessoas){
    console.log(p.nome)
}