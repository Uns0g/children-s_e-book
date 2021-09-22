const pages = document.querySelectorAll('.book__page');
let pageNumber = 0;
let numberOfPage = document.querySelectorAll('.book__page-number');

const popupCtn = document.querySelector('.popup-container');
const toggleTheme = document.querySelector('.change-theme');

// toggling the pages theme
toggleTheme.addEventListener('click', () => {
    pages.forEach(page => {
        page.classList.toggle('book__page--dark');
    });
    toggleTheme.classList.toggle('change-theme--light');
});

// setting values to options (<option>) inside select
let selectOptions = document.querySelectorAll("#sound-board__select-page option")
selectOptions.forEach(option =>{
    option.value = pageNumber;
    pageNumber++;
});
pageNumber = 0;

// building selection of pages
let selectPage = document.querySelector('#sound-board__select-page');
selectPage.addEventListener('change', () => {
    pageNumber = selectPage.value;
    alterPageVisibility();
});

// turning every page into invisible
alterPageVisibility();

// keys to change the page number
window.addEventListener("keydown", (e) => {
    if (e.key == 'ArrowRight') {
        increasePageNumber();
    }
    if (e.key == 'ArrowLeft') {
        decreasePageNumber();
    }
});

function increasePageNumber() {
    if (pageNumber === pages.length - 1) {
        popupCtn.className += " book__page"
        setTimeout(() => {
            popupCtn.classList.remove('book__page');
        }, 2000);
    } else {
        pageNumber++;
    }

    alterPageVisibility();
}

function decreasePageNumber() {
    if (pageNumber === 0) {
        popupCtn.className += " book__page"
        setTimeout(() => {
            popupCtn.classList.remove('book__page');
        }, 2000);
    }
    else {
        pageNumber--;
    }

    alterPageVisibility();
}

function alterPageVisibility() {
    for (let page of pages) {
        page.classList.remove('book__page');
        page.classList.add('hidden');
    }

    pages[pageNumber].classList.add('book__page')
    numberOfPage.forEach(number => {
        number.innerHTML = pageNumber;
    });
}