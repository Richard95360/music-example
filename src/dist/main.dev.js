"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _validation = _interopRequireDefault(require("./includes/validation"));

var _firebase = require("./includes/firebase");

var _icon = _interopRequireDefault(require("./directives/icon"));

require("./assets/tailwind.css");

require("./assets/main.css");

var _i18n = _interopRequireDefault(require("./includes/i18n"));

require("./registerServiceWorker");

var _globals = _interopRequireDefault(require("./includes/_globals"));

var _progressBar = _interopRequireDefault(require("./includes/progress-bar"));

require("nprogress/nprogress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _progressBar["default"])(_router["default"]);
var app;

_firebase.auth.onAuthStateChanged(function () {
  if (!app) {
    app = (0, _vue.createApp)(_App["default"]).use(_i18n["default"]);
    app.use(_store["default"]);
    app.use(_router["default"]);
    app.use(_validation["default"]);
    app.use(_globals["default"]);
    app.directive('icon', _icon["default"]);
    app.mount('#app');
  }
});