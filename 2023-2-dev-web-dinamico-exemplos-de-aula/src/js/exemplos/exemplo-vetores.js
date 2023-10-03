// criação de vetores
// Notação Literal
let cores = ["Vermelho","Amarelo","Azul"]
let numeros = [2,4,8,12]

// Construtor de Array 
let nomes = new Array("Caio","Carlos","Marcia")

// Acessando posições do vetor
let cor2 = cores[1] 
console.log(cores)

// Atribuindo / Sobrescrevendo valores
numeros[1] = 5
console.log(numeros)
numeros[numeros.length] = 20
console.log(numeros)

// Métodos úteis de Array

// Adicionar item no Final do Array
console.log(nomes)

nomes.push("Diego")
console.log(nomes)

// Adicionar item no inicio do Array
nomes.unshift("Marcos")
console.log(nomes)

// remover item do Final do Array
nomes.pop()
console.log(nomes)
// remover item do inicio do Array
nomes.shift()
console.log(nomes)
