/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = new _controller.default();
controller.onBindEvent();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.countWords = $("textarea");
    this.addInput = $(".word-input");
    this.numberWord = 0;
    this.sumSelect = "";
  }

  _createClass(Controller, [{
    key: "onBindEvent",
    value: function onBindEvent() {
      this.countWords.keyup(this.onUpdateCount);
      this.addInput.change(this.onChangeInput);
    }
  }, {
    key: "onUpdateCount",
    value: function onUpdateCount() {
      var _this = this;

      this.textNumber = $(".text-number .number");
      this.previewMessage = $(".preview-message");
      this.countWords = $("textarea");
      this.numberWord = $(this).val().length;

      if (this.numberWord <= 2000) {
        this.textNumber.text(this.numberWord); //add number words

        this.previewMessage.html("<p>".concat($(this).val(), "</p>")); //preview string on div preview

        var text = this.countWords.val();
        var match = /\r|\n/.exec(text);

        if (match) {
          // check new line when compose message
          var arrayText = this.countWords.val().split("\n");
          $(".preview-message p:first").remove();
          arrayText.forEach(function (value, index) {
            _this.previewMessage.append("<p>".concat(value, "</p>"));
          });
        }
      }
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput() {
      var _this2 = this;

      this.sumSelect = $(".word-input").toArray();
      this.countWords = $("textarea");
      this.previewMessage = $(".preview-message");
      this.textNumber = $(".text-number .number");
      this.enough = false;
      this.val = "";
      $.each(this.sumSelect, function (index, value) {
        if ($(value).val() !== '') {
          _this2.enough = true;
          _this2.val = $(value).val();
        }
      });

      if (this.enough) {
        var start = this.countWords.prop("selectionStart");
        var end = this.countWords.prop("selectionEnd");
        var text = this.countWords.val();
        var before = text.substring(0, start);
        var after = text.substring(end, text.length);
        this.countWords.val(before + this.val + after);
        this.previewMessage.html("<p>".concat(before + this.val + after, "</p>"));
        var match = /\r|\n/.exec(text);

        if (match) {
          // check new line when compose message
          var arrayText = this.countWords.val().split("\n");
          $(".preview-message p:first").remove();
          arrayText.forEach(function (value, index) {
            _this2.previewMessage.append("<p>".concat(value, "</p>"));
          });
        }

        this.countWords[0].selectionStart = this.countWords[0].selectionEnd = start + this.val.length;
        this.countWords.focus();

        if (before.length + this.val.length + after.length <= 2000) {
          this.textNumber.text(before.length + this.val.length + after.length);
        }
      }
    }
  }]);

  return Controller;
}();

var _default = Controller;
exports.default = _default;

/***/ })
/******/ ]);