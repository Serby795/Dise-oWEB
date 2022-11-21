const button = document.querySelector('.btn-menu')
const menu    = document.querySelector('.menu')

button.addEventListener('click',()=>{
    menu.classList.toggle('activo')
})
