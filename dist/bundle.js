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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto+Mono:ital,wght@0,300;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n\\tmargin: 0px;\\n\\tpadding: 0px;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tfont-family: \\\"Audiowide\\\";\\n\\tfont-family: \\\"Roboto Mono\\\", monospace;\\n}\\n\\n#main {\\n\\tmin-width: 100vw;\\n\\tmin-height: 100vh;\\n\\tbackground-color: beige;\\n\\tdisplay: grid;\\n\\tgrid-template: 60px 1fr 40px / 1fr 4fr;\\n}\\n\\n#content {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tborder: 2px solid rgb(187, 187, 167);\\n\\tbox-shadow: 7px 8px 8px rgb(182, 182, 164);\\n\\tmargin-right: 5vw;\\n\\tmargin-bottom: 2vh;\\n}\\n\\n#header {\\n\\tbackground-color: beige;\\n\\tgrid-area: 1 / 1 / 2 / 3;\\n\\tfont-family: \\\"Audiowide\\\", cursive;\\n\\tfont-family: \\\"Roboto Mono\\\", monospace;\\n\\tfont-size: 40px;\\n\\tfont-weight: 900;\\n\\tpadding-left: 10vw;\\n}\\n\\n#nav-bar {\\n\\tbackground-color: beige;\\n\\tgrid-area: 2 / 1 / 3 / 2;\\n\\tfont-size: 20px;\\n\\tfont-weight: 800;\\n}\\n\\n#nav-bar > ul {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tlist-style: none;\\n\\tpadding: 20px 3vw;\\n}\\n\\n#nav-bar > ul > li {\\n\\tpadding-top: 20px;\\n}\\n\\n#nav-bar > ul > li:hover {\\n\\tcolor: green;\\n\\ttransform: scale(1.2);\\n\\tpadding-left: 20px;\\n}\\n\\n#nav-bar > ul > li > li:hover {\\n\\tcolor: rgb(5, 86, 5);\\n\\ttransform: scale(1.2);\\n}\\n\\n#footer {\\n\\tbackground-color: beige;\\n\\tgrid-area: 3 / 1 / 4 / 3;\\n\\tflex-direction: column;\\n}\\n\\n#footer > ul {\\n\\tlist-style: none;\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\talign-content: center;\\n\\tpadding-bottom: 2vh;\\n}\\n\\n#new-popup {\\n\\tposition: absolute;\\n\\tbackground-color: rgb(209, 209, 180);\\n\\tmin-height: 50vh;\\n\\tmin-width: 50vw;\\n\\n\\tdisplay: none;\\n\\tgrid-template: 30px 1fr / 1fr 4fr;\\n\\tborder: 1px solid rgb(179, 179, 158);\\n\\tbox-shadow: 10px 10px 5px rgb(176, 176, 158);\\n}\\n\\n#popup-nav {\\n\\tgrid-area: 2 / 1 / 3 / 2;\\n\\tbackground-color: rgb(180, 180, 153);\\n}\\n\\n#popup-heading {\\n\\tbackground-color: rgb(221, 119, 187);\\n\\tgrid-area: 1 / 1 / 2 / 3;\\n}\\n\\n#popup-input {\\n\\tbackground-color: rgba(36, 158, 97, 0.435);\\n\\tgrid-area: 2 / 2 / 3 / 3;\\n\\tdisplay: grid;\\n\\tgrid-template: 1fr 6fr 1fr 1fr / 1fr;\\n}\\n\\n.new-title {\\n\\tgrid-area: 1 / 1 / 2 / 4;\\n\\tmargin: 2px 2px;\\n}\\n\\n.note-title {\\n\\tgrid-area: 1 / 1 / 3 / 2;\\n}\\n\\n.note-info {\\n\\tgrid-area: 2 / 1 / -2 / -1;\\n}\\n\\n.new-info {\\n\\tgrid-area: 2 / 1 / 3 / 3;\\n\\tmargin: 2px 2px;\\n}\\n\\n.new-date {\\n\\tgrid-area: 3/ 1 / 4 / 3;\\n}\\n\\n#priorities {\\n\\tdisplay: flex;\\n\\tgrid-area: 4 / 1 / 5 / 2;\\n}\\n\\n#add-btn-area {\\n\\tdisplay: flex;\\n\\tgrid-area: 4 / 2 / 5 / 3;\\n\\tjustify-content: right;\\n}\\n\\n#add-project {\\n\\tgrid-area: 4 / 2 / 5 / 3;\\n}\\n\\n#add-note-btn {\\n\\tgrid-area: 4 / 2 / 5 / 3;\\n}\\n\\n#todo-item,\\n#note-item {\\n\\tbackground-color: rgb(232, 177, 74);\\n\\tdisplay: grid;\\n\\tgrid-template: 1fr 4fr 1fr / 1fr;\\n\\tmin-width: 200px;\\n\\tmax-width: 300px;\\n\\theight: 200px;\\n\\n\\tpadding: 10px;\\n\\tmargin: 20px;\\n\\n\\tborder: 1px solid black;\\n\\tbox-shadow: 5px 5px 5px rgba(125, 125, 114, 0.646);\\n}\\n\\n#note-item {\\n\\tbackground-color: rgb(235, 246, 87);\\n\\tborder: 1px solid black;\\n\\tbox-shadow: 5px 5px 5px rgba(125, 125, 114, 0.646);\\n}\\n\\n#low-prioritie:hover,\\n#low-prioritie:focus {\\n\\tbackground-color: rgb(72, 193, 72);\\n}\\n\\n#med-prioritie:hover,\\n#med-prioritie:focus {\\n\\tbackground-color: rgb(255, 255, 22);\\n}\\n\\n#high-prioritie:hover,\\n#high-prioritie:focus {\\n\\tbackground-color: rgb(197, 62, 62);\\n}\\n\\n#todo-title,\\n#note-title {\\n\\tfont-weight: 900;\\n\\tfont-size: 20px;\\n}\\n\\n#todo-bottomRow {\\n\\tdisplay: flex;\\n\\twidth: 100%;\\n}\\n\\n#todo-project {\\n\\tpadding: 0px 15px;\\n\\tbackground-color: rgba(128, 128, 128, 0.436);\\n\\tborder: 1px solid grey;\\n}\\n\\n#todo-info {\\n\\tbackground-color: rgb(245, 195, 104);\\n\\tpadding: 0px 5px;\\n\\tmargin: 10px 0px;\\n}\\n\\n#todo-prio {\\n\\tpadding: 0px 10px;\\n\\tbackground-color: beige;\\n}\\n\\n#todo-date {\\n\\tjustify-self: center;\\n}\\n\\n#todo-edit {\\n\\tmargin-left: auto;\\n}\\n\\n#edit-popup {\\n\\tposition: absolute;\\n\\tbackground-color: rgb(105, 142, 105);\\n\\tmin-height: 30vh;\\n\\tmin-width: 5vw;\\n\\n\\tdisplay: none;\\n\\tgrid-template: 30px 1fr 4fr/ 1fr;\\n}\\n\\n.todo-head-row {\\n\\tdisplay: flex;\\n}\\n\\n#todo-delete-btn {\\n\\tmargin-left: auto;\\n}\\n\\n.edit-btn {\\n\\twidth: max-content;\\n\\tmargin-left: auto;\\n\\tpadding: 5px 10px;\\n}\\n\\n.project-link {\\n\\tpadding: 10px 2px;\\n\\tmargin: 0px 10px;\\n\\tfont-size: 16px;\\n}\\n\\n#btn-newTodo {\\n\\tpadding: 5px 15px;\\n\\tposition: absolute;\\n\\tleft: 12vw;\\n\\tfont-size: 40px;\\n\\tfont-weight: 100;\\n\\ttop: 80vh;\\n}\\n\\n#btn-newTodo:hover {\\n\\tbackground-color: rgb(105, 142, 105);\\n\\ttransform: scale(1.1);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Notes.js":
/*!**********************!*\
  !*** ./src/Notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notes\": () => (/* binding */ Notes)\n/* harmony export */ });\nclass Notes {\n\tconstructor(title, info) {\n\t\tthis.title = title;\n\t\tthis.info = info;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/Notes.js?");

/***/ }),

