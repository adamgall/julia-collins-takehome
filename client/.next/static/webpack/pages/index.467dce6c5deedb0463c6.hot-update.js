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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _server_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../server/web3.js */ \"../server/web3.js\");\n/* harmony import */ var _contractData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contractData */ \"../contractData.js\");\n/* harmony import */ var _contractData__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_contractData__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/juliacollins/Desktop/dec/client/components/Input.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Input = function Input() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      wish = _useState[0],\n      setWish = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var contractInstance;\n      return _Users_juliacollins_Desktop_dec_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              contractInstance = new _server_web3_js__WEBPACK_IMPORTED_MODULE_5__.default.eth.Contract(_contractData__WEBPACK_IMPORTED_MODULE_6__.abi, _contractData__WEBPACK_IMPORTED_MODULE_6__.address);\n              _context.prev = 2;\n              _context.next = 5;\n              return contractInstance.methods.hashWish(wish).send({\n                from: accounts[0]\n              });\n\n            case 5:\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](2);\n              setMessage('Error detected');\n\n            case 10:\n              setWish('');\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 7]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"input-form\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.InputGroup, {\n      className: \"mb-3\",\n      id: \"form\",\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n        onClick: onSubmit,\n        variant: \"outline-secondary\",\n        id: \"button-addon1\",\n        children: \"Button\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n        \"aria-label\": \"form-button\",\n        \"aria-describedby\": \"basic-addon1\",\n        value: wish,\n        onChange: function onChange(e) {\n          return setWish(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Input, \"hKN59c2Gnz4pFe8aNIsTeO2gdRc=\");\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0IiwidXNlU3RhdGUiLCJ3aXNoIiwic2V0V2lzaCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250cmFjdEluc3RhbmNlIiwid2ViMyIsImFiaSIsImFkZHJlc3MiLCJtZXRob2RzIiwiaGFzaFdpc2giLCJzZW5kIiwiZnJvbSIsImFjY291bnRzIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRU1DLCtDQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEsbUJBR1lGLCtDQUFRLENBQUMsRUFBRCxDQUhwQjtBQUFBLE1BR1hHLE9BSFc7QUFBQSxNQUdGQyxVQUhFOztBQU1wQixNQUFNQyxRQUFRO0FBQUEsK1JBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNNQyw4QkFGUyxHQUVVLElBQUlDLGlFQUFKLENBQXNCQyw4Q0FBdEIsRUFBMkJDLGtEQUEzQixDQUZWO0FBQUE7QUFBQTtBQUFBLHFCQUtQSCxnQkFBZ0IsQ0FBQ0ksT0FBakIsQ0FBeUJDLFFBQXpCLENBQWtDWixJQUFsQyxFQUF3Q2EsSUFBeEMsQ0FBNkM7QUFDakRDLG9CQUFJLEVBQUVDLFFBQVEsQ0FBQyxDQUFEO0FBRG1DLGVBQTdDLENBTE87O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNiWix3QkFBVSxDQUFDLGdCQUFELENBQVY7O0FBVGE7QUFZYkYscUJBQU8sQ0FBQyxFQUFELENBQVA7O0FBWmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkcsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWdCRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0EsOERBQUMsdURBQUQ7QUFBWSxlQUFTLEVBQUMsTUFBdEI7QUFBNkIsUUFBRSxFQUFDLE1BQWhDO0FBQXVDLGNBQVEsRUFBRUEsUUFBakQ7QUFBQSw4QkFDQSw4REFBQyxtREFBRDtBQUFRLGVBQU8sRUFBRUEsUUFBakI7QUFBMkIsZUFBTyxFQUFDLG1CQUFuQztBQUF1RCxVQUFFLEVBQUMsZUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlBLDhEQUFDLHdEQUFEO0FBQ0Usc0JBQVcsYUFEYjtBQUVFLDRCQUFpQixjQUZuQjtBQUdFLGFBQUssRUFBRUosSUFIVDtBQUlFLGdCQUFRLEVBQUUsa0JBQUFLLENBQUM7QUFBQSxpQkFBSUosT0FBTyxDQUFDSSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FyQ0Q7O0dBQU1uQixLOztLQUFBQSxLO0FBdUNOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnB1dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL3NlcnZlci93ZWIzLmpzJztcbmltcG9ydCB7YWJpLCBhZGRyZXNzfSBmcm9tICcuLi8uLi9jb250cmFjdERhdGEnO1xuXG5jb25zdCBJbnB1dCA9ICgpID0+IHtcbiBcbiAgY29uc3QgW3dpc2gsIHNldFdpc2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGNvbnRyYWN0SW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBhZGRyZXNzKTtcblxuICB0cnkge1xuICAgIGF3YWl0IGNvbnRyYWN0SW5zdGFuY2UubWV0aG9kcy5oYXNoV2lzaCh3aXNoKS5zZW5kKHtcbiAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzZXRNZXNzYWdlKCdFcnJvciBkZXRlY3RlZCcpXG4gIH1cbiAgIFxuICAgIHNldFdpc2goJycpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1mb3JtJz5cbiAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgaWQ9J2Zvcm0nIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgaWQ9XCJidXR0b24tYWRkb24xXCI+XG4gICAgICBCdXR0b25cbiAgICA8L0J1dHRvbj5cbiAgICA8Rm9ybUNvbnRyb2xcbiAgICAgIGFyaWEtbGFiZWw9XCJmb3JtLWJ1dHRvblwiXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgIHZhbHVlPXt3aXNofVxuICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0V2lzaChlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgPC9JbnB1dEdyb3VwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

});