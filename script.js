const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump() {
    dino.classList.add('jump-animation');
    //remove the jump right after 500ms
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    //if the dino isn't already jumping
    if(!dino.classList.contains('jump-animation')){
        jump();
    }
})

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));

    //make rock disappear outside of game frame
    if(rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    //collision between rock and dino
    if(rockLeft < 175 && rockLeft > 100 && dinoTop > 175){
        alert("Game Over! \n" + "Your score: " + score.innerText +
            "\n\n Play again?");
        location.reload();
    }
}, 50);