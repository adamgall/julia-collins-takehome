/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contractData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contractData */ \"../contractData.js\");\n/* harmony import */ var _contractData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contractData__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/juliacollins/Desktop/dec/client/components/Input.js\";\n\n\n\n\n\nconst Input = () => {\n  const {\n    0: wish,\n    1: setWish\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: message,\n    1: setMessage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  const onSubmit = async e => {\n    console.log('here');\n    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())('https://rinkeby.infura.io/v3/aeb481bbd64a4f59a4e3a2d3d6f71c73');\n    const contractInstance = new web3.eth.Contract(_contractData__WEBPACK_IMPORTED_MODULE_4__.abi, _contractData__WEBPACK_IMPORTED_MODULE_4__.address);\n    console.log(contractInstance);\n\n    try {\n      await contractInstance.methods.hashWish(wish).send({\n        from: accounts[0]\n      });\n      console.log('hitting');\n    } catch (error) {\n      setMessage('Error detected');\n    }\n\n    setWish('');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"input-form\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {\n      className: \"mb-3\",\n      id: \"form\",\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        onClick: onSubmit,\n        variant: \"outline-secondary\",\n        id: \"button-addon1\",\n        children: \"Button\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n        \"aria-label\": \"form-button\",\n        \"aria-describedby\": \"basic-addon1\",\n        value: wish,\n        onChange: e => setWish(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0lucHV0LmpzPzRmYjUiXSwibmFtZXMiOlsiSW5wdXQiLCJ3aXNoIiwic2V0V2lzaCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJvblN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwid2ViMyIsIldlYjMiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImhhc2hXaXNoIiwic2VuZCIsImZyb20iLCJhY2NvdW50cyIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUVsQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQXRDOztBQUdGLFFBQU1HLFFBQVEsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxVQUFNQyxJQUFJLEdBQUcsSUFBSUMsNkNBQUosQ0FBUywrREFBVCxDQUFiO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBSUYsSUFBSSxDQUFDRyxHQUFMLENBQVNDLFFBQWIsQ0FBc0JDLDhDQUF0QixFQUEyQkMsa0RBQTNCLENBQXpCO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxnQkFBWjs7QUFDQyxRQUFJO0FBQ0YsWUFBTUEsZ0JBQWdCLENBQUNLLE9BQWpCLENBQXlCQyxRQUF6QixDQUFrQ2pCLElBQWxDLEVBQXdDa0IsSUFBeEMsQ0FBNkM7QUFDakRDLFlBQUksRUFBRUMsUUFBUSxDQUFDLENBQUQ7QUFEbUMsT0FBN0MsQ0FBTjtBQUdBYixhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsS0FMRCxDQUtFLE9BQU9hLEtBQVAsRUFBYztBQUNkakIsZ0JBQVUsQ0FBQyxnQkFBRCxDQUFWO0FBQ0Q7O0FBRUNILFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQWZIOztBQWtCRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0EsOERBQUMsdURBQUQ7QUFBWSxlQUFTLEVBQUMsTUFBdEI7QUFBNkIsUUFBRSxFQUFDLE1BQWhDO0FBQXVDLGNBQVEsRUFBRUksUUFBakQ7QUFBQSw4QkFDQSw4REFBQyxtREFBRDtBQUFRLGVBQU8sRUFBRUEsUUFBakI7QUFBMkIsZUFBTyxFQUFDLG1CQUFuQztBQUF1RCxVQUFFLEVBQUMsZUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFJQSw4REFBQyx3REFBRDtBQUNFLHNCQUFXLGFBRGI7QUFFRSw0QkFBaUIsY0FGbkI7QUFHRSxhQUFLLEVBQUVMLElBSFQ7QUFJRSxnQkFBUSxFQUFFTSxDQUFDLElBQUlMLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0F2Q0Q7O0FBeUNBLCtEQUFleEIsS0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5wdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQge2FiaSwgYWRkcmVzc30gZnJvbSAnLi4vLi4vY29udHJhY3REYXRhJztcblxuY29uc3QgSW5wdXQgPSAoKSA9PiB7XG4gXG4gIGNvbnN0IFt3aXNoLCBzZXRXaXNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG5cbmNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlcmUnKVxuIGNvbnN0IHdlYjMgPSBuZXcgV2ViMygnaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9hZWI0ODFiYmQ2NGE0ZjU5YTRlM2EyZDNkNmY3MWM3MycpO1xuIGNvbnN0IGNvbnRyYWN0SW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBhZGRyZXNzKTtcbiBjb25zb2xlLmxvZyhjb250cmFjdEluc3RhbmNlKVxuICB0cnkge1xuICAgIGF3YWl0IGNvbnRyYWN0SW5zdGFuY2UubWV0aG9kcy5oYXNoV2lzaCh3aXNoKS5zZW5kKHtcbiAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnaGl0dGluZycpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgc2V0TWVzc2FnZSgnRXJyb3IgZGV0ZWN0ZWQnKVxuICB9XG4gICBcbiAgICBzZXRXaXNoKCcnKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZm9ybSc+XG4gICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGlkPSdmb3JtJyBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgIDxCdXR0b24gb25DbGljaz17b25TdWJtaXR9IHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIGlkPVwiYnV0dG9uLWFkZG9uMVwiPlxuICAgICAgQnV0dG9uXG4gICAgPC9CdXR0b24+XG4gICAgPEZvcm1Db250cm9sXG4gICAgICBhcmlhLWxhYmVsPVwiZm9ybS1idXR0b25cIlxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICB2YWx1ZT17d2lzaH1cbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFdpc2goZS50YXJnZXQudmFsdWUpfVxuICAgIC8+XG4gIDwvSW5wdXRHcm91cD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ }),

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/juliacollins/Desktop/dec/client/components/Intro.js\";\n\n\nconst Intro = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"intro\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"The Hashing Well\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n      children: \"Bringing you the first digital wishing well.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n      children: \"Enter in what you'd like to accomplish, your farthest dreams, and deepest desires.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n      children: \"Hash away your wishes, we'll keep them secret and protected, and let the bitverse do the rest.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0ludHJvLmpzPzk5YzgiXSwibmFtZXMiOlsiSW50cm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhBLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztBQVdBLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnRyby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgSW50cm8gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ludHJvJz5cbiAgICA8aDE+VGhlIEhhc2hpbmcgV2VsbDwvaDE+XG4gICAgPGg1PkJyaW5naW5nIHlvdSB0aGUgZmlyc3QgZGlnaXRhbCB3aXNoaW5nIHdlbGwuPC9oNT5cbiAgICA8aDU+RW50ZXIgaW4gd2hhdCB5b3UnZCBsaWtlIHRvIGFjY29tcGxpc2gsIHlvdXIgZmFydGhlc3QgZHJlYW1zLCBhbmQgZGVlcGVzdCBkZXNpcmVzLjwvaDU+XG4gICAgPGg1Pkhhc2ggYXdheSB5b3VyIHdpc2hlcywgd2UnbGwga2VlcCB0aGVtIHNlY3JldCBhbmQgcHJvdGVjdGVkLCBhbmQgbGV0IHRoZSBiaXR2ZXJzZSBkbyB0aGUgcmVzdC48L2g1PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Intro.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Intro */ \"./components/Intro.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n\nvar _jsxFileName = \"/Users/juliacollins/Desktop/dec/client/pages/index.js\";\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, undefined), \"Hello!\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Intro__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQ0U7QUFBQSw0QkFDQSw4REFBQyxrREFBRDtBQUFBLDZCQUNBO0FBQ0EsV0FBRyxFQUFDLFlBREo7QUFFQSxZQUFJLEVBQUMseUVBRkw7QUFHQSxpQkFBUyxFQUFDLHlFQUhWO0FBSUEsbUJBQVcsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLHlCQVVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FoQkQ7O0FBa0JBLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL0ludHJvJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0JztcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICA8bGlua1xuICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIlxuICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgLz5cbiAgICA8L0hlYWQ+XG4gICAgICBIZWxsbyEgICAgXG4gICAgICA8SW50cm8vPlxuICAgICAgPElucHV0Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "../contractData.js":
/*!**************************!*\
  !*** ../contractData.js ***!
  \**************************/
/***/ (function(module) {

eval("module.exports = {\n  abi: [\n    {\n      \"anonymous\": false,\n      \"inputs\": [],\n      \"name\": \"DrainWishes\",\n      \"type\": \"event\"\n    },\n    {\n      \"anonymous\": false,\n      \"inputs\": [\n        {\n          \"indexed\": false,\n          \"internalType\": \"bytes32\",\n          \"name\": \"wish\",\n          \"type\": \"bytes32\"\n        }\n      ],\n      \"name\": \"WishMade\",\n      \"type\": \"event\"\n    },\n    {\n      \"constant\": false,\n      \"inputs\": [\n        {\n          \"internalType\": \"bytes32\",\n          \"name\": \"_wish\",\n          \"type\": \"bytes32\"\n        }\n      ],\n      \"name\": \"hashWish\",\n      \"outputs\": [],\n      \"payable\": false,\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    },\n    {\n      \"constant\": false,\n      \"inputs\": [],\n      \"name\": \"drainWishes\",\n      \"outputs\": [],\n      \"payable\": false,\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    }\n  ],\n  address: '0x5b5d0F765Dd32A56969596B3EfEf06150ebeCDc9'\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi4vY29udHJhY3REYXRhLmpzPzU2ODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uL2NvbnRyYWN0RGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBhYmk6IFtcbiAgICB7XG4gICAgICBcImFub255bW91c1wiOiBmYWxzZSxcbiAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgXCJuYW1lXCI6IFwiRHJhaW5XaXNoZXNcIixcbiAgICAgIFwidHlwZVwiOiBcImV2ZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiYW5vbnltb3VzXCI6IGZhbHNlLFxuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbmRleGVkXCI6IGZhbHNlLFxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYnl0ZXMzMlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIndpc2hcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJieXRlczMyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIldpc2hNYWRlXCIsXG4gICAgICBcInR5cGVcIjogXCJldmVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImNvbnN0YW50XCI6IGZhbHNlLFxuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJieXRlczMyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiX3dpc2hcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJieXRlczMyXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcImhhc2hXaXNoXCIsXG4gICAgICBcIm91dHB1dHNcIjogW10sXG4gICAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiY29uc3RhbnRcIjogZmFsc2UsXG4gICAgICBcImlucHV0c1wiOiBbXSxcbiAgICAgIFwibmFtZVwiOiBcImRyYWluV2lzaGVzXCIsXG4gICAgICBcIm91dHB1dHNcIjogW10sXG4gICAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICB9XG4gIF0sXG4gIGFkZHJlc3M6ICcweDViNWQwRjc2NURkMzJBNTY5Njk1OTZCM0VmRWYwNjE1MGViZUNEYzknXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../contractData.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();