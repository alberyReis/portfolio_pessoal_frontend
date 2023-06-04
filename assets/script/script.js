function menuHamburguer() {
    const hamburguer = document.querySelector('.menu_hamburguer')
    const navHamburguer = document.querySelector('.nav_hamburguer')
    const banner = document.querySelector('.banner')
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