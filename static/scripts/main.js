#!/usr/bin/node

const navLinks = document.querySelectorAll(".nav-link");
const goUp = document.querySelector(".go-up");

navLinks.forEach((element) => {
  element.onclick = function () {
    navLinks.forEach((el) => el.classList.remove("nav-active"));
    element.classList.add("nav-active");
  };
});

goUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
