const menuOpenbutton = document.querySelector("#menu-open-button");

menuOpenbutton.addEventListener("click", () => {
    // Toglle mobile menu visivility
    document.body.classList.toggle("show-mobile-menu");
});