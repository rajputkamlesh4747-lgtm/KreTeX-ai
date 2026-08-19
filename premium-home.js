const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
    });
});
