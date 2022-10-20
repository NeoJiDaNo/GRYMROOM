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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_backCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/backCall */ \"./src/modules/backCall.js\");\n// import login from './modules/login'\r\n\r\n\r\n// login()\r\n(0,_modules_backCall__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://grymroom/./src/index.js?");

/***/ }),

/***/ "./src/modules/backCall.js":
/*!*********************************!*\
  !*** ./src/modules/backCall.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst backCall = () => {\r\n\r\n    const area = document.querySelector('.callback-items__item-window')\r\n    const input = document.querySelector('.callback-items__item-input')\r\n    const btn = document.querySelector('.callback-items__item-btn')\r\n    \r\n    let num = 0\r\n\r\n    const divModer = document.createElement('div')\r\n    divModer.classList.add('callback-items__item-window-msg-moder')\r\n    const pModer = document.createElement('p')\r\n    pModer.classList.add('callback-items__item-window-text')\r\n    pModer.innerText = 'Здраствуйте, могу ли я вам чем-то помочь?'\r\n    pModer.id = `textModer${num}`\r\n    divModer.appendChild(pModer)\r\n    divModer.id = `msgModer${num}`\r\n    area.appendChild(divModer)\r\n\r\n    let editUser = document.querySelectorAll('#msgUser')\r\n\r\n    btn.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (input.value !== '') {\r\n            num++\r\n            const divUser = document.createElement('div')\r\n            divUser.classList.add('callback-items__item-window-msg-user')\r\n            const pUser = document.createElement('p')\r\n            pUser.classList.add('callback-items__item-window-text')\r\n            pUser.innerText = input.value\r\n            pUser.id = `textUser${num}`\r\n            divUser.appendChild(pUser)\r\n            divUser.id = `msgUser`\r\n            area.appendChild(divUser)\r\n            input.value = ''\r\n            editUser = document.querySelector('#msgUser')\r\n            console.log(editUser);\r\n        }\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        \r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backCall);\n\n//# sourceURL=webpack://grymroom/./src/modules/backCall.js?");

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