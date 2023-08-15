import "./libs"

let inputDisciplina = document.querySelector('#disciplina')
let btnAdicionar = document.querySelector('#btnAdd')
let ulDisciplinas = document.querySelector('#listaDisciplinas')

let arrDisciplinas = [
    "Algoritimos e lógica de programação",
    "Fundamentos de Estatistica",
    "Algoritmos e Estrutura de Dados"
]

function listasDisciplinas() {
    for (let i = 0; i <  arrDisciplinas.length; i++) {
        let li = document.createElement('li')
        li.textContent = arrDisciplinas[i]
        li.classList.add("list-group-item")
        ulDisciplinas.appendChild(li)
    }
}
listasDisciplinas()

function adicionarDisciplina() {
    let li = document.createElement('li')

    if (inputDisciplina.value == false) {
        alert("Preencha os campos abaixo")
    } else {
        li.textContent = inputDisciplina.value
        //li.className="list-group-item"
        //li.setAttribute('class','list-group-item')
        li.classList.add("list-group-item")
        ulDisciplinas.appendChild(li)
        //limpar o input
        inputDisciplina.value = " "
        // dar foco ao input
        inputDisciplina.focus()
    }
}

btnAdicionar.onclick = adicionarDisciplina
