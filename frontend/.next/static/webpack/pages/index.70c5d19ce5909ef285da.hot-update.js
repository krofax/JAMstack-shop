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
          _context.prev = 2;
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

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.log(object);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[2, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9kdWN0cyIsImdldEluaXRpYWxQcm9wcyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX1VSTCIsInVyaSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsU0FDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFVLFlBQVEsRUFBRUEsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRFk7QUFBQSxDQUFkOztLQUFNRCxLO0FBT05BLEtBQUssQ0FBQ0UsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyxpQkFEZ0IsR0FDTkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkIsdUJBRHZCO0FBRWhCQyxhQUZnQixhQUVQSixPQUZPO0FBQUE7QUFBQTtBQUFBLGlCQUlGSyx5REFBSyxDQUFDRCxHQUFELEVBQU0sRUFBTixDQUpIOztBQUFBO0FBSWRFLGFBSmM7QUFBQTtBQUFBLGlCQUtEQSxHQUFHLENBQUNDLElBQUosRUFMQzs7QUFBQTtBQUtkQyxjQUxjO0FBTXBCO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlQsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQTFDO0FBUG9CLDJDQVFiO0FBQ0xMLG9CQUFRLEVBQUVVO0FBREwsV0FSYTs7QUFBQTtBQUFBO0FBQUE7QUFZcEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBWjs7QUFab0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFnQmVkLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwYzVkMTljZTU5MDllZjI4NWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuY29uc3QgSW5kZXggPSAoe3Byb2R1Y3RzfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8UHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4pXHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcclxuICBjb25zdCB1cmkgPSBgJHtBUElfVVJMfS9zaG9wc2A7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVyaSwge30pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyBjb25zdCBwcm9kdWN0RGF0YSA9IGRhdGEuaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKFwiUmVhY3QgYXBwIHVybC1cIiwgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1VSTCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0czogZGF0YSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKG9iamVjdClcclxuICB9XHJcbiAgXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==