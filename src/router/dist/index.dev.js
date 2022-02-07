"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/views/Home.vue'));
  });
};

var Manage = function Manage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/views/Manage.vue'));
  });
};

var Song = function Song() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/views/Song.vue'));
  });
};

var About = function About() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/views/About.vue'));
  });
};

var routes = [{
  name: 'home',
  path: '/',
  // example.com/
  component: Home
}, {
  name: 'about',
  path: '/about',
  component: About
}, {
  name: 'manage',
  // alias: '/manage',
  path: '/manage-music',
  meta: {
    requiresAuth: true
  },
  component: Manage,
  beforeEnter: function beforeEnter(to, from, next) {
    console.log('Manage Route Guard');
    next();
  }
}, {
  path: '/manage',
  redirect: {
    name: 'manage'
  }
}, {
  name: 'song',
  path: '/song/:id',
  component: Song
}, {
  path: '/:catchAll(.*)*',
  redirect: {
    name: 'home'
  }
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes,
  linkExactActiveClass: 'text-yellow-500'
});
router.beforeEach(function (to, from, next) {
  // console.log(to.matched);
  if (!to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    next();
    return;
  }

  if (_store["default"].state.auth.userLoggedIn) {
    next();
  } else {
    next({
      name: 'home'
    });
  }
});
var _default = router;
exports["default"] = _default;