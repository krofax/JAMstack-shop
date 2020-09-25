webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products.js */ "./components/Products.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\blessing\\Desktop\\projects\\jamstackApp\\frontend\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Index = function Index(_ref) {
  var products = _ref.products;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, __jsx(_components_Products_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    products: products,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }));
};

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var API_URL, uri, res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          API_URL = process.env.REACT_APP_URL || "http://localhost:1337";
          uri = "".concat(API_URL, "/shops");

          try {} catch (error) {}

          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(uri, {});

        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();

        case 8:
          data = _context.sent;
          // const productData = data.items
          console.log("React app url-", process.env.REACT_APP_URL);
          return _context.abrupt("return", {
            products: data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9kdWN0cyIsImdldEluaXRpYWxQcm9wcyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX1VSTCIsInVyaSIsImVycm9yIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxTQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQVUsWUFBUSxFQUFFQSxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FEWTtBQUFBLENBQWQ7O0tBQU1ELEs7QUFPTkEsS0FBSyxDQUFDRSxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLGlCQURnQixHQUNOQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBWixJQUE2Qix1QkFEdkI7QUFFaEJDLGFBRmdCLGFBRVBKLE9BRk87O0FBR3RCLGNBQUksQ0FFSCxDQUZELENBRUUsT0FBT0ssS0FBUCxFQUFjLENBRWY7O0FBUHFCO0FBQUEsaUJBUUpDLHlEQUFLLENBQUNGLEdBQUQsRUFBTSxFQUFOLENBUkQ7O0FBQUE7QUFRaEJHLGFBUmdCO0FBQUE7QUFBQSxpQkFVSEEsR0FBRyxDQUFDQyxJQUFKLEVBVkc7O0FBQUE7QUFVaEJDLGNBVmdCO0FBV3RCO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQTFDO0FBWnNCLDJDQWFkO0FBQ0xMLG9CQUFRLEVBQUVXO0FBREwsV0FiYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQWlCZVosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2E0YTFlNGQyMWVkNDQxYmUwNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5jb25zdCBJbmRleCA9ICh7cHJvZHVjdHN9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxQcm9kdWN0cyBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbilcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xyXG4gIGNvbnN0IHVyaSA9IGAke0FQSV9VUkx9L3Nob3BzYDtcclxuICB0cnkge1xyXG4gICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIFxyXG4gIH1cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmksIHtcclxuICB9KVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy8gY29uc3QgcHJvZHVjdERhdGEgPSBkYXRhLml0ZW1zXHJcbiAgY29uc29sZS5sb2coXCJSZWFjdCBhcHAgdXJsLVwiLCBwcm9jZXNzLmVudi5SRUFDVF9BUFBfVVJMKTtcclxuICAgcmV0dXJuIHtcclxuICAgICBwcm9kdWN0czogZGF0YVxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==