/***/ "./src/NotesManager.js":
/*!*****************************!*\
  !*** ./src/NotesManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotesManager\": () => (/* binding */ NotesManager)\n/* harmony export */ });\n/* harmony import */ var _editNotePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editNotePopup */ \"./src/editNotePopup.js\");\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes */ \"./src/Notes.js\");\n/* harmony import */ var _toggleEditPopupOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleEditPopupOn */ \"./src/toggleEditPopupOn.js\");\n\n\n\n\n\nclass NotesManager {\n\tstatic notesArray = [];\n\n\tstatic addNote() {\n\t\tlet title = document.querySelector(\".note-title\").value;\n\t\tlet info = document.querySelector(\".note-info\").value;\n\n\t\tconst note = new _Notes__WEBPACK_IMPORTED_MODULE_2__.Notes(title, info);\n\n\t\tNotesManager.notesArray.push(note);\n\t\tconsole.log(NotesManager.notesArray);\n\n\t\twindow.localStorage.setItem(\"notesArray\", JSON.stringify(NotesManager.notesArray));\n\t}\n\n\tstatic updateNotes() {\n\t\tconst storage = JSON.parse(window.localStorage.getItem(\"notesArray\"));\n\n\t\tif (storage === null) {\n\t\t\tNotesManager.notesArray = [];\n\t\t} else {\n\t\t\tNotesManager.notesArray = storage;\n\t\t}\n\t}\n\tstatic removeNote(note) {\n\t\tconst index = NotesManager.notesArray.findIndex((item) => item.title === note.title);\n\n\t\tNotesManager.notesArray.splice(index, 1);\n\t\twindow.localStorage.setItem(\"notesArray\", JSON.stringify(NotesManager.notesArray));\n\t\t(0,_displayHome__WEBPACK_IMPORTED_MODULE_1__.displayHome)();\n\t}\n\tstatic editNote(note) {\n\t\tlet index = NotesManager.notesArray.findIndex((item) => item.title === note.title);\n\n\t\t(0,_editNotePopup__WEBPACK_IMPORTED_MODULE_0__.editNotePopup)(index);\n\t\t(0,_toggleEditPopupOn__WEBPACK_IMPORTED_MODULE_3__.toggleEditPopupOn)();\n\t}\n\tstatic updateNotesArray(index) {\n\t\tconst editTitle = document.getElementById(\"edit-title\").value;\n\t\tconst editInfo = document.getElementById(\"edit-info\").value;\n\t\tlet editedNote = NotesManager.notesArray[index];\n\n\t\teditedNote.title = editTitle;\n\t\teditedNote.info = editInfo;\n\n\t\tNotesManager.notesArray.splice(index, 1, editedNote);\n\t\twindow.localStorage.setItem(\"notesArray\", JSON.stringify(NotesManager.notesArray));\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/NotesManager.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n\tconstructor(title) {\n\t\tthis.storage = [];\n\n\t\tthis.title = title;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectManager.js":
/*!*******************************!*\
  !*** ./src/ProjectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectManager\": () => (/* binding */ ProjectManager)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\n\nclass ProjectManager {\n\tstatic projectsArray = [];\n\n\tstatic addProject() {\n\t\tlet title = document.querySelector(\".project-title\").value;\n\n\t\tconst project = new _Project__WEBPACK_IMPORTED_MODULE_1__.Project(title);\n\n\t\tProjectManager.projectsArray.push(project);\n\t\tconsole.log(ProjectManager.projectsArray);\n\n\t\twindow.localStorage.setItem(\"projectArray\", JSON.stringify(ProjectManager.projectsArray));\n\t\t(0,_navBar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n\t}\n\n\tstatic updateProjects() {\n\t\tconst storage = JSON.parse(window.localStorage.getItem(\"projectArray\"));\n\n\t\tif (storage === null) {\n\t\t\tProjectManager.projectsArray = [];\n\t\t} else {\n\t\t\tProjectManager.projectsArray = storage;\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/ProjectManager.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n\tconstructor(title, info, date, prio, project) {\n\t\tthis.title = title;\n\t\tthis.info = info;\n\t\tthis.date = date;\n\t\tthis.prio = prio;\n\t\tthis.project = project;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/Todo.js?");

/***/ }),

