const nav = document.getElementById('nav');

nav.addEventListener("click", handleClick);

function handleClick() {
    nav.classList.toggle('change')
}