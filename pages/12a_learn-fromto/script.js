import gsap from "gsap";
const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.8
    }, {
        scaleY: 1.4,
        duration: .5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.out',
        delay: index * .1,
    })
})
