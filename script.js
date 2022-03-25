const menu = document.querySelector('.menu-link')
const button = document.querySelector('.menu-icone')
const fecharButton = document.querySelector('.menu-icone').children[0]

button.addEventListener('click', () => {
    menu.classList.toggle('active')
})