/***/ "./src/TodoManager.js":
/*!****************************!*\
  !*** ./src/TodoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoManager\": () => (/* binding */ TodoManager)\n/* harmony export */ });\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _editPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editPopup */ \"./src/editPopup.js\");\n/* harmony import */ var _setPrio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setPrio */ \"./src/setPrio.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _toggleEditPopupOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleEditPopupOn */ \"./src/toggleEditPopupOn.js\");\n\n\n\n\n\n\n// todo manager\n// with storage + addTodo, remove... etc\n// add all handling stuff inside Todomanager\n\n// update todo function\n\nclass TodoManager {\n\tstatic todoArray = [];\n\n\tstatic addTodo() {\n\t\tconst title = document.querySelector(\".new-title\").value;\n\t\tconst info = document.querySelector(\".new-info\").value;\n\t\tconst dueDate = document.querySelector(\".new-date\").value;\n\t\tconst prio = _setPrio__WEBPACK_IMPORTED_MODULE_2__.PrioManager.lastClickedPrio;\n\t\tconst project = document.getElementById(\"todo-dropdown\").value;\n\n\t\tlet todo = new _Todo__WEBPACK_IMPORTED_MODULE_3__.Todo(title, info, dueDate, prio, project);\n\t\tTodoManager.todoArray.push(todo);\n\t\tconsole.log(TodoManager.todoArray);\n\t\twindow.localStorage.setItem(\"todoArray\", JSON.stringify(TodoManager.todoArray));\n\t}\n\n\tstatic updateArray() {\n\t\tconst storage = JSON.parse(window.localStorage.getItem(\"todoArray\"));\n\n\t\tif (storage === null) {\n\t\t\tTodoManager.todoArray = [];\n\t\t} else {\n\t\t\tTodoManager.todoArray = storage;\n\t\t}\n\t}\n\n\tstatic removeTodo(todo) {\n\t\tlet index = TodoManager.todoArray.findIndex((item) => item.title === todo.title);\n\n\t\tTodoManager.todoArray.splice(index, 1);\n\t\twindow.localStorage.setItem(\"todoArray\", JSON.stringify(TodoManager.todoArray));\n\t\t(0,_displayHome__WEBPACK_IMPORTED_MODULE_0__.displayHome)();\n\t}\n\n\tstatic editTodo(todo) {\n\t\tlet index = TodoManager.todoArray.findIndex((item) => item.title === todo.title);\n\n\t\t(0,_editPopup__WEBPACK_IMPORTED_MODULE_1__.editPopup)(index);\n\t\t(0,_toggleEditPopupOn__WEBPACK_IMPORTED_MODULE_4__.toggleEditPopupOn)();\n\t}\n\tstatic updateTodo(index) {\n\t\tconst editTitle = document.getElementById(\"edit-title\").value;\n\t\tconst editInfo = document.getElementById(\"edit-info\").value;\n\t\tlet editedTodo = TodoManager.todoArray[index];\n\t\tconsole.log(editedTodo);\n\n\t\teditedTodo.title = editTitle;\n\t\teditedTodo.info = editInfo;\n\n\t\tTodoManager.todoArray.splice(index, 1, editedTodo);\n\t\twindow.localStorage.setItem(\"todoArray\", JSON.stringify(TodoManager.todoArray));\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/TodoManager.js?");

/***/ }),

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent)\n/* harmony export */ });\nconst clearContent = () => {\n\tconst content = document.getElementById(\"content\");\n\n\tcontent.textContent = \"\";\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/clearContent.js?");

/***/ }),

/***/ "./src/clearEditPopup.js":
/*!*******************************!*\
  !*** ./src/clearEditPopup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearEditPopup\": () => (/* binding */ clearEditPopup)\n/* harmony export */ });\nconst clearEditPopup = () => {\n\tconst popup = document.getElementById(\"edit-popup\");\n\tpopup.remove();\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/clearEditPopup.js?");

/***/ }),

/***/ "./src/clearPopup.js":
/*!***************************!*\
  !*** ./src/clearPopup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPopup\": () => (/* binding */ clearPopup)\n/* harmony export */ });\nconst clearPopup = () => {\n\tlet titleTodo = document.querySelector(\".new-title\");\n\tlet info = document.querySelector(\".new-info\");\n\tlet titleProject = document.querySelector(\".project-title\");\n\tlet noteTitle = document.querySelector(\".note-title\");\n\tlet noteInfo = document.querySelector(\".note-info\");\n\n\tif (titleTodo != null) {\n\t\ttitleTodo.value = \"\";\n\t}\n\tif (info != null) {\n\t\tinfo.value = \"\";\n\t}\n\tif (titleProject != null) {\n\t\ttitleProject.value = \"\";\n\t}\n\tif (noteTitle != null) {\n\t\tnoteTitle.value = \"\";\n\t}\n\tif (noteInfo != null) {\n\t\tnoteInfo.value = \"\";\n\t}\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/clearPopup.js?");

/***/ }),

