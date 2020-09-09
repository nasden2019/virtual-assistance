const addDiv = document.querySelector('.add');
const form = document.querySelector('.search input');
const ul = document.querySelector('.todos');
// const plus = document.querySelector('.fa-plus')


// 2) create todo
const generateTodos = (todo) => {

    let html = `
    <li class=" list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class=" far fa-trash-alt delete"></i>
  </li>
    `;
    ul.innerHTML += html;
}

// 1) grab value of todo and call the todo generator from above
addDiv.addEventListener('submit', (e) => {
    e.preventDefault();

    let todo = addDiv.addTodo.value.trim();
    generateTodos(todo);
    addDiv.reset();
})

// 3) delete todo
ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

// 4) search todo's
form.addEventListener('keyup', () => {
    const term = form.value.trim();
    filtering(term)
    // console.log(term)
})

// 5) filtering
const filtering = (term) => {
    Array.from(ul.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ul.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
}


// FLIP BOOK
var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelectorAll('#portada');

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
    uno[i].style.zIndex = customZindex;
    customZindex--;

    uno[i].addEventListener('click', function (e) {

        var tgt = e.target;
        var unoThis = this;

        unoThis.style.zIndex = contZindex;
        contZindex++;

        if (tgt.getAttribute('class') == 'face-front') {
            unoThis.style.zIndex = contZindex;
            contZindex += 20;
            setTimeout(function () {
                unoThis.style.transform = 'rotateY(-180deg)';
            }, 500);
        }
        if (tgt.getAttribute("class") == 'face-back') {
            unoThis.style.zIndex = contZindex;
            contZindex += 20;

            setTimeout(function () {
                unoThis.style.transform = 'rotateY(0deg)';
            }, 500);
        }

        if (tgt.getAttribute('id') == 'portada') {
            flip.classList.remove("trnsf-reset");
            flip.classList.add("trnsf");
        }
        if (tgt.getAttribute('id') == 'trsf') {
            flip.classList.remove("trnsf");
            flip.classList.add("trnsf-reset");
        }

    });
}

// BOOK
const book = document.querySelector('.book');
const title = document.querySelector('.titleBook');

book.addEventListener('click', () => {
    title.classList.add('dissapear')
    // alert('hola')
})


// const btn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//     if (!btn.classList.contains("slide")) {
//         btn.classList.add("slide");
//         video.pause();
//     } else {
//         btn.classList.remove("slide");
//         video.play();
//     }
// });

// // preloader
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//     preloader.classList.add("hide-preloader");
// });