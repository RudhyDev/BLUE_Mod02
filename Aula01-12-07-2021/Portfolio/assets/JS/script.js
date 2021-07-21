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
    } else {
        nomeOk = true
        inputNome.style.borderColor = 'green'
        
    }
})

inputEmail.addEventListener('keyup', ()=>{
    if(inputEmail.value.indexOf('@') ==-1 || inputEmail.value.indexOf('.') ==-1){
        inputEmail.style.borderColor ='red'
    } else {
        emailOk = true
        inputEmail.style.borderColor ='green'
        
    }
})

textArea.addEventListener('keyup', ()=>{
    if(textArea.value.length > 500){
        textArea.style.borderColor ='red'
    } else {
        msgOk = true
        textArea.style.borderColor ='green'
    }
})


if(nomeOk == true && emailOk == true && msgOk == true) {
    btnEnviar.disabled = false
    btnEnviar.addEventListener('click', ()=>{
        alert('Formulário enviado!')
    })
} else {
    console.log('   ERRROU')
}


