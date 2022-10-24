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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/login */ \"./src/modules/login.js\");\n/* harmony import */ var _modules_zakaz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/zakaz */ \"./src/modules/zakaz.js\");\n\r\n\r\n// import backCall from './modules/backCall'\r\n\r\n(0,_modules_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_zakaz__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n// backCall()\r\n\n\n//# sourceURL=webpack://grymroom/./src/index.js?");

/***/ }),

/***/ "./src/modules/login.js":
/*!******************************!*\
  !*** ./src/modules/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst login = () => {\r\n\r\n    const btnMR = document.querySelector('.header-items__item-reg-btnReg')\r\n    const btnML = document.querySelectorAll('.header-items__item-reg-btnLogin')\r\n    const btnReg = document.querySelector('.popup-registr-items__item__form-btn')\r\n    const btnLog = document.querySelector('.popup-login-items__item__form-btn')\r\n    const popup = document.querySelector('.popup-registr')\r\n    const popupL = document.querySelector('.popup-login')\r\n\r\n    const blockMR = document.querySelector('.header-items__item-reg-blockLogin')\r\n    const blockML = document.querySelector('.header-items__item-reg-blockReg')\r\n    const area = document.querySelector('.header-items__item-reg')\r\n\r\n    const inputFN = document.querySelector('#fullName')\r\n    const inputL = document.querySelector('#login')\r\n    const inputE = document.querySelector('#email')\r\n    const inputP = document.querySelector('#pass')\r\n    const inputPR = document.querySelector('#passr')\r\n    const checkbox = document.querySelector('#check').checked\r\n    \r\n    const inputLL = document.querySelector('#loginl')\r\n    const inputPL = document.querySelector('#passl')\r\n\r\n    let passArr = []\r\n    \r\n    let user = {\r\n        id: 1337,\r\n        login: 'admin',\r\n        pass: 'admin',\r\n        fullname: 'admin',\r\n        email: 'admin'\r\n    }\r\n    \r\n    let userl = {\r\n        login: '',\r\n        pass: ''\r\n    }\r\n    \r\n    passArr.push(user)\r\n    // localStorage.setItem('object', JSON.stringify(passArr))\r\n    passArr = JSON.parse(localStorage.getItem('object'))\r\n    console.log(passArr)\r\n    let id = passArr.length\r\n    \r\n\r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.closest('.header-items__item-reg-blockReg')) {\r\n            popup.style.visibility = 'inherit'\r\n        } else if (e.target.contains(popup)) {\r\n            popup.style.visibility = 'hidden'\r\n        }\r\n        if (e.target.closest('.popup-registr-items__item__form-btn')) {\r\n            getReg()\r\n        }\r\n        if (e.target.closest('.header-items__item-reg-btnLogin')) {\r\n            popupL.style.visibility = 'inherit'\r\n        } else if (e.target.contains(popupL)) {\r\n            popupL.style.visibility = 'hidden'\r\n        }\r\n        if (e.target.closest('.popup-login-items__item__form-btn')) {\r\n            getLog()\r\n        }\r\n    })\r\n\r\n    const getReg = () => {\r\n        if (inputFN.value !== '' || inputL.value !== '' || inputE.value !== '' || inputP.value !== '' || inputPR.value !== '') {\r\n            if (inputP.value == inputPR.value) {\r\n                if (checkbox == true) {\r\n                    id++\r\n                    user = {\r\n                        id: id,\r\n                        login: inputL.value,\r\n                        pass: inputP.value,\r\n                        fullname: inputFN.value,\r\n                        email: inputE.value\r\n                    }\r\n                    passArr.push(user)\r\n                    localStorage.setItem('object', JSON.stringify(passArr))\r\n                    inputFN.value = ''\r\n                    inputE.value = ''\r\n                    inputL.value = ''\r\n                    inputP.value = ''\r\n                    inputPR.value = ''\r\n                    alert('Регистрация прошла успешно!')\r\n                } else {\r\n                    alert('Не поставленно соглашение')\r\n                    return\r\n                }\r\n            } else {\r\n                alert('Пароли не совпадают')\r\n                return\r\n            }\r\n        } else {\r\n            alert('Должны быть заполненны все поля')\r\n            return\r\n        }\r\n    }\r\n\r\n    const getLog = () => {\r\n        if (inputLL.value !== '' || inputPL.value !== '') {\r\n            userl = {\r\n                login: inputLL.value,\r\n                pass: inputPL.value\r\n            }\r\n            passArr.forEach(elem => {\r\n                if (elem.login == userl.login && elem.pass == userl.pass) {\r\n                    alert('Вы успешно вошли в аккаунт')\r\n                    blockMR.remove()\r\n                    blockML.remove()\r\n                    const div = document.createElement('div')\r\n                    div.classList.add('header-items__item-reg-blockzak')\r\n                    const divd = document.createElement('div')\r\n                    divd.classList.add('header-items__item-reg-zak')\r\n                    divd.classList.add('btn')\r\n                    divd.innerText = 'Мои заказы'\r\n                    div.appendChild(divd)\r\n                    const divq = document.createElement('div')\r\n                    divq.classList.add('header-items__item-reg-blockquit')\r\n                    const divqu = document.createElement('div')\r\n                    divqu.classList.add('header-items__item-reg-quit')\r\n                    divqu.id = 'btnS'\r\n                    divqu.innerText = 'Выйти'\r\n                    divq.appendChild(divqu)\r\n                    const divA = document.createElement('div')\r\n                    divA.classList.add('header-items__item-reg-blockAva')\r\n                    const p = document.createElement('p')\r\n                    p.classList.add('header-items__item-reg-ava')\r\n                    p.innerText = elem.id\r\n                    divA.appendChild(p)\r\n                    area.appendChild(div)\r\n                    area.appendChild(divq)\r\n                    area.appendChild(divA)\r\n                    popupL.style.visibility = 'hidden'\r\n                } else {\r\n                    return\r\n                }\r\n            })\r\n        } else {\r\n            alert('Должны быть заполненны все поля')\r\n            return\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n//# sourceURL=webpack://grymroom/./src/modules/login.js?");

/***/ }),

