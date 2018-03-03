webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fashion-clock/fashion-clock": 9,
	"./fashion-clock/fashion-clock.js": 9,
	"./fashion-clock/fashion-clock.pug": 11,
	"./fashion-clock/fashion-clock.scss": 15,
	"./init-app": 12,
	"./init-app.pug": 12,
	"./pomodoro-clock/pomodoro-clock": 10,
	"./pomodoro-clock/pomodoro-clock.js": 10,
	"./pomodoro-clock/pomodoro-clock.pug": 13,
	"./pomodoro-clock/pomodoro-clock.scss": 16
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FashionClock = exports.FashionClock = function () {
	function FashionClock() {
		_classCallCheck(this, FashionClock);

		this.primaryColor = '#6A82FB';
		this.secondaryColor = '#FC5C7D';
		this.hours = 23;
		this.minutes = 49;
		this.seconds = 0;
	}

	_createClass(FashionClock, [{
		key: 'hoursToPercent',
		value: function hoursToPercent() {
			return this.hours * 4.16;
		}
	}, {
		key: 'minutesToPercent',
		value: function minutesToPercent() {
			return this.minutes * 1.66;
		}
	}, {
		key: 'secondsToPercent',
		value: function secondsToPercent() {
			return this.seconds * 1.66;
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attr, oldVl, newVl) {
			if (attr === 'minutes' && this.minutes !== Number(newVl)) {
				this.minutes = Number(newVl);
			};
		}
	}]);

	return FashionClock;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PomodoroClock = exports.PomodoroClock = function () {
	function PomodoroClock() {
		_classCallCheck(this, PomodoroClock);

		this.primaryColor = "#43c6ac";
		this.secondaryColor = "#191654";
		this.fillColor = "#efefef";
		this.hours = 24;
		this.minutes = 10;
		this.seconds = 0;
		this.intervalId = null;
	}

	_createClass(PomodoroClock, [{
		key: "changeColorHandler",
		value: function changeColorHandler(_ref) {
			var target = _ref.target;

			if (target && target.value) {
				this.minutes = Number(target.value);
				this.calculateTime();
				this.refresh();
			}
		}
	}, {
		key: "calculateTime",
		value: function calculateTime() {
			this.minutes = 59 - this.minutes;
		}
	}, {
		key: "incrementTime",
		value: function incrementTime() {
			this.seconds++;
			if (this.seconds > 59) {
				this.seconds = 0;
				this.minutes++;
				if (this.minutes > 59) {
					this.minutes = 0;
					this.hours++;
				}
			}
			this.refresh();
		}
	}, {
		key: "connectedCallback",
		value: function connectedCallback() {
			this.calculateTime();
			this.intervalId = setInterval(this.incrementTime.bind(this), 1000);
		}
	}, {
		key: "disconnectedCallback",
		value: function disconnectedCallback() {
			if (this.intervalId) {
				clearInterval(this.intervalId);
			}
		}
	}]);

	return PomodoroClock;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(9), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _fashion_clock) {
	var __fashion_clock_tmp = Object.keys(_fashion_clock)[0];
	exports.default = function (super_clazz) {
		function _clazz_sub_njduGefRpAERUV1VbOpk_k_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_njduGefRpAERUV1VbOpk_k_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_njduGefRpAERUV1VbOpk_k_tmp.prototype.constructor = _clazz_sub_njduGefRpAERUV1VbOpk_k_tmp;
		_clazz_sub_njduGefRpAERUV1VbOpk_k_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "fashion-clock"], "dinamic": "\"style\",('background: linear-gradient(to bottom, '+$_this_$.primaryColor+', '+$_this_$.secondaryColor+')')" };
		_clazz_sub_njduGefRpAERUV1VbOpk_k_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("div", null, ["class", "hour-box"], "style", 'width:' + $_this_$.hoursToPercent() + '%;height:' + $_this_$.hoursToPercent() + '%');

			_idom.elementOpen("div", null, ["class", "minute-box"], "style", 'width:' + $_this_$.minutesToPercent() + '%;height:' + $_this_$.minutesToPercent() + '%');

			_idom.elementOpen("div", null, ["class", "second-box"], "style", 'width:' + $_this_$.secondsToPercent() + '%;height:' + $_this_$.secondsToPercent() + '%');

			_idom.elementClose("div");

			_idom.elementClose("div");

			_idom.elementClose("div");
		};
		return _clazz_sub_njduGefRpAERUV1VbOpk_k_tmp;
	}(_fashion_clock[__fashion_clock_tmp]);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _pomodoro_clock) {
	var __mod__wjcSGRvhUJBuTCmTA87phU_tmp = "_tmp_constructor_no_view__mod__wjcSGRvhUJBuTCmTA87phU";

	var tmp_style = document.createElement('style');
	tmp_style.type = 'text/css';
	tmp_style.innerHTML = 'html,body,body > div,body > div > .init-app{  height:100%;  margin:0px;  padding:0px; }';
	document.getElementsByTagName('head')[0].appendChild(tmp_style);exports.default = function (super_clazz) {
		function _clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp.prototype.constructor = _clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp;
		_clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "init-app"], "dinamic": "\"\"" };
		_clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp.prototype.render = function ($_this_$) {
			(function () {
				var _$_inst_$_ = _libfjs_mod_.default.build({ "classFactory": _pomodoro_clock.default, "tag": "div", "alias": "pomodoro-clock", "target": "", "hostVars": {}, "staticVars": { "key:id": "tmp_key_inst_custom_compPghOhPk_deWSdaGI0kxGBl", "is": "pomodoro-clock" } });

				_libfjs_mod_.default.reDraw.call(_$_inst_$_);
			})();
		};
		return _clazz_sub_oCzKw1FZZu3GOdx1UhNV0o_tmp;
	}(function () {});
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(10), __webpack_require__(11), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _pomodoro_clock, _fashion_clock) {
	var __pomodoro_clock_tmp = Object.keys(_pomodoro_clock)[0];
	exports.default = function (super_clazz) {
		function _clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp.prototype.constructor = _clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp;
		_clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "pomodoro-clock"], "dinamic": "\"style\",('background-color:'+$_this_$.fillColor)" };
		_clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("div", null, ["class", "box-clock"], "onclick", $_this_$.refresh.bind($_this_$, { isControlVisible: true }));

			(function () {
				var _$_inst_$_ = _libfjs_mod_.default.build({ "classFactory": _fashion_clock.default, "tag": "div", "alias": "fashion-clock", "target": "", "hostVars": { "primary-color": $_this_$.primaryColor, "secondary-color": $_this_$.secondaryColor, "minutes": $_this_$.minutes, "seconds": $_this_$.seconds, "hours": $_this_$.hours }, "staticVars": { "key:id": "tmp_key_inst_custom_compPhC3DlLxgk8fx3knBOHnH2", "is": "fashion-clock" } });

				_libfjs_mod_.default.reDraw.call(_$_inst_$_);
			})();

			_idom.elementClose("div");

			if ($_this_$.isControlVisible) {

				_idom.elementOpen("div", null, ["class", "box-control"], "");

				_idom.elementOpen("div", null, ["class", "sub-box-control"], "");

				_idom.elementOpen("label", null, ["class", "display-minutes"], "");

				_idom.text("" + (59 - $_this_$.minutes) + " minutes");

				_idom.elementClose("label");

				_idom.elementOpen("input", null, ["type", "range", "step", "1", "min", "1", "max", "59"], "value", 59 - $_this_$.minutes, "onchange", $_this_$.changeColorHandler.bind($_this_$));

				_idom.elementClose("input");

				_idom.elementOpen("label", null, [""], "");

				_idom.elementOpen("input", null, ["type", "color", "value", "#43c6ac"], "onchange", function ($evt) {
					$_this_$.refresh({ "primaryColor": $evt.target.value });
				});

				_idom.elementClose("input");

				_idom.elementOpen("span", null, [""], "");

				_idom.text("Primary color    ");

				_idom.elementClose("span");

				_idom.elementClose("label");

				_idom.elementOpen("label", null, [""], "");

				_idom.elementOpen("input", null, ["type", "color", "value", "#191654"], "onchange", function ($evt) {
					$_this_$.refresh({ "secondaryColor": $evt.target.value });
				});

				_idom.elementClose("input");

				_idom.elementOpen("span", null, [""], "");

				_idom.text("Secondary color");

				_idom.elementClose("span");

				_idom.elementClose("label");

				_idom.elementOpen("label", null, [""], "");

				_idom.elementOpen("input", null, ["type", "color", "value", "#191654"], "onchange", function ($evt) {
					$_this_$.refresh({ "fillColor": $evt.target.value });
				});

				_idom.elementClose("input");

				_idom.elementOpen("span", null, [""], "");

				_idom.text("Fill color");

				_idom.elementClose("span");

				_idom.elementClose("label");

				_idom.elementClose("div");

				_idom.elementClose("div");
			};

			if ($_this_$.isControlVisible) {

				_idom.elementOpen("div", null, [""], "class", 'box-backdrop', "onclick", $_this_$.refresh.bind($_this_$, { isControlVisible: false }));

				_idom.elementClose("div");
			};
		};
		return _clazz_sub_Fhma5oAzULkl7ntA0A2HMb_tmp;
	}(_pomodoro_clock[__pomodoro_clock_tmp]);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./fashion-clock.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./fashion-clock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./pomodoro-clock.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./pomodoro-clock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".fashion-clock {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 20%;\n  overflow: hidden;\n  padding: 15px;\n  box-sizing: border-box;\n  background: linear-gradient(to bottom, #6A82FB, #FC5C7D);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .fashion-clock > .hour-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: width .3s, height .3s;\n    height: 80%;\n    width: 80%;\n    background-color: rgba(255, 255, 255, 0.2);\n    border-radius: 50%;\n    box-shadow: 0 5px 8px 3px rgba(0, 0, 0, 0.1); }\n    .fashion-clock > .hour-box > .minute-box {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: width .3s, height .3s;\n      height: 60%;\n      width: 60%;\n      background-color: rgba(255, 255, 255, 0.4);\n      border-radius: 50%; }\n      .fashion-clock > .hour-box > .minute-box > .second-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 30%;\n        width: 30%;\n        background-color: rgba(255, 255, 255, 0.8);\n        border-radius: 50%; }\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".pomodoro-clock {\n  width: 100%;\n  height: 100%; }\n  .pomodoro-clock > .box-clock {\n    width: 180px;\n    padding: 40px 40px 10px 40px;\n    margin: 0px auto; }\n  .pomodoro-clock > .box-control {\n    color: #fff;\n    width: 80%;\n    margin-left: 10%;\n    background-color: #929494;\n    border-radius: 5px;\n    margin-top: 260px;\n    z-index: 15;\n    position: absolute;\n    top: 0; }\n    .pomodoro-clock > .box-control > .sub-box-control {\n      padding: 10px 40px 10px 40px; }\n      .pomodoro-clock > .box-control > .sub-box-control > label.display-minutes {\n        text-align: center;\n        font-size: 1.5rem;\n        font-family: verdana;\n        margin-bottom: 5px; }\n      .pomodoro-clock > .box-control > .sub-box-control > input[type=\"range\"] {\n        width: 100%;\n        padding: 0px;\n        margin: 0px; }\n      .pomodoro-clock > .box-control > .sub-box-control > label {\n        display: block;\n        width: 100%; }\n        .pomodoro-clock > .box-control > .sub-box-control > label > input[type=\"color\"] {\n          width: 45px;\n          background-color: transparent;\n          border: none; }\n        .pomodoro-clock > .box-control > .sub-box-control > label > span {\n          vertical-align: top; }\n  .pomodoro-clock > .box-backdrop {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    background-color: rgba(250, 250, 250, 0.6);\n    z-index: 14; }\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
]);