import gsap from "gsap";

const showNotification =  () => {
    gsap.to('.toast', {
        y: -100,
        duration: 1.5, 
        ease: 'back.out(1.7)',
        delay: 3,
        onComplete: () => {
            gsap.to('.toast', {
                y: 0,
                duration: 1,
                ease: 'back.in',
                delay: 3,
                onComplete: () => {
                    showNotification();
                }
            })
        }
    })
}

showNotification();