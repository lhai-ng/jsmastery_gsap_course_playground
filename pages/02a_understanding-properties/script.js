import gsap from "gsap";

gsap.to('.box', {
    opacity: 1,
    duration: 2,
    borderRadius: '50%',
    rotation: 360,
    background: '#fff',
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    ease: 'bounce.in',
    y: -100,
});