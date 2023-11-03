"use strict";

// Start Of burger button handling code
let burgerButton = document.querySelector(".bottom-header__burger");
let burgerMenu = document.querySelector(".header__link-menu");
let transparentLayer = document.querySelector(
  ".bottom-header_transparent-layer"
);

let scrollbarWidth = getScrollbarWidth();

burgerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  burgerMenu.classList.toggle("header__link-menu_open");
  burgerButton.classList.toggle("bottom-header__burger_close");

  burgerMenu.classList.contains("header__link-menu_open")
    ? openBurgerMenu()
    : closeBurgerMenu();

  burgerButton.classList.contains("bottom-header__burger_close")
    ? (burgerButton.innerHTML = closeSVG)
    : (burgerButton.innerHTML = burgerSVG);
}
function openBurgerMenu() {
  document.body.style.overflow = "hidden";
  burgerMenu.style.width = burgerMenu.offsetWidth + scrollbarWidth + "px";
  transparentLayer.style.display = "block";
}
function closeBurgerMenu() {
  document.body.style.overflow = "revert";
  burgerMenu.style.width = "70%";
  transparentLayer.style.display = "none";
}
function getScrollbarWidth() {
  // create a temporary div to add body scrollbar
  let div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.overflow = "scroll";
  div.style.position = "absolute";
  div.style.top = "-9999px";
  document.body.appendChild(div);

  // get the width of the scrollbar
  let scrollbarWidth = div.offsetWidth - div.clientWidth;

  // remove div
  document.body.removeChild(div);

  return scrollbarWidth;
}
// End of burger button handling code
