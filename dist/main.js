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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    color: whitesmoke;\n    font-family: 'PT Sans', sans-serif;\n\n    --higlighted-color: rgb(100, 100, 100);\n    --background-color-dark: rgb(40, 40, 40);\n    --background-color-light: rgb(60, 60, 60);\n    --border-radius: 5px;\n    --red: #ff4013;\n}\nbody {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 200px auto;\n}\n\n.sidebar {\n    background-color: var(--background-color-light);\n    height: 100vh;\n    padding: 0 15px;\n}\n\nmain {\n    background-color: var(--background-color-dark);\n    display: grid;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.list-title {\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    margin: 10px 0;\n    font-size: 1.1em;\n    font-weight: 700;\n}\n\n.list-name {\n    margin-left: 5px;\n    cursor: pointer;\n    margin-bottom: 7px;\n    padding: 3px;\n    border: 0px solid;\n    border-radius: var(--border-radius);\n}\n\nbutton, .checkbox {\n    background: none;\n    border: none;\n    cursor: pointer;\n    border: solid 0px;\n    border-radius: 5px;\n    transition: 0.3s;\n}\n\ni {\n    margin-right: 5px;\n}\n\n.i-s {\n    margin: 0px 6px 0px 1px;\n}\n\n.i-button{\n    margin: 0;\n}\n\n.btn-add-list {\n    border: solid 0px;\n    border-radius: 5px;\n    height: 23px;\n    width: 23px;\n}\n\n.btn-add-list:hover, .btn-add-task:hover {\n    background-color: var(--higlighted-color);\n}\n\n.list-name:hover {\n    background-color: var(--higlighted-color);\n}\n\n.btn-rotated {\n    transform: rotate(45deg);\n}\n\n.task:hover {\n    background-color: var(--higlighted-color);\n    transition: 0.3s;\n}\n\n.btn-arr {\n    position: fixed;\n    bottom: 10px;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-self: end;\n}\n\n#btn-add-task-disp, #clr-done {\n    background-color: var(--red)\t;\n    width: 40px;\n    height: 40px;\n    transition: 0.3s;\n}\n\n.task-list {\n    padding: 5px;\n}\n\n#task-list-field {\n    margin: 0px 20px;\n    padding: 30px 0px; \n    width: 80%;\n    max-width: 750px;\n    display: flex;\n    flex-direction: column;\n}\n\n.task, #form-add-task {\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--higlighted-color);\n    padding: 5px;\n    border-radius: var(--border-radius);\n}\n\np {\n    font-size: 0.9em;\n    /* color: var(--higlighted-color); */\n    margin: 0;\n    margin-left: 5px;\n    color: rgba(245, 245, 245, 0.5);\n}\n\nspan {\n    color: whitesmoke;\n}\n\n.selected {\n    background-color: var(--higlighted-color);\n}\n\n.red {\n    color: var(--red);\n}\n\n#form-add-list {\n    display: none;\n    grid-auto-flow: column;\n    align-items: baseline;\n}\n\n#form-add-task {\n    display: none;\n    flex-direction: column;\n    gap: 10px;\n    border: 1px solid var(--higlighted-color);\n\n}\n\nlabel {\n    position: relative;\n    cursor: pointer;\n}\n\ninput[type=\"radio\"] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\ninput[class=\"normal\"]:hover + i,\ninput[class=\"normal\"]:checked + i,\ninput[class=\"normal\"]:focus + i {\n  color: whitesmoke;\n}\n\ninput[class=\"high\"]:hover + i,\ninput[class=\"high\"]:checked + i,\ninput[class=\"high\"]:focus + i {\n  color: var(--red);\n}\n\n#addTaskFrmLine1, #addTaskFrmLine2 {\n    display: flex;\n}\n\nfieldset {\n    color: var(--higlighted-color);\n    border: 1px solid var(--higlighted-color);\n    border-radius: var(--border-radius);\n}\n\n#tsk-title {\n    width: 100%;\n}\n\ntextarea:focus, input:focus{\n    outline: none;\n}\n\ninput {\n    background-color: var(--higlighted-color);\n    margin-left: 5px;\n    padding: 5px;\n    border: 0px solid;\n    border-radius: var(--border-radius);\n    color: whitesmoke;\n    height: 17px;\n    font-family: inherit;\n    font-size: inherit;\n\n}\n\ninput[name=\"description\"],  input[name=\"dueDate\"]{\n    background-color: var(--background-color-dark);\n    border: 0 solid var(--background-color-dark);\n}\n\ninput[name=\"dueDate\"] {\n    padding: 0;\n}\n\n#new-list-title {\n    max-width: 80%;\n}\n\n.tsk-done {\n    text-decoration: line-through;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gtdone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gtdone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gtdone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gtdone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gtdone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gtdone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gtdone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gtdone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gtdone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gtdone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n//Task management module\nconst TaskManager = (() => {\n    \n    //Task factory\n    function Task (title,priority, description, dueDate ) {\n        this.id = Date.now().toString()\n        this.title = title\n        this.description = description\n        this.dueDate = new Date(dueDate).toLocaleDateString()\n        this.priority = priority\n        this.isDone = false\n    }\n\n    const lists = [{\n        // Base Lists\n        id: 'Inbox',\n        title: 'Inbox',\n        tasks: [{\n            id: '1',\n            title: 'Start coding the todo app',\n            description: \"Don't be lazy\",\n            dueDate: new Date().toLocaleDateString(),\n            priority: 'high',\n            isDone: true\n        }, {\n            id: '2',\n            title: 'Order new jeans',\n            description: \"Don't be lazy\",\n            dueDate: new Date(2023, 11, 30).toLocaleDateString(),\n            priority: 'high',\n            isDone: false\n        }],\n        isSelected: true\n    }, \n    {\n        id: 'Today',\n        title: 'Today',\n        tasks: [],\n        isSelected: false\n    } ,{\n        id: 'Upcoming',\n        title: 'Upcoming',\n        tasks: [],\n        isSelected: false\n    } ,\n        // User Lists\n    {\n        id: 'Home',\n        title: 'Home',\n        tasks: [{\n            id: '1',\n            title: 'Do Laundry',\n            description: \"Don't be lazy\",\n            dueDate: new Date().toLocaleDateString(),\n            priority: 'normal',\n            isDone: false\n        }],\n        isSelected: false\n    } , {\n        id: 'Work',\n        title: 'Work',\n        tasks: [],\n        isSelected: false\n    }]\n    \n    const getLists = () => lists;\n\n    let selectedList = lists[0];\n\n    const getSelectedList = () => selectedList;\n\n    const getSelectedTasks = () => selectedList.tasks;\n\n    const getAllTasks = () => {\n        let allTasksObjects = []\n        let allTasks = []\n        lists.forEach(list => {\n            allTasksObjects.push(list.tasks)    \n        })\n        allTasksObjects.forEach(tasks => {\n            for (let index = 0; index < tasks.length; index++) {\n                allTasks.push(tasks[index])\n            }\n        })\n        return allTasks\n    }\n\n    const updateTodayTasks = () => {\n        lists[1].tasks = []\n        let allTasks = getAllTasks()\n        let currentDate = new Date().toLocaleDateString()\n        let todayTasks = allTasks.filter(function(task) {\n            return task.dueDate === currentDate\n        })\n        lists[1].tasks = todayTasks\n    }\n\n    const updateUpcomingTasks = () => {\n        lists[2].tasks = []\n        let allTasks = getAllTasks()\n        let currentDate = new Date().toLocaleDateString()\n        let upcomingTasks = allTasks.filter(function(task) {\n            return task.dueDate > currentDate\n        })\n        lists[2].tasks = upcomingTasks\n    }\n\n    function selectList(listId) {\n        selectedList.isSelected = false\n        const newList = lists.find(list => list.id === listId);\n        newList.isSelected = true;\n        selectedList = newList;\n    }\n\n    const updateList = () => {\n        let selectedTasks = getSelectedTasks()\n        let filteredTasks = selectedTasks.filter(function(task) {\n            return task.isDone == false;\n        })\n        selectedList.tasks = filteredTasks\n    }\n\n    // List factory\n    function List(title) {\n        this.id = Date.now().toString()\n        this.title = title\n        this.tasks = []\n        this.isSelected = false\n    }\n\n    return {\n        getLists,\n        getSelectedList,\n        getSelectedTasks,\n        getAllTasks,\n        updateTodayTasks,\n        updateUpcomingTasks,\n        selectList,\n        updateList,\n        Task,\n        List,\n    }\n})();\n\n//Screen Controller\nfunction ScreenController() {\n\n    const lists = TaskManager.getLists()\n    const listsWrapper = document.getElementById('lists-list')\n    \n    // Toggle the form's visibility\n    function toggleForm(form) {\n        if (form.style.display === \"none\" || form.style.display === \"\") {\n            form.style.display = \"flex\"; // Show the form\n        } else {\n            form.style.display = \"none\"; // Hide the form\n        }\n    }\n    \n    // Rotate button\n    function rotateBtn(button) {\n        button.classList.toggle(\"btn-rotated\");\n    }\n    \n    function clearElement(element) {\n        element.innerHTML = \"\";\n    }\n    \n    function render() {\n\n        // Render user lists on the sidebar\n        clearElement(listsWrapper);\n        lists.forEach(list => {  \n            // Skip the base lists\n            if (list.id === 'Inbox' || list.id === 'Today' || list.id === 'Upcoming') {\n                return\n            } else {\n            const listElement = document.createElement('li')\n            listElement.classList.add('list-name')\n            listElement.setAttribute('data-list-id', list.id)\n            \n            const iconElement = document.createElement(\"i\");\n            iconElement.className = \"fa-regular fa-folder\";\n            iconElement.style.color = \"#0061ff\";\n            listElement.appendChild(iconElement)\n            \n            const textNode = document.createTextNode(list.title)\n            listElement.appendChild(textNode)\n            \n            listsWrapper.appendChild(listElement)\n            }\n        });\n        \n        let selectedList = TaskManager.getSelectedList()\n        \n        // Render selected list  \n        const selectedListTitle = document.getElementById('selected-list-title')\n        const taskList = document.getElementById('task-list')\n        let listTitles = document.querySelectorAll('li.list-name')\n\n        // highlight selected list\n        const selectedListTitleSidebar = Array.from(listTitles).find(title => title.dataset.listId === selectedList.id);\n        selectedListTitleSidebar.classList.add('selected');\n    \n        clearElement(selectedListTitle);\n        clearElement(taskList);\n        selectedListTitle.classList.add('list-name')\n        selectedListTitle.innerHTML = selectedList.title\n\n        // Render tasks\n        selectedList.tasks.forEach(task => {\n            const taskElement = document.createElement('li')\n            taskElement.classList.add('task')\n            taskElement.setAttribute('data-task-id', task.id)\n            \n            const iconElement = document.createElement('i')\n            if (task.isDone == true) {\n                iconElement.className = \"fa-solid fa-square-check checkbox red\"\n                taskElement.classList.add('tsk-done')\n            } else {\n                iconElement.className = \"fa-regular fa-square checkbox\"\n                \n                if (task.priority === 'high') {\n                    iconElement.classList.add(\"red\")\n                }\n            }\n            taskElement.appendChild(iconElement)\n            \n            const taskTitle = document.createTextNode(task.title)\n            const line2 = document.createElement('p')\n            const dueDate = document.createElement('span')\n            const description = document.createTextNode(task.description)\n            dueDate.innerHTML = task.dueDate + ' '\n            taskElement.appendChild(taskTitle)\n            line2.appendChild(dueDate)\n            line2.appendChild(description)\n            taskElement.appendChild(line2)\n            \n            taskList.appendChild(taskElement)\n        })\n            \n    }\n\n     const addListBtnDisp = document.getElementById('btn-add-list-disp') \n     addListBtnDisp.addEventListener('click', function() {\n         rotateBtn(addListBtnDisp);\n         toggleForm(addListForm);\n     });\n\n     const addTaskBtnDisp = document.getElementById('btn-add-task-disp')\n     addTaskBtnDisp.addEventListener('click', function() {\n         rotateBtn(addTaskBtnDisp);\n         toggleForm(addTaskForm);\n     });\n\n    function clickHandlerBoard() {\n\n        //  Switch lists\n        const switchLists = () => { \n            let listTitles = document.querySelectorAll('li.list-name');\n            listTitles.forEach(list => {\n                list.addEventListener('click', function() {\n                TaskManager.updateTodayTasks()\n                TaskManager.updateUpcomingTasks()\n                // remove higlights on the sidebar\n                listTitles.forEach(title => {\n                    title.classList.remove('selected')\n            })\n                    let selectedTitleId = list.dataset.listId\n                    TaskManager.selectList(selectedTitleId);\n                    render();\n                    clickHandlerBoard()\n                })\n            })\n        }\n        switchLists();\n\n        // Mark tasks as done\n        const toggleIsDone = () => {\n            let checkboxes = document.querySelectorAll('i.checkbox')\n            checkboxes.forEach(box => {\n                box.addEventListener('click', function() {\n                    const taskId = box.parentNode.getAttribute('data-task-id')\n                    const selectedTasks = TaskManager.getSelectedTasks()\n                    const selectedTask = selectedTasks.find(task => task.id === taskId);\n                    if (selectedTask.isDone == true) {\n                        selectedTask.isDone = false\n                    } else {\n                        selectedTask.isDone = true\n                    }\n                    render();\n                    clickHandlerBoard();\n                })\n            })\n        }\n        toggleIsDone();\n\n        // Delete completed tasks\n        const deleteCompleted = () => {\n            const deleteButton = document.getElementById('clr-done')\n            deleteButton.addEventListener('click', function() {\n                TaskManager.updateList();\n                render();\n                clickHandlerBoard();\n            })\n        }\n        deleteCompleted();\n    }\n\n     // Create new list\n    const addListForm = document.getElementById('form-add-list') \n    const addListFormInput = document.getElementById('new-list-title')\n    addListForm.addEventListener('submit', e => {\n        e.preventDefault()\n        const listTitle = addListFormInput.value\n        const newList = new TaskManager.List(listTitle)\n        addListFormInput.value = null\n        lists.push(newList)\n        rotateBtn(addListBtnDisp);\n        toggleForm(addListForm)\n        render()\n        clickHandlerBoard()\n     })\n\n    // Create new task\n    const addTaskForm = document.getElementById('form-add-task')\n    const createTask = () => {\n        addTaskForm.addEventListener('submit', e => {\n            let selectedList = TaskManager.getSelectedList()\n            e.preventDefault()\n            const addTaskFormInput = document.getElementById('tsk-title')\n            const taskTitle = addTaskFormInput.value\n            const priority = document.querySelector('input[name=\"priority\"]:checked').value;\n            const description = document.querySelector('input[name=\"description\"]').value;\n            const dueDate = document.querySelector('input[name=\"dueDate\"]').value;\n            const newTask = new TaskManager.Task(taskTitle, priority, description, dueDate)\n            console.log(newTask)\n            addTaskFormInput.value = null\n            selectedList.tasks.push(newTask)\n            // Clear form\n            document.querySelector('input[id=\"normalPriority\"]').checked = true;\n            document.querySelector('input[name=\"description\"]').value = '';\n            document.querySelector('input[name=\"dueDate\"]').value = '';\n\n            rotateBtn(addTaskBtnDisp);\n            toggleForm(addTaskForm)\n            render()\n            clickHandlerBoard()\n        })\n    }\n    createTask();\n\n\n\n    render();\n    clickHandlerBoard();\n};\n\nScreenController()\n\n\n//# sourceURL=webpack://gtdone/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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