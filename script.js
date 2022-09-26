let play = document.querySelector('.play')
let remover = document.querySelector('.remover')

play.addEventListener('click', function(){
    play.classList.add('hide')
    remover.classList.remove('hide')
})

remover.addEventListener('click', function() {
    remover.classList.add('hide')
    play.classList.remove('hide')
})

let playTwo = document.querySelector('.playTwo')
let removerTwo = document.querySelector('.removerTwo')

playTwo.addEventListener('click', function(){
    playTwo.classList.add('hide')
    removerTwo.classList.remove('hide')
})

removerTwo.addEventListener('click', function() {
    removerTwo.classList.add('hide')
    playTwo.classList.remove('hide')
})


let playThree = document.querySelector('.playThree')
let removerThree = document.querySelector('.removerThree')

playThree.addEventListener('click', function(){
    playThree.classList.add('hide')
    removerThree.classList.remove('hide')
})

removerThree.addEventListener('click', function() {
    removerThree.classList.add('hide')
    playThree.classList.remove('hide')
})

