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
        src: 'https://devicon-website.vercel.app/api/html5/original.svg',
        alt: 'logo do HTML',
        subtitulo: 'HTML',
        paragrafo: 'HTML é a linguagem de marcação que estrutura o conteúdo e os elementos de uma página web.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/css3/original.svg',
        alt: 'Logo do CSS',
        subtitulo: 'CSS',
        paragrafo: 'CSS é a linguagem usada para estilizar elementos HTML e definir o layout visual de páginas web.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/javascript/original.svg',
        alt: 'Logo do JavaScript',
        subtitulo: 'JavaScript',
        paragrafo: 'JavaScript é uma linguagem de programação leve, dinâmica e amplamente usada para criar interatividade em páginas web.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/typescript/original.svg',
        alt: 'Logo do TypeScript',
        subtitulo: 'TypeScript',
        paragrafo: 'TypeScript é um superset do JavaScript que adiciona tipagem estática ao código.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/react/original.svg',
        alt: 'Logo do React',
        subtitulo: 'React',
        paragrafo: 'React é uma biblioteca JavaScript para construir interfaces de usuário reativas e componentizadas de forma eficiente.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/react/original.svg',
        alt: 'Logo do ReactNative',
        subtitulo: 'React Native',
        paragrafo: 'React Native é um framework que permite criar aplicativos móveis nativos usando JavaScript e React.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/nodejs/original.svg',
        alt: 'Logo do Node',
        subtitulo: 'Node',
        paragrafo: 'Node.js é um ambiente de execução JavaScript no servidor, permitindo construir aplicações back-end escaláveis e rápidas.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/express/original.svg?color=%23D0B5B5',
        alt: 'Logo do Express.js',
        subtitulo: 'Express.js',
        paragrafo: 'Express.js é um framework minimalista para Node.js que facilita a criação de APIs e servidores web.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/git/original.svg',
        alt: 'Logo do Git',
        subtitulo: 'Git',
        paragrafo: 'Git é um sistema de controle de versão distribuído que permite gerenciar e rastrear mudanças no código-fonte de projetos.',
    },
    {
        src: 'https://devicon-website.vercel.app/api/github/original.svg',
        alt: 'Logo do GitHub',
        subtitulo: 'GitHub',
        paragrafo: 'GitHub é uma plataforma online que hospeda repositórios Git, facilitando colaboração e controle de versões em projetos de software.'
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
        paragrafo: '2025 - Estácio',
    },
    {
        href: 'https://cursos.alura.com.br/user/albery-reis-88/program/7/certificate',
        src: './assets/img/logo_alura.png',
        alt: 'Logo da Alura',
        subtitulo: 'Formação Oracle Next Education Front-end',
        paragrafo: '2023 - Alura',
    },
    {
        href: 'https://hermes.dio.me/certificates/EBB3A54E.pdf',
        src: './assets/img/dio_logo.png',
        alt: 'Logo da DIO',
        subtitulo: 'Formação TypeScript Fullstack Developer',
        paragrafo: '2023 - DIO',
    },
    {
        href: 'https://hermes.dio.me/certificates/5IFV84LV.pdf',
        src: './assets/img/dio_logo.png',
        alt: 'Logo da DIO',
        subtitulo: 'Formação Mobile Developer',
        paragrafo: '2025 - DIO',
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
            <div>
                <img class='cursos__img' src=${curso.src} alt=${curso.alt}>
                <h2 class='cursos__subtitulo'>${curso.subtitulo}</h2>
            </div>
            <p class='cursos__paragrafo'>${curso.paragrafo}</p>
        </div>`

    containerCursos.append(cursoContainerCard)
})

// SECÃO PROJETOS

const projetos = [
    {
        subtitulo: 'Portifolio Fernando',
        paragrafo: 'Este portfólio foi desenvolvido para destacar as habilidades do eletrotécnico Fernando. Utilizando React, criei um site moderno e responsivo que se adapta a qualquer dispositivo. Além disso, implementei a API de mensageria do EmailJS para facilitar a comunicação direta e eficiente.',
        href: 'https://potfoliofernando.vercel.app/',
        media01: '(max-width:575.98px)',
        srcSet01: './assets/img/fernando_small.png',
        media02: '(max-width:767.98px)',
        srcSet02: './assets/img/fernando_medium.png',
        src: './assets/img/fernando_large.png',
        alt: 'Portifolio de Fernando',
    },
    {
        subtitulo: 'Gerador de Recibos',
        paragrafo: 'Gerador de Recibos é uma aplicação em React e TypeScript, criada para a Magic Fest. Basta informar o nome do cliente e adicionar produtos com quantidade, descrição e preço. O sistema gera automaticamente o recibo com data, número e valor total.',
        href: 'https://receiptgeneratormf.vercel.app/',
        media01: '(max-width:575.98px)',
        srcSet01: './assets/img/receipt_generator_large.png',
        media02: '(max-width:767.98px)',
        srcSet02: './assets/img/receipt_generator_large.png',
        src: './assets/img/receipt_generator_large.png',
        alt: 'Gerador de Recibos',
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