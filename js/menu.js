const menu = document.querySelector('#menu-btn');
const board = document.querySelector('.sound-board');
const book = document.querySelector('.book');
const links = document.querySelectorAll('.indicator');

menu.addEventListener('click', () => {
    board.classList.toggle('sound-board--active');
    book.classList.toggle('smaller');
    menu.classList.toggle('menu-btn--clicked');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        board.classList.toggle('sound-board--active');
        book.classList.toggle('smaller');
        menu.classList.toggle('menu-btn--clicked');
    });
});

/******** making sound board work *********/
let sounds = [
    {caminho:'sounds/shepherd.mp3'},
    {caminho:'sounds/king.mp3'},
    {caminho:'sounds/sage.mp3'},
    {caminho:'sounds/bird.mp3'},
    {caminho:'sounds/rebelion.mp3'},
    {caminho:'sounds/falling.mp3'},
    {caminho:'sounds/mountain__falling.mp3'},
    {caminho:'sounds/pecking.mp3'},
    {caminho:'sounds/feast.mp3'},
];
const sbButtons = document.querySelectorAll('.sound-board__button');
const audio = document.querySelector('audio');

for(let i = 0; i < 9; i++){
    sbButtons[i].setAttribute('id', i);
}


sbButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        let sound = sounds[button.getAttribute('id')];
        audio.setAttribute('src', sound.caminho);

        audio.addEventListener('loadeddata', () =>{
            audio.play();
        });
    });
});