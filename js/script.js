{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--darkTheme");
        themeName.innerText = body.classList.contains("body--darkTheme") ? "light" : "dark";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeThemeButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

    }

    init();
}