import gsap from "gsap";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.onmouseenter = () => {
        gsap.to(button, {
            scale: 1.2,
            duration: .1,
            ease: 'power2.out',
        })
    } 
    button.onmouseleave = () => {
        gsap.to(button, {
            scale: 1,
            duration: .1,
            ease: 'power2.out',
        })
    }

    button.onclick = () => {
        gsap.fromTo(button, {
            scale: 2,
            rotation: -35,
            ease: 'expo.in',
        }, {
            scale: 1,
            duration: .7,
            rotation: 0,
            ease: 'power3.out'
        })
    }
})
