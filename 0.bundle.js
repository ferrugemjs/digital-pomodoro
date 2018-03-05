webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fashion-clock/fashion-clock": 12,
	"./fashion-clock/fashion-clock.js": 12,
	"./fashion-clock/fashion-clock.pug": 14,
	"./fashion-clock/fashion-clock.scss": 18,
	"./init-app": 15,
	"./init-app.pug": 15,
	"./pomodoro-clock/pomodoro-clock": 13,
	"./pomodoro-clock/pomodoro-clock.js": 13,
	"./pomodoro-clock/pomodoro-clock.pug": 16,
	"./pomodoro-clock/pomodoro-clock.scss": 19
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
webpackContext.id = 7;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PomodoroClock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _push = __webpack_require__(23);

var Push = _interopRequireWildcard(_push);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
		this.configuredMinutes = 10;
		this.message = "it's time to pause!";
		this.isNotifying = false;
	}

	_createClass(PomodoroClock, [{
		key: "changeMinutesHandler",
		value: function changeMinutesHandler(_ref) {
			var target = _ref.target;

			if (target && target.value) {
				this.seconds = 0;
				this.configuredMinutes = Number(target.value);
				this.calculateTime();
				this.setCookie('configured-minutes', target.value, 90);
				this.refresh();
			}
		}
	}, {
		key: "calculateTime",
		value: function calculateTime() {
			this.minutes = 59 - this.configuredMinutes;
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
				}
				if (this.minutes >= this.configuredMinutes) {
					this.minutes = 0;
					this.calculateTime();
					this.stop();
					this.isNotifying = true;
					Push.default.create("It's time to!", {
						body: this.message,
						icon: 'assets/pomodoro-digital.png',
						timeout: 4000,
						vibrate: [200, 100, 200, 100, 200, 100, 200],
						onClick: function onClick() {
							window.focus();
							this.close();
						}
					});
				}
			}
			this.refresh();
		}
	}, {
		key: "attributeChangedCallback",
		value: function attributeChangedCallback(attrName, oldVal, newVal) {
			if (attrName !== "isControlVisible") {
				this.setCookie("configured-" + attrName.toLowerCase(), newVal, 90);
			}
		}
	}, {
		key: "connectedCallback",
		value: function connectedCallback() {
			this.start();
		}
	}, {
		key: "disconnectedCallback",
		value: function disconnectedCallback() {
			this.stop();
		}
	}, {
		key: "reStart",
		value: function reStart() {
			this.isNotifying = false;
			this.start();
		}
	}, {
		key: "stop",
		value: function stop() {
			if (this.intervalId) {
				clearInterval(this.intervalId);
			}
		}
	}, {
		key: "start",
		value: function start() {
			this.stop();
			if (this.getCookie('configured-minutes')) {
				this.configuredMinutes = Number(this.getCookie('configured-minutes'));
			}
			if (this.getCookie('configured-fillcolor')) {
				this.fillColor = this.getCookie('configured-fillcolor');
			}
			if (this.getCookie('configured-primarycolor')) {
				this.primaryColor = this.getCookie('configured-primarycolor');
			}
			if (this.getCookie('configured-secondarycolor')) {
				this.secondaryColor = this.getCookie('configured-secondarycolor');
			}
			if (this.getCookie('configured-message')) {
				this.message = this.getCookie('configured-message');
			}
			this.calculateTime();
			this.intervalId = setInterval(this.incrementTime.bind(this), 1000);
		}
	}, {
		key: "setCookie",
		value: function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
	}, {
		key: "getCookie",
		value: function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
	}]);

	return PomodoroClock;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(6), __webpack_require__(12), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _fashion_clock) {
	var __fashion_clock_tmp = Object.keys(_fashion_clock)[0];
	exports.default = function (super_clazz) {
		function _clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp.prototype.constructor = _clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp;
		_clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "fashion-clock"], "dinamic": "\"style\",('background: linear-gradient(to bottom, '+$_this_$.primaryColor+', '+$_this_$.secondaryColor+')')" };
		_clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("div", 'bJx79kHnvI30tbK4SUFlWv', ["class", "hour-box"], "style", 'width:' + $_this_$.hoursToPercent() + '%;height:' + $_this_$.hoursToPercent() + '%');

			_idom.elementOpen("div", 'turs2nNXn6FF0dzvOibbEU', ["class", "minute-box"], "style", 'width:' + $_this_$.minutesToPercent() + '%;height:' + $_this_$.minutesToPercent() + '%');

			_idom.elementOpen("div", 'idrh1uRbbCnNjr_0prTbDG', ["class", "second-box"], "style", 'width:' + $_this_$.secondsToPercent() + '%;height:' + $_this_$.secondsToPercent() + '%');

			_idom.elementClose("div");

			_idom.elementClose("div");

			_idom.elementClose("div");
		};
		return _clazz_sub_fvudSG1a20ksFiw5iAdV4t_tmp;
	}(_fashion_clock[__fashion_clock_tmp]);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(6), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _pomodoro_clock) {
	var __mod__FXvV79G85S8NJvbpFN446K_tmp = "_tmp_constructor_no_view__mod__FXvV79G85S8NJvbpFN446K";

	var tmp_style = document.createElement('style');
	tmp_style.type = 'text/css';
	tmp_style.innerHTML = 'html,body,body > div,body > div > .init-app{  height:100%;  margin:0px;  padding:0px; }';
	document.getElementsByTagName('head')[0].appendChild(tmp_style);exports.default = function (super_clazz) {
		function _clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp.prototype.constructor = _clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp;
		_clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "init-app"], "dinamic": "\"\"" };
		_clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp.prototype.render = function ($_this_$) {
			(function () {
				var _$_inst_$_ = _libfjs_mod_.default.build({ "classFactory": _pomodoro_clock.default, "tag": "div", "alias": "pomodoro-clock", "target": "", "hostVars": {}, "staticVars": { "key:id": "tmp_key_inst_custom_compusvuZ33x_v4rZ9OSrVuKp6", "is": "pomodoro-clock" } });

				_libfjs_mod_.default.reDraw.call(_$_inst_$_);
			})();
		};
		return _clazz_sub_Ptnufjul63k1VS7MLB70SC_tmp;
	}(function () {});
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(6), __webpack_require__(13), __webpack_require__(14), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _pomodoro_clock, _fashion_clock) {
	var __pomodoro_clock_tmp = Object.keys(_pomodoro_clock)[0];
	exports.default = function (super_clazz) {
		function _clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp.prototype.constructor = _clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp;
		_clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "pomodoro-clock"], "dinamic": "\"style\",('background-color:'+$_this_$.fillColor)" };
		_clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("h2", 'kiB20sET05MUPs1rR6TgRn', ["class", "product-name"], "");

			_idom.text("DigiPomodoro");

			_idom.elementClose("h2");

			_idom.elementOpen("div", 'bsMwv4le6CvnzckkLem3TB', ["class", "box-clock"], "onclick", $_this_$.refresh.bind($_this_$, { isControlVisible: true }));

			(function () {
				var _$_inst_$_ = _libfjs_mod_.default.build({ "classFactory": _fashion_clock.default, "tag": "div", "alias": "fashion-clock", "target": "", "hostVars": { "primary-color": $_this_$.primaryColor, "secondary-color": $_this_$.secondaryColor, "minutes": $_this_$.minutes, "seconds": $_this_$.seconds, "hours": $_this_$.hours }, "staticVars": { "key:id": "tmp_key_inst_custom_compZvwwIlnpbiL9r8P2MLk_kL", "is": "fashion-clock" } });

				_libfjs_mod_.default.reDraw.call(_$_inst_$_);
			})();

			_idom.elementClose("div");

			if ($_this_$.isControlVisible) {

				_idom.elementOpen("div", 'hHndvZNfkdk9hZnj1f0NzT', ["class", "box-control"], "");

				_idom.elementOpen("div", 'WSjGSVzXdeZveeCIzaewLe', ["class", "sub-box-control"], "");

				_idom.elementOpen("label", 'aWiKuVSDMnKfNXxjHA0lmD', ["class", "display-message"], "");

				_idom.elementOpen("textarea", 'kkJRBGleGNUvWTOaBesm_G', [""], "onchange", function ($evt) {
					$_this_$.refresh({ "message": $evt.target.value });
				});

				_idom.text("" + $_this_$.message + "");

				_idom.elementClose("textarea");

				_idom.elementClose("label");

				_idom.elementOpen("label", 'EgfAXK8IkijVXDCL7lSjRx', ["class", "display-minutes"], "");

				_idom.text("" + $_this_$.configuredMinutes + " minutes");

				_idom.elementClose("label");

				_idom.elementOpen("input", 'bgjz5ke45greedC6ghzKfa', ["type", "range", "step", "1", "min", "1", "max", "59"], "value", 59 - $_this_$.minutes, "onchange", $_this_$.changeMinutesHandler.bind($_this_$));

				_idom.elementClose("input");

				_idom.elementOpen("label", 'DjUnikUvBmSwsDbW2039xR', [""], "");

				_idom.elementOpen("input", 'KeX61khEawACJt2RSkWoft', ["type", "color"], "value", $_this_$.primaryColor, "onchange", function ($evt) {
					$_this_$.refresh({ "primaryColor": $evt.target.value });
				});

				_idom.elementClose("input");

				_idom.elementOpen("span", 'fdddi0il8xndti8LdRNr1A', [""], "");

				_idom.text("Primary color    ");

				_idom.elementClose("span");

				_idom.elementClose("label");

				_idom.elementOpen("label", 'rDz7kom03ZdCS0HSVKm5SK', [""], "");

				_idom.elementOpen("input", 'fHk4nnZ8SkOzwsCwAHcGJD', ["type", "color"], "value", $_this_$.secondaryColor, "onchange", function ($evt) {
					$_this_$.refresh({ "secondaryColor": $evt.target.value });
				});

				_idom.elementClose("input");

				_idom.elementOpen("span", 'fEk8HhcM59pgi2X91v1K4N', [""], "");

				_idom.text("Secondary color");

				_idom.elementClose("span");

				_idom.elementClose("label");

				_idom.elementOpen("label", 'egu3WoPBtrjcXZgeG11mr7', [""], "");

				_idom.elementOpen("input", 'eHc8IsM9o0ORLjTTWJj8KH', ["type", "color"], "value", $_this_$.fillColor, "onchange", function ($evt) {
					$_this_$.refresh({ "fillColor": $evt.target.value });
				});

				_idom.elementClose("input");

				_idom.elementOpen("span", 'wXP0D716L5nLwlfkK5bGiV', [""], "");

				_idom.text("Fill color");

				_idom.elementClose("span");

				_idom.elementClose("label");

				_idom.elementOpen("label", 'SsnWm58ElRv2Zak213OP51', ["style", "text-align:right;font-size:10px;"], "");

				_idom.text("DigiPomodoro v-1.0.2");

				_idom.elementClose("label");

				_idom.elementClose("div");

				_idom.elementClose("div");
			};

			if ($_this_$.isNotifying) {

				_idom.elementOpen("div", 'vzalkoB5OiA8kv5wblT4Lv', ["class", "box-message"], "onclick", $_this_$.reStart.bind($_this_$));

				_idom.elementOpen("div", 'gKBdLBooSuHVz1xgZo4w8n', ["class", "sub-box-message"], "");

				_idom.elementOpen("h2", 'ZsVwXkLc7WNkTf5hjhbjkd', [""], "");

				_idom.text("" + $_this_$.message + "");

				_idom.elementClose("h2");

				_idom.elementOpen("audio", 'OKXcS9o4a_XFu5ZOZGGZCD', ["autoplay", "autoplay"], "");

				_idom.elementOpen("source", 'PPg_L1iXkr7G5x74ZUnZIT', ["src", "assets/computer-magic.mp3", "type", "audio/mpeg"], "");

				_idom.elementClose("source");

				_idom.elementClose("audio");

				_idom.elementClose("div");

				_idom.elementClose("div");
			};

			if ($_this_$.isControlVisible) {

				_idom.elementOpen("div", 'MctEpkaNUZ2vbKRn6n2Wxd', ["class", "box-backdrop"], "onclick", $_this_$.refresh.bind($_this_$, { isControlVisible: false }));

				_idom.elementClose("div");
			};

			_idom.elementOpen("div", 'FAKI95bugHWF2CMs_G7bLT', ["class", "pomodoro-footer"], "");

			_idom.text("DigiPomodoro is made with ");

			_idom.elementOpen("a", 'lTPUSWmskT4z_oE6OvHe1Z', ["href", "https://ferrugemjs.github.io/home-page/"], "");

			_idom.text("ferrugemjs");

			_idom.elementClose("a");

			_idom.elementClose("div");
		};
		return _clazz_sub_BdkKox1iHLmkrAwLK9rxNm_tmp;
	}(_pomodoro_clock[__pomodoro_clock_tmp]);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
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
/* 20 */
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

