let autoWrite = document.querySelector('.auto-write');
let text = "There was once on a time a shepherd boy";
let index = 0;

function writeText(){
    autoWrite.innerHTML = text.slice(0, index);
    index++;
}

setInterval(writeText, 150);