/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ temperatureConversion),
/* harmony export */   "determineTemperatureSymbol": () => (/* binding */ determineTemperatureSymbol)
/* harmony export */ });


function temperatureConversion
    (currentTemperatureScale, chosenTemperatureScale, temperature) {
    if (currentTemperatureScale === 'kelvin'
        && chosenTemperatureScale === 'celsius') {
        const temperatureInCelsius = temperature - 273.15;
        return Math.round(temperatureInCelsius);
    }
}

function determineTemperatureSymbol(event = null) {
    let symbol;

    if (event === null) {
        symbol = '°C';
    }

    return symbol;
}

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
/*!***************************************!*\
  !*** ./src/modules/dom-controller.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayRequiredData)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");


function displayRequiredData(data) {
    const weatherDataContainer = document.createElement('section');
    weatherDataContainer.id = 'weather-data-container';
    const mainElement = document.querySelector('main');
    mainElement.appendChild(weatherDataContainer);

    const cityNameElement = document.createElement('h1');
    cityNameElement.id = 'city-name';
    cityNameElement.textContent = `${data.name}`;
    weatherDataContainer.appendChild(cityNameElement);

    const cityWeatherDescription = document.createElement('p');
    cityWeatherDescription.id = `city-weather-description`;
    cityWeatherDescription.textContent = `${data.description}`;
    weatherDataContainer.appendChild(cityWeatherDescription);

    const chosenTemperatureSymbol = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.determineTemperatureSymbol)();

    const cityTemperatureElement = document.createElement('p');
    cityTemperatureElement.textContent = `Temperature: ${data.temp} ${chosenTemperatureSymbol}`;
    weatherDataContainer.appendChild(cityTemperatureElement);

    const cityFeelsLikeElement = document.createElement('p');
    cityFeelsLikeElement.textContent = `RealFeel: ${data.feels_like} ${chosenTemperatureSymbol}`;
    weatherDataContainer.appendChild(cityFeelsLikeElement);

    const cityHumidityElement = document.createElement('p');
    cityHumidityElement.textContent = `Humidity: ${data.humidity} %`;
    weatherDataContainer.appendChild(cityHumidityElement);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNEOztBQUV2QztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLGlCQUFpQjtBQUM3RDs7QUFFQSxvQ0FBb0MsbUVBQTBCOztBQUU5RDtBQUNBLHlEQUF5RCxXQUFXLEVBQUUsd0JBQXdCO0FBQzlGOztBQUVBO0FBQ0Esb0RBQW9ELGlCQUFpQixFQUFFLHdCQUF3QjtBQUMvRjs7QUFFQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaGVscGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20tY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZXRlcm1pbmVUZW1wZXJhdHVyZVN5bWJvbCB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZW1wZXJhdHVyZUNvbnZlcnNpb25cbiAgICAoY3VycmVudFRlbXBlcmF0dXJlU2NhbGUsIGNob3NlblRlbXBlcmF0dXJlU2NhbGUsIHRlbXBlcmF0dXJlKSB7XG4gICAgaWYgKGN1cnJlbnRUZW1wZXJhdHVyZVNjYWxlID09PSAna2VsdmluJ1xuICAgICAgICAmJiBjaG9zZW5UZW1wZXJhdHVyZVNjYWxlID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVJbkNlbHNpdXMgPSB0ZW1wZXJhdHVyZSAtIDI3My4xNTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGVtcGVyYXR1cmVJbkNlbHNpdXMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lVGVtcGVyYXR1cmVTeW1ib2woZXZlbnQgPSBudWxsKSB7XG4gICAgbGV0IHN5bWJvbDtcblxuICAgIGlmIChldmVudCA9PT0gbnVsbCkge1xuICAgICAgICBzeW1ib2wgPSAnwrBDJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3ltYm9sO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGV0ZXJtaW5lVGVtcGVyYXR1cmVTeW1ib2wgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVJlcXVpcmVkRGF0YShkYXRhKSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgd2VhdGhlckRhdGFDb250YWluZXIuaWQgPSAnd2VhdGhlci1kYXRhLWNvbnRhaW5lcic7XG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQod2VhdGhlckRhdGFDb250YWluZXIpO1xuXG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjaXR5TmFtZUVsZW1lbnQuaWQgPSAnY2l0eS1uYW1lJztcbiAgICBjaXR5TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLm5hbWV9YDtcbiAgICB3ZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TmFtZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgY2l0eVdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaXR5V2VhdGhlckRlc2NyaXB0aW9uLmlkID0gYGNpdHktd2VhdGhlci1kZXNjcmlwdGlvbmA7XG4gICAgY2l0eVdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEuZGVzY3JpcHRpb259YDtcbiAgICB3ZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5V2VhdGhlckRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGNob3NlblRlbXBlcmF0dXJlU3ltYm9sID0gZGV0ZXJtaW5lVGVtcGVyYXR1cmVTeW1ib2woKTtcblxuICAgIGNvbnN0IGNpdHlUZW1wZXJhdHVyZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2l0eVRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXB9ICR7Y2hvc2VuVGVtcGVyYXR1cmVTeW1ib2x9YDtcbiAgICB3ZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5VGVtcGVyYXR1cmVFbGVtZW50KTtcblxuICAgIGNvbnN0IGNpdHlGZWVsc0xpa2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNpdHlGZWVsc0xpa2VFbGVtZW50LnRleHRDb250ZW50ID0gYFJlYWxGZWVsOiAke2RhdGEuZmVlbHNfbGlrZX0gJHtjaG9zZW5UZW1wZXJhdHVyZVN5bWJvbH1gO1xuICAgIHdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlGZWVsc0xpa2VFbGVtZW50KTtcblxuICAgIGNvbnN0IGNpdHlIdW1pZGl0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2l0eUh1bWlkaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSAlYDtcbiAgICB3ZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SHVtaWRpdHlFbGVtZW50KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=