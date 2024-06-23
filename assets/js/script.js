const hamburguer = document.querySelector('#hamburguer__icone')
const navHamburguer = document.querySelector('#hamburguer__nav')
const banner = document.querySelector('#apresentacao')

const abrirMenuHamburguer = (navHamburguer, apresentacao) => {
    navHamburguer.style.display = 'flex'
    apresentacao.style.display = 'none'
}

const fecharMenuHamburguer = (navHamburguer, apresentacao) => {
    navHamburguer.style.display = 'none'
    apresentacao.style.display = 'block'
}

hamburguer.addEventListener('click', () => {
    if (navHamburguer.style.display === 'none') {
        abrirMenuHamburguer(navHamburguer, apresentacao)
    } else {
        fecharMenuHamburguer(navHamburguer, apresentacao)
    }
})

navHamburguer.addEventListener('click', () => {
    if (navHamburguer.style.display === 'flex') {
        fecharMenuHamburguer(navHamburguer, apresentacao)
    }
})