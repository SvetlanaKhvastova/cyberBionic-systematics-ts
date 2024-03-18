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

/***/ "./src/classes.ts":
/*!************************!*\
  !*** ./src/classes.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Audi: () => (/* binding */ Audi),\n/* harmony export */   BMW: () => (/* binding */ BMW),\n/* harmony export */   Mercedes: () => (/* binding */ Mercedes)\n/* harmony export */ });\nclass Car {\n    constructor(brand, model, year) {\n        this.brand = brand;\n        this.model = model;\n        this.year = year;\n    }\n}\nclass Mercedes extends Car {\n    constructor(model, year, topColor) {\n        super('Mercedes', model, year);\n        this.topColor = topColor;\n    }\n    displayInfo() {\n        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Top Color: ${this.topColor}`);\n    }\n}\nclass BMW extends Car {\n    constructor(model, year, topSpeed) {\n        super('BMW', model, year);\n        this.topSpeed = topSpeed;\n    }\n    displayInfo() {\n        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Top Speed: ${this.topSpeed}`);\n    }\n}\nclass Audi extends Car {\n    constructor(model, year, price) {\n        super('Audi', model, year);\n        this.price = price;\n    }\n    displayInfo() {\n        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`);\n    }\n}\n\n\n\n//# sourceURL=webpack://typescript-hw-04/./src/classes.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes.ts\");\n\nconst mercedes1 = new _classes__WEBPACK_IMPORTED_MODULE_0__.Mercedes('C-Class', 2020, 'Midnight Blue');\nconst mercedes2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.Mercedes('E-Class', 2021, 'Black');\nconst bmw1 = new _classes__WEBPACK_IMPORTED_MODULE_0__.BMW('3 Series', 2019, 250);\nconst bmw2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.BMW('5 Series', 2020, 300);\nconst audi1 = new _classes__WEBPACK_IMPORTED_MODULE_0__.Audi('A4', 2018, 60000);\nconst audi2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.Audi('Q5', 2021, 95000);\nmercedes1.displayInfo();\nmercedes2.displayInfo();\nbmw1.displayInfo();\nbmw2.displayInfo();\naudi1.displayInfo();\naudi2.displayInfo();\n\n\n//# sourceURL=webpack://typescript-hw-04/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;