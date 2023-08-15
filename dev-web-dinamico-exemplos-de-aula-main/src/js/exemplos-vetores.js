// criação de vetores
//Notação Literal
let cores = ["Vermelho", "Amarelo", "Azul"]
let numero = [2, 4, 8, 12]

// Construtor de Array
let nomes = new Array("Daniel", "Carlos", "Gabriel")

// Acessando posições no Array

let cor2 = cores[1]

console.log(cores)

//Atribuindo / Sobrescrevendo valores

numero[1] = 5
console.log(numero)
console.log(numero.length)
numero[numero.length] = 20
console.log(numero)

//Métodos úteis de Array
    //Adicionar item no final do array

console.log(nomes)
nomes.push("Diego") //adicionou Diego no final da lista
console.log(nomes)

//Adicionar item no inicio do Array
nomes.unshift("Marcos") // adicionou marcos no começou
console.log(nomes)

// Remover item no final do array
nomes.pop() //removeu diego do final
console.log(nomes)

// Remover item no inicio do array
nomes.shift()
console.log(nomes)