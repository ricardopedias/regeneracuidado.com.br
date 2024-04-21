
let siteName            = 'Regenera Cuidado';

let linkPageIndex       = 'index.html';

let linkPageConditions   = 'termos-e-condicoes.html';
let linkPageConsultancy  = 'treinamento-consultoria.html';
let linkPageContact      = 'fale-conosco.html';
let linkPageHomeCare     = 'assistencia-domiciliar.html';
let linkPageAboutUs     = 'sobre-nos.html';
let linkPagePrivacy      = 'privacidade.html';
let linkPageTestimonials = 'depoimentos.html';
let linkPageWounds       = 'tratamento-feridas.html';

let linkFacebook  = 'https://www.facebook.com/enfmariateresa';
let linkYoutube   = 'https://www.youtube.com/@mariateresadias8453';
let linkInstagram = 'https://www.instagram.com/regenera.cuidado';

module.exports = {
    favicon      : 'img/apple-touch.png',
    currentYear  : new Date().getFullYear(),
    siteName     : siteName,
    phone        : '(12) 9 9798-5757',
    address      : 'Rua Dr. Popílio Mercadante, 398 - Sala 403',
    cep          : '12.308-510',
    city         : 'Jacareí, SP',
    email        : 'comercial@regeneracuidado.com.br',
    downloadEbook : '#',
    headerLinks : [
        { icon: 'fa-house', label: 'Home', url: linkPageIndex },
        { icon: 'fa-dove', label: 'Sobre Nós', url: linkPageAboutUs },
        { icon: 'fa-heart-pulse', label: 'Home Care', url: linkPageHomeCare },
        { icon: 'fa-face-smile-beam', label: 'Depoimentos', url: linkPageTestimonials },
    ],
    mobileLinks: [
        { icon: 'fa-house', label: 'Home', url: 'index.html' },
        { icon: 'fa-dove', label: 'Sobre Nós', url: linkPageAboutUs },
        { icon: 'fa-heart-pulse', label: 'Home Care', url: linkPageHomeCare },
        { icon: 'fa-kit-medical', label: 'Trat. de Feridas', url: linkPageWounds },
        { icon: 'fa-graduation-cap', label: 'Consultoria', url: linkPageConsultancy },
        { icon: 'fa-face-smile-beam', label: 'Depoimentos', url: linkPageTestimonials },
        { icon: 'fa-envelope', label: 'Fale Consosco', url: linkPageContact },
    ],
    footerLinksOne: [
        { label: 'Sobre Nós', url: linkPageAboutUs },
        { label: 'Home Care', url: linkPageHomeCare },
        { label: 'Tratamento de Feridas', url: linkPageWounds },
        { label: 'Consultoria', url: linkPageConsultancy },
    ],
    footerLinksTwo: [
        { label: 'Fale conosco', url: linkPageContact },
        { label: 'Depoimentos', url: linkPageTestimonials },
        // { label: 'FAQ', url: '#' },
        { label: 'Privacidade', url: linkPagePrivacy },
        { label: 'Termos e Condições', url: linkPageConditions },
    ],
    socialLinks: [
        { icon: 'fa-facebook', label: 'Facebook', url: linkFacebook },
        { icon: 'fa-instagram', label: 'Instagram', url: linkInstagram },
        { icon: 'fa-youtube', label: 'Youtube', url: linkYoutube },
    ],
    pageIndex: {
        description: 'index index index index',
        keywords: 'aaa, bbb, ccc',
        title: siteName,
        thumbnail: 'img/profile.png'
    },
    pageConditions: {
        link: linkPageConditions,
        description: 'cond cond cond cond',
        keywords: 'jjj, kkk, lll',
        title: `Termos e condições | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Termos e Condições',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Ao acessar nosso site, concorda em cumprir estes termos de serviço, 
            todas as leis e regulamentos aplicáveis ​​e concorda que é responsável 
            pelo cumprimento de todas as leis locais aplicáveis
        `
    },
    pageConsultancy: {
        link: linkPageConsultancy,
        description: 'consul consul consul consul',
        keywords: 'jjj, kkk, lll',
        title: `Treinamento e Consultoria | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Treinamento e Consultoria',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Mono mono mono monomono mono monom omonomoo monomono omonomoo mono
            mono mono monomono mono monom omonomoo monomono omonomoo mono monom
            mono mono monomono mono monom omono
        `
    },
    pageContact: {
        link: linkPageContact,
        description: 'cont cont cont cont',
        keywords: 'jjj, kkk, lll',
        title: `Fale Conosco | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Fale Conosco',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Estamos à disposição e ficamos muito felizes com seu contato e também 
            sua visita. Venha tomar um café e descobrir como podemos auxiliar em um 
            tratamento de qualidade.
        `
    },
    pageHomeCare: {
        link: linkPageHomeCare,
        description: 'care care care care',
        keywords: 'ddd, eee, fff',
        title: `Assistência Domiciliar | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Assistência Domiciliar',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
        `
    },
    pageAboutUs: {
        link: linkPageAboutUs,
        description: 'story story story story',
        keywords: 'mmm, nnn, ooo',
        title: `Sobre Nós | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Sobre Nós',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Acreditamos que fazer melhor aquilo que amamos, além de nos garantir 
            resultados mais rápidos e duradouros, também nos proporciona conhecer 
            pessoas e fazer a diferença em suas vidas
        `
    },
    pagePrivacy: {
        link: linkPagePrivacy,
        description: 'priv priv priv priv',
        keywords: 'mmm, nnn, ooo',
        title: `Privacidade | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Privacidade',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            É política do Regenera Cuidado respeitar a sua privacidade em 
            relação a qualquer informação sua que possamos coletar no site 
            Regenera Cuidado, e outros sites que possuímos e operamos
        `
    },
    pageTestimonials: {
        link: linkPageTestimonials,
        description: 'dep dep dep dep',
        keywords: 'mmm, nnn, ooo',
        title: `Depoimentos | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Depoimentos',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            O diferencial de nosso trabalho é fundamentado no atendimento
            humanizado e na qualidade do serviço prestado. Baseado em resultados,
            pode ser constatado pelo depoimento de nossos pacientes. 
        `
    },
    pageWounds: {
        link: linkPageWounds,
        description: 'wounds wounds wounds wounds',
        keywords: 'ggg, hhh, iii',
        title: `Tratamento de Feridas | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Tratamento de Feridas',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Mono mono mono monomono mono monom omonomoo monomono omonomoo mono
            mono mono monomono mono monom omonomoo monomono omonomoo mono monom
            mono mono monomono mono monom omono
        `
    }
};