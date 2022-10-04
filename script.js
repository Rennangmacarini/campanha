let play = document.querySelector('.play')
let remover = document.querySelector('.remover')
let encarte = document.querySelector('h6')


play.addEventListener('click', function(){
    play.classList.add('hide')
    remover.classList.remove('hide')
})

remover.addEventListener('click', function() {
    remover.classList.add('hide')
    play.classList.remove('hide')
})

encarte.addEventListener('click', function(){
    play.classList.add('hide')
    remover.classList.remove('hide')
    return
})

