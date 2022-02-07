"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = require("lodash");

var requireModule = require.context('.', false, /\.js$/);

var modules = {};
requireModule.keys().forEach(function (fileName) {
  if (fileName === './index.js' || fileName === './dummy.js') {
    return;
  }

  var moduleConfig = requireModule(fileName);
  var moduleName = (0, _lodash.camelCase)(fileName.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = moduleConfig["default"] || moduleConfig;
});
var _default = modules;
exports["default"] = _default;