/***/ "./src/modules/zakaz.js":
/*!******************************!*\
  !*** ./src/modules/zakaz.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst zakaz = () => {\r\n\r\n    const popup = document.querySelector('.popup-zakaz')\r\n    const popupL = document.querySelector('.popup-login')\r\n    const popupMyZ = document.querySelector('.popup-myzakaz')\r\n    const btnMZ = document.querySelector('#btnZakaz')\r\n    const blockPrav = document.querySelector('.header-items__item-reg').innerHTML\r\n\r\n    const btnZ = document.querySelector('.popup-zakaz-items__item-form-blockbtn')\r\n\r\n    const cards = document.querySelector('.popup-myzakaz-items__item-cards')\r\n\r\n    const nickname = document.querySelector('#nick')\r\n    const info = document.querySelector('#info')\r\n    const select = document.querySelector('#type')\r\n    const file = document.querySelector('#file')\r\n\r\n    let userID\r\n    btnMZ.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (blockPrav != document.querySelector('.header-items__item-reg').innerHTML) {\r\n            userID = document.querySelector('.header-items__item-reg-ava').innerText\r\n            popup.style.visibility = 'inherit'\r\n        } else {\r\n            popupL.style.visibility = 'inherit'\r\n        }\r\n    })\r\n    \r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.closest('.header-items__item-reg-zak')) {\r\n            popupMyZ.style.visibility = 'inherit'\r\n        }\r\n    })\r\n\r\n    btnZ.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (nickname.value != '' && info.value != '' && file.value != '') {\r\n            alert('Заказ успешно добавлен')\r\n            const block = document.createElement('div')\r\n            block.classList.add('popup-myzakaz-items__item-block')\r\n            const h2 = document.createElement('h2')\r\n            h2.innerText = nickname.value\r\n            h2.classList.add('popup-myzakaz-items__item-nick')\r\n            const img = document.createElement('img')\r\n            img.src = file.value\r\n            img.classList.add('popup-myzakaz-items__item-file')\r\n            const p = document.createElement('p')\r\n            p.innerText = select.value\r\n            p.classList.add('popup-myzakaz-items__item-text')\r\n            const pinfo = document.createElement('p')\r\n            pinfo.classList.add('popup-myzakaz-items__item-info')\r\n            pinfo.innerText = info.value\r\n            block.appendChild(h2)\r\n            block.appendChild(img)\r\n            block.appendChild(p)\r\n            block.appendChild(pinfo)\r\n            cards.appendChild(block)\r\n            popup.style.visibility = 'hidden'\r\n        } else {\r\n            alert('Должны быть заполненны все поля')\r\n            return\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zakaz);\n\n//# sourceURL=webpack://grymroom/./src/modules/zakaz.js?");

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