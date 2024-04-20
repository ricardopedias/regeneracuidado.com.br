
let siteName            = 'Regenera Cuidado';

let linkPageIndex       = 'index.html';

let linkPageConditions   = 'termos-e-condicoes.html';
let linkPageConsultancy  = 'treinamento-consultoria.html';
let linkPageContact      = 'fale-conosco.html';
let linkPageHomeCare     = 'assistencia-domiciliar.html';
let linkPageOurStory     = 'nossa-historia.html';
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
    address      : 'Rua das acácias, 258',
    cep          : '12.380-000',
    city         : 'Jacareí, SP',
    email        : 'contato@regeneracuidado.com.br',
    downloadEbook : '#',
    headerLinks : [
        { icon: 'fa-house', label: 'Home', url: linkPageIndex },
        { icon: 'fa-dove', label: 'Nossa História', url: linkPageOurStory },
        { icon: 'fa-heart-pulse', label: 'Home Care', url: linkPageHomeCare },
        { icon: 'fa-microphone-lines', label: 'Consultoria', url: linkPageConsultancy },
    ],
    mobileLinks: [
        { icon: 'fa-house', label: 'Home', url: 'index.html' },
        { icon: 'fa-dove', label: 'Nossa História', url: linkPageOurStory },
        { icon: 'fa-heart-pulse', label: 'Home Care', url: linkPageHomeCare },
        { icon: 'fa-face-smile-beam', label: 'Trat. de Feridas', url: linkPageWounds },
        { icon: 'fa-microphone-lines', label: 'Consultoria', url: linkPageConsultancy },
        { icon: 'fa-face-smile-beam', label: 'Depoimentos', url: linkPageTestimonials },
        { icon: 'fa-envelope', label: 'Fale Consosco', url: linkPageContact },
    ],
    footerLinksOne: [
        { label: 'Sobre Nós', url: linkPageOurStory },
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
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
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
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
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
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
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
    pageOurStory: {
        link: linkPageOurStory,
        description: 'story story story story',
        keywords: 'mmm, nnn, ooo',
        title: `Nossa História | ${siteName}`,
        thumbnail: 'img/profile.png',
        headerTitle: 'Nossa História',
        headerBackground: 'img/header-page-wounds.png',
        headerDescription: `
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
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
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
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
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
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
            Oferecemos Assistência Domiciliar, disponibilizando cuidados de 
            saúde ou de suporte, prestado por profissionais especializados 
            de forma humanizada no conforto do lar
        `
    }
};