
export default function setupMobileButton()
{
    let attachEvent = (elem) => {
        elem.addEventListener('click', (event) => {
            console.log('click')
            document.body.classList.toggle("mobile-menu");
        })
    }

    document.querySelectorAll('.mobile-button').forEach(attachEvent)
}
