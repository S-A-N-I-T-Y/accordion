"use strict";

let accd = document.querySelectorAll(".accordion");

accd.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});
