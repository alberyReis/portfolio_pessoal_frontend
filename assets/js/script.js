// SEÇÂO MENU HAMBURGUER

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

// SEÇÃO DE HABILIDADES

const habilidades = [
    {
        src: './assets/img/html_icon.png',
        alt: 'logo do HTML',
        subtitulo: 'HTML',
        paragrafo: 'HTML é a linguagem essencial para criar páginas web, usando tags para organizar texto, imagens e links.',
    },
    {
        src: './assets/img/css_icon.png',
        alt: 'Logo do CSS',
        subtitulo: 'CSS',
        paragrafo: 'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação e o layout de elementos em páginas web.',
    },
    {
        src: './assets/img/javascript_icon.png',
        alt: 'Logo do JavaScript',
        subtitulo: 'JavaScript',
        paragrafo: 'JavaScript é uma linguagem de programação de alto nível amplamente utilizada para desenvolvimento web.',
    },
    {
        src: './assets/img/react_icon.png',
        alt: 'Logo do React',
        subtitulo: 'React',
        paragrafo: 'React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário(UI) interativas e reativas.',
    },
    {
        src: './assets/img/git_icon.png',
        alt: 'Logo do Git',
        subtitulo: 'Git',
        paragrafo: 'Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear e gerenciar mudanças no código- fonte durante o desenvolvimento de software',
    },
    {
        src: './assets/img/github_icon.png',
        alt: 'Logo do GitHub',
        subtitulo: 'GitHub',
        paragrafo: 'GitHub é uma plataforma de hospedagem de código-fonte que utiliza o sistema de controle de versão Git',
    },
    {
        src: './assets/img/node_icon.png',
        alt: 'Logo do Node',
        subtitulo: 'Node',
        paragrafo: 'Node.js é um ambiente de execução JavaScript do lado do servidor, que permite aos desenvolvedores criar aplicativos escaláveis e de alto desempenho.',
    },
    {
        src: './assets/img/sql_icon.png',
        alt: 'Logo do SQL',
        subtitulo: 'SQL',
        paragrafo: 'SQL (Structured Query Language) é uma linguagem de programação utilizada para gerenciar e manipular bancos de dados relacionais.',
    },
]

const secaoHabilidades = document.querySelector('#tecnologias')
const tituloHabilidades = document.createElement('h1')
tituloHabilidades.classList.add('tecnologias__titulo')
tituloHabilidades.innerHTML = 'Tecnologias'
secaoHabilidades.append(tituloHabilidades)

const containerHabilidades = document.createElement('div')
containerHabilidades.classList.add('cursos__container')
secaoHabilidades.append(containerHabilidades)

habilidades.forEach((habilidade) => {
    const habilidadesContainerCard = document.createElement('div')
    habilidadesContainerCard.classList.add('tecnologias__container')

    habilidadesContainerCard.innerHTML =
        `<div class='tecnologias__card'>
            <img class='tecnologias__img' src=${habilidade.src} alt=${habilidade.alt}>
            <h2 class='tecnologias__subtitulo'>${habilidade.subtitulo}</h2>
            <p class='tecnologias__paragrafo'>${habilidade.paragrafo}</p>
        </div>`

    containerHabilidades.append(habilidadesContainerCard)
})

// SEÇÃO DE CURSOS

const cursos = [
    {
        href: './assets/arquivos/historicoescolar.pdf',
        src: './assets/img/logo_estacio.png',
        alt: 'logo da Estácio',
        subtitulo: 'Graduação em Engenharia de Software',
        paragrafo: '2024 - Estácio',
    },
    {
        href: 'https://cursos.alura.com.br/user/albery-reis-88/program/7/certificate',
        src: './assets/img/logo_alura.png',
        alt: 'Logo da Alura',
        subtitulo: 'Programa Oracle Next Education F2 T5 Front-end',
        paragrafo: '2023 - Alura',
    },
    {
        href: 'https://cursos.alura.com.br/degree/certificate/5b3cea4e-fc2a-4a7e-8eb4-564058658582',
        src: './assets/img/logo_alura.png',
        alt: 'Logo da Alura',
        subtitulo: 'Formação SQL com MySQL Server da Oracle - ONE',
        paragrafo: '2024 - Alura',
    },
]

const secaoCursos = document.querySelector('#cursos')
const tituloCursos = document.createElement('h1')
tituloCursos.classList.add('cursos__titulo')
tituloCursos.innerHTML = 'Formação'
secaoCursos.append(tituloCursos)

