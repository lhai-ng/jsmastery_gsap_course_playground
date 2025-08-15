import gsap from "gsap";
const button = document.querySelector('.scroll-to-top');

let isFloating = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        button.classList.add('show');

        if (!isFloating) {
            gsap.to(button, {
                y: -10,
                duration: 1,
                ease: 'sine.in',
                repeat: -1,
                yoyo: true,
            })
        }

        isFloating = true;
    } else {
        button.classList.remove('show');
    }
})

button.onmouseenter = () => {
    gsap.to(button, {scale: 1.1, duration: .5})
}

button.onmouseleave = () => {
    gsap.to(button, {scale: 1, duration: .5})
}

button.onclick = () => {
    window.scrollTo(0, 0)
}