import gsap from "gsap";

gsap.to('.ball', {
    y: 200,
    duration: 1,
    ease: 'bounce.out',
    onComplete: () => {
        gsap.to('.ball', {
            y: 0,
            duration: 1,
            ease: 'power2.out',
        })
    },
})