/***/ "./src/displayHome.js":
/*!****************************!*\
  !*** ./src/displayHome.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHome\": () => (/* binding */ displayHome)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n/* harmony import */ var _renderNotesItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNotesItem */ \"./src/renderNotesItem.js\");\n/* harmony import */ var _renderTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTodoItem */ \"./src/renderTodoItem.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n\n\n\n\n\n\nconst displayHome = () => {\n\t(0,_clearContent__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n\t_TodoManager__WEBPACK_IMPORTED_MODULE_4__.TodoManager.todoArray.forEach((todo) => {\n\t\t(0,_renderTodoItem__WEBPACK_IMPORTED_MODULE_3__.renderTodoItem)(todo);\n\t});\n\n\t_NotesManager__WEBPACK_IMPORTED_MODULE_1__.NotesManager.notesArray.forEach((note) => {\n\t\t(0,_renderNotesItem__WEBPACK_IMPORTED_MODULE_2__.renderNotesItem)(note);\n\t});\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/displayHome.js?");

/***/ }),

/***/ "./src/displayNotes.js":
/*!*****************************!*\
  !*** ./src/displayNotes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayNotes\": () => (/* binding */ displayNotes)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n/* harmony import */ var _renderNotesItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNotesItem */ \"./src/renderNotesItem.js\");\n\n\n\n\nconst displayNotes = () => {\n\t(0,_clearContent__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n\t_NotesManager__WEBPACK_IMPORTED_MODULE_1__.NotesManager.notesArray.forEach((note) => {\n\t\t(0,_renderNotesItem__WEBPACK_IMPORTED_MODULE_2__.renderNotesItem)(note);\n\t});\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/displayNotes.js?");

/***/ }),

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _renderTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodoItem */ \"./src/renderTodoItem.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n\n\n\n\nconst displayTodos = () => {\n\t(0,_clearContent__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n\t_TodoManager__WEBPACK_IMPORTED_MODULE_2__.TodoManager.todoArray.forEach((todo) => {\n\t\t(0,_renderTodoItem__WEBPACK_IMPORTED_MODULE_1__.renderTodoItem)(todo);\n\t});\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/displayTodos.js?");

/***/ }),

/***/ "./src/editNotePopup.js":
/*!******************************!*\
  !*** ./src/editNotePopup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editNotePopup\": () => (/* binding */ editNotePopup)\n/* harmony export */ });\n/* harmony import */ var _clearEditPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearEditPopup */ \"./src/clearEditPopup.js\");\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n\n\n\n\nconst editNotePopup = (index) => {\n\tconst body = document.querySelector(\"body\");\n\tconst popup = document.createElement(\"div\");\n\tpopup.id = \"edit-popup\";\n\n\t// heading\n\tconst heading = document.createElement(\"div\");\n\theading.classList = \"popup-heading\";\n\theading.textContent = \"Edit todo...\";\n\n\t// todo item info\n\tconst note = _NotesManager__WEBPACK_IMPORTED_MODULE_2__.NotesManager.notesArray[index];\n\n\tconst popupTitle = document.createElement(\"textarea\");\n\tpopupTitle.id = \"edit-title\";\n\tpopupTitle.value = note.title;\n\tconsole.log(popupTitle);\n\n\tconst popupInfo = document.createElement(\"textarea\");\n\tpopupInfo.id = \"edit-info\";\n\tpopupInfo.value = note.info;\n\tconsole.log(popupInfo);\n\n\tconst confirmBtn = document.createElement(\"button\");\n\tconfirmBtn.textContent = \"Confirm\";\n\tconfirmBtn.addEventListener(\"click\", () => {\n\t\t_NotesManager__WEBPACK_IMPORTED_MODULE_2__.NotesManager.updateNotesArray(index);\n\t\t(0,_clearEditPopup__WEBPACK_IMPORTED_MODULE_0__.clearEditPopup)();\n\t\t(0,_displayHome__WEBPACK_IMPORTED_MODULE_1__.displayHome)();\n\t});\n\n\tpopup.appendChild(heading);\n\tpopup.appendChild(popupTitle);\n\tpopup.appendChild(popupInfo);\n\tpopup.appendChild(confirmBtn);\n\n\tbody.appendChild(popup);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/editNotePopup.js?");

/***/ }),

