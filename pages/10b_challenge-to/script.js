import gsap from "gsap";
const toasts = document.querySelectorAll('.toast');

toasts.forEach((toast, i) => {
    showToast(toast, i);
})

function showToast(toast, i) {
    gsap.to(toast, {
        y: -90,
        duration: 1,
        ease: 'power2.out',
        delay: i * 10,
        onComplete: () => {
            gsap.to(toast, {
                y: -85,
                duration: 1.5,
                ease: 'expo.in',
                yoyo: true,
                repeat: 3,
                onComplete: () => {
                    gsap.to(toast, {
                        y: 0,
                        duration: 1,
                        ease: 'power2.in',
                    })
                }
            })
        },
    })
}
