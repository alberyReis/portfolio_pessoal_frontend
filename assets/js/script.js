function menuHamburguer() {
    const hamburguer = document.querySelector('#hamburguer__icone')
    const navHamburguer = document.querySelector('#hamburguer__nav')
    const banner = document.querySelector('#apresentacao')
    hamburguer.addEventListener('click', () => {
        if (navHamburguer.style.display == 'none') {
            navHamburguer.style.display = 'flex'
            apresentacao.style.display = 'none'
        } else {
            navHamburguer.style.display = 'none'
            apresentacao.style.display = 'block'
        }
    })
    navHamburguer.addEventListener('click', () => {
        if(navHamburguer.style.display == 'flex') {
            navHamburguer.style.display = 'none'
            apresentacao.style.display = 'block'
        }
    })
}
menuHamburguer()