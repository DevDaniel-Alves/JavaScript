import "./libs"

/*function consultar() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({username:'Daniel'})
        }, 5000)
    })
    return p
}

consultar().then((valor) => { //retorna o proprio objeto promisse
    console.log(`Operação relizada ${valor.username}`)
    console.log('Fim do programa')
})

consultar().catch((error) => {// se der erro execulta o catch, se caso for resolve ele executa o then  
    console.log(`Ocorreu um erro ${error}`)
})

    fetch() ele retorna uma promese 
*/

/*let promese = fetch('http://viacep.com.br/ws/79950000/json/')
promese.then((response)=>{
    response.json().then((dados)=>{
        console.log(dados)
    })
})
Promise.catch((error)=>{
    console.log(error.menssage)
})*/

const inputCep = document.querySelector('#cep')
const btn = document.querySelector('#btn')
const divDados = document.querySelector('#dados')

async function consultarCep(cep) { //Colocando isso, automaticamente ele retorna uma promise
    let response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    let dados = await response.json()
    //console.log(dados)
    divDados.innerHTML = `
    Cidade: ${dados.localidade} 
    Estado: ${dados.uf}
    `
}
btn.onclick = () =>{
    consultarCep(inputCep.value)
}