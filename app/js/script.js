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


var _message = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Import module to use
*/
var message = new _message.default();

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

/*
* Create module Message that using for message.html
*/
var Message =
/*#__PURE__*/
function () {
  /* Create constructor */
  function Message() {
    _classCallCheck(this, Message);

    /* Declare variable */
    this.numberWord = 0;
    this.sumSelect = "";
    window.textNumber = $(".text-number .number");
    window.previewMessage = $(".preview-message");
    window.countWords = $("textarea");
    window.addInput = $(".word-input");
    window.textNumber = $(".text-number .number");
    /* Run function onBindEvent */

    this.onBindEvent();
  }

  _createClass(Message, [{
    key: "onBindEvent",
    value: function onBindEvent() {
      window.countWords.on("keyup", this.onUpdateCount); // Keyup event which using for count words in string

      window.addInput.on("change", this.onChangeInput); // onChange event which using for select word input option
    }
  }, {
    key: "onUpdateCount",
    value: function onUpdateCount() {
      this.numberWord = $(this).val().length;

      if (this.numberWord <= 2000) {
        window.textNumber.text(this.numberWord); // Add number words

        window.previewMessage.html("<p>".concat($(this).val(), "</p>")); // Preview string on div preview

        Message.onAddMessageWithNewline();
      }
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput() {
      var _this = this;

      this.sumSelect = $(".word-input").toArray();
      this.enough = false;
      this.val = "";
      $.each(this.sumSelect, function (index, value) {
        if ($(value).val() !== '') {
          _this.enough = true;
          _this.val = $(value).val();
        }
      });

      if (this.enough) {
        var start = window.countWords.prop("selectionStart");
        var end = window.countWords.prop("selectionEnd");
        var text = window.countWords.val();
        var before = text.substring(0, start);
        var after = text.substring(end, text.length);
        window.countWords.val(before + this.val + after);
        window.previewMessage.html("<p>".concat(before + this.val + after, "</p>"));
        Message.onAddMessageWithNewline();
        window.countWords[0].selectionStart = window.countWords[0].selectionEnd = start + this.val.length;
        window.countWords.focus();

        if (before.length + this.val.length + after.length <= 2000) {
          window.textNumber.text(before.length + this.val.length + after.length);
        }
      }
    }
  }], [{
    key: "onAddMessageWithNewline",
    value: function onAddMessageWithNewline() {
      var text = window.countWords.val();
      var match = /\r|\n/.exec(text);

      if (match) {
        // Check if exist new line when compose message
        var arrayText = window.countWords.val().split("\n");
        $(".preview-message p:first").remove();
        arrayText.forEach(function (value, index) {
          window.previewMessage.append("<p>".concat(value, "</p>"));
        });
      }
    }
  }]);

  return Message;
}();
/*
* Export module Message that using for message.html
*/


var _default = Message;
exports.default = _default;

/***/ })
/******/ ]);