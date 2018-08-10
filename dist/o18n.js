(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("o18n", [], factory);
	else if(typeof exports === 'object')
		exports["o18n"] = factory();
	else
		root["o18n"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/deepmerge/dist/es.js":
/*!*******************************************!*\
  !*** ./node_modules/deepmerge/dist/es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isMergeableObject = function isMergeableObject(value) {\n\treturn isNonNullObject(value)\n\t\t&& !isSpecial(value)\n};\n\nfunction isNonNullObject(value) {\n\treturn !!value && typeof value === 'object'\n}\n\nfunction isSpecial(value) {\n\tvar stringValue = Object.prototype.toString.call(value);\n\n\treturn stringValue === '[object RegExp]'\n\t\t|| stringValue === '[object Date]'\n\t\t|| isReactElement(value)\n}\n\n// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\nvar canUseSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;\n\nfunction isReactElement(value) {\n\treturn value.$$typeof === REACT_ELEMENT_TYPE\n}\n\nfunction emptyTarget(val) {\n\treturn Array.isArray(val) ? [] : {}\n}\n\nfunction cloneUnlessOtherwiseSpecified(value, options) {\n\treturn (options.clone !== false && options.isMergeableObject(value))\n\t\t? deepmerge(emptyTarget(value), value, options)\n\t\t: value\n}\n\nfunction defaultArrayMerge(target, source, options) {\n\treturn target.concat(source).map(function(element) {\n\t\treturn cloneUnlessOtherwiseSpecified(element, options)\n\t})\n}\n\nfunction mergeObject(target, source, options) {\n\tvar destination = {};\n\tif (options.isMergeableObject(target)) {\n\t\tObject.keys(target).forEach(function(key) {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(target[key], options);\n\t\t});\n\t}\n\tObject.keys(source).forEach(function(key) {\n\t\tif (!options.isMergeableObject(source[key]) || !target[key]) {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(source[key], options);\n\t\t} else {\n\t\t\tdestination[key] = deepmerge(target[key], source[key], options);\n\t\t}\n\t});\n\treturn destination\n}\n\nfunction deepmerge(target, source, options) {\n\toptions = options || {};\n\toptions.arrayMerge = options.arrayMerge || defaultArrayMerge;\n\toptions.isMergeableObject = options.isMergeableObject || isMergeableObject;\n\n\tvar sourceIsArray = Array.isArray(source);\n\tvar targetIsArray = Array.isArray(target);\n\tvar sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n\n\tif (!sourceAndTargetTypesMatch) {\n\t\treturn cloneUnlessOtherwiseSpecified(source, options)\n\t} else if (sourceIsArray) {\n\t\treturn options.arrayMerge(target, source, options)\n\t} else {\n\t\treturn mergeObject(target, source, options)\n\t}\n}\n\ndeepmerge.all = function deepmergeAll(array, options) {\n\tif (!Array.isArray(array)) {\n\t\tthrow new Error('first argument should be an array')\n\t}\n\n\treturn array.reduce(function(prev, next) {\n\t\treturn deepmerge(prev, next, options)\n\t}, {})\n};\n\nvar deepmerge_1 = deepmerge;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deepmerge_1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vMThuLy4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2VzLmpzPzU4ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsSUFBSTtBQUNOOztBQUVBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSlcblx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG5cdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0cmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXHRcdHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXSdcblx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcbn1cblxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG5cdHJldHVybiAob3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0PyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucylcblx0XHQ6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucylcblx0fSlcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG5cdE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAoIW9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcG1lcmdlXzE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/deepmerge/dist/es.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _deepmerge = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/es.js\");\n\nvar _deepmerge2 = _interopRequireDefault(_deepmerge);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _set = Symbol('set');\nvar reset = Symbol('reset');\nvar locale = Symbol('locale');\nvar organize = Symbol('organize');\nvar localeList = Symbol('localeList');\nvar mappingLocale = Symbol('mappingLocale');\n\nvar ERROR = {\n  NO_LOCALE: 'NoLocale'\n};\n\nvar O18N = function () {\n  function O18N() {\n    var _localeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var defaultLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n    _classCallCheck(this, O18N);\n\n    var localeKeyList = Object.keys(_localeList);\n    this[mappingLocale] = {};\n    this[localeList] = _localeList;\n    this.locale = defaultLocale || localeKeyList[0];\n  }\n\n  // organize mappingLocale!\n\n\n  _createClass(O18N, [{\n    key: organize,\n    value: function value(localeObj) {\n      var _this = this;\n\n      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      Object.keys(localeObj).forEach(function (key) {\n        // check is keys exist?\n        if (!result[key]) {\n          result[key] = _typeof(localeObj[key]) !== 'object' ? localeObj[key] : _this[organize](localeObj[key]);\n        }\n      });\n      return result;\n    }\n\n    // get current locale\n\n  }, {\n    key: _set,\n\n\n    // rebuild mappingLocale\n    value: function value(_locale) {\n      var _this2 = this;\n\n      var _localeList2 = this[localeList],\n          main = _localeList2[_locale],\n          others = _objectWithoutProperties(_localeList2, [_locale]);\n\n      this[reset]();\n      this[mappingLocale] = this[organize](main);\n      Object.keys(others).forEach(function (key) {\n        _this2[mappingLocale] = _this2[organize](others[key], _this2[mappingLocale]);\n      });\n      Object.keys(this[mappingLocale]).forEach(function (key) {\n        _this2[key] = _this2[mappingLocale][key];\n      });\n    }\n\n    // reset mappingLocale\n\n  }, {\n    key: reset,\n    value: function value() {\n      var _this3 = this;\n\n      Object.keys(this[mappingLocale]).forEach(function (key) {\n        delete _this3[key];\n      });\n      this[mappingLocale] = {};\n    }\n\n    // set new locale, maybe replace some key/value\n\n  }, {\n    key: 'set',\n    value: function set(_locale) {\n      var defaultLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n      this[localeList] = _deepmerge2.default.all([this[localeList], _locale]);\n      var mainLocale = defaultLocale || this.locale || Object.keys(this[localeList])[0] || '';\n      this.locale = mainLocale;\n    }\n  }, {\n    key: 'locale',\n    get: function get() {\n      return this[locale];\n    }\n\n    // set current locale, and rebuild mappingLocale\n    ,\n    set: function set(_locale) {\n      var message = null;\n      try {\n        if (!Object.keys(this[localeList]).includes(_locale)) {\n          throw new Error(ERROR.NO_LOCALE);\n        }\n        this[locale] = _locale;\n        this[_set](_locale);\n        message = 'OK';\n      } catch (e) {\n        message = e.message;\n      }\n      return message;\n    }\n  }]);\n\n  return O18N;\n}();\n\nexports.default = O18N;\n\n// default value\n\nO18N.locale = '';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vMThuLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsic2V0IiwiU3ltYm9sIiwicmVzZXQiLCJsb2NhbGUiLCJvcmdhbml6ZSIsImxvY2FsZUxpc3QiLCJtYXBwaW5nTG9jYWxlIiwiRVJST1IiLCJOT19MT0NBTEUiLCJPMThOIiwiX2xvY2FsZUxpc3QiLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlS2V5TGlzdCIsIk9iamVjdCIsImtleXMiLCJsb2NhbGVPYmoiLCJyZXN1bHQiLCJmb3JFYWNoIiwia2V5IiwiX2xvY2FsZSIsIm1haW4iLCJvdGhlcnMiLCJtZXJnZSIsImFsbCIsIm1haW5Mb2NhbGUiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJFcnJvciIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQWdCQyxPQUFPLEtBQVAsQ0FBdEI7QUFDQSxJQUFNQyxRQUFnQkQsT0FBTyxPQUFQLENBQXRCO0FBQ0EsSUFBTUUsU0FBZ0JGLE9BQU8sUUFBUCxDQUF0QjtBQUNBLElBQU1HLFdBQWdCSCxPQUFPLFVBQVAsQ0FBdEI7QUFDQSxJQUFNSSxhQUFpQkosT0FBTyxZQUFQLENBQXZCO0FBQ0EsSUFBTUssZ0JBQWdCTCxPQUFPLGVBQVAsQ0FBdEI7O0FBRUEsSUFBTU0sUUFBUTtBQUNaQyxhQUFZO0FBREEsQ0FBZDs7SUFJTUMsSTtBQUNKLGtCQUFrRDtBQUFBLFFBQXRDQyxXQUFzQyx1RUFBeEIsRUFBd0I7O0FBQUEsUUFBcEJDLGFBQW9CLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hELFFBQU1DLGdCQUFnQkMsT0FBT0MsSUFBUCxDQUFZSixXQUFaLENBQXRCO0FBQ0EsU0FBS0osYUFBTCxJQUFzQixFQUF0QjtBQUNBLFNBQUtELFVBQUwsSUFBbUJLLFdBQW5CO0FBQ0EsU0FBS1AsTUFBTCxHQUFjUSxpQkFBaUJDLGNBQWMsQ0FBZCxDQUEvQjtBQUNEOztBQUVEOzs7O1NBQ0NSLFE7MEJBQVVXLFMsRUFBd0I7QUFBQTs7QUFBQSxVQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQ2pDSCxhQUFPQyxJQUFQLENBQVlDLFNBQVosRUFBdUJFLE9BQXZCLENBQStCLFVBQUNDLEdBQUQsRUFBUztBQUN0QztBQUNBLFlBQUksQ0FBQ0YsT0FBT0UsR0FBUCxDQUFMLEVBQWtCO0FBQ2hCRixpQkFBT0UsR0FBUCxJQUFjLFFBQU9ILFVBQVVHLEdBQVYsQ0FBUCxNQUEwQixRQUExQixHQUNWSCxVQUFVRyxHQUFWLENBRFUsR0FDTyxNQUFLZCxRQUFMLEVBQWVXLFVBQVVHLEdBQVYsQ0FBZixDQURyQjtBQUVEO0FBQ0YsT0FORDtBQU9BLGFBQU9GLE1BQVA7QUFDRDs7QUFFRDs7O1NBc0JDaEIsSTs7O0FBREQ7MEJBQ01tQixPLEVBQVM7QUFBQTs7QUFBQSx5QkFDMEIsS0FBS2QsVUFBTCxDQUQxQjtBQUFBLFVBQ01lLElBRE4sZ0JBQ0pELE9BREk7QUFBQSxVQUNlRSxNQURmLDJDQUNKRixPQURJOztBQUViLFdBQUtqQixLQUFMO0FBQ0EsV0FBS0ksYUFBTCxJQUFzQixLQUFLRixRQUFMLEVBQWVnQixJQUFmLENBQXRCO0FBQ0FQLGFBQU9DLElBQVAsQ0FBWU8sTUFBWixFQUFvQkosT0FBcEIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ25DLGVBQUtaLGFBQUwsSUFBc0IsT0FBS0YsUUFBTCxFQUNwQmlCLE9BQU9ILEdBQVAsQ0FEb0IsRUFFcEIsT0FBS1osYUFBTCxDQUZvQixDQUF0QjtBQUlELE9BTEQ7QUFNQU8sYUFBT0MsSUFBUCxDQUFZLEtBQUtSLGFBQUwsQ0FBWixFQUFpQ1csT0FBakMsQ0FBeUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hELGVBQUtBLEdBQUwsSUFBWSxPQUFLWixhQUFMLEVBQW9CWSxHQUFwQixDQUFaO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7U0FDQ2hCLEs7NEJBQVM7QUFBQTs7QUFDUlcsYUFBT0MsSUFBUCxDQUFZLEtBQUtSLGFBQUwsQ0FBWixFQUFpQ1csT0FBakMsQ0FBeUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hELGVBQU8sT0FBS0EsR0FBTCxDQUFQO0FBQ0QsT0FGRDtBQUdBLFdBQUtaLGFBQUwsSUFBc0IsRUFBdEI7QUFDRDs7QUFFRDs7Ozt3QkFDSWEsTyxFQUE2QjtBQUFBLFVBQXBCUixhQUFvQix1RUFBSixFQUFJOztBQUMvQixXQUFLTixVQUFMLElBQW1CaUIsb0JBQU1DLEdBQU4sQ0FBVSxDQUMzQixLQUFLbEIsVUFBTCxDQUQyQixFQUUzQmMsT0FGMkIsQ0FBVixDQUFuQjtBQUlBLFVBQU1LLGFBQWFiLGlCQUFpQixLQUFLUixNQUF0QixJQUFnQ1UsT0FBT0MsSUFBUCxDQUFZLEtBQUtULFVBQUwsQ0FBWixFQUE4QixDQUE5QixDQUFoQyxJQUFvRSxFQUF2RjtBQUNBLFdBQUtGLE1BQUwsR0FBY3FCLFVBQWQ7QUFDRDs7O3dCQXBEWTtBQUNYLGFBQU8sS0FBS3JCLE1BQUwsQ0FBUDtBQUNEOztBQUVEOztzQkFDV2dCLE8sRUFBUztBQUNsQixVQUFJTSxVQUFVLElBQWQ7QUFDQSxVQUFJO0FBQ0YsWUFBSSxDQUFDWixPQUFPQyxJQUFQLENBQVksS0FBS1QsVUFBTCxDQUFaLEVBQThCcUIsUUFBOUIsQ0FBdUNQLE9BQXZDLENBQUwsRUFBc0Q7QUFDcEQsZ0JBQU0sSUFBSVEsS0FBSixDQUFVcEIsTUFBTUMsU0FBaEIsQ0FBTjtBQUNEO0FBQ0QsYUFBS0wsTUFBTCxJQUFlZ0IsT0FBZjtBQUNBLGFBQUtuQixJQUFMLEVBQVVtQixPQUFWO0FBQ0FNLGtCQUFVLElBQVY7QUFDRCxPQVBELENBT0UsT0FBT0csQ0FBUCxFQUFVO0FBQ1BILGVBRE8sR0FDS0csQ0FETCxDQUNQSCxPQURPO0FBRVg7QUFDRCxhQUFPQSxPQUFQO0FBQ0Q7Ozs7OztrQkFxQ1loQixJOztBQUVmOztBQUNBQSxLQUFLTixNQUFMLEdBQWMsRUFBZCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuXG5jb25zdCBzZXQgICAgICAgICAgID0gU3ltYm9sKCdzZXQnKTtcbmNvbnN0IHJlc2V0ICAgICAgICAgPSBTeW1ib2woJ3Jlc2V0Jyk7XG5jb25zdCBsb2NhbGUgICAgICAgID0gU3ltYm9sKCdsb2NhbGUnKTtcbmNvbnN0IG9yZ2FuaXplICAgICAgPSBTeW1ib2woJ29yZ2FuaXplJyk7XG5jb25zdCBsb2NhbGVMaXN0ICAgICA9IFN5bWJvbCgnbG9jYWxlTGlzdCcpO1xuY29uc3QgbWFwcGluZ0xvY2FsZSA9IFN5bWJvbCgnbWFwcGluZ0xvY2FsZScpO1xuXG5jb25zdCBFUlJPUiA9IHtcbiAgTk9fTE9DQUxFOiAgJ05vTG9jYWxlJyxcbn07XG5cbmNsYXNzIE8xOE4ge1xuICBjb25zdHJ1Y3RvcihfbG9jYWxlTGlzdCA9IHt9LCBkZWZhdWx0TG9jYWxlID0gJycpIHtcbiAgICBjb25zdCBsb2NhbGVLZXlMaXN0ID0gT2JqZWN0LmtleXMoX2xvY2FsZUxpc3QpO1xuICAgIHRoaXNbbWFwcGluZ0xvY2FsZV0gPSB7fTtcbiAgICB0aGlzW2xvY2FsZUxpc3RdID0gX2xvY2FsZUxpc3Q7XG4gICAgdGhpcy5sb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IGxvY2FsZUtleUxpc3RbMF07XG4gIH1cblxuICAvLyBvcmdhbml6ZSBtYXBwaW5nTG9jYWxlIVxuICBbb3JnYW5pemVdKGxvY2FsZU9iaiwgcmVzdWx0ID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhsb2NhbGVPYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaXMga2V5cyBleGlzdD9cbiAgICAgIGlmICghcmVzdWx0W2tleV0pIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgbG9jYWxlT2JqW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICAgPyBsb2NhbGVPYmpba2V5XSA6IHRoaXNbb3JnYW5pemVdKGxvY2FsZU9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYWxlXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXNbbG9jYWxlXTtcbiAgfVxuXG4gIC8vIHNldCBjdXJyZW50IGxvY2FsZSwgYW5kIHJlYnVpbGQgbWFwcGluZ0xvY2FsZVxuICBzZXQgbG9jYWxlKF9sb2NhbGUpIHtcbiAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghT2JqZWN0LmtleXModGhpc1tsb2NhbGVMaXN0XSkuaW5jbHVkZXMoX2xvY2FsZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SLk5PX0xPQ0FMRSk7XG4gICAgICB9XG4gICAgICB0aGlzW2xvY2FsZV0gPSBfbG9jYWxlO1xuICAgICAgdGhpc1tzZXRdKF9sb2NhbGUpO1xuICAgICAgbWVzc2FnZSA9ICdPSyc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgKHsgbWVzc2FnZSB9ID0gZSk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gcmVidWlsZCBtYXBwaW5nTG9jYWxlXG4gIFtzZXRdKF9sb2NhbGUpIHtcbiAgICBjb25zdCB7IFtfbG9jYWxlXTogbWFpbiwgLi4ub3RoZXJzIH0gPSB0aGlzW2xvY2FsZUxpc3RdO1xuICAgIHRoaXNbcmVzZXRdKCk7XG4gICAgdGhpc1ttYXBwaW5nTG9jYWxlXSA9IHRoaXNbb3JnYW5pemVdKG1haW4pO1xuICAgIE9iamVjdC5rZXlzKG90aGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzW21hcHBpbmdMb2NhbGVdID0gdGhpc1tvcmdhbml6ZV0oXG4gICAgICAgIG90aGVyc1trZXldLFxuICAgICAgICB0aGlzW21hcHBpbmdMb2NhbGVdXG4gICAgICApO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKHRoaXNbbWFwcGluZ0xvY2FsZV0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpc1trZXldID0gdGhpc1ttYXBwaW5nTG9jYWxlXVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVzZXQgbWFwcGluZ0xvY2FsZVxuICBbcmVzZXRdKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXNbbWFwcGluZ0xvY2FsZV0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzW21hcHBpbmdMb2NhbGVdID0ge307XG4gIH1cblxuICAvLyBzZXQgbmV3IGxvY2FsZSwgbWF5YmUgcmVwbGFjZSBzb21lIGtleS92YWx1ZVxuICBzZXQoX2xvY2FsZSwgZGVmYXVsdExvY2FsZSA9ICcnKSB7XG4gICAgdGhpc1tsb2NhbGVMaXN0XSA9IG1lcmdlLmFsbChbXG4gICAgICB0aGlzW2xvY2FsZUxpc3RdLFxuICAgICAgX2xvY2FsZSxcbiAgICBdKTtcbiAgICBjb25zdCBtYWluTG9jYWxlID0gZGVmYXVsdExvY2FsZSB8fCB0aGlzLmxvY2FsZSB8fCBPYmplY3Qua2V5cyh0aGlzW2xvY2FsZUxpc3RdKVswXSB8fCAnJztcbiAgICB0aGlzLmxvY2FsZSA9IG1haW5Mb2NhbGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTzE4TjtcblxuLy8gZGVmYXVsdCB2YWx1ZVxuTzE4Ti5sb2NhbGUgPSAnJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });
});