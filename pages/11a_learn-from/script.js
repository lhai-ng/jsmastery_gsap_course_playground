import gsap from "gsap";

const repeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    y: 60,
    opacity: 0.2,
    duration: 1,
    ease: 'power2.out',
    stagger: .1,
})

repeat.addEventListener('click', () => {
    animation.restart();
})