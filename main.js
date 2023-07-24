/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popovers.js
class Popovers {
  constructor() {
    this._popovers = [];
  }
  show(header, message, element) {
    const popoversElement = document.createElement("div");
    popoversElement.classList.add("popover");
    const popoversHeader = document.createElement("div");
    popoversHeader.classList.add("popover-header");
    const popoversContent = document.createElement("div");
    popoversContent.classList.add("popover-content");
    popoversHeader.textContent = header;
    popoversContent.textContent = message;
    document.body.appendChild(popoversElement);
    popoversElement.appendChild(popoversHeader);
    popoversElement.appendChild(popoversContent);
    const id = performance.now();
    this._popovers.push({
      id,
      element: popoversElement
    });
    const {
      left,
      top
    } = element.getBoundingClientRect();
    popoversElement.style.left = left - popoversElement.offsetWidth / 2 + element.offsetWidth / 2 + "px";
    popoversElement.style.top = top - popoversElement.offsetHeight - 5 + "px";
    return id;
  }
  remove(id) {
    const popover = this._popovers.find(p => p.id === id);
    popover.element.remove();
    this._popovers = this._popovers.filter(p => p.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

const app_form = document.querySelector("form");
const popovers = new Popovers();
const btn = document.querySelector("button[type=reset]");
let popoverId = null;
app_form.addEventListener("click", e => {
  e.preventDefault();
});
btn.addEventListener("focus", () => {
  popoverId = popovers.show("asda", "asda", btn);
});
btn.addEventListener("focusout", () => {
  popovers.remove(popoverId);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;