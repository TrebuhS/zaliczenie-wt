const header = document.querySelector(".header");
const hamburger = document.querySelector(".header .hamburger");
const headerNavList = document.querySelector(".header nav ul");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
        showHeaderNavList(true);
    } else {
        showHeaderNavList(false);
    }
});

hamburger.addEventListener("click", () => {
    const isHamburgerActive = hamburger.classList.contains("active");
    if (isHamburgerActive) {
        hamburger.classList.remove("active");
        showHeaderNavList(false);
    } else {
        hamburger.classList.add("active");
        showHeaderNavList(true);
    }
});

function showHeaderNavList(status) {
    headerNavList.style.display = status ? "flex" : "none";
}