/***/ "./src/editPopup.js":
/*!**************************!*\
  !*** ./src/editPopup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editPopup\": () => (/* binding */ editPopup)\n/* harmony export */ });\n/* harmony import */ var _clearEditPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearEditPopup */ \"./src/clearEditPopup.js\");\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n\n\n\n\nconst editPopup = (index) => {\n\tconst body = document.querySelector(\"body\");\n\tconst popup = document.createElement(\"div\");\n\tpopup.id = \"edit-popup\";\n\n\t// heading\n\tconst heading = document.createElement(\"div\");\n\theading.classList = \"popup-heading\";\n\theading.textContent = \"Edit todo...\";\n\n\t// todo item info\n\tconst todo = _TodoManager__WEBPACK_IMPORTED_MODULE_2__.TodoManager.todoArray[index];\n\n\tconst popupTitle = document.createElement(\"textarea\");\n\tpopupTitle.id = \"edit-title\";\n\tpopupTitle.value = todo.title;\n\tconsole.log(popupTitle);\n\n\tconst popupInfo = document.createElement(\"textarea\");\n\tpopupInfo.id = \"edit-info\";\n\tpopupInfo.value = todo.info;\n\tconsole.log(popupInfo);\n\n\tconst confirmBtn = document.createElement(\"button\");\n\tconfirmBtn.textContent = \"Confirm\";\n\tconfirmBtn.addEventListener(\"click\", () => {\n\t\t_TodoManager__WEBPACK_IMPORTED_MODULE_2__.TodoManager.updateTodo(index);\n\t\t(0,_clearEditPopup__WEBPACK_IMPORTED_MODULE_0__.clearEditPopup)();\n\t\t(0,_displayHome__WEBPACK_IMPORTED_MODULE_1__.displayHome)();\n\t});\n\n\tpopup.appendChild(heading);\n\tpopup.appendChild(popupTitle);\n\tpopup.appendChild(popupInfo);\n\tpopup.appendChild(confirmBtn);\n\n\tbody.appendChild(popup);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/editPopup.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = () => {\n\tconst footer = document.getElementById(\"footer\");\n\n\tconst list = document.createElement(\"ul\");\n\tconst item1 = document.createElement(\"li\");\n\titem1.textContent = \"Made by Flpasch\";\n\n\tconst item2 = document.createElement(\"li\");\n\titem2.textContent = \"following the Odin-Project\";\n\n\tconst item3 = document.createElement(\"li\");\n\titem3.textContent = \"© 2023\";\n\n\tlist.appendChild(item1);\n\tlist.appendChild(item2);\n\tlist.appendChild(item3);\n\n\tfooter.appendChild(list);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = () => {\n\tconst header = document.getElementById(\"header\");\n\n\theader.textContent = \"Forgetist\";\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ \"./src/layout.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _newPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newPopup */ \"./src/newPopup.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_layout__WEBPACK_IMPORTED_MODULE_1__.layout)();\n(0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)();\n(0,_header__WEBPACK_IMPORTED_MODULE_4__.header)();\n(0,_newPopup__WEBPACK_IMPORTED_MODULE_5__.newPopup)();\n_TodoManager__WEBPACK_IMPORTED_MODULE_6__.TodoManager.updateArray();\n_NotesManager__WEBPACK_IMPORTED_MODULE_7__.NotesManager.updateNotes();\n_ProjectManager__WEBPACK_IMPORTED_MODULE_8__.ProjectManager.updateProjects();\n(0,_navBar__WEBPACK_IMPORTED_MODULE_3__.navBar)();\n(0,_displayHome__WEBPACK_IMPORTED_MODULE_9__.displayHome)();\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"layout\": () => (/* binding */ layout)\n/* harmony export */ });\nconst layout = () => {\n\tconst body = document.querySelector(\"body\");\n\n\t// div to hold all elements\n\tconst main = document.createElement(\"div\");\n\tmain.id = \"main\";\n\n\t// create header content is in other file\n\tconst header = document.createElement(\"div\");\n\theader.id = \"header\";\n\n\t// create nav-bar content is in other file\n\tconst navBar = document.createElement(\"div\");\n\tnavBar.id = \"nav-bar\";\n\n\t// create main content div withoyut content\n\tconst content = document.createElement(\"div\");\n\tcontent.id = \"content\";\n\n\t// create footer content is in other file\n\tconst footer = document.createElement(\"div\");\n\tfooter.id = \"footer\";\n\n\tmain.appendChild(header);\n\tmain.appendChild(navBar);\n\tmain.appendChild(content);\n\tmain.appendChild(footer);\n\n\tbody.appendChild(main);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/layout.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _toggleNewPopupOn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleNewPopupOn */ \"./src/toggleNewPopupOn.js\");\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodos */ \"./src/displayTodos.js\");\n/* harmony import */ var _displayNotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayNotes */ \"./src/displayNotes.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n/* harmony import */ var _renderTodoItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderTodoItem */ \"./src/renderTodoItem.js\");\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n\n\n\n\n\n\n\n\n\nconst navBar = () => {\n\tconst navBar = document.getElementById(\"nav-bar\");\n\tnavBar.textContent = \"\";\n\n\tconst list = document.createElement(\"ul\");\n\n\tconst item1 = document.createElement(\"li\");\n\titem1.textContent = \"Home\";\n\titem1.id = \"home-view\";\n\titem1.classList = \"nav-link\";\n\titem1.addEventListener(\"click\", _displayHome__WEBPACK_IMPORTED_MODULE_1__.displayHome);\n\n\tconst item2 = document.createElement(\"li\");\n\titem2.textContent = \"To-Do\";\n\titem2.id = \"todo-view\";\n\titem2.classList = \"nav-link\";\n\titem2.addEventListener(\"click\", _displayTodos__WEBPACK_IMPORTED_MODULE_2__.displayTodos);\n\n\t// add all projects to nav-bar\n\tconst item3 = document.createElement(\"li\");\n\titem3.textContent = \"Projects\";\n\titem3.id = \"projects-view\";\n\titem3.classList = \"nav-link\";\n\n\t_ProjectManager__WEBPACK_IMPORTED_MODULE_4__.ProjectManager.projectsArray.forEach((project) => {\n\t\tconst projectElement = document.createElement(\"li\");\n\t\tprojectElement.classList = \"project-link\";\n\t\tprojectElement.textContent = project.title;\n\t\tprojectElement.addEventListener(\"click\", () => {\n\t\t\t(0,_clearContent__WEBPACK_IMPORTED_MODULE_7__.clearContent)();\n\t\t\t_TodoManager__WEBPACK_IMPORTED_MODULE_5__.TodoManager.todoArray.forEach((todo) => {\n\t\t\t\tif (todo.project === project.title) {\n\t\t\t\t\t(0,_renderTodoItem__WEBPACK_IMPORTED_MODULE_6__.renderTodoItem)(todo);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t\titem3.appendChild(projectElement);\n\t});\n\n\tconst item4 = document.createElement(\"li\");\n\titem4.textContent = \"Notes\";\n\titem4.id = \"notes-view\";\n\titem4.classList = \"nav-link\";\n\titem4.addEventListener(\"click\", _displayNotes__WEBPACK_IMPORTED_MODULE_3__.displayNotes);\n\n\tconst btnNewTodo = document.createElement(\"button\");\n\tbtnNewTodo.id = \"btn-newTodo\";\n\tbtnNewTodo.textContent = \"+\";\n\tbtnNewTodo.addEventListener(\"click\", _toggleNewPopupOn__WEBPACK_IMPORTED_MODULE_0__.toggleNewPopupOn);\n\n\tlist.appendChild(item1);\n\tlist.appendChild(item2);\n\tlist.appendChild(item4);\n\tlist.appendChild(item3);\n\n\tnavBar.appendChild(list);\n\tnavBar.appendChild(btnNewTodo);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/navBar.js?");

/***/ }),

