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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





function createHeader() {
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    h3.textContent = "Bouver";
    h3.classList.add("logo");
    header.appendChild(h3);
    const ul = document.createElement("ul");

    const homeLi = document.createElement("li")
    homeLi.textContent = "HOME";
    homeLi.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.lastChild.remove();
        body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });
    ul.appendChild(homeLi);

    const menuLi = document.createElement("li")
    menuLi.textContent = "MENU";
    menuLi.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.lastChild.remove();
        body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });
    ul.appendChild(menuLi);

    header.appendChild(ul)

    return header;
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
    h2.textContent = "MENUS";
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





function createPage() {
    const body = document.querySelector("body");
    body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
    body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
}

createPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQUNBOzs7QUFHaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVTtBQUNuQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVTtBQUNuQyxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNQO0FBQ1k7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVTtBQUNuQyxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0w7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7O1VDM0V6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZTtBQUNKOzs7QUFHaEM7QUFDQTtBQUNBLHFCQUFxQixtREFBWTtBQUNqQyxxQkFBcUIsaURBQVU7QUFDL0I7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLnRleHRDb250ZW50ID0gXCJCb3V2ZXJcIjtcbiAgICBoMy5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgaG9tZUxpLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgaG9tZUxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChob21lTGkpO1xuXG4gICAgY29uc3QgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbWVudUxpLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgbWVudUxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51TGkpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKVxuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH1cbiAgXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtbmFtZVwiKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IFwiQm91dmVyXCI7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudXMtYnRuXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTEUgTUVOVVwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIudGV4dENvbnRlbnQgPSBcIk1FTlVTXCI7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMik7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZm9vZHNcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RTZWN0aW9uKFwiQ2hpbGxcIiwgW1wiQ2hlZXNlIGFuZCBjb2xkIGN1dHMgcGxhdHRlclwiLCBcIlRvcmNoZWQgU2FsbW9uXCIsIFwiU3F1YXNoIENhcnBhY2Npb1wiLCBcIlNlYXJlZCBUdW5hXCJdKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RTZWN0aW9uKFwiU2lkZXNcIiwgW1wiRlJVSVQgJiBCRVJSWSBTQUxBRFwiLCBcIk1hc2hlZCBQb3RhdG9cIiwgXCJGcmVuY2ggRnJpZXNcIiwgXCJDcmVhbXkgc3BpbmFjaFwiXSkpO1xuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBzZWN0aW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RTZWN0aW9uKG5hbWUsIGZvb2RzKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1zZWN0aW9uXCIpXG4gICAgXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgZm9vZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVGb29kKGVsZW1lbnQsIGNyZWF0ZVJhbmRvbURlc2NyaXB0aW9uKCksIGNyZWF0ZVJhbmRvbVByaWNlKCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbURlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IG1heERlc2NyaXB0aW9ucyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpICsgMTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFsnTGVtb24nLCAnQ29ja3RhaWwgU2F1Y2UnLCAnQmVlZicsICdTYWxtb24nLCAnTGVla3MnLCAnU2VzYW1lJywgJ1BvbWVsbycsICdDaGlsaScsICdNaWdub25ldHRlIHNhdWNlJywgJ1Bhcm1hIEhhbSddXG4gICAgbGV0IHJhbmRvbURlc2NyaXB0aW9uID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heERlc2NyaXB0aW9uczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVzY3JpcHRpb24ubGVuZ3RoKTtcbiAgICAgICAgcmFuZG9tRGVzY3JpcHRpb24gKz0gZGVzY3JpcHRpb25bcmFuZG9tSW5kZXhdICsgXCIsIFwiXG4gICAgfVxuICAgIFxuICAgIHJldHVybiByYW5kb21EZXNjcmlwdGlvbi5zbGljZSgwLCByYW5kb21EZXNjcmlwdGlvbi5sZW5ndGgtMik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVByaWNlKCkge1xuICAgIGxldCBwcmljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xuICAgIHByaWNlICs9IFwiJFwiXG5cbiAgICByZXR1cm4gcHJpY2Vcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpXG5cbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoNC50ZXh0Q29udGVudCA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2VQLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lJztcblxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmNyZWF0ZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=