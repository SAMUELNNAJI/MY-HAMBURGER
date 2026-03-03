const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector('nav');

toggle.addEventListener('click', () => {
    if (hamburger.style.display === 'flex') {
        hamburger.style.display = 'none';

    } else {
        hamburger.style.display = 'flex';
    }
})