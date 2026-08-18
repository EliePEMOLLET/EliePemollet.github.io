/*=========================================================
    SIDEBAR INTERACTIONS
    Toggle sidebar and highlight active route
=========================================================*/

const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const navItems = document.querySelectorAll('.nav-item');

if (sidebar) {
    const pointerHover = window.matchMedia('(hover: hover)').matches;

    if (pointerHover) {
        sidebar.addEventListener('mouseenter', () => sidebar.classList.add('sidebar--open'));
        sidebar.addEventListener('mouseleave', () => {
            if (!sidebar.classList.contains('sidebar--locked')) {
                sidebar.classList.remove('sidebar--open');
            }
        });
    }
}

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar--open');
        sidebar.classList.toggle('sidebar--locked');
        sidebarToggle.setAttribute('aria-pressed', sidebar.classList.contains('sidebar--open'));
    });
}

if (navItems.length) {
    const currentFile = window.location.pathname.split('/').pop().split('?')[0].split('#')[0] || 'index.html';
    navItems.forEach((link) => {
        const href = link.getAttribute('href');
        const linkFile = href.split('/').pop().split('?')[0].split('#')[0];
        if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
            link.classList.add('active');
        }
    });
}
