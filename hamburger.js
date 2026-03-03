const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector('nav');

toggle.addEventListener('click', () => {
    hamburger.style.display = hamburger.style.display === 'none' ? 'flex' : 'none';
})