var	fixUrls = __webpack_require__(24);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".fashion-clock {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 20%;\n  overflow: hidden;\n  padding: 15px;\n  box-sizing: border-box;\n  background: linear-gradient(to bottom, #6A82FB, #FC5C7D);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .fashion-clock > .hour-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: width .3s, height .3s;\n    height: 80%;\n    width: 80%;\n    background-color: rgba(255, 255, 255, 0.2);\n    border-radius: 50%;\n    box-shadow: 0 5px 8px 3px rgba(0, 0, 0, 0.1); }\n    .fashion-clock > .hour-box > .minute-box {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: width .3s, height .3s;\n      height: 60%;\n      width: 60%;\n      background-color: rgba(255, 255, 255, 0.4);\n      border-radius: 50%; }\n      .fashion-clock > .hour-box > .minute-box > .second-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 30%;\n        width: 30%;\n        background-color: rgba(255, 255, 255, 0.8);\n        border-radius: 50%; }\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".pomodoro-clock {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .pomodoro-clock > .product-name {\n    margin-top: 20px;\n    color: #efefef;\n    text-align: center;\n    text-shadow: 0 2px 2px #000;\n    font-family: sans-serif; }\n  .pomodoro-clock > .pomodoro-footer {\n    color: #efefef;\n    text-align: right;\n    text-shadow: 0 2px 2px #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    padding: 10px 10px 10px 0px;\n    box-sizing: border-box; }\n  .pomodoro-clock > .box-clock {\n    width: 80vw;\n    height: 80vw;\n    padding: 0;\n    padding-top: 20px;\n    margin: 0px auto; }\n  .pomodoro-clock > .box-control {\n    color: #fff;\n    width: 80%;\n    margin-left: 10%;\n    background-color: #929494;\n    border-radius: 5px;\n    margin-top: 260px;\n    z-index: 15;\n    position: absolute;\n    bottom: 40px; }\n    .pomodoro-clock > .box-control > .sub-box-control {\n      padding: 10px 40px 10px 40px; }\n      .pomodoro-clock > .box-control > .sub-box-control > label.display-minutes {\n        text-align: center;\n        font-size: 1.5rem;\n        font-family: verdana;\n        margin-bottom: 5px; }\n      .pomodoro-clock > .box-control > .sub-box-control > label.display-message > textarea {\n        width: 100%;\n        text-align: center;\n        font-size: 1.5rem;\n        font-family: verdana;\n        margin-bottom: 5px;\n        background-color: transparent;\n        border: none;\n        color: #fff; }\n      .pomodoro-clock > .box-control > .sub-box-control > input[type=\"range\"] {\n        width: 100%;\n        padding: 0px;\n        margin: 0px; }\n      .pomodoro-clock > .box-control > .sub-box-control > label {\n        display: block;\n        width: 100%; }\n        .pomodoro-clock > .box-control > .sub-box-control > label > input[type=\"color\"] {\n          width: 45px;\n          background-color: transparent;\n          border: none; }\n        .pomodoro-clock > .box-control > .sub-box-control > label > span {\n          vertical-align: top; }\n  .pomodoro-clock > .box-message {\n    color: #fff;\n    width: 80%;\n    margin-left: 10%;\n    background-color: #929494;\n    border-radius: 5px;\n    margin-top: 260px;\n    z-index: 15;\n    position: absolute;\n    bottom: 40px; }\n    .pomodoro-clock > .box-message > .sub-box-message {\n      padding: 10px 40px 10px 40px; }\n      .pomodoro-clock > .box-message > .sub-box-message > h2 {\n        text-align: center; }\n    .pomodoro-clock > .box-message.is-hangout {\n      -webkit-transition: opacity 3s ease-in-out;\n      -moz-transition: opacity 3s ease-in-out;\n      -ms-transition: opacity 3s ease-in-out;\n      -o-transition: opacity 3s ease-in-out;\n      transition: opacity 3s ease-in-out;\n      opacity: 0; }\n  .pomodoro-clock > .box-backdrop {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    background-color: rgba(250, 250, 250, 0.6);\n    z-index: 14; }\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/**
 * Push v1.0-beta
 * ==============
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Push=t()}}(function(){return function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return require(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};e[s][0].call(f.exports,function(t){var n=e[s][1][t];return o(n||t)},f,f.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={errors:{incompatible:"PushError: Push.js is incompatible with browser.",invalid_plugin:"PushError: plugin class missing from plugin manifest (invalid plugin). Please check the documentation.",invalid_title:"PushError: title of notification must be a string",permission_denied:"PushError: permission request declined",sw_notification_error:"PushError: could not show a ServiceWorker notification due to the following reason: ",sw_registration_error:"PushError: could not register the ServiceWorker due to the following reason: ",unknown_interface:"PushError: unable to create notification: unknown interface"}}},{}],2:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){i(this,t),this._win=e,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return o(t,[{key:"request",value:function(t,e){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(t,e){var n=this,i=this.get(),o=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n._win.Notification.permission;void 0===i&&n._win.webkitNotifications&&(i=n._win.webkitNotifications.checkPermission()),i===n.GRANTED||0===i?t&&t():e&&e()};i!==this.DEFAULT?o(i):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(o):this._win.Notification&&this._win.Notification.requestPermission?this._win.Notification.requestPermission().then(o).catch(function(){e&&e()}):t&&t()}},{key:"_requestAsPromise",value:function(){var t=this,e=this.get(),n=function(e){return e===t.GRANTED||0===e},i=e!==this.DEFAULT,o=this._win.Notification&&this._win.Notification.requestPermission,r=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(s,a){var u=function(t){return n(t)?s():a()};i?u(e):r?t._win.webkitNotifications.requestPermission(function(t){u(t)}):o?t._win.Notification.requestPermission().then(function(t){u(t)}).catch(a):s()})}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),t}();n.default=r},{}],3:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=i(t("./Messages")),a=i(t("./Permission")),u=i(t("./Util")),c=i(t("./agents/DesktopAgent")),f=i(t("./agents/MobileChromeAgent")),l=i(t("./agents/MobileFirefoxAgent")),h=i(t("./agents/MSAgent")),d=i(t("./agents/WebKitAgent")),p=function(){function t(e){o(this,t),this._currentId=0,this._notifications={},this._win=e,this.Permission=new a.default(e),this._agents={desktop:new c.default(e),chrome:new f.default(e),firefox:new l.default(e),ms:new h.default(e),webkit:new d.default(e)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(t){}}}return r(t,[{key:"_closeNotification",value:function(t){var e=!0,n=this._notifications[t];if(void 0!==n){if(e=this._removeNotification(t),this._agents.desktop.isSupported())this._agents.desktop.close(n);else if(this._agents.webkit.isSupported())this._agents.webkit.close(n);else{if(!this._agents.ms.isSupported())throw e=!1,new Error(s.default.errors.unknown_interface);this._agents.ms.close()}return e}return!1}},{key:"_addNotification",value:function(t){var e=this._currentId;return this._notifications[e]=t,this._currentId++,e}},{key:"_removeNotification",value:function(t){var e=!1;return this._notifications.hasOwnProperty(t)&&(delete this._notifications[t],e=!0),e}},{key:"_prepareNotification",value:function(t,e){var n=this,i=void 0;return i={get:function(){return n._notifications[t]},close:function(){n._closeNotification(t)}},e.timeout&&setTimeout(function(){i.close()},e.timeout),i}},{key:"_serviceWorkerCallback",value:function(t,e,n){var i=this,o=this._addNotification(t[t.length-1]);navigator.serviceWorker.addEventListener("message",function(t){var e=JSON.parse(t.data);"close"===e.action&&Number.isInteger(e.id)&&i._removeNotification(e.id)}),n(this._prepareNotification(o,e))}},{key:"_createCallback",value:function(t,e,n){var i=this,o=void 0,r=null;if(e=e||{},o=function(t){i._removeNotification(t),u.default.isFunction(e.onClose)&&e.onClose.call(i,r)},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(t,e)}catch(o){var s=this._currentId,a=this.config().serviceWorker,c=function(t){return i._serviceWorkerCallback(t,e,n)};this._agents.chrome.isSupported()&&this._agents.chrome.create(s,t,e,a,c)}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(t,e):this._agents.firefox.isSupported()?this._agents.firefox.create(t,e):this._agents.ms.isSupported()?r=this._agents.ms.create(t,e):(e.title=t,this.config().fallback(e));if(null!==r){var f=this._addNotification(r),l=this._prepareNotification(f,e);u.default.isFunction(e.onShow)&&r.addEventListener("show",e.onShow),u.default.isFunction(e.onError)&&r.addEventListener("error",e.onError),u.default.isFunction(e.onClick)&&r.addEventListener("click",e.onClick),r.addEventListener("close",function(){o(f)}),r.addEventListener("cancel",function(){o(f)}),n(l)}n(null)}},{key:"create",value:function(t,e){var n=this,i=void 0;if(!u.default.isString(t))throw new Error(s.default.errors.invalid_title);return i=this.Permission.has()?function(i,o){try{n._createCallback(t,e,i)}catch(t){o(t)}}:function(i,o){n.Permission.request().then(function(){n._createCallback(t,e,i)}).catch(function(){o(s.default.errors.permission_denied)})},new Promise(i)}},{key:"count",value:function(){var t=void 0,e=0;for(t in this._notifications)this._notifications.hasOwnProperty(t)&&e++;return e}},{key:"close",value:function(t){var e=void 0;for(e in this._notifications)if(this._notifications.hasOwnProperty(e)&&this._notifications[e].tag===t)return this._closeNotification(e)}},{key:"clear",value:function(){var t=void 0,e=!0;for(t in this._notifications)this._notifications.hasOwnProperty(t)&&(e=e&&this._closeNotification(t));return e}},{key:"supported",value:function(){var t=!1;for(var e in this._agents)this._agents.hasOwnProperty(e)&&(t=t||this._agents[e].isSupported());return t}},{key:"config",value:function(t){return(void 0!==t||null!==t&&u.default.isObject(t))&&u.default.objectMerge(this._configuration,t),this._configuration}},{key:"extend",value:function(t){var e,n={}.hasOwnProperty;if(!n.call(t,"plugin"))throw new Error(s.default.errors.invalid_plugin);n.call(t,"config")&&u.default.isObject(t.config)&&null!==t.config&&this.config(t.config),e=new(0,t.plugin)(this.config());for(var i in e)n.call(e,i)&&u.default.isFunction(e[i])&&(this[i]=e[i])}}]),t}();n.default=p},{"./Messages":1,"./Permission":2,"./Util":4,"./agents/DesktopAgent":6,"./agents/MSAgent":7,"./agents/MobileChromeAgent":8,"./agents/MobileFirefoxAgent":9,"./agents/WebKitAgent":10}],4:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(){i(this,t)}return r(t,null,[{key:"isUndefined",value:function(t){return void 0===t}},{key:"isString",value:function(t){return"string"==typeof t}},{key:"isFunction",value:function(t){return t&&"[object Function]"==={}.toString.call(t)}},{key:"isObject",value:function(t){return"object"==(void 0===t?"undefined":o(t))}},{key:"objectMerge",value:function(t,e){for(var n in e)t.hasOwnProperty(n)&&this.isObject(t[n])&&this.isObject(e[n])?this.objectMerge(t[n],e[n]):t[n]=e[n]}}]),t}();n.default=s},{}],5:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.default=function t(e){i(this,t),this._win=e}},{}],6:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=i(t("./AbstractAgent")),c=i(t("../Util")),f=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,u.default),a(e,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(t,e){return new this._win.Notification(t,{icon:c.default.isString(e.icon)||c.default.isUndefined(e.icon)?e.icon:e.icon.x32,body:e.body,tag:e.tag,requireInteraction:e.requireInteraction})}},{key:"close",value:function(t){t.close()}}]),e}();n.default=f},{"../Util":4,"./AbstractAgent":5}],7:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=i(t("./AbstractAgent")),c=i(t("../Util")),f=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,u.default),a(e,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(t,e){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(c.default.isString(e.icon)||c.default.isUndefined(e.icon)?e.icon:e.icon.x16,t),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),e}();n.default=f},{"../Util":4,"./AbstractAgent":5}],8:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=i(t("./AbstractAgent")),c=i(t("../Util")),f=i(t("../Messages")),l=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,u.default),a(e,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(t){return t.toString().match(/function[^{]+{([\s\S]*)}$/)[1]}},{key:"create",value:function(t,e,n,i,o){var r=this;this._win.navigator.serviceWorker.register(i),this._win.navigator.serviceWorker.ready.then(function(i){var s={id:t,link:n.link,origin:document.location.href,onClick:c.default.isFunction(n.onClick)?r.getFunctionBody(n.onClick):"",onClose:c.default.isFunction(n.onClose)?r.getFunctionBody(n.onClose):""};void 0!==n.data&&null!==n.data&&(s=Object.assign(s,n.data)),i.showNotification(e,{icon:n.icon,body:n.body,vibrate:n.vibrate,tag:n.tag,data:s,requireInteraction:n.requireInteraction,silent:n.silent}).then(function(){i.getNotifications().then(function(t){i.active.postMessage(""),o(t)})}).catch(function(t){throw new Error(f.default.errors.sw_notification_error+t.message)})}).catch(function(t){throw new Error(f.default.errors.sw_registration_error+t.message)})}},{key:"close",value:function(){}}]),e}();n.default=l},{"../Messages":1,"../Util":4,"./AbstractAgent":5}],9:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(t){return t&&t.__esModule?t:{default:t}}(t("./AbstractAgent")),u=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,a.default),s(e,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(t,e){var n=this._win.navigator.mozNotification.createNotification(t,e.body,e.icon);return n.show(),n}}]),e}();n.default=u},{"./AbstractAgent":5}],10:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(t){return t&&t.__esModule?t:{default:t}}(t("./AbstractAgent")),u=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,a.default),s(e,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(t,e){var n=this._win.webkitNotifications.createNotification(e.icon,t,e.body);return n.show(),n}},{key:"close",value:function(t){t.cancel()}}]),e}();n.default=u},{"./AbstractAgent":5}],11:[function(t,e,n){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(t("./classes/Push"));e.exports=new i.default("undefined"!=typeof window?window:void 0)},{"./classes/Push":3}]},{},[11])(11)});
//# sourceMappingURL=push.min.js.map

/***/ }),
/* 24 */
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