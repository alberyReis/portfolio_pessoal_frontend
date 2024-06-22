const hamburguer = document.querySelector('#hamburguer__icone')
const navHamburguer = document.querySelector('#hamburguer__nav')
const banner = document.querySelector('#apresentacao')

const menuHamburguerAberto = (navHamburguer, apresentacao) => {
    navHamburguer.style.display = 'flex'
    apresentacao.style.display = 'none'
}

const menuHamburguerFechado = (navHamburguer, apresentacao) => {
    navHamburguer.style.display = 'none'
    apresentacao.style.display = 'block'
}

hamburguer.addEventListener('click', () => {
    if (navHamburguer.style.display == 'none') {
        menuHamburguerAberto(navHamburguer, apresentacao)
    } else {
        menuHamburguerFechado(navHamburguer, apresentacao)
    }
})

navHamburguer.addEventListener('click', () => {
    if (navHamburguer.style.display == 'flex') {
        menuHamburguerFechado(navHamburguer, apresentacao)
    }
})