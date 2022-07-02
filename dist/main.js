/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const initialPageLoad = function(){
    console.log('initial page load');
    document.getElementById('content').replaceChildren();
    (0,_header__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_0__.loadFooter)();
}



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFooter": () => (/* binding */ loadFooter)
/* harmony export */ });
const loadFooter = function(){
    let contentContainer = document.getElementById("content");

    let footer = document.createElement("footer");
    footer.id = "footer";

    let footer_text = document.createElement("p");
    footer_text.id = "footer-text";
    footer_text.textContent = "Copyright Ohm Patil © 2022";
    footer.appendChild(footer_text);


    contentContainer.appendChild(footer)

}



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
const loadHeader = function(){
    let contentContainer = document.getElementById("content");

    let header = document.createElement("header");
    header.id = "header";

    let title = document.createElement("h1");
    title.id = "title";
    title.textContent = 'Lettuce Eat';

    let nav = document.createElement("nav");
    nav.id = "nav";
    let navList = document.createElement("ul");
    navList.id = "nav-list";
    let navListItem = document.createElement("li");
    navListItem.classList.add("nav-list-item");
    navListItem.id = "home-item";
    navListItem.textContent = "Home";
    let navListItem2 = document.createElement("li");
    navListItem2.classList.add('nav-list-item');
    navListItem2.id = "menu-item";
    navListItem2.textContent = "Menu";
    let navListItem3 = document.createElement("li");
    navListItem3.classList.add('nav-list-item');
    navListItem3.id = "contact-item";
    navListItem3.textContent = "Contact";
    navList.appendChild(navListItem);
    navList.appendChild(navListItem2);
    navList.appendChild(navListItem3);
    nav.appendChild(navList);

    header.appendChild(title);
    header.appendChild(nav);
    contentContainer.appendChild(header);
}



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepage": () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const homepage = function(){
    console.log('home loaded');

    let contentContainer = document.getElementById("content");
    contentContainer.replaceChildren();

    (0,_header__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();

    let mainContainer = document.createElement('div') 
    mainContainer.id = 'main-container'

    mainContainer.replaceChildren();

    let home_text = document.createElement('h1')
    home_text.id = 'home-text'
    home_text.textContent = 'Come eat the best lettuce in your country! Tasty and Affordable!'

    let home_img = document.createElement('div')
    home_img.id = 'home-img'

    let home_subtext = document.createElement('h2')
    home_subtext.id = 'home-subtext'
    home_subtext.textContent = 'Order online or visit us!'

    mainContainer.appendChild(home_text)
    mainContainer.appendChild(home_img)
    mainContainer.appendChild(home_subtext)
    contentContainer.appendChild(mainContainer)

    
    ;(0,_footer__WEBPACK_IMPORTED_MODULE_0__.loadFooter)()
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();
// homepage();

document.getElementById('home-item').addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__.homepage);
})();

/******/ })()
;