/***/ "./src/newNotePopup.js":
/*!*****************************!*\
  !*** ./src/newNotePopup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newNote\": () => (/* binding */ newNote)\n/* harmony export */ });\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n/* harmony import */ var _clearPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearPopup */ \"./src/clearPopup.js\");\n/* harmony import */ var _toggleNewPopupOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleNewPopupOff */ \"./src/toggleNewPopupOff.js\");\n/* harmony import */ var _renderContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderContent */ \"./src/renderContent.js\");\n\n\n\n\n\nconst newNote = () => {\n\tconst content = document.getElementById(\"popup-input\");\n\tcontent.innerHTML = \"\";\n\n\tconst title = document.createElement(\"textarea\");\n\ttitle.classList = \"note-title\";\n\ttitle.placeholder = \"Title: Gear for bikepacking\";\n\n\tconst info = document.createElement(\"textarea\");\n\tinfo.classList = \"note-info\";\n\tinfo.placeholder = \"Details: e.g buy a small toothbrush\";\n\n\tconst newNoteBtn = document.createElement(\"button\");\n\tnewNoteBtn.id = \"add-note-btn\";\n\tnewNoteBtn.textContent = \"CREATE NOTE\";\n\tnewNoteBtn.addEventListener(\"click\", () => {\n\t\t_NotesManager__WEBPACK_IMPORTED_MODULE_0__.NotesManager.addNote();\n\t\t(0,_clearPopup__WEBPACK_IMPORTED_MODULE_1__.clearPopup)();\n\t\t(0,_toggleNewPopupOff__WEBPACK_IMPORTED_MODULE_2__.toggleNewPopupOff)();\n\t\t(0,_renderContent__WEBPACK_IMPORTED_MODULE_3__.renderContent)();\n\t});\n\n\tcontent.appendChild(title);\n\tcontent.appendChild(info);\n\tcontent.appendChild(newNoteBtn);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/newNotePopup.js?");

/***/ }),

/***/ "./src/newPopup.js":
/*!*************************!*\
  !*** ./src/newPopup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newPopup\": () => (/* binding */ newPopup)\n/* harmony export */ });\n/* harmony import */ var _newTodoPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodoPopup */ \"./src/newTodoPopup.js\");\n/* harmony import */ var _newProjectPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectPopup */ \"./src/newProjectPopup.js\");\n/* harmony import */ var _newNotePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newNotePopup */ \"./src/newNotePopup.js\");\n\n\n\n\nconst newPopup = () => {\n\tconst body = document.querySelector(\"body\");\n\tconst popup = document.createElement(\"div\");\n\tpopup.id = \"new-popup\";\n\n\t// heading for popup\n\tconst heading = document.createElement(\"div\");\n\theading.classList = \"popup-heading\";\n\theading.textContent = \"Create new...\";\n\n\t// nav-bar for the popup\n\tconst nav = document.createElement(\"div\");\n\tnav.id = \"popup-nav\";\n\n\tconst list = document.createElement(\"ul\");\n\n\tconst item1 = document.createElement(\"li\");\n\titem1.textContent = \"Todo\";\n\titem1.addEventListener(\"click\", _newTodoPopup__WEBPACK_IMPORTED_MODULE_0__.newTodo);\n\n\tconst item2 = document.createElement(\"li\");\n\titem2.textContent = \"Project\";\n\titem2.addEventListener(\"click\", _newProjectPopup__WEBPACK_IMPORTED_MODULE_1__.newProject);\n\n\tconst item3 = document.createElement(\"li\");\n\titem3.textContent = \"Notes\";\n\titem3.addEventListener(\"click\", _newNotePopup__WEBPACK_IMPORTED_MODULE_2__.newNote);\n\n\tlist.appendChild(item1);\n\tlist.appendChild(item2);\n\tlist.appendChild(item3);\n\n\tconst inputs = document.createElement(\"div\");\n\tinputs.id = \"popup-input\";\n\n\t// append to popup\n\tnav.appendChild(list);\n\tpopup.appendChild(heading);\n\tpopup.appendChild(nav);\n\tpopup.appendChild(inputs);\n\tbody.appendChild(popup);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/newPopup.js?");

/***/ }),

/***/ "./src/newProjectPopup.js":
/*!********************************!*\
  !*** ./src/newProjectPopup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _clearPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopup */ \"./src/clearPopup.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _toggleNewPopupOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleNewPopupOff */ \"./src/toggleNewPopupOff.js\");\n\n\n\n\nconst newProject = () => {\n\tconst content = document.getElementById(\"popup-input\");\n\tcontent.innerHTML = \"\";\n\n\tconst title = document.createElement(\"textarea\");\n\ttitle.classList = \"project-title\";\n\ttitle.placeholder = \"Title: Do Something\";\n\n\tconst newProjectBtn = document.createElement(\"button\");\n\tnewProjectBtn.id = \"add-project\";\n\tnewProjectBtn.textContent = \"CREATE PROJECT\";\n\n\tnewProjectBtn.addEventListener(\"click\", () => {\n\t\t_ProjectManager__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.addProject();\n\t\t(0,_clearPopup__WEBPACK_IMPORTED_MODULE_0__.clearPopup)();\n\t\t(0,_toggleNewPopupOff__WEBPACK_IMPORTED_MODULE_2__.toggleNewPopupOff)();\n\t});\n\n\tcontent.appendChild(title);\n\tcontent.appendChild(newProjectBtn);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/newProjectPopup.js?");

/***/ }),

