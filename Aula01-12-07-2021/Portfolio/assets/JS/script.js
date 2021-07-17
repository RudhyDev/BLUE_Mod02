let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let textArea = document.querySelector("#mensagem")
let btnEnviar = document.querySelector('#enviar')


inputNome?.addEventListener('keyup', ()=>{
    if(inputNome.value.length < 3){
        inputNome.style.borderColor = 'red'
    } else {
        inputNome.style.borderColor = 'green'
    }
})

inputEmail?.addEventListener('keyup', ()=>{
    if(inputEmail.value.indexOf('@') ==-1 || inputEmail.value.indexOf('.') ==-1){
        inputEmail.style.borderColor ='red'
    } else {
        inputEmail.style.borderColor ='green'
    }
})

textArea?.addEventListener('keyup', ()=>{
    if(textArea.value.length > 100){
        textArea.style.borderColor ='red'
    } else {
        textArea.style.borderColor ='green'
    }
})

btnEnviar.addEventListener('click', ()=>{
    // copiar aquela função aqui do botão
})