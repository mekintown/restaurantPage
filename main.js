/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createHeader() {
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    h3.textContent = "Bouver";
    h3.classList.add("logo");
    header.appendChild(h3);
    const ul = document.createElement("ul");
    const navItems = ["HOME", "MENU", "ABOUT"];

    navItems.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item;
        ul.appendChild(li);
    });

    header.appendChild(ul)

    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function createHome() {
    const section = document.createElement("section");
    section.classList.add("home");
    section.classList.add("background");

    const div = document.createElement("div");
    div.classList.add("hero");

    const h3 = document.createElement("h3");
    h3.classList.add("restaurant-name");
    h3.textContent = "Bouver";

    const button = document.createElement("button");
    button.classList.add("menus-btn");
    button.textContent = "LE MENU";
    button.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.lastChild.remove();
        body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });

    div.appendChild(h3);
    div.appendChild(button);

    section.appendChild(div);

    return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createMenu() {
    const section = document.createElement("section");
    section.classList.add("menu");

    const h2 = document.createElement("h2");
    h2.textContent = "Menu";
    section.appendChild(h2);

    const div = document.createElement("div");
    div.classList.add("foods");
    div.appendChild(createFoodSection("Chill", ["Cheese and cold cuts platter", "Torched Salmon", "Squash Carpaccio", "Seared Tuna"]));
    div.appendChild(createFoodSection("Sides", ["FRUIT & BERRY SALAD", "Mashed Potato", "French Fries", "Creamy spinach"]));

    section.appendChild(div);
    return section;

}

function createFoodSection(name, foods) {
    const section = document.createElement("section")
    section.classList.add("food-section")
    
    const h3 = document.createElement("h3");
    h3.textContent = name;
    section.appendChild(h3);

    foods.forEach(element => {
        section.appendChild(createFood(element, createRandomDescription(), createRandomPrice()));
    });

    return section;

}

function createRandomDescription() {
    const maxDescriptions = Math.floor(Math.random() * 5) + 1;
    const description = ['Lemon', 'Cocktail Sauce', 'Beef', 'Salmon', 'Leeks', 'Sesame', 'Pomelo', 'Chili', 'Mignonette sauce', 'Parma Ham']
    let randomDescription = "";
    for (let i = 0; i < maxDescriptions; i++) {
        const randomIndex = Math.floor(Math.random() * description.length);
        randomDescription += description[randomIndex] + ", "
    }
    
    return randomDescription.slice(0, randomDescription.length-2);
}

function createRandomPrice() {
    let price = Math.floor(Math.random() * 100) + 1;
    price += "$"

    return price
}

function createFood(name, description, price) {
    const div = document.createElement("div")
    div.classList.add("food")

    const h4 = document.createElement("h4");
    h4.textContent = name.toUpperCase();
    
    const p = document.createElement("p");
    p.textContent = description;

    const priceP = document.createElement("p");
    priceP.textContent = price;

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(priceP);

    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






function createPage() {
    const body = document.querySelector("body");
    body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
    body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
}

createPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFDWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFVO0FBQ25DLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTDs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7VUMzRXpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZTtBQUNKO0FBQ0E7OztBQUdoQztBQUNBO0FBQ0EscUJBQXFCLG1EQUFZO0FBQ2pDLHFCQUFxQixpREFBVTtBQUMvQjs7QUFFQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IFwiQm91dmVyXCI7XG4gICAgaDMuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgzKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcIkhPTUVcIiwgXCJNRU5VXCIsIFwiQUJPVVRcIl07XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKVxuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIik7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gICAgaDMudGV4dENvbnRlbnQgPSBcIkJvdXZlclwiO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnVzLWJ0blwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxFIE1FTlVcIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBib2R5Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMik7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZm9vZHNcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RTZWN0aW9uKFwiQ2hpbGxcIiwgW1wiQ2hlZXNlIGFuZCBjb2xkIGN1dHMgcGxhdHRlclwiLCBcIlRvcmNoZWQgU2FsbW9uXCIsIFwiU3F1YXNoIENhcnBhY2Npb1wiLCBcIlNlYXJlZCBUdW5hXCJdKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RTZWN0aW9uKFwiU2lkZXNcIiwgW1wiRlJVSVQgJiBCRVJSWSBTQUxBRFwiLCBcIk1hc2hlZCBQb3RhdG9cIiwgXCJGcmVuY2ggRnJpZXNcIiwgXCJDcmVhbXkgc3BpbmFjaFwiXSkpO1xuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBzZWN0aW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RTZWN0aW9uKG5hbWUsIGZvb2RzKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1zZWN0aW9uXCIpXG4gICAgXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgZm9vZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVGb29kKGVsZW1lbnQsIGNyZWF0ZVJhbmRvbURlc2NyaXB0aW9uKCksIGNyZWF0ZVJhbmRvbVByaWNlKCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbURlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IG1heERlc2NyaXB0aW9ucyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpICsgMTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFsnTGVtb24nLCAnQ29ja3RhaWwgU2F1Y2UnLCAnQmVlZicsICdTYWxtb24nLCAnTGVla3MnLCAnU2VzYW1lJywgJ1BvbWVsbycsICdDaGlsaScsICdNaWdub25ldHRlIHNhdWNlJywgJ1Bhcm1hIEhhbSddXG4gICAgbGV0IHJhbmRvbURlc2NyaXB0aW9uID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heERlc2NyaXB0aW9uczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVzY3JpcHRpb24ubGVuZ3RoKTtcbiAgICAgICAgcmFuZG9tRGVzY3JpcHRpb24gKz0gZGVzY3JpcHRpb25bcmFuZG9tSW5kZXhdICsgXCIsIFwiXG4gICAgfVxuICAgIFxuICAgIHJldHVybiByYW5kb21EZXNjcmlwdGlvbi5zbGljZSgwLCByYW5kb21EZXNjcmlwdGlvbi5sZW5ndGgtMik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVByaWNlKCkge1xuICAgIGxldCBwcmljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xuICAgIHByaWNlICs9IFwiJFwiXG5cbiAgICByZXR1cm4gcHJpY2Vcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpXG5cbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoNC50ZXh0Q29udGVudCA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2VQLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSc7XG5cblxuZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5jcmVhdGVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9