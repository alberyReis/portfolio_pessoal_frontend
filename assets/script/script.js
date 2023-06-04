const hamburguer = document.querySelector('.menu_hamburguer img')
const body = document.querySelector('body')
const navHamburguer = document.querySelector('.nav_hamburguer')
const banner = document.querySelector('.banner')
const li = document.querySelectorAll('.nav_hamburguer li')
const [li1, li2, li3, li4, li5] = li

hamburguer.addEventListener('click', () => {
    if (navHamburguer.style.display == 'none') {
        navHamburguer.style.display = 'flex'
        banner.style.display = 'none' 
    } else {
        navHamburguer.style.display = 'none'
        banner.style.display = 'block'
    }
})








