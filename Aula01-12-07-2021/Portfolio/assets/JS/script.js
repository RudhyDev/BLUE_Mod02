let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let textArea = document.querySelector("#mensagem")
let btnEnviar = document.querySelector('#enviar')
let nomeOk = false
let emailOk = false
let msgOk = false

btnEnviar.disabled = true


inputNome.addEventListener('keyup', ()=>{
    if(inputNome.value.length < 3){
        inputNome.style.borderColor = 'red'
        nomeOk = false
    } else {
        inputNome.style.borderColor = 'green'
        nomeOk = true
    }
})

inputEmail.addEventListener('keyup', ()=>{
    if(inputEmail.value.indexOf('@') ==-1 || inputEmail.value.indexOf('.') ==-1){
        inputEmail.style.borderColor ='red'
        emailOk = false
    } else {
        inputEmail.style.borderColor ='green'
        emailOk = true
    }
})

textArea.addEventListener('keyup', ()=>{
    if(textArea.value.length > 500){
        textArea.style.borderColor ='red'
        msgOk = false
    } else {
        textArea.style.borderColor ='green'
        msgOk = true
    }
})

if(nomeOk == true && emailOk == true && msgOk == true){
    btnEnviar.disabled = false
    alert('Mensagem envida!')
} else{
    btnEnviar.disabled = true
}