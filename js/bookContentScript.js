let autoWrite = document.querySelector('.auto-write');
let text = "There was once on a time a shepherd boy";
let index = 0;

function writeText() {
    autoWrite.innerHTML = text.slice(0, index);
    index++;
}

setInterval(writeText, 150);

const lastPage = document.querySelector('.hidden:last-of-type');

setInterval(() =>{
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 2 + 's';

    let randomNum = Math.random() * 10;
    if (randomNum > 4.5) {
        emoji.innerText = '🌟';
    }
    else {
        emoji.innerText = '🎉'
    }
    lastPage.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 3800);
}, 200)