let inputNome = document.querySelector('#nome')


inputNome?.addEventListener('keyup', ()=>{
    if(inputNome.value.length < 3){
        inputNome.style.borderColor = 'red'
    } else {
        inputNome.style.borderColor = 'green'
    }
})

