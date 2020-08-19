let button = document.querySelector(".search-icon");
let inputText = document.querySelector(".search-box");
button.addEventListener('click', function () {
    button.classList.add("opened");
    inputText.classList.add("opened");
});

document.querySelector('.container').addEventListener('click', function (e) {
    if (!(button.contains(e.target) || inputText.contains(e.target))) {
        inputText.classList.remove("opened");
        button.classList.remove('opened');
    }
});