"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/group/[address]",{

/***/ "./components/CreateProposal.jsx":
/*!***************************************!*\
  !*** ./components/CreateProposal.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_CreateProposal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/CreateProposal.module.css */ \"./styles/CreateProposal.module.css\");\n/* harmony import */ var _styles_CreateProposal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CreateProposal_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar CreateProposal = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var handleChange = function(event) {\n        setValue(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CreateProposal_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Write a proposal if you want to borrow money\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CreateProposal_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Enter amount:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter amount\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Enter Loan duration in month:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter amount\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Enter interest rate percentage per month:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter interest rate percentage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Explain the purpose in below box to convince for approval\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: value,\n                onChange: handleChange,\n                rows: 4,\n                style: {\n                    width: \"98%\",\n                    padding: \"10px\",\n                    fontSize: \"16px\",\n                    lineHeight: \"1.5\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\",\n                    marginLeft: \"1%\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    height: \"40px\",\n                    width: \"98%\",\n                    marginLeft: \"1%\",\n                    marginBottom: \"1%\"\n                },\n                children: \"SEND PROPOSAL\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateProposal.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(CreateProposal, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = CreateProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateProposal);\nvar _c;\n$RefreshReg$(_c, \"CreateProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVByb3Bvc2FsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUF3QztBQUNnQjtBQUV4RCxJQUFNRyxjQUFjLEdBQUcsV0FBTTs7SUFDM0IsSUFBMEJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JHLEtBQUssR0FBY0gsR0FBWSxHQUExQixFQUFFSSxRQUFRLEdBQUlKLEdBQVksR0FBaEI7SUFJdEIsSUFBTUssWUFBWSxHQUFHLFNBQUNDLEtBQUssRUFBSztRQUM5QkYsUUFBUSxDQUFDRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHFCQUNFLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBRVIsb0ZBQWdCOzswQkFDOUIsOERBQUNVLElBQUU7MEJBQUMsOENBQTRDOzs7OztxQkFBSzswQkFDckQsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVIseUZBQXFCOztrQ0FDbkMsOERBQUNZLE1BQUk7a0NBQUMsZUFBYTs7Ozs7NkJBQU87a0NBQzFCLDhEQUFDQyxPQUFLO3dCQUFDQyxXQUFXLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDaEM7MEJBRU4sOERBQUNQLEtBQUc7O29CQUFDLCtCQUVIO2tDQUFBLDhEQUFDTSxPQUFLO3dCQUFDQyxXQUFXLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDaEM7MEJBRU4sOERBQUNQLEtBQUc7O29CQUFDLDJDQUVIO2tDQUFBLDhEQUFDTSxPQUFLO3dCQUFDQyxXQUFXLEVBQUMsZ0NBQWdDOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsRDswQkFDTiw4REFBQ0MsR0FBQzswQkFBQywyREFBeUQ7Ozs7O3FCQUFJOzBCQUNoRSw4REFBQ0MsVUFBUTtnQkFDUGQsS0FBSyxFQUFFQSxLQUFLO2dCQUNaZSxRQUFRLEVBQUViLFlBQVk7Z0JBQ3RCYyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsS0FBSyxFQUFFO29CQUNMQyxLQUFLLEVBQUUsS0FBSztvQkFDWkMsT0FBTyxFQUFFLE1BQU07b0JBQ2ZDLFFBQVEsRUFBRSxNQUFNO29CQUNoQkMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCQyxNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QkMsWUFBWSxFQUFFLEtBQUs7b0JBQ25CQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7Ozs7O3FCQUNEOzBCQUNGLDhEQUFDQyxRQUFNO2dCQUNMUixLQUFLLEVBQUU7b0JBQ0xTLE1BQU0sRUFBRSxNQUFNO29CQUNkUixLQUFLLEVBQUUsS0FBSztvQkFDWk0sVUFBVSxFQUFFLElBQUk7b0JBQ2hCRyxZQUFZLEVBQUUsSUFBSTtpQkFDbkI7MEJBQ0YsZUFFRDs7Ozs7cUJBQVM7Ozs7OzthQUNMLENBQ047QUFDSixDQUFDO0dBckRLNUIsY0FBYztBQUFkQSxLQUFBQSxjQUFjO0FBdURwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3JlYXRlUHJvcG9zYWwuanN4P2U4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DcmVhdGVQcm9wb3NhbC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBDcmVhdGVQcm9wb3NhbCA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMz5Xcml0ZSBhIHByb3Bvc2FsIGlmIHlvdSB3YW50IHRvIGJvcnJvdyBtb25leTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgPHNwYW4+RW50ZXIgYW1vdW50Ojwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgYW1vdW50XCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICBFbnRlciBMb2FuIGR1cmF0aW9uIGluIG1vbnRoOlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBhbW91bnRcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIEVudGVyIGludGVyZXN0IHJhdGUgcGVyY2VudGFnZSBwZXIgbW9udGg6XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIGludGVyZXN0IHJhdGUgcGVyY2VudGFnZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPkV4cGxhaW4gdGhlIHB1cnBvc2UgaW4gYmVsb3cgYm94IHRvIGNvbnZpbmNlIGZvciBhcHByb3ZhbDwvcD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHJvd3M9ezR9IC8vIEFkanVzdCB0aGUgbnVtYmVyIG9mIHJvd3MgYXMgcGVyIHlvdXIgcmVxdWlyZW1lbnRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCI5OCVcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCIxJVwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjk4JVwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMSVcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMSVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU0VORCBQUk9QT1NBTFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcm9wb3NhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ3JlYXRlUHJvcG9zYWwiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMyIsImlucHV0Q29udGFpbmVyIiwic3BhbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJwIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsInJvd3MiLCJzdHlsZSIsIndpZHRoIiwicGFkZGluZyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkxlZnQiLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateProposal.jsx\n"));

/***/ })

});