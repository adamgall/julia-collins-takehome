/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contractData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contractData */ \"../contractData.js\");\n/* harmony import */ var _contractData__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contractData__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/juliacollins/Desktop/dec/client/components/Input.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Input = function Input() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      wish = _useState[0],\n      setWish = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var web3, contractInstance;\n      return _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(new (web3__WEBPACK_IMPORTED_MODULE_4___default().providers.HttpProvider)(\"https://rinkeby.infura.io\"));\n              contractInstance = web3.eth.Contract(_contractData__WEBPACK_IMPORTED_MODULE_5__.abi, _contractData__WEBPACK_IMPORTED_MODULE_5__.address);\n              _context.prev = 3;\n              _context.next = 6;\n              return contractInstance.methods.hashWish(wish).send({\n                from: accounts[0]\n              });\n\n            case 6:\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](3);\n              setMessage('Error detected');\n\n            case 11:\n              setWish('');\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 8]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"input-form\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.InputGroup, {\n      className: \"mb-3\",\n      id: \"form\",\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: onSubmit,\n        variant: \"outline-secondary\",\n        id: \"button-addon1\",\n        children: \"Button\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.FormControl, {\n        \"aria-label\": \"form-button\",\n        \"aria-describedby\": \"basic-addon1\",\n        value: wish,\n        onChange: function onChange(e) {\n          return setWish(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Input, \"hKN59c2Gnz4pFe8aNIsTeO2gdRc=\");\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0IiwidXNlU3RhdGUiLCJ3aXNoIiwic2V0V2lzaCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiV2ViMyIsImNvbnRyYWN0SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJtZXRob2RzIiwiaGFzaFdpc2giLCJzZW5kIiwiZnJvbSIsImFjY291bnRzIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRU1DLCtDQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEsbUJBR1lGLCtDQUFRLENBQUMsRUFBRCxDQUhwQjtBQUFBLE1BR1hHLE9BSFc7QUFBQSxNQUdGQyxVQUhFOztBQU1wQixNQUFNQyxRQUFRO0FBQUEsK1JBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNJQyxrQkFGVyxHQUVKLElBQUlDLDZDQUFKLENBQVMsSUFBSUEsb0VBQUosQ0FBZ0MsMkJBQWhDLENBQVQsQ0FGSTtBQUdUQyw4QkFIUyxHQUdVRixJQUFJLENBQUNHLEdBQUwsQ0FBU0MsUUFBVCxDQUFrQkMsOENBQWxCLEVBQXVCQyxrREFBdkIsQ0FIVjtBQUFBO0FBQUE7QUFBQSxxQkFNUEosZ0JBQWdCLENBQUNLLE9BQWpCLENBQXlCQyxRQUF6QixDQUFrQ2YsSUFBbEMsRUFBd0NnQixJQUF4QyxDQUE2QztBQUNqREMsb0JBQUksRUFBRUMsUUFBUSxDQUFDLENBQUQ7QUFEbUMsZUFBN0MsQ0FOTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVWJmLHdCQUFVLENBQUMsZ0JBQUQsQ0FBVjs7QUFWYTtBQWFiRixxQkFBTyxDQUFDLEVBQUQsQ0FBUDs7QUFiYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBaUJFLHNCQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDQSw4REFBQyx1REFBRDtBQUFZLGVBQVMsRUFBQyxNQUF0QjtBQUE2QixRQUFFLEVBQUMsTUFBaEM7QUFBdUMsY0FBUSxFQUFFQSxRQUFqRDtBQUFBLDhCQUNBLDhEQUFDLG1EQUFEO0FBQVEsZUFBTyxFQUFFQSxRQUFqQjtBQUEyQixlQUFPLEVBQUMsbUJBQW5DO0FBQXVELFVBQUUsRUFBQyxlQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBSUEsOERBQUMsd0RBQUQ7QUFDRSxzQkFBVyxhQURiO0FBRUUsNEJBQWlCLGNBRm5CO0FBR0UsYUFBSyxFQUFFSixJQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQUssQ0FBQztBQUFBLGlCQUFJSixPQUFPLENBQUNJLENBQUMsQ0FBQ2MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXRDRDs7R0FBTXRCLEs7O0tBQUFBLEs7QUF3Q04sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHthYmksIGFkZHJlc3N9IGZyb20gJy4uLy4uL2NvbnRyYWN0RGF0YSc7XG5cbmNvbnN0IElucHV0ID0gKCkgPT4ge1xuIFxuICBjb25zdCBbd2lzaCwgc2V0V2lzaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuXG5jb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHdlYjMgPSBuZXcgV2ViMyhuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pb1wiKSk7XG4gIGNvbnN0IGNvbnRyYWN0SW5zdGFuY2UgPSB3ZWIzLmV0aC5Db250cmFjdChhYmksIGFkZHJlc3MpO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgY29udHJhY3RJbnN0YW5jZS5tZXRob2RzLmhhc2hXaXNoKHdpc2gpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHNldE1lc3NhZ2UoJ0Vycm9yIGRldGVjdGVkJylcbiAgfVxuICAgXG4gICAgc2V0V2lzaCgnJyk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZvcm0nPlxuICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBpZD0nZm9ybScgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiBpZD1cImJ1dHRvbi1hZGRvbjFcIj5cbiAgICAgIEJ1dHRvblxuICAgIDwvQnV0dG9uPlxuICAgIDxGb3JtQ29udHJvbFxuICAgICAgYXJpYS1sYWJlbD1cImZvcm0tYnV0dG9uXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgdmFsdWU9e3dpc2h9XG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRXaXNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICA8L0lucHV0R3JvdXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

});