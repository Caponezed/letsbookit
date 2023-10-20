"use strict";

let burgerButton = document.querySelector(".bottom-header__burger");
let burgerMenu = document.querySelector(".header__link-menu");
let transparentLayer = document.querySelector(
  ".bottom-header_transparent-layer"
);
let burgerSVG = `<svg
width="40px"
height="40px"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke="#CCCCCC"
  stroke-width="0.096"
></g>
<g id="SVGRepo_iconCarrier">
  <path
    d="M4 7L7 7M20 7L11 7"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  ></path>
  <path
    d="M20 17H17M4 17L13 17"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  ></path>
  <path
    d="M4 12H7L20 12"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  ></path>
</g>
</svg>`;
let closeSVG = `<svg
width="40px"
height="40px"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <path
    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  ></path>
  <path
    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  ></path>
</g>
</svg>`;
let scrollbarWidth = getScrollbarWidth();

burgerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  burgerMenu.classList.toggle("header__link-menu_open");
  burgerButton.classList.toggle("bottom-header__burger_close");

  if (burgerMenu.classList.contains("header__link-menu_open")) {
    document.body.style.overflow = "hidden";
    burgerMenu.style.width = burgerMenu.offsetWidth + scrollbarWidth + "px";
    transparentLayer.style.display = "block";
  } else {
    document.body.style.overflow = "revert";
    burgerMenu.style.width = "70%";
    transparentLayer.style.display = "none";
  }

  burgerButton.classList.contains("bottom-header__burger_close")
    ? (burgerButton.innerHTML = closeSVG)
    : (burgerButton.innerHTML = burgerSVG);
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
