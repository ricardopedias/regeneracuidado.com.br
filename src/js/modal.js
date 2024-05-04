
export default function setupModal()
{
    // botão abrir

    let attachEvent = (elem) => {
        elem.addEventListener('click', (event) => {
            document.body.classList.toggle("modal");

            drawContent()
        })
    }

    document.querySelectorAll('.modal-button').forEach(attachEvent);

    // botão fechar

    document.querySelector('div.modal button').addEventListener('click', (event) => {
        document.body.classList.toggle("modal");
    })
}

function drawContent()
{
    let modalElement = document.querySelector('div.modal');

    let gap = 30;
    
    let modalWidth  = window.innerWidth - gap * 2;
    let modalHeight = calcModalHeight(modalWidth);

    if (window.innerWidth > 1120) {
        modalWidth = 1060
        modalHeight = 596
    }

    let marginTop  = calcModalTop(modalHeight);
    let marginLeft = calcModalLeft(modalWidth);
    
    // janela

    let section = modalElement.querySelector('section')

    section.style.width      = modalWidth + 'px'
    section.style.height     = modalHeight + 'px'
    section.style.marginTop  = marginTop + 'px'
    section.style.marginLeft = marginLeft + 'px'

    // vídeo

    let iframeGap = gap/2;

    section.querySelector('div').innerHTML = `
        <iframe width="${modalWidth - iframeGap*2}" height="${modalHeight - 60 - iframeGap}" 
            src="https://www.youtube.com/embed/fKSXWsBbHt4?si=wydMxp7cDZ6BZL1b" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    `
}

function calcModalWidth(modalWidth)
{
    let modalHeight = calcModalHeight(modalWidth);
    
    if (modalHeight < window.innerHeight) {
        modalWidth = resizeModalWidth(modalWidth, modal)
    }

    return modalWidth;
}

function calcModalHeight(modalWidth)
{
    // formato padrão do youtube
    let baseWidth = 560;
    let baseHeight = 315;

    // regra de três
    // - - - - - 
    // baseWidth   \ / baseHeight
    // modalWidth / \  x
    // - - - - - 
    // baseWidth x  = modalWidth * baseHeigh (result)
    // x = (result) / baseWidth
    return (modalWidth * baseHeight) / baseWidth
}

function calcModalTop(modalHeight)
{
    let marginTop = (window.innerHeight - modalHeight) / 2

    return marginTop < 0 ? 0 : marginTop
}

function calcModalLeft(modalWidth)
{
    return (window.innerWidth - modalWidth) / 2
}