const containerCursos = document.createElement('div')
containerCursos.classList.add('cursos__container')
secaoCursos.append(containerCursos)

cursos.forEach((curso) => {
    const cursoContainerCard = document.createElement('a')
    cursoContainerCard.setAttribute('target', '_blank')
    cursoContainerCard.setAttribute('href', `${curso.href}`)

    cursoContainerCard.innerHTML =
        `<div class='cursos__card'>
            <img class='cursos__img' src=${curso.src} alt=${curso.alt}>
            <h2 class='cursos__subtitulo'>${curso.subtitulo}</h2>
            <p class='cursos__paragrafo'>${curso.paragrafo}</p>
        </div>`

    containerCursos.append(cursoContainerCard)
})

// SECÃO PROJETOS

const projetos = [
    {
        subtitulo: 'Portifolio Fernando',
        paragrafo: 'Este portfólio foi desenvolvido para destacar as habilidades do econstrotécnico Fernando.Utilizando React, criei um site moderno e responsivo que se adapta a qualquer dispositivo.Além disso, implementei a API de mensageria do EmailJS para facilitar a comunicação direta e eficiente.',
        href: 'https://potifolio-fernando.vercel.app/',
        media01: '(max-width:575.98px)',
        srcSet01: './assets/img/fernando_small.png',
        media02: '(max-width:767.98px)',
        srcSet02: './assets/img/fernando_medium.png',
        src: './assets/img/fernando_large.png',
        alt: 'Imagem do site intitulado: ',
    },
]

const secaoProjetos = document.querySelector('#projetos')
const tituloProjetos = document.createElement('h1')
tituloProjetos.classList.add('projetos__titulo')
tituloProjetos.innerHTML = 'Projetos'
secaoProjetos.append(tituloProjetos)

const containerProjetos = document.createElement('div')
containerProjetos.classList.add('projetos__container')
secaoProjetos.append(containerProjetos)

projetos.forEach((projeto) => {
    const projetosContainerCard = document.createElement('div')
    projetosContainerCard.classList.add('projetos__container')

    projetosContainerCard.innerHTML =
        `<h2 class='projetos__subtitulo'>${projeto.subtitulo}</h2>
        <p class='projetos__paragrafo'>${projeto.paragrafo}</p>
        <a target='_blank' href=${projeto.href}>
            <picture>
                <source media=${projeto.media01} srcset=${projeto.srcSet01}>
                <source media=${projeto.media02} srcset=${projeto.srcSet02}>
                <img class='projetos__img' src=${projeto.src} alt=${projeto.alt}>
            </picture>
        </a>`

    secaoProjetos.append(projetosContainerCard)
})

// SECAO DE CONTATO

contatos = [
    {
        href: 'https://goo.gl/maps/irbr6TdsbGXaWs9SA?coh=178572&entry=tt',
        subtitulo: 'LOCALIZAÇÂO',
        paragrafo: 'Aracaju-SE, BRA',
        src: './assets/img/localizacao_icon.png',
        alt: 'Icone de GPS',
    },
    {
        href: 'mailto:albery.reis.88@gmail.com',
        subtitulo: 'E-MAIL',
        paragrafo: 'albery.reis.88@gmail.com',
        src: './assets/img/email_icon.png',
        alt: 'Icone de Email',
    },
    {
        href: 'tel:5579991750905',
        subtitulo: 'TELEFONE',
        paragrafo: '(79) 99175-0905',
        src: './assets/img/ligacao_icon.png',
        alt: 'Icone de Telefone',
    },
]

const contatoInfo = document.querySelector('#contato_info')
contatoInfo.classList.add('contato__info')

contatos.forEach((contato) => {
    const contatoInfoContainerCard = document.createElement('a')
    contatoInfoContainerCard.setAttribute('target', '_blank')
    contatoInfoContainerCard.setAttribute('href', `${contato.href}`)

    contatoInfoContainerCard.innerHTML =
        `<div class='contato__card'>
            <span>
                <h2 class='contato__subtitulo'>${contato.subtitulo}</h2>
                <p class='contato__paragrafo'>${contato.paragrafo}</p>
            </span>
            <span>
                <img class='contato__img' src=${contato.src} alt=${contato.alt}>
            </span>
        </div>`

    contatoInfo.append(contatoInfoContainerCard)
})