/***/ "./src/newTodoPopup.js":
/*!*****************************!*\
  !*** ./src/newTodoPopup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTodo\": () => (/* binding */ newTodo)\n/* harmony export */ });\n/* harmony import */ var _clearPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopup */ \"./src/clearPopup.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _renderContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContent */ \"./src/renderContent.js\");\n/* harmony import */ var _setPrio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPrio */ \"./src/setPrio.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n/* harmony import */ var _toggleNewPopupOff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggleNewPopupOff */ \"./src/toggleNewPopupOff.js\");\n\n\n\n\n\n\n\nconst newTodo = () => {\n\tconst content = document.getElementById(\"popup-input\");\n\tcontent.innerHTML = \"\";\n\n\tconst title = document.createElement(\"textarea\");\n\ttitle.classList = \"new-title\";\n\ttitle.placeholder = \"Title: Empty trash\";\n\n\tconst info = document.createElement(\"textarea\");\n\tinfo.classList = \"new-info\";\n\tinfo.placeholder = \"Details: e.g bathroom, kitchen, desk\";\n\n\tconst date = document.createElement(\"input\");\n\tdate.classList = \"new-date\";\n\tdate.type = \"date\";\n\n\t// prioritie buttons\n\tconst priorities = document.createElement(\"div\");\n\tpriorities.id = \"priorities\";\n\n\tconst lowPrio = document.createElement(\"button\");\n\tlowPrio.textContent = \"LOW\";\n\tlowPrio.id = \"low-prioritie\";\n\tlowPrio.classList = \"prio-btn\";\n\tlowPrio.addEventListener(\"click\", _setPrio__WEBPACK_IMPORTED_MODULE_3__.PrioManager.setPrio);\n\n\tconst mediumPrio = document.createElement(\"button\");\n\tmediumPrio.textContent = \"MEDIUM\";\n\tmediumPrio.id = \"med-prioritie\";\n\tmediumPrio.classList = \"prio-btn\";\n\tmediumPrio.addEventListener(\"click\", _setPrio__WEBPACK_IMPORTED_MODULE_3__.PrioManager.setPrio);\n\n\tconst highPrio = document.createElement(\"button\");\n\thighPrio.textContent = \"HIGH\";\n\thighPrio.id = \"high-prioritie\";\n\thighPrio.classList = \"prio-btn\";\n\thighPrio.addEventListener(\"click\", _setPrio__WEBPACK_IMPORTED_MODULE_3__.PrioManager.setPrio);\n\n\tpriorities.appendChild(lowPrio);\n\tpriorities.appendChild(mediumPrio);\n\tpriorities.appendChild(highPrio);\n\n\t// create add button and project selector and the div\n\tconst dropdown = document.createElement(\"select\");\n\tdropdown.id = \"todo-dropdown\";\n\n\t_ProjectManager__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.projectsArray.forEach((project) => {\n\t\tconst option = document.createElement(\"option\");\n\t\toption.textContent = project.title;\n\t\toption.value = project.title;\n\n\t\tdropdown.appendChild(option);\n\t});\n\n\tconst addButtonArea = document.createElement(\"div\");\n\taddButtonArea.id = \"add-btn-area\";\n\tconst addBtn = document.createElement(\"button\");\n\taddBtn.id = \"btn-add\";\n\taddBtn.textContent = \"ADD\";\n\taddBtn.addEventListener(\"click\", () => {\n\t\t_TodoManager__WEBPACK_IMPORTED_MODULE_4__.TodoManager.addTodo();\n\t\t(0,_renderContent__WEBPACK_IMPORTED_MODULE_2__.renderContent)();\n\t\t(0,_clearPopup__WEBPACK_IMPORTED_MODULE_0__.clearPopup)();\n\t\t(0,_toggleNewPopupOff__WEBPACK_IMPORTED_MODULE_5__.toggleNewPopupOff)();\n\t});\n\n\taddButtonArea.appendChild(dropdown);\n\taddButtonArea.appendChild(addBtn);\n\tcontent.appendChild(title);\n\tcontent.appendChild(info);\n\tcontent.appendChild(date);\n\tcontent.appendChild(priorities);\n\n\tcontent.appendChild(addButtonArea);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/newTodoPopup.js?");

/***/ }),

/***/ "./src/renderContent.js":
/*!******************************!*\
  !*** ./src/renderContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContent\": () => (/* binding */ renderContent)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n/* harmony import */ var _renderNotesItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNotesItem */ \"./src/renderNotesItem.js\");\n/* harmony import */ var _renderTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTodoItem */ \"./src/renderTodoItem.js\");\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n\n\n\n\n\n\nconst renderContent = () => {\n\t(0,_clearContent__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n\t_TodoManager__WEBPACK_IMPORTED_MODULE_4__.TodoManager.todoArray.forEach((todo) => {\n\t\t(0,_renderTodoItem__WEBPACK_IMPORTED_MODULE_3__.renderTodoItem)(todo);\n\t});\n\n\t_NotesManager__WEBPACK_IMPORTED_MODULE_1__.NotesManager.notesArray.forEach((note) => {\n\t\t(0,_renderNotesItem__WEBPACK_IMPORTED_MODULE_2__.renderNotesItem)(note);\n\t});\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/renderContent.js?");

/***/ }),

/***/ "./src/renderNotesItem.js":
/*!********************************!*\
  !*** ./src/renderNotesItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNotesItem\": () => (/* binding */ renderNotesItem)\n/* harmony export */ });\n/* harmony import */ var _NotesManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesManager */ \"./src/NotesManager.js\");\n\n\nconst renderNotesItem = (note) => {\n\tconst content = document.getElementById(\"content\");\n\n\tconst notesObject = document.createElement(\"div\");\n\tnotesObject.id = \"note-item\";\n\n\tconst topRow = document.createElement(\"div\");\n\ttopRow.className = \"todo-head-row\";\n\n\tconst title = document.createElement(\"div\");\n\ttitle.id = \"note-title\";\n\ttitle.textContent = note.title;\n\n\tconst deleteBTN = document.createElement(\"button\");\n\tdeleteBTN.id = \"todo-delete-btn\";\n\tdeleteBTN.textContent = \"X\";\n\tdeleteBTN.addEventListener(\"click\", () => {\n\t\t_NotesManager__WEBPACK_IMPORTED_MODULE_0__.NotesManager.removeNote(note);\n\t});\n\n\ttopRow.appendChild(title);\n\ttopRow.appendChild(deleteBTN);\n\n\tconst info = document.createElement(\"div\");\n\tinfo.id = \"note-info\";\n\tinfo.textContent = note.info;\n\n\tconst editBtn = document.createElement(\"button\");\n\teditBtn.id = \"note-edit\";\n\teditBtn.classList = \"edit-btn\";\n\teditBtn.textContent = \"Edit\";\n\teditBtn.addEventListener(\"click\", () => {\n\t\t_NotesManager__WEBPACK_IMPORTED_MODULE_0__.NotesManager.editNote(note);\n\t});\n\n\tnotesObject.appendChild(topRow);\n\tnotesObject.appendChild(info);\n\tnotesObject.appendChild(editBtn);\n\n\tcontent.appendChild(notesObject);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/renderNotesItem.js?");

