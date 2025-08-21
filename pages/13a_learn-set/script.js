import gsap from "gsap";

gsap.set('.gsap-box', {
    opacity: 0,
    scale: .5,
    y: 100
})

gsap.to('.gsap-box', {
    opacity: 1,
    scale: 1,
    duration: 1,
    y: 0,
    ease: 'expo.out'
})