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
    {path:'sounds/shepherd.mp3'},
    {path:'sounds/king.mp3'},
    {path:'sounds/sage.mp3'},
    {path:'sounds/bird.mp3'},
    {path:'sounds/rebellion.mp3'},
    {path:'sounds/falling.mp3'},
    {path:'sounds/mountain__falling.mp3'},
    {path:'sounds/pecking.mp3'},
    {path:'sounds/feast.mp3'},
];
const sbButtons = document.querySelectorAll('.sound-board__button');
const audio = document.querySelector('audio');

for(let i = 0; i < 9; i++){
    sbButtons[i].setAttribute('id', i);
}


sbButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        let sound = sounds[button.getAttribute('id')];
        audio.setAttribute('src', sound.path);

        audio.addEventListener('loadeddata', () =>{
            audio.play();
        });
    });
});