/*=========================================================
    CYBER COMMAND CENTER
    Page transitions and opening animation
=========================================================*/

const pageLoader = document.getElementById('pageLoader');

function animateLoader() {
    if (!pageLoader) return;

    document.body.classList.add('no-scroll');
    const progressBar = pageLoader.querySelector('.progress span');
    const steps = [24, 57, 82, 100];
    let index = 0;

    const tick = () => {
        if (!progressBar) return;
        progressBar.style.width = `${steps[index]}%`;
        index += 1;

        if (index < steps.length) {
            window.setTimeout(tick, 350 + index * 90);
        } else {
            window.setTimeout(() => {
                pageLoader.classList.add('loaded');
                document.body.classList.remove('no-scroll');
            }, 450);
        }
    };

    tick();
}

window.addEventListener('load', () => {
    animateLoader();
});
