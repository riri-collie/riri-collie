const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fadeItems.forEach((item) => {
    observer.observe(item);
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

/* ハンバーガーメニューを開く・閉じる */
hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("open");
});

/* メニューを選択したら閉じる */
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});

/* メニュー以外をクリックしたら閉じる */
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("open");
    }
});