let button = document.querySelector(".js-changeThemeButton")
let body = document.querySelector(".js-body")
let themeName = document.querySelector(".js-themeName")

button.addEventListener("click", () => {
    body.classList.toggle("body--darkTheme");
    themeName.innerText = body.classList.contains("body--darkTheme") ? "light" : "dark";
});