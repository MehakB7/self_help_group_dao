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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/CreateGroup.module.css */ \"./styles/CreateGroup.module.css\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateGroup() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"createNewGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, write = ref.write;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                name\n            ]\n        });\n    });\n    console.log(\"Transaction Completed, Please check the transaction hash: \\n     \".concat(JSON.stringify(data), \"\\n        or Refresh the Groups to see newly created group\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Create a new group by entering a name\"\n                }, void 0, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().componentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameInput),\n                        id: \"name-input\",\n                        placeholder: \"Enter group name\",\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: name.length == 0,\n                        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().createButton),\n                        onClick: createGroup,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 29,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Please check wallet and sign the pending transaction \"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 14\n                    }, this),\n                    isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().SuccessfulMessage),\n                        children: \"Transaction done\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n        lineNumber: 25,\n        columnNumber: 8\n    }, this);\n} /**\n * {`Transaction Completed, Please check the transaction hash:${JSON.stringify(\n                 data\n               )}or Refresh the Groups to see newly created\n                group`}\n */ \n_s(CreateGroup, \"HoANJzUdArtWuGY58uhqrJw6em8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite\n    ];\n});\n_c = CreateGroup;\nvar _c;\n$RefreshReg$(_c, \"CreateGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZUdyb3VwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDRjtBQUNwQjtBQUNVO0FBRS9CLFNBQVNNLFdBQVcsR0FBRzs7SUFDcEMsSUFBOENMLEdBSTVDLEdBSjRDQSx1REFBZ0IsQ0FBQztRQUM3RE0sT0FBTyxFQUFFLDRDQUE0QztRQUNyREMsR0FBRyxFQUFFTCw0Q0FBUztRQUNkTSxZQUFZLEVBQUUsZ0JBQWdCO0tBQy9CLENBQUMsRUFKTUMsSUFBSSxHQUFrQ1QsR0FJNUMsQ0FKTVMsSUFBSSxFQUFFQyxTQUFTLEdBQXVCVixHQUk1QyxDQUpZVSxTQUFTLEVBQUVDLFNBQVMsR0FBWVgsR0FJNUMsQ0FKdUJXLFNBQVMsRUFBRUMsS0FBSyxHQUFLWixHQUk1QyxDQUprQ1ksS0FBSztJQU16QyxJQUF3QlIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QlMsSUFBSSxHQUFhVCxJQUFZLEdBQXpCLEVBQUVVLE9BQU8sR0FBSVYsSUFBWSxHQUFoQjtJQUVwQixJQUFNVyxXQUFXLEdBQUdaLGtEQUFXLENBQUMsV0FBTTtRQUNwQ1MsS0FBSyxDQUFDO1lBQ0pJLElBQUksRUFBRTtnQkFBQ0gsSUFBSTthQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0NJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1FQUNaLENBQXVCLE1BQzRCLENBRGpEQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSSxDQUFDLEVBQUMsNERBQzRCLENBQUMsQ0FBQyxDQUFDO0lBRXRELHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNDLFNBQVMsRUFBRXJCLDRFQUFXOzswQkFDekIsOERBQUNvQixLQUFHOzBCQUNGLDRFQUFDRyxJQUFFOzhCQUFDLHVDQUFxQzs7Ozs7d0JBQUs7Ozs7O29CQUMxQzswQkFDTiw4REFBQ0gsS0FBRztnQkFBQ0ksS0FBSyxFQUFFeEIsMEZBQXlCOztrQ0FDbkMsOERBQUMwQixPQUFLO3dCQUNKQyxJQUFJLEVBQUMsTUFBTTt3QkFDWEgsS0FBSyxFQUFFeEIsaUZBQWdCO3dCQUN2QjZCLEVBQUUsRUFBQyxZQUFZO3dCQUNmQyxXQUFXLEVBQUMsa0JBQWtCO3dCQUM5QkMsUUFBUSxFQUFFLFNBQUNDLENBQUM7bUNBQUtuQixPQUFPLENBQUNtQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3lCQUFBOzs7Ozs0QkFDeEM7a0NBQ0YsOERBQUNDLFFBQU07d0JBQ0xDLFFBQVEsRUFBRXhCLElBQUksQ0FBQ3lCLE1BQU0sSUFBSSxDQUFDO3dCQUMxQmhCLFNBQVMsRUFBRXJCLG9GQUFtQjt3QkFDOUJ1QyxPQUFPLEVBQUV6QixXQUFXO2tDQUNyQixRQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNMOzBCQUNOLDhEQUFDTSxLQUFHOztvQkFDRFgsU0FBUyxrQkFDUiw4REFBQytCLElBQUU7a0NBQUMsdURBQXFEOzs7Ozs0QkFBSztvQkFHL0Q5QixTQUFTLGtCQUNSLDhEQUFDK0IsR0FBQzt3QkFBQ0MsS0FBSyxFQUFFMUMseUZBQXdCO2tDQUFFLGtCQUFnQjs7Ozs7NEJBQUk7Ozs7OztvQkFFdEQ7Ozs7OztZQUNGLENBQ047QUFDUCxDQUFDLENBR0Q7Ozs7O0NBS0M7R0ExRHVCSSxXQUFXOztRQUNhTCxtREFBZ0I7OztBQUR4Q0ssS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NyZWF0ZUdyb3VwLmpzeD9mNDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvQ3JlYXRlR3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3JvdXBfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVHcm91cCgpIHtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2Vzcywgd3JpdGUgfSA9IHVzZUNvbnRyYWN0V3JpdGUoe1xuICAgIGFkZHJlc3M6IFwiMHg4QTc5MTYyMGRkNjI2MDA3OUJGODQ5RGM1NTY3YURDM0YyRmRDMzE4XCIsXG4gICAgYWJpOiBncm91cF9hYmksXG4gICAgZnVuY3Rpb25OYW1lOiBcImNyZWF0ZU5ld0dyb3VwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGNyZWF0ZUdyb3VwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHdyaXRlKHtcbiAgICAgIGFyZ3M6IFtuYW1lXSxcbiAgICB9KTtcbiAgfSk7XG4gICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBDb21wbGV0ZWQsIFBsZWFzZSBjaGVjayB0aGUgdHJhbnNhY3Rpb24gaGFzaDogXG4gICAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XG4gICAgICAgIG9yIFJlZnJlc2ggdGhlIEdyb3VwcyB0byBzZWUgbmV3bHkgY3JlYXRlZCBncm91cGApO1xuXG4gICAgIHJldHVybiAoXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yb290fT5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxoND5DcmVhdGUgYSBuZXcgZ3JvdXAgYnkgZW50ZXJpbmcgYSBuYW1lPC9oND5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz17U3R5bGVzLmNvbXBvbmVudENvbnRhaW5lcn0+XG4gICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICBjbGFzcz17U3R5bGVzLm5hbWVJbnB1dH1cbiAgICAgICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiXG4gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgLz5cbiAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PSAwfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLmNyZWF0ZUJ1dHRvbn1cbiAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVHcm91cH1cbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgPGg1PlBsZWFzZSBjaGVjayB3YWxsZXQgYW5kIHNpZ24gdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24gPC9oNT5cbiAgICAgICAgICAgKX1cblxuICAgICAgICAgICB7aXNTdWNjZXNzICYmIChcbiAgICAgICAgICAgICA8cCBzdHlsZT17U3R5bGVzLlN1Y2Nlc3NmdWxNZXNzYWdlfT5UcmFuc2FjdGlvbiBkb25lPC9wPlxuICAgICAgICAgICApfVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICk7XG59XG5cblxuLyoqXG4gKiB7YFRyYW5zYWN0aW9uIENvbXBsZXRlZCwgUGxlYXNlIGNoZWNrIHRoZSB0cmFuc2FjdGlvbiBoYXNoOiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICl9b3IgUmVmcmVzaCB0aGUgR3JvdXBzIHRvIHNlZSBuZXdseSBjcmVhdGVkXG4gICAgICAgICAgICAgICAgZ3JvdXBgfVxuICovIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJncm91cF9hYmkiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiQ3JlYXRlR3JvdXAiLCJhZGRyZXNzIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsIndyaXRlIiwibmFtZSIsInNldE5hbWUiLCJjcmVhdGVHcm91cCIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsInJvb3QiLCJoNCIsImNsYXNzIiwiY29tcG9uZW50Q29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwibmFtZUlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJjcmVhdGVCdXR0b24iLCJvbkNsaWNrIiwiaDUiLCJwIiwic3R5bGUiLCJTdWNjZXNzZnVsTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateGroup.jsx\n"));

/***/ })

});