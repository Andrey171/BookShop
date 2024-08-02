/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _src_js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _src_js_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_js_BooksApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/BooksApi.js */ \"./src/js/BooksApi.js\");\n/* harmony import */ var _src_js_BooksApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_BooksApi_js__WEBPACK_IMPORTED_MODULE_2__);\n// import \"./src/js/slider.js\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    // const apiKey = \"AIzaSyCOodDbg2KraWyfcmwGP9sKAdMxEO9J8XM\"; \r\n    // let startIndex = 0;\r\n    // // const query = `subject:${category}`;\r\n    // const query = \"Architecture\";\r\n\r\n    // const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}\r\n    // &printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;\r\n\r\n    // fetch(apiUrl)\r\n    //     .then((response) => response.json())\r\n    //     .then((data)=>{\r\n    //         const booksContainer = document.querySelector('.books_card');\r\n    //         booksContainer.innerHTML = '';\r\n    //         data.items.forEach(book => {\r\n\r\n    //             let bookElement = document.createElement('div');\r\n    //             bookElement.classList.add('book');\r\n    //             const imageLinks = book.volumeInfo.imageLinks.thumbnail; \r\n    //             const authors =  book.volumeInfo.authors; \r\n    //             const title = book.volumeInfo.title;\r\n    //             const description = book.volumeInfo.description;\r\n    //             // const price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;\r\n    //             const price =book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';  \r\n    //             console.log(authors);\r\n                \r\n                \r\n    //             bookElement.innerHTML = `\r\n    //                     <img src=\"${imageLinks}\" alt=\"Thumbnail\">\r\n    //                     <div class=\"book-info\">\r\n    //                         <p class=\"authors\">${authors}</p>\r\n    //                         <h2 class=\"book-title\">${title}</h2>\r\n    //                         <p class=\"description\">${description}</p>\r\n    //                         <p class=\"price\">${price}</p>\r\n    //                     </div>\r\n    //                 `;\r\n    //             booksContainer.appendChild(bookElement)\r\n    //         })\r\n    //     })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// let Banner = [{\r\n//     url:\"img/banner_one.png\"\r\n// },\r\n// {\r\n//     url:\"img/banner_two.png\"\r\n// },\r\n// {\r\n//     url:\"img/banner_three.png\"\r\n// }\r\n// ];\r\n\r\n// const img = document.querySelector(\".images\");\r\n// const sliderArrows = document.querySelector(\".arrows\");\r\n// const wordPicture = document.querySelector(\".picture_word\");\r\n// const dots = document.querySelector(\".dots_slider\");\r\n\r\n// initImages();\r\n// // dots_slider();\r\n// // initAutoplay();\r\n\r\n// function initImages() {\r\n//     Banner.forEach((image, index) => {\r\n//         let imageDiv = `<div class=\"img n${index} ${index === 0 ? \"active\" : \"\"}\"\"\r\n//         style=\"background-image:url(${Banner [index].url});\" data-index=\"${index}\"></div>`;\r\n//         img.innerHTML += imageDiv;\r\n//     });\r\n//     dots_slider();\r\n//     initAutoplay();\r\n// }\r\n\r\n// function moveSlider(num){\r\n//     img.querySelector(\".active\").classList.remove(\"active\");\r\n//     img.querySelector(\".n\"+num).classList.add(\"active\");\r\n//     dots.querySelector(\".dots_after\").classList.remove(\"dots_after\");\r\n//     dots.querySelector(\".n\"+num).classList.add(\"dots_after\");\r\n// }\r\n\r\n// function dots_slider(){\r\n//     Banner.forEach((image, index) => {\r\n//         let sliderDots = `<div class = \"dots n${index} ${index ===0 ? \"dots_after\":\"\"}\"\" data-index=\"${index}\" ></div>`;\r\n//         dots.innerHTML +=sliderDots; \r\n//     }) \r\n//     dots.querySelectorAll(\".dots\").forEach(dots_item =>{\r\n//         dots_item.addEventListener(\"click\", ()=>{\r\n//             moveSlider(dots_item.dataset.index);\r\n//         })\r\n//     })  \r\n// }\r\n\r\n// function initAutoplay() {\r\n//     setInterval(() => {\r\n//     let curNumber = +img.querySelector(\".active\").dataset.index;\r\n//     let nextNumber = curNumber === Banner.length - 1? 0 : curNumber + 1;\r\n//     moveSlider(nextNumber);\r\n//     }, 5000);\r\n// }\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "./src/js/BooksApi.js":
/*!****************************!*\
  !*** ./src/js/BooksApi.js ***!
  \****************************/
