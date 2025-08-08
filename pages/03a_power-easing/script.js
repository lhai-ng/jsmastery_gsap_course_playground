import gsap from "gsap";

gsap.to('.btn', {
    y: -20,
    duration: 2,
    ease: 'power4.out',
})

gsap.to('.toast', {
    opacity: 1,
    y: -20,
    duration: 2,
    ease: 'power2.out',
})

gsap.to('.card', {
    scale: 1,
    duration: 1,
    ease: 'power2.inOut',
})