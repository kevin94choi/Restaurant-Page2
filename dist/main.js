/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//module for creating the contact page\n\nconst createContactPage = () => {\n    const header = document.querySelector('#title');\n    const headline = document.createElement('h1');\n    headline.classList.add('headline');\n    headline.textContent = 'Contact Us';\n    header.appendChild(headline);\n\n    const content = document.querySelector('#content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    const form = document.createElement('form');\n    form.classList.add('contact-form');\n\n    const headingInput = document.createElement('input');\n    headingInput.type = 'text';\n    headingInput.placeholder = 'Enter heading';\n    form.appendChild(headingInput);\n\n    const addressInput = document.createElement('input');\n    addressInput.type = 'text';\n    addressInput.placeholder = 'Enter address';\n    form.appendChild(addressInput);\n\n    const phoneInput = document.createElement('input');\n    phoneInput.type = 'number';\n    phoneInput.placeholder = 'XXX-XXX-XXXX';\n    form.appendChild(phoneInput);\n\n    const submitButton = document.createElement('input');\n    submitButton.type = 'submit';\n    submitButton.value = 'submit';\n    form.appendChild(submitButton);\n    \n    pageContent.appendChild(form);\n    content.appendChild(pageContent);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-page2/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\n//load page\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page2/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuPage = () => {\n    const header = document.querySelector('#title');\n    const headline = document.createElement('h1');\n    headline.classList.add('headline');\n    headline.textContent = 'Menu';\n    header.appendChild(headline);\n\n    const content = document.querySelector('#content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    // const heading = document.createElement('h1');\n    // heading.textContent = 'Our Menu';\n\n    const menuList = document.createElement('ul');\n    const menuItem1 = document.createElement('li');\n    menuItem1.textContent = 'Pomodoro';\n    const menuItem2 = document.createElement('li');\n    menuItem2.textContent = 'Bolognesa';\n    const menuItem3 = document.createElement('li');\n    menuItem3.textContent = 'Alfredo';\n    menuList.appendChild(menuItem1);\n    menuList.appendChild(menuItem2);\n    menuList.appendChild(menuItem3);\n\n    // pageContent.appendChild(heading);\n    pageContent.appendChild(menuList);\n    content.appendChild(pageContent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant-page2/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\n\nfunction initialLoad(){\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant-page2/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage = () => {\n    const header = document.querySelector('#title');\n    const content = document.querySelector('#content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    // Create and append image element\n    const image = document.createElement('img');\n    image.src = '../dist/Pictures/main.jpg';\n    image.height = '300';\n    pageContent.appendChild(image);\n    content.appendChild(pageContent);\n\n    //Create and append headline element\n    const headline = document.createElement('h1');\n    headline.classList.add('headline');\n    headline.textContent = 'Welcome to our restaurant!';\n    header.appendChild(headline);\n\n    //Create and append copy element\n    const copy = document.createElement('p');\n    copy.classList.add('copy');\n    copy.textContent = 'We serve the best food in town. Come and enjoy!'\n    header.appendChild(copy);\n    // content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://restaurant-page2/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst createTabs = () => {\n\n    const content = document.querySelector('#content');\n    const nav = document.querySelector('nav');\n\n    // Create the three divs\n    const div1 = document.createElement('div');\n    const div2 = document.createElement('div');\n    const div3 = document.createElement('div');\n\n    //Set ids for the divs\n    div1.setAttribute('id', 'home-btn');\n    div2.setAttribute('id', 'menu-btn');\n    div3.setAttribute('id', 'contact-btn');\n\n    //Set classes for the divs\n    div1.classList.add('tab');\n    div2.classList.add('tab');\n    div3.classList.add('tab');\n\n    //Set text content for the tabs\n    div1.textContent = 'Home';\n    div2.textContent = 'Menu';\n    div3.textContent = 'Contact';\n\n    //Append the divs to the content div\n    nav.appendChild(div1);\n    nav.appendChild(div2);\n    nav.appendChild(div3);\n\n    div1.addEventListener('click', () => {\n        clearContent();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n    div2.addEventListener('click', () => {\n        clearContent();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n    div3.addEventListener('click', () => {\n        clearContent();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n}\n\nfunction clearContent() {\n    const header = document.querySelector('#title');\n    const headline = document.querySelector('.headline');\n    const copy = document.querySelector('.copy');\n\n    const content = document.querySelector('#content');\n    const pageContent = document.querySelector('.page-content');\n\n    if(pageContent && headline && copy) {\n        content.removeChild(pageContent);\n        header.removeChild(headline);\n        header.removeChild(copy);\n    } else if (pageContent && headline) {\n        content.removeChild(pageContent);\n        header.removeChild(headline);\n    }\n    // if(header){\n    //     header.removeChild(headline);\n    //     header.removeChild(copy);\n    // }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n//# sourceURL=webpack://restaurant-page2/./src/tabs.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;