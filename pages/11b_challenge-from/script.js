import gsap from "gsap";
const card = document.querySelector('#card');

gsap.from(card, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    rotationX: -15,
    ease: 'back.out(1.7)',
    delay: .3
})

card.onmouseenter = () => {
    gsap.to(card, {
        rotationY: 180,
        ease: 'power2.out',
        duration: 0.8,
        transformOrigin: 'center center',
        force3D: true,
    })
}

card.onmouseleave = () => {
    gsap.to(card, {
        rotationY: 0,
        ease: 'power2.out',
        duration: 0.8,
        transformOrigin: 'center center',
        force3D: true,
    })
}
