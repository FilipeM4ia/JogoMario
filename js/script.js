const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
 mario.classList.add('jump')

 setTimeout(() => {
    mario.classList.remove('jump');
 }, 500);
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.anmation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.anmation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src= './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        document.removeEventListener ('keydown', jump);
        clearInterval (loop);
    }

}, 10);


document.addEventListener('keydown', jump);
