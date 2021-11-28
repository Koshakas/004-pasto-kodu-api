/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_searchCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchCode */ "./src/modules/searchCode.js");
/* harmony import */ var _modules_searchList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/searchList */ "./src/modules/searchList.js");
/* harmony import */ var _modules_clearHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearHistory */ "./src/modules/clearHistory.js");
/* harmony import */ var _modules_autoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/autoComplete */ "./src/modules/autoComplete.js");





(0,_modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_searchCode__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_autoComplete__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_searchList__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_clearHistory__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(term) {
  var url = "https://api.postit.lt/?term=";
  var key = "TFipepcdKtqyqwrwheg6";
  return fetch("".concat(url).concat(term, "&key=").concat(key)).then(function (responce) {
    return responce.json();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/modules/autoComplete.js":
/*!*************************************!*\
  !*** ./src/modules/autoComplete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");
/* harmony import */ var _storeSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeSearch */ "./src/modules/storeSearch.js");
/* harmony import */ var _renderHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHistory */ "./src/modules/renderHistory.js");




var autoComplete = function autoComplete() {
  var div = document.querySelector(".autocomplete");
  var ulAutoComplete = div.querySelector("ul");
  document.querySelector("#address").addEventListener("keypress", function (event) {
    var searchTerm = event.target.value;
    div.style.display = "none";

    if (searchTerm.length > 2) {
      var searchResponce;
      (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
        searchResponce = result;
      }).then(function () {
        var l;

        if (searchResponce.total > 0) {
          div.style.display = "block";
          searchResponce.total > 10 ? l = 10 : l = searchResponce.total;
          ulAutoComplete.innerHTML = "";

          var _loop = function _loop(i) {
            var li = document.createElement("li");
            li.innerText = searchResponce.data[i].address + ", " + searchResponce.data[i].city;
            ulAutoComplete.appendChild(li);
            li.addEventListener("click", function () {
              (0,_storeSearch__WEBPACK_IMPORTED_MODULE_1__["default"])(searchResponce.data[i].post_code, searchResponce.data[i]);
              ulAutoComplete.innerHTML = "";
              div.style.display = "none";
              document.querySelector(".term").value = searchResponce.data[i].address;
            });
          };

          for (var i = 0; i < l; i++) {
            _loop(i);
          }
        }
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (autoComplete);

/***/ }),

/***/ "./src/modules/clearHistory.js":
/*!*************************************!*\
  !*** ./src/modules/clearHistory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clearHistory = function clearHistory() {
  var button = document.querySelector(".btn-danger");
  button.addEventListener("click", function (e) {
    localStorage.clear();
    button.classList.add("hidden");
    document.querySelector("ul.list-group").innerHTML = "";
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearHistory);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "\n    <div class=\"form-group mb-2 input\">\n        <input id=\"address\" type=\"text\" class=\"form-control term\" placeholder=\"Adresas\">\n        <div class=\"autocomplete\">\n            <ul>\n            </ul>\n        </div>\n    </div>\n    <div class=\"form-group mx-sm-3 mb-2\">\n        <input type=\"text\" class=\"form-control result\" readonly >\n    </div>\n    <div>\n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Ie\u0161koti kodo</button>\n        <button type=\"reset\" class=\"btn btn-secondary mb-2 history\">Paie\u0161kos istorija</button>\n        <button type=\"button\" class=\"btn btn-danger mb-2 hidden\">Trinti istorij\u0105</button>\n    </div>\n    ";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");


var renderForm = function renderForm() {
  var formElement = document.createElement("form");
  formElement.className = "form-inline";
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector("main .card-body").appendChild(formElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/renderHistory.js":
/*!**************************************!*\
  !*** ./src/modules/renderHistory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderHistory(ul) {
  for (var key in localStorage) {
    if (localStorage.getItem(key) !== null) {
      var result = JSON.parse(localStorage.getItem(key));
      console.log(result);
      var li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = "Adresas: ".concat(result.address, ". Pa\u0161to kodas: ").concat(result.post_code);
      ul.appendChild(li);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHistory);

/***/ }),

/***/ "./src/modules/searchCode.js":
/*!***********************************!*\
  !*** ./src/modules/searchCode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");
/* harmony import */ var _storeSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeSearch */ "./src/modules/storeSearch.js");



var searchCode = function searchCode() {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = document.querySelector(".term").value;
    var searchResponce;
    (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      searchResponce = result;
    }).then(function () {
      if (searchResponce.total > 0) {
        console.log("searchResponce", searchResponce);
        document.querySelector(".result").value = searchResponce.data[0].post_code;
        (0,_storeSearch__WEBPACK_IMPORTED_MODULE_1__["default"])(searchResponce.data[0].post_code, searchResponce.data[0]);
      } else {
        document.querySelector("main").innerHTML += "<p>Klaida</p>";
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCode);

/***/ }),

/***/ "./src/modules/searchList.js":
/*!***********************************!*\
  !*** ./src/modules/searchList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderHistory */ "./src/modules/renderHistory.js");


var searchList = function searchList() {
  var ul = document.querySelector("ul.list-group");
  var deleteBtn = document.querySelector("button.hidden");
  document.querySelector(".history").addEventListener("click", function () {
    ul.innerHTML = "";
    (0,_renderHistory__WEBPACK_IMPORTED_MODULE_0__["default"])(ul);

    if (ul.innerHTML) {
      deleteBtn.classList.remove("hidden");
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchList);

/***/ }),

/***/ "./src/modules/storeSearch.js":
/*!************************************!*\
  !*** ./src/modules/storeSearch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var storeSearch = function storeSearch(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeSearch);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_003"] = self["webpackChunk_003"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;