import "./libs"
import "./navbar"

let inputDisciplina = document.querySelector('#disciplina')
let btnAdicionar = document.querySelector('#btn-adicionar')
let ulDisciplinas = document.querySelector('#lista-disciplinas')

let arrDisciplinas = [
    "Algoritmos e Lógica de Programação",
    "Fundamentos de Design para Interfaces Web",
    "Algoritmos e Estrutura de Dados"
]

function listarDisciplinas() {
    for (let i = 0; i < arrDisciplinas.length; i++) {
        let li = document.createElement('li')
        li.textContent = arrDisciplinas[i]
        li.classList.add("list-group-item")
        ulDisciplinas.appendChild(li)
    }
}
listarDisciplinas()
function adicionarDisciplina() {

    if (inputDisciplina.value) {
        let li = document.createElement('li')
        li.textContent = inputDisciplina.value
        li.classList.add("list-group-item")
        ulDisciplinas.appendChild(li)
        // limpar o input
        inputDisciplina.value = ""
        // dar foco ao input
        inputDisciplina.focus()
    }
}

btnAdicionar.onclick = adicionarDisciplina