/***/ }),

/***/ "./src/renderTodoItem.js":
/*!*******************************!*\
  !*** ./src/renderTodoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodoItem\": () => (/* binding */ renderTodoItem)\n/* harmony export */ });\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/TodoManager.js\");\n\n\nconst renderTodoItem = (todo) => {\n\tconst content = document.getElementById(\"content\");\n\n\tconst todoObject = document.createElement(\"div\");\n\ttodoObject.id = \"todo-item\";\n\n\t// div for title and delete button\n\tconst headRow = document.createElement(\"div\");\n\theadRow.className = \"todo-head-row\";\n\n\tconst title = document.createElement(\"div\");\n\ttitle.id = \"todo-title\";\n\ttitle.textContent = todo.title;\n\n\tconst deleteBTN = document.createElement(\"button\");\n\tdeleteBTN.id = \"todo-delete-btn\";\n\tdeleteBTN.textContent = \"X\";\n\tdeleteBTN.addEventListener(\"click\", () => {\n\t\t_TodoManager__WEBPACK_IMPORTED_MODULE_0__.TodoManager.removeTodo(todo);\n\t});\n\n\theadRow.appendChild(title);\n\theadRow.appendChild(deleteBTN);\n\n\tconst details = document.createElement(\"div\");\n\tdetails.id = \"todo-info\";\n\tdetails.textContent = todo.info;\n\n\tconst date = document.createElement(\"div\");\n\tdate.id = \"todo-date\";\n\tdate.textContent = todo.date;\n\n\t// bottom row with prioritie, project, edit\n\tconst bottomRow = document.createElement(\"div\");\n\tbottomRow.id = \"todo-bottomRow\";\n\n\tconst prio = document.createElement(\"div\");\n\tprio.id = \"todo-prio\";\n\tprio.textContent = todo.prio;\n\n\tconst project = document.createElement(\"div\");\n\tproject.id = \"todo-project\";\n\tproject.textContent = todo.project;\n\n\tconst editBtn = document.createElement(\"button\");\n\teditBtn.id = \"todo-edit\";\n\teditBtn.classList = \"edit-btn\";\n\teditBtn.textContent = \"Edit\";\n\teditBtn.addEventListener(\"click\", () => {\n\t\t_TodoManager__WEBPACK_IMPORTED_MODULE_0__.TodoManager.editTodo(todo);\n\t});\n\n\tbottomRow.appendChild(prio);\n\tbottomRow.appendChild(project);\n\tbottomRow.appendChild(editBtn);\n\n\ttodoObject.appendChild(headRow);\n\ttodoObject.appendChild(details);\n\ttodoObject.appendChild(date);\n\ttodoObject.appendChild(bottomRow);\n\n\tcontent.appendChild(todoObject);\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/renderTodoItem.js?");

/***/ }),

/***/ "./src/setPrio.js":
/*!************************!*\
  !*** ./src/setPrio.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrioManager\": () => (/* binding */ PrioManager)\n/* harmony export */ });\nclass PrioManager {\n\tstatic lastClickedPrio = \"\";\n\n\tstatic setPrio() {\n\t\tconst low = document.getElementById(\"low-prioritie\");\n\t\tconst medium = document.getElementById(\"med-prioritie\");\n\t\tconst high = document.getElementById(\"high-prioritie\");\n\n\t\tif (document.activeElement === low) {\n\t\t\tPrioManager.lastClickedPrio = \"low\";\n\t\t}\n\t\tif (document.activeElement === medium) {\n\t\t\tPrioManager.lastClickedPrio = \"medium\";\n\t\t}\n\t\tif (document.activeElement === high) {\n\t\t\tPrioManager.lastClickedPrio = \"high\";\n\t\t}\n\t\tif (document.activeElement === undefined) {\n\t\t\tPrioManager.lastClickedPrio = \"\";\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/setPrio.js?");

/***/ }),

/***/ "./src/toggleEditPopupOn.js":
/*!**********************************!*\
  !*** ./src/toggleEditPopupOn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleEditPopupOn\": () => (/* binding */ toggleEditPopupOn)\n/* harmony export */ });\nconst toggleEditPopupOn = () => {\n\tconst popup = document.getElementById(\"edit-popup\");\n\n\tpopup.style.display = \"grid\";\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/toggleEditPopupOn.js?");

/***/ }),

/***/ "./src/toggleNewPopupOff.js":
/*!**********************************!*\
  !*** ./src/toggleNewPopupOff.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleNewPopupOff\": () => (/* binding */ toggleNewPopupOff)\n/* harmony export */ });\nconst toggleNewPopupOff = () => {\n\tconst newPopup = document.getElementById(\"new-popup\");\n\n\tnewPopup.style.display = \"none\";\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/toggleNewPopupOff.js?");

/***/ }),

/***/ "./src/toggleNewPopupOn.js":
/*!*********************************!*\
  !*** ./src/toggleNewPopupOn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleNewPopupOn\": () => (/* binding */ toggleNewPopupOn)\n/* harmony export */ });\nconst toggleNewPopupOn = () => {\n\tconst newPopup = document.getElementById(\"new-popup\");\n\n\tnewPopup.style.display = \"grid\";\n};\n\n\n//# sourceURL=webpack://odin-todo/./src/toggleNewPopupOn.js?");

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