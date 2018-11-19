webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/counter/container.ts":
/*!*****************************************!*\
  !*** ./components/counter/container.ts ***!
  \*****************************************/
/*! exports provided: AppContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./components/counter/index.tsx");
/* harmony import */ var _store_actions_actionCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/actionCounter */ "./store/actions/actionCounter.ts");




function mapStateToProps(state) {
  var count = state.count;
  return {
    count: count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function increment() {
      dispatch(Object(_store_actions_actionCounter__WEBPACK_IMPORTED_MODULE_2__["incrementCount"])());
    },
    decrement: function decrement() {
      dispatch(Object(_store_actions_actionCounter__WEBPACK_IMPORTED_MODULE_2__["decrementCount"])());
    },
    reset: function reset() {
      dispatch(Object(_store_actions_actionCounter__WEBPACK_IMPORTED_MODULE_2__["resetCount"])());
    }
  };
} // tslint:disable-next-line:variable-name


var AppContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ })

})
//# sourceMappingURL=index.js.640c288efd063c943936.hot-update.js.map