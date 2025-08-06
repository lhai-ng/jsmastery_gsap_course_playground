import gsap from "gsap";

const play  = document.querySelector('.play');
const pause  = document.querySelector('.pause');
const resume  = document.querySelector('.resume');
const restart  = document.querySelector('.restart');
const reverse  = document.querySelector('.reverse');
const kill  = document.querySelector('.kill');
const yoyo  = document.querySelector('.yoyo');
const repeat  = document.querySelector('.repeat');

const animation = gsap.to('.box', {
    borderRadius: '50%',
    opacity: 1,
    rotate: 360,
    duration: 2,
})

play.addEventListener('click', () => {
    animation.play();
});
  
pause.addEventListener('click', () => {
    animation.pause();
});
  
resume.addEventListener('click', () => {
    animation.resume();
});
  
restart.addEventListener('click', () => {
    animation.restart();
});
  
reverse.addEventListener('click', () => {
    animation.reverse();
});
  
kill.addEventListener('click', () => {
    animation.kill();
});
  
yoyo.addEventListener('click', () => {
    animation.yoyo(true);
});
  
repeat.addEventListener('click', () => {
    animation.repeat(-1);
    animation.repeatDelay(2);
});
  