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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/login */ \"./src/modules/login.js\");\n\r\n// import backCall from './modules/backCall'\r\n\r\n(0,_modules_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n// backCall()\n\n//# sourceURL=webpack://grymroom/./src/index.js?");

/***/ }),

/***/ "./src/modules/login.js":
/*!******************************!*\
  !*** ./src/modules/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst login = () => {\r\n\r\n    const btnMR = document.querySelector('.header-items__item-reg-btnReg')\r\n    const btnReg = document.querySelector('.popup-registr-items__item__form-btn')\r\n    const popup = document.querySelector('.popup-registr')\r\n\r\n    const inputFN = document.querySelector('#fullName')\r\n    const inputL = document.querySelector('#login')\r\n    const inputE = document.querySelector('#email')\r\n    const inputP = document.querySelector('#pass')\r\n    const inputPR = document.querySelector('#passr')\r\n    const checkbox = document.querySelector('#check').checked\r\n\r\n    console.log(checkbox);\r\n    \r\n    let id = 1\r\n    let passArr = []\r\n\r\n    let user = {\r\n        id: '1',\r\n        login: 'admin',\r\n        pass: 'admin',\r\n        fullname: 'admin',\r\n        email: 'admin'\r\n    }\r\n\r\n    passArr.push(user)\r\n\r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.closest('.header-items__item-reg-blockReg')) {\r\n            popup.style.visibility = 'inherit'\r\n        } else if (e.target.contains(popup)) {\r\n            popup.style.visibility = 'hidden'\r\n        }\r\n        if (e.target.closest('.popup-registr-items__item__form-btn')) {\r\n            getReg()\r\n        }\r\n    })\r\n\r\n    const getReg = () => {\r\n        if (inputFN.value !== '' || inputL.value !== '' || inputE.value !== '' || inputP.value !== '' || inputPR.value !== '') {\r\n            if (inputP.value == inputPR.value) {\r\n                if (checkbox == true) {\r\n                    id++\r\n                    user = {\r\n                        id: id,\r\n                        login: inputL.value,\r\n                        pass: inputP.value,\r\n                        fullname: inputFN.value,\r\n                        email: inputE.value\r\n                    }\r\n                    passArr.push(user)\r\n                    inputFN.value = ''\r\n                    inputE.value = ''\r\n                    inputL.value = ''\r\n                    inputP.value = ''\r\n                    inputPR.value = ''\r\n                    alert('Регистрация прошла успешно!')\r\n                } else {\r\n                    alert('Не поставленно соглашение')\r\n                    return\r\n                }\r\n            } else {\r\n                alert('Пароли не совпадают')\r\n                return\r\n            }\r\n        } else {\r\n            alert('Должны быть заполненны все поля')\r\n            return\r\n        }\r\n    }\r\n\r\n    // btnR.addEventListener('click', (e) => {\r\n    //     e.preventDefault()\r\n    //     divR.classList.add('popup-reg')\r\n    // })\r\n\r\n    // btnLogin.addEventListener('click', (e) => {\r\n    //     e.preventDefault()\r\n    //     if (input1.value !== '' && input2.value !== '') {\r\n    //         console.log(passArr);\r\n    //         user = {\r\n    //             login: input1.value,\r\n    //             pass: input2.value\r\n    //         }\r\n    //         passArr.forEach(elem => {\r\n    //             console.log(elem.login);\r\n    //           if (elem.login == user.login && elem.pass == user.pass) {\r\n    //               div.classList.remove('popup-reg')\r\n    //               input1.value = ''\r\n    //               input2.value = ''\r\n    //           } else {\r\n    //               return\r\n    //           }\r\n    //         })\r\n    //     }\r\n    // })\r\n\r\n    // btnRReg.addEventListener('click', (e) => {\r\n    //     e.preventDefault()\r\n    //     if (input1R.value !== '' && input2R.value !== '') {\r\n    //         user = {\r\n    //             login: input1R.value,\r\n    //             pass: input2R.value\r\n    //         }\r\n    //         passArr.push(user)\r\n    //         console.log(passArr)\r\n    //         divR.classList.remove('popup-reg')\r\n    //         input1R.value = ''\r\n    //         input2R.value = ''\r\n    //     } else {\r\n    //         alert('Заполните оба поля')\r\n    //     }\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n//# sourceURL=webpack://grymroom/./src/modules/login.js?");

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