"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CreateGroup.jsx":
/*!************************************!*\
  !*** ./components/CreateGroup.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/CreateGroup.module.css */ \"./styles/CreateGroup.module.css\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateGroup() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"createNewGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, write = ref.write;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                name\n            ]\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Create a new group by entering a name\"\n                }, void 0, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().componentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameInput),\n                        id: \"name-input\",\n                        placeholder: \"Enter group name\",\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: name.length == 0,\n                        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().createButton),\n                        onClick: createGroup,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Please check wallet and sign the pending transaction \"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            \"Transaction Completed, Please check the transaction hash:\",\n                            \" \",\n                            JSON.stringify(data),\n                            \" or Refresh the Groups to see newly created group\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateGroup, \"HoANJzUdArtWuGY58uhqrJw6em8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite\n    ];\n});\n_c = CreateGroup;\nvar _c;\n$RefreshReg$(_c, \"CreateGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZUdyb3VwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDRjtBQUNwQjtBQUNVO0FBRS9CLFNBQVNNLFdBQVcsR0FBRzs7SUFDcEMsSUFBOENMLEdBSTVDLEdBSjRDQSx1REFBZ0IsQ0FBQztRQUM3RE0sT0FBTyxFQUFFLDRDQUE0QztRQUNyREMsR0FBRyxFQUFFTCw0Q0FBUztRQUNkTSxZQUFZLEVBQUUsZ0JBQWdCO0tBQy9CLENBQUMsRUFKTUMsSUFBSSxHQUFrQ1QsR0FJNUMsQ0FKTVMsSUFBSSxFQUFFQyxTQUFTLEdBQXVCVixHQUk1QyxDQUpZVSxTQUFTLEVBQUVDLFNBQVMsR0FBWVgsR0FJNUMsQ0FKdUJXLFNBQVMsRUFBRUMsS0FBSyxHQUFLWixHQUk1QyxDQUprQ1ksS0FBSztJQU16QyxJQUF3QlIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QlMsSUFBSSxHQUFhVCxJQUFZLEdBQXpCLEVBQUVVLE9BQU8sR0FBSVYsSUFBWSxHQUFoQjtJQUVwQixJQUFNVyxXQUFXLEdBQUdaLGtEQUFXLENBQUMsV0FBTTtRQUNwQ1MsS0FBSyxDQUFDO1lBQ0pJLElBQUksRUFBRTtnQkFBQ0gsSUFBSTthQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFakIsNEVBQVc7OzBCQUN6Qiw4REFBQ2dCLEtBQUc7MEJBQ0YsNEVBQUNHLElBQUU7OEJBQUMsdUNBQXFDOzs7Ozt3QkFBSzs7Ozs7b0JBQzFDOzBCQUNOLDhEQUFDSCxLQUFHO2dCQUFDSSxLQUFLLEVBQUVwQiwwRkFBeUI7O2tDQUNuQyw4REFBQ3NCLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxNQUFNO3dCQUNYSCxLQUFLLEVBQUVwQixpRkFBZ0I7d0JBQ3ZCeUIsRUFBRSxFQUFDLFlBQVk7d0JBQ2ZDLFdBQVcsRUFBQyxrQkFBa0I7d0JBQzlCQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBS2YsT0FBTyxDQUFDZSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3lCQUFBOzs7Ozs0QkFDeEM7a0NBQ0YsOERBQUNDLFFBQU07d0JBQ0xDLFFBQVEsRUFBRXBCLElBQUksQ0FBQ3FCLE1BQU0sSUFBSSxDQUFDO3dCQUMxQmhCLFNBQVMsRUFBRWpCLG9GQUFtQjt3QkFDOUJtQyxPQUFPLEVBQUVyQixXQUFXO2tDQUNyQixRQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNMOzBCQUNOLDhEQUFDRSxLQUFHOztvQkFDRFAsU0FBUyxrQkFDUiw4REFBQzJCLElBQUU7a0NBQUMsdURBQXFEOzs7Ozs0QkFBSztvQkFFL0QxQixTQUFTLGtCQUNSLDhEQUFDMEIsSUFBRTs7NEJBQUMsMkRBQ3VEOzRCQUFDLEdBQUc7NEJBQzVEQyxJQUFJLENBQUNDLFNBQVMsQ0FBQzlCLElBQUksQ0FBQzs0QkFBQyxtREFDakI7NEJBQUMsR0FBRzs7Ozs7OzRCQUNOOzs7Ozs7b0JBRUg7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBbER1QkosV0FBVzs7UUFDYUwsbURBQWdCOzs7QUFEeENLLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVHcm91cC5qc3g/ZjQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250cmFjdFJlYWQsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL0NyZWF0ZUdyb3VwLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdyb3VwX2FiaSB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlR3JvdXAoKSB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIHdyaXRlIH0gPSB1c2VDb250cmFjdFdyaXRlKHtcbiAgICBhZGRyZXNzOiBcIjB4OEE3OTE2MjBkZDYyNjAwNzlCRjg0OURjNTU2N2FEQzNGMkZkQzMxOFwiLFxuICAgIGFiaTogZ3JvdXBfYWJpLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJjcmVhdGVOZXdHcm91cFwiLFxuICB9KTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjcmVhdGVHcm91cCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB3cml0ZSh7XG4gICAgICBhcmdzOiBbbmFtZV0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yb290fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5DcmVhdGUgYSBuZXcgZ3JvdXAgYnkgZW50ZXJpbmcgYSBuYW1lPC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz17U3R5bGVzLmNvbXBvbmVudENvbnRhaW5lcn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz17U3R5bGVzLm5hbWVJbnB1dH1cbiAgICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PSAwfVxuICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLmNyZWF0ZUJ1dHRvbn1cbiAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVHcm91cH1cbiAgICAgICAgPlxuICAgICAgICAgIENyZWF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPGg1PlBsZWFzZSBjaGVjayB3YWxsZXQgYW5kIHNpZ24gdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24gPC9oNT5cbiAgICAgICAgKX1cbiAgICAgICAge2lzU3VjY2VzcyAmJiAoXG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgVHJhbnNhY3Rpb24gQ29tcGxldGVkLCBQbGVhc2UgY2hlY2sgdGhlIHRyYW5zYWN0aW9uIGhhc2g6e1wiIFwifVxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGRhdGEpfSBvciBSZWZyZXNoIHRoZSBHcm91cHMgdG8gc2VlIG5ld2x5IGNyZWF0ZWRcbiAgICAgICAgICAgIGdyb3Vwe1wiIFwifVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDb250cmFjdFdyaXRlIiwiU3R5bGVzIiwiZ3JvdXBfYWJpIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIkNyZWF0ZUdyb3VwIiwiYWRkcmVzcyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJ3cml0ZSIsIm5hbWUiLCJzZXROYW1lIiwiY3JlYXRlR3JvdXAiLCJhcmdzIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9vdCIsImg0IiwiY2xhc3MiLCJjb21wb25lbnRDb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJuYW1lSW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJkaXNhYmxlZCIsImxlbmd0aCIsImNyZWF0ZUJ1dHRvbiIsIm9uQ2xpY2siLCJoNSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateGroup.jsx\n"));

/***/ })

});