/***/ ((module) => {

eval("const apiKey = \"AIzaSyCOodDbg2KraWyfcmwGP9sKAdMxEO9J8XM\"; \r\nlet startIndex = 0;\r\nlet active_category = \"Architecture\";\r\n// let busket_primer = 0;\r\n\r\n//TODO\r\nlet parseStorageData = JSON.parse(localStorage.getItem('add')) ?? [];\r\n\r\nfetchBooks();\r\n   \r\n\r\nfunction fetchBooks(){\r\n    \r\n    let query = `subject:${active_category}`;\r\n   \r\n    \r\n    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;\r\n    fetch(apiUrl)\r\n        .then((response) => response.json())\r\n        .then((data)=>{\r\n            const booksContainer = document.querySelector('.books_card');\r\n            booksContainer.innerHTML = '';\r\n            data.items.forEach(book => {\r\n\r\n                let bookElement = document.createElement('div');\r\n                bookElement.classList.add('book');\r\n                const imageLinks = book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail: ''; \r\n                const authors =  book.volumeInfo.authors ? book.volumeInfo.authors: ''; \r\n                const title = book.volumeInfo.title? book.volumeInfo.title: '';\r\n                let description = book.volumeInfo.description ? book.volumeInfo.description : '';\r\n                // const rating = book.saleInfo.listPrice? (book.saleInfo.listPrice.amount /10)+\"%\": \"40%\";\r\n                const rating = Math.random().toFixed(1) * (100 - 1) + 1 +\"%\";\r\n                const ratingsCount = book.volumeInfo.ratingsCount? book.volumeInfo.ratingsCount +\"m rating\": '';\r\n                const maxLength = 100; \r\n                if (description.length > maxLength) {\r\n                    description = description.substring(0, maxLength) + '...';\r\n                }\r\n                // const price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;\r\n                const price =book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';  \r\n                \r\n                \r\n                bookElement.innerHTML = `\r\n                        <img class =\"img-book\"src=\"${imageLinks}\" alt=\"Thumbnail\">\r\n                        <div class=\"book-info\">\r\n                            <p class=\"authors\">${authors}</p>\r\n                            <h2 class=\"book-title\">${title}</h2>\r\n                            <div class= \"section_rating\">\r\n                                <svg width=\"70\" height=\"32\" viewBox=\"0 0 160 32\">\r\n                                    <defs>\r\n                                        <mask id=\"perc${book.id}\">\r\n                                            <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\" />\r\n                                            <rect x=\"${rating}\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"grey\" />\r\n                                        </mask>\r\n\r\n                                        <symbol viewBox=\"0 0 32 32\" id=\"star\">\r\n                                            <path d=\"M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z\" />\r\n                                        </symbol>\r\n                                        <symbol viewBox=\"0 0 160 32\" id=\"stars\">\r\n                                            <use xlink:href=\"#star\" x=\"-64\" y=\"0\"></use>\r\n                                            <use xlink:href=\"#star\" x=\"-32\" y=\"0\"></use>\r\n                                            <use xlink:href=\"#star\" x=\"0\" y=\"0\"></use>\r\n                                            <use xlink:href=\"#star\" x=\"32\" y=\"0\"></use>\r\n                                            <use xlink:href=\"#star\" x=\"64\" y=\"0\"></use>\r\n                                        </symbol>\r\n                                    </defs>\r\n\r\n                                    <use xlink:href=\"#stars\" fill=\"green\" stroke=\"black\" mask=\"url(#perc${book.id})\"></use>\r\n                                </svg>\r\n                                <p class=\"rating\">${ratingsCount}</p>\r\n                            </div> \r\n                            <p class=\"description\">${description}</p>\r\n                            <p class=\"price\">${price}</p>\r\n                            <button data-number=\"${book.id}\" class =\"button-buy \">${parseStorageData.includes(book.id)? \"IN THE CART\":\"BUY NOW\"}</button>\r\n                            \r\n                        </div>\r\n                    `;\r\n                booksContainer.appendChild(bookElement)\r\n            })\r\n        });\r\n};\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    let number_busket = document.querySelector(\".number-busket\");\r\n    function number_busket_update() {\r\n        number_busket.innerText = parseStorageData.length;\r\n        if (parseStorageData.length > 0) {\r\n            number_busket.style.display = 'block'; \r\n        } else {\r\n            number_busket.style.display = 'none'; \r\n        }\r\n    }\r\n    number_busket_update();\r\n    const category_list = document.querySelectorAll(\".category\");\r\n\r\n    category_list.forEach(item =>{\r\n        item.addEventListener(\"click\", ()=>{\r\n            document.querySelector('.category-active').classList.remove('category-active');\r\n            item.classList.add(\"category-active\");\r\n            startIndex =0;\r\n            active_category = item.textContent.trim();\r\n            fetchBooks();\r\n            \r\n        })\r\n    });\r\n\r\n    const button_laod= document.querySelector(\".button-load\");\r\n    button_laod.addEventListener(\"click\",()=>{\r\n        startIndex+=6;\r\n        fetchBooks();\r\n    });\r\n    \r\n    document.addEventListener('click', (event) => {\r\n        if(event.target.classList.contains('button-buy')){\r\n            let id = event.target.dataset.number;\r\n            if (event.target.textContent === 'BUY NOW') {\r\n                event.target.textContent = 'IN THE CART';\r\n                //TODO\r\n                parseStorageData.push(id); \r\n            }else { \r\n                event.target.textContent = 'BUY NOW';\r\n                //TODO\r\n                parseStorageData.splice(parseStorageData.indexOf(id), 1);\r\n            }\r\n            number_busket_update();\r\n            //TODO\r\n            localStorage.setItem(\"add\", JSON.stringify(parseStorageData));\r\n            console.log(localStorage);\r\n        }\r\n        \r\n    })\r\n});  \r\n\r\nmodule.exports = fetchBooks;\n\n//# sourceURL=webpack:///./src/js/BooksApi.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((module) => {

eval("// export function Slider() {\r\n//     initImages()    \r\n// }\r\n\r\n// export default function Slider(){\r\nlet Banner = [{\r\n    url:\"/img/banner_one.png\"\r\n},\r\n{\r\n    url:\"/img/banner_two.png\"\r\n},\r\n{\r\n    url:\"/img/banner_three.png\"\r\n}\r\n];\r\n\r\nconst img = document.querySelector(\".images\");\r\nconst sliderArrows = document.querySelector(\".arrows\");\r\nconst wordPicture = document.querySelector(\".picture_word\");\r\nconst dots = document.querySelector(\".dots_slider\");\r\n\r\ninitImages();\r\n// dots_slider();\r\n// initAutoplay();\r\n\r\nfunction initImages() {\r\n    Banner.forEach((image, index) => {\r\n        let imageDiv = `<div class=\"img n${index} ${index === 0 ? \"active\" : \"\"}\"\"\r\n        style=\"background-image:url(${Banner [index].url});\" data-index=\"${index}\"></div>`;\r\n        img.innerHTML += imageDiv;\r\n    });\r\n    dots_slider();\r\n    initAutoplay();\r\n}\r\n\r\nfunction moveSlider(num){\r\n    img.querySelector(\".active\").classList.remove(\"active\");\r\n    img.querySelector(\".n\"+num).classList.add(\"active\");\r\n    dots.querySelector(\".dots_after\").classList.remove(\"dots_after\");\r\n    dots.querySelector(\".n\"+num).classList.add(\"dots_after\");\r\n}\r\n\r\nfunction dots_slider(){\r\n    Banner.forEach((image, index) => {\r\n        let sliderDots = `<div class = \"dots n${index} ${index ===0 ? \"dots_after\":\"\"}\"\" data-index=\"${index}\" ></div>`;\r\n        dots.innerHTML +=sliderDots; \r\n    }) \r\n    dots.querySelectorAll(\".dots\").forEach(dots_item =>{\r\n        dots_item.addEventListener(\"click\", ()=>{\r\n            moveSlider(dots_item.dataset.index);\r\n        })\r\n    })  \r\n}\r\n\r\nfunction initAutoplay() {\r\n    setInterval(() => {\r\n    let curNumber = +img.querySelector(\".active\").dataset.index;\r\n    let nextNumber = curNumber === Banner.length - 1? 0 : curNumber + 1;\r\n    moveSlider(nextNumber);\r\n    }, 5000);\r\n}\r\n\r\n\r\nmodule.exports = initImages;\n\n//# sourceURL=webpack:///./src/js/slider.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;