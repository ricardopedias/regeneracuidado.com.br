
export default function setupAutolink()
{
    document.querySelectorAll('.autolink').forEach((elem) => {
        elem.addEventListener('click', () => location.href = elem.dataset.link )
    })
}

