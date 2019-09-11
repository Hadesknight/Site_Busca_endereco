var cep = document.querySelector('.cep')
var endereco = document.querySelector('.endereco')
var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.cidade')
var estado = document.querySelector('.estado')
var inputElement = document.querySelector('.input')
var btnElement = document.querySelector('.btn')
var errorElement = document.querySelector('.error')


renderPagina = function(){
    
    valor = inputElement.value
    axios.get("https://viacep.com.br/ws/"+valor+"/json/unicode/")
    .then(function(response){
        errorElement.innerHTML=" "
        cep_ = document.createTextNode(response.data.cep)
        cep.innerHTML=" "
        cep.appendChild(cep_)
        endereco_ = document.createTextNode(response.data.logradouro)
        endereco.innerHTML=" "
        endereco.appendChild(endereco_)
        bairro_ = document.createTextNode(response.data.bairro)
        bairro.innerHTML = " "
        bairro.appendChild(bairro_)
        cidade_ = document.createTextNode(response.data.localidade)
        cidade.innerHTML=" "
        cidade.appendChild(cidade_)
        estado_ = document.createTextNode(response.data.uf)
        estado.innerHTML=" "
        estado.appendChild(estado_)
    })
    .catch(function(error){
        errorElement.innerHTML = " "
        cep.innerHTML = " "
        endereco.innerHTML =  " "
        bairro.innerHTML =  " "
        cidade.innerHTML =  " "
        estado.innerHTML =  " "
        error = document.createTextNode("Cep Incorreto")
        errorElement.appendChild(error)
        console.warn(error)
    })
}


btnElement.onclick = renderPagina
