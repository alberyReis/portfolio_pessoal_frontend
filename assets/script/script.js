function menuHamburguer() {
    const hamburguer = document.querySelector('#hamburguer__icone')
    const navHamburguer = document.querySelector('#hamburguer__nav')
    const banner = document.querySelector('#banner')
    hamburguer.addEventListener('click', () => {
        if (navHamburguer.style.display == 'none') {
            navHamburguer.style.display = 'flex'
            banner.style.display = 'none'
        } else {
            navHamburguer.style.display = 'none'
            banner.style.display = 'block'
        }
    })
}
menuHamburguer()