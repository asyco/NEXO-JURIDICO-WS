// show/ hide faq answer 

const faqs = document.querySelectorAll('.portf');

faqs.forEach(port => {
    port.addEventListener('click', () => {
        port.classList.toggle('open');

    })
})