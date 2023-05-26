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

/***/ "./components/MyGroup.jsx":
/*!********************************!*\
  !*** ./components/MyGroup.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MyGroupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyGroupItem */ \"./components/MyGroupItem.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state_management/slices/group */ \"./state_management/slices/group.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MyGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead)({\n        address: \"0x5FbDB2315678afecb367f032d93F642f64180aa3\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data) {\n            dispatch((0,_state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__.updateGroup)(data));\n        }\n    }, [\n        data,\n        dispatch\n    ]);\n    // console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().myGroup),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().MyGroupItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Balance\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Person\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            data === null || data === void 0 ? void 0 : data.map(function(x) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyGroupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    address: x,\n                    children: \" \"\n                }, x, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroup, \"DSxYVPPyGN0bJCHcYORYcvdxNFk=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = MyGroup;\nvar _c;\n$RefreshReg$(_c, \"MyGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUNOO0FBQ2hCO0FBQ1c7QUFDUDtBQUNFO0FBQ3FCO0FBRWhELFNBQVNTLE9BQU8sR0FBRzs7O0lBQ2hDLElBQXVDVCxHQUlyQyxHQUpxQ0Esc0RBQWUsQ0FBQztRQUNyRFUsT0FBTyxFQUFFQyw0Q0FBOEM7UUFDdkRHLEdBQUcsRUFBRVgsNENBQVM7UUFDZFksWUFBWSxFQUFFLGFBQWE7S0FDNUIsQ0FBQyxFQUpNQyxJQUFJLEdBQTJCaEIsR0FJckMsQ0FKTWdCLElBQUksRUFBRUMsU0FBUyxHQUFnQmpCLEdBSXJDLENBSllpQixTQUFTLEVBQUVDLFNBQVMsR0FBS2xCLEdBSXJDLENBSnVCa0IsU0FBUztJQU1sQyxJQUFNQyxRQUFRLEdBQUdaLHdEQUFXLEVBQUU7SUFFOUJGLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlXLElBQUksRUFBRTtZQUNSRyxRQUFRLENBQUNYLDJFQUFXLENBQUNRLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDQSxJQUFJO1FBQUVHLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFckIsMkNBQTJDO0lBRTNDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRW5CLDJFQUFjOzswQkFDeEIsOERBQUNrQixLQUFHO2dCQUFDRyxTQUFTLEVBQUVyQiwrRUFBa0I7O2tDQUNoQyw4REFBQ3NCLElBQUU7a0NBQUMsU0FBTzs7Ozs7NEJBQUs7a0NBQ2hCLDhEQUFDQSxJQUFFO2tDQUFDLE1BQUk7Ozs7OzRCQUFLO2tDQUNiLDhEQUFDQSxJQUFFO2tDQUFDLFNBQU87Ozs7OzRCQUFLO2tDQUNoQiw4REFBQ0EsSUFBRTtrQ0FBQyxRQUFNOzs7Ozs0QkFBSztrQ0FDZiw4REFBQ0EsSUFBRTtrQ0FBQyxRQUFNOzs7Ozs0QkFBSztrQ0FDZiw4REFBQ0EsSUFBRTs7Ozs0QkFBTTs7Ozs7O29CQUNMO1lBQ0xSLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFUyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO2dCQUNoQixxQkFDRSw4REFBQ3BCLG9EQUFXO29CQUFTSSxPQUFPLEVBQUVnQixDQUFDOzhCQUM1QixHQUFHO21CQURZQSxDQUFDOzs7O3lCQUVMLENBQ2Q7WUFDSixDQUFDLENBQUM7Ozs7OztZQVVFLENBQ047QUFDSixDQUFDO0dBN0N1QmpCLE9BQU87O1FBQ1VULGtEQUFlO1FBTXJDTyxvREFBVzs7O0FBUE5FLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUdyb3VwLmpzeD9kNjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvTXlHcm91cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBncm91cF9hYmkgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE15R3JvdXBJdGVtIGZyb20gXCIuL015R3JvdXBJdGVtXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXBkYXRlR3JvdXAgfSBmcm9tIFwiLi4vc3RhdGVfbWFuYWdlbWVudC9zbGljZXMvZ3JvdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlHcm91cCgpIHtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2VzcyB9ID0gdXNlQ29udHJhY3RSZWFkKHtcbiAgICBhZGRyZXNzOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUk9VUF9DT05UUkFDVF9BRERSRVNTLFxuICAgIGFiaTogZ3JvdXBfYWJpLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRBbGxHcm91cFwiLFxuICB9KTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGlzcGF0Y2godXBkYXRlR3JvdXAoZGF0YSkpO1xuICAgIH1cbiAgfSwgW2RhdGEsIGRpc3BhdGNoXSk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz17U3R5bGVzLm15R3JvdXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5NeUdyb3VwSXRlbX0+XG4gICAgICAgIDxoMz5BZGRyZXNzPC9oMz5cbiAgICAgICAgPGgzPk5hbWU8L2gzPlxuICAgICAgICA8aDM+QmFsYW5jZTwvaDM+XG4gICAgICAgIDxoMz5QZXJzb248L2gzPlxuICAgICAgICA8aDM+U3RhdHVzPC9oMz5cbiAgICAgICAgPGgzPjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkYXRhPy5tYXAoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TXlHcm91cEl0ZW0ga2V5PXt4fSBhZGRyZXNzPXt4fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8L015R3JvdXBJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICB7LyogPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9e1N0eWxlcy5uYW1lSW5wdXR9XG4gICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlcy5jcmVhdGVCdXR0b259IG9uQ2xpY2s9e2NyZWF0ZUdyb3VwfT5cbiAgICAgICAgQ3JlYXRlXG4gICAgICA8L2J1dHRvbj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RSZWFkIiwidXNlQ29udHJhY3RXcml0ZSIsIlN0eWxlcyIsImdyb3VwX2FiaSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiTXlHcm91cEl0ZW0iLCJ1c2VEaXNwYXRjaCIsInVwZGF0ZUdyb3VwIiwiTXlHcm91cCIsImFkZHJlc3MiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJkaXNwYXRjaCIsImRpdiIsImNsYXNzIiwibXlHcm91cCIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyGroup.jsx\n"));

/***/ })

});