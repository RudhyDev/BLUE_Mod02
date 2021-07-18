const elementoSituacao = document.querySelector('#situacao')
const elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#humor')

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', ()=>{
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = 'C:/Users/Trabalho/Desktop/BLUE/Mod02/Projeto01/assets/img/SemAlma.jpg'
        elementoSituacao.innerText = 'Sem Alma!'
        elementoBtn.value = 'segundo'
    } else if(elementoBtn.value == 'segundo'){
        elementoImg.src = 'C:/Users/Trabalho/Desktop/BLUE/Mod02/Projeto01/assets/img/Puto.jpeg'
        elementoSituacao.innerText = 'Puto!'
        elementoBtn.value = 'terceiro'
    } else if(elementoBtn.value == 'terceiro'){
        elementoImg.src = 'C:/Users/Trabalho/Desktop/BLUE/Mod02/Projeto01/assets/img/host.jpg'
        elementoSituacao.innerText = 'Galante'
        elementoBtn.value = 'quarto'
    } else if(elementoBtn.value == 'quarto'){
        elementoImg.src = 'C:/Users/Trabalho/Desktop/BLUE/Mod02/Projeto01/assets/img/CaraDeCaguei.jpg'
        elementoSituacao.innerText = 'Caguei pra você'
        elementoBtn.value = 'primeiro'
    }
})