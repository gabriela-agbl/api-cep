let cep = document.getElementById('input_cep')
let btn = document.getElementById('btn')
let logradouro = document.getElementById('logradouro')
let bairro = document.getElementById('bairro')
let regiao = document.getElementById('regiao')
let estado = document.getElementById('estado')

const consultarCEP = (cep_buscado) =>{
    fetch(`https://viacep.com.br/ws/${cep_buscado}/json/`)
        .then((res) => res.json())
        .then((data) =>{
            logradouro.innerText = data.logradouro
            bairro.innerText = data.bairro
            regiao.innerText = data.regiao
            estado.innerText = data.estado
        })
        .catch((err) =>{
            logradouro.innerText = 'Logradouro não encontrado'
            bairro.innerText = 'Bairro não encontrado'
            regiao.innerText = 'Região não encontrada'
            estado.innerText = 'Estado não encontrado'
        })
}

btn.addEventListener('click', function(event){
    consultarCEP(cep.value)

    event.preventDefault()
})