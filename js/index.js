const year = new Date().getFullYear();
const footer = document.querySelector(".copyyear");
const copyrightcode = "\u{00A9}";
footer.textContent = `${copyrightcode} ${year} Loopstudios. All Rights Reserved`;

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};
btn.addEventListener("click", navToggle);
