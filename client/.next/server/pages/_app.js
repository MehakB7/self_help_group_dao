/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"navigation\": \"Home_navigation__fu8yo\",\n\t\"wallet\": \"Home_wallet__iOS9t\",\n\t\"group\": \"Home_group__EwTBz\",\n\t\"createGroup\": \"Home_createGroup__1MObM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1yYWluYm93a2l0LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcIm5hdmlnYXRpb25cIjogXCJIb21lX25hdmlnYXRpb25fX2Z1OHlvXCIsXG5cdFwid2FsbGV0XCI6IFwiSG9tZV93YWxsZXRfX2lPUzl0XCIsXG5cdFwiZ3JvdXBcIjogXCJIb21lX2dyb3VwX19Fd1RCelwiLFxuXHRcImNyZWF0ZUdyb3VwXCI6IFwiSG9tZV9jcmVhdGVHcm91cF9fMU1PYk1cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./layout/mainLayout.jsx":
/*!*******************************!*\
  !*** ./layout/mainLayout.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MainLayout({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigation),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    marginLeft: \"0px\",\n                                    color: \"black\",\n                                    padding: \"10px\",\n                                    borderRadius: \"10px\",\n                                    fontSize: \"50px\",\n                                    textShadow: \"0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)\"\n                                },\n                                onClick: ()=>router.push(\"/\"),\n                                children: [\n                                    \"S\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                        style: {\n                                            verticalAlign: \"super\",\n                                            fontSize: \"smaller\"\n                                        },\n                                        children: [\n                                            \"S\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                                style: {\n                                                    verticalAlign: \"super\",\n                                                    fontSize: \"smaller\"\n                                                },\n                                                children: \"s\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().wallet),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton, {}, void 0, false, {\n                                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/layout/mainLayout.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvbWFpbkxheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNTO0FBRU07QUFDeEMsU0FBU0csVUFBVSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQy9DLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixxQkFDRTtrQkFTRSw0RUFBQ00sS0FBRztZQUFDQyxTQUFTLEVBQUVOLDBFQUFnQjtzQkFDOUIsNEVBQUNRLE1BQUk7Z0JBQUNGLFNBQVMsRUFBRU4scUVBQVc7O2tDQUMxQiw4REFBQ0ssS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTiwyRUFBaUI7OzBDQUMvQiw4REFBQ1UsSUFBRTtnQ0FDREMsS0FBSyxFQUFFO29DQUNMQyxVQUFVLEVBQUUsS0FBSztvQ0FDakJDLEtBQUssRUFBRSxPQUFPO29DQUNkQyxPQUFPLEVBQUUsTUFBTTtvQ0FDZkMsWUFBWSxFQUFFLE1BQU07b0NBQ3BCQyxRQUFRLEVBQUUsTUFBTTtvQ0FDaEJDLFVBQVUsRUFDUix3REFBd0Q7aUNBQzNEO2dDQUNEQyxPQUFPLEVBQUUsSUFBTWQsTUFBTSxDQUFDZSxJQUFJLENBQUMsR0FBRyxDQUFDOztvQ0FDaEMsR0FFQztrREFBQSw4REFBQ0MsS0FBRzt3Q0FDRlQsS0FBSyxFQUFFOzRDQUNMVSxhQUFhLEVBQUUsT0FBTzs0Q0FDdEJMLFFBQVEsRUFBRSxTQUFTO3lDQUNwQjs7NENBQ0YsR0FFQzswREFBQSw4REFBQ0ksS0FBRztnREFDRlQsS0FBSyxFQUFFO29EQUNMVSxhQUFhLEVBQUUsT0FBTztvREFDdEJMLFFBQVEsRUFBRSxTQUFTO2lEQUNwQjswREFDRixHQUVEOzs7OztvREFBTTs7Ozs7OzRDQUNGOzs7Ozs7b0NBQ0g7MENBQ0wsOERBQUNYLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRU4sdUVBQWE7MENBQzNCLDRFQUFDQyxpRUFBYTs7Ozt3Q0FBRzs7Ozs7b0NBQ2I7Ozs7Ozs0QkFDRjtvQkFDTEUsUUFBUTs7Ozs7O29CQUNKOzs7OztnQkFPSDtxQkFDTCxDQUNIO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXJhaW5ib3draXQtYXBwLy4vbGF5b3V0L21haW5MYXlvdXQuanN4PzQzNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxoZWFkPlxuICAgICAgICA8dGl0bGU+c3dheW1fc2FoYXl0YV9zYW11aCBCeSBOYXVzaGFkPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IEByYWluYm93LW1lL2NyZWF0ZS1yYWluYm93a2l0XCJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayBocmVmPVwiL2Zhdmljb24uaWNvXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICA8L2hlYWQ+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwcHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICAgICBcIjAgNHB4IDhweCAjZmZmZmZmLCAwIDZweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNcbiAgICAgICAgICAgICAgPHN1cFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInN1cGVyXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJzbWFsbGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNcbiAgICAgICAgICAgICAgICA8c3VwXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInN1cGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcInNtYWxsZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICA8L3N1cD5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGxldH0+XG4gICAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgey8qIFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93Lm1lXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIE1hZGUgd2l0aCDinaTvuI8gYnkgeW91ciBmcmVucyBhdCDwn4yIXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkNvbm5lY3RCdXR0b24iLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwibmF2aWdhdGlvbiIsImgxIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93Iiwib25DbGljayIsInB1c2giLCJzdXAiLCJ2ZXJ0aWNhbEFsaWduIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/mainLayout.jsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _layout_mainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/mainLayout */ \"./layout/mainLayout.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _state_management_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../state_management/store */ \"./state_management/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _layout_mainLayout__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _layout_mainLayout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst { chains , publicClient , webSocketPublicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.arbitrum,\n    ... true ? [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.localhost\n    ] : 0, \n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconsole.log(\"Test network\", \"true\");\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"RainbowKit App\",\n    projectId: \"YOUR_PROJECT_ID\",\n    chains\n});\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({\n    autoConnect: true,\n    connectors,\n    publicClient,\n    webSocketPublicClient\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        config: wagmiConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n                store: _state_management_store__WEBPACK_IMPORTED_MODULE_8__.store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_mainLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/_app.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/_app.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/_app.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/_app.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDWTtBQUNvQztBQUVaO0FBUzdDO0FBQ2tDO0FBQ1Y7QUFDUDtBQUNhO0FBRXBELE1BQU0sRUFBRWMsTUFBTSxHQUFFQyxZQUFZLEdBQUVDLHFCQUFxQixHQUFFLEdBQUdkLHNEQUFlLENBQ3JFO0lBQ0VJLGlEQUFPO0lBQ1BFLGlEQUFPO0lBQ1BELGtEQUFRO0lBQ1JGLGtEQUFRO09BQ0pZLEtBQWtELEdBQUc7UUFBQ1IsbURBQVM7S0FBQyxHQUFHLENBQUU7Q0FDMUUsRUFDRDtJQUFDQyxzRUFBYyxFQUFFO0NBQUMsQ0FDbkI7QUFFRFUsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFSixNQUF1QyxDQUFDLENBQUM7QUFFckUsTUFBTSxFQUFFSyxVQUFVLEdBQUUsR0FBR3RCLHlFQUFpQixDQUFDO0lBQ3ZDdUIsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QkMsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QlYsTUFBTTtDQUNQLENBQUM7QUFFRixNQUFNVyxXQUFXLEdBQUd0QixtREFBWSxDQUFDO0lBQy9CdUIsV0FBVyxFQUFFLElBQUk7SUFDakJKLFVBQVU7SUFDVlAsWUFBWTtJQUNaQyxxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGLFNBQVNXLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDekIsOENBQVc7UUFBQzBCLE1BQU0sRUFBRUwsV0FBVztrQkFDOUIsNEVBQUN4QixzRUFBa0I7WUFBQ2EsTUFBTSxFQUFFQSxNQUFNO3NCQUNoQyw0RUFBQ0YsaURBQVE7Z0JBQUNDLEtBQUssRUFBRUEsMERBQUs7MEJBQ3BCLDRFQUFDRiwwREFBVTs4QkFDVCw0RUFBQ2lCLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNqQjs7Ozs7b0JBQ0o7Ozs7O2dCQUNROzs7OztZQUNULENBQ2Q7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXJhaW5ib3draXQtYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDb25maWcsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHtcbiAgYXJiaXRydW0sXG4gIGdvZXJsaSxcbiAgbWFpbm5ldCxcbiAgb3B0aW1pc20sXG4gIHBvbHlnb24sXG4gIHNlcG9saWEsXG4gIGxvY2FsaG9zdCxcbn0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2xheW91dC9tYWluTGF5b3V0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi8uLi9zdGF0ZV9tYW5hZ2VtZW50L3N0b3JlXCI7XG5cbmNvbnN0IHsgY2hhaW5zLCBwdWJsaWNDbGllbnQsIHdlYlNvY2tldFB1YmxpY0NsaWVudCB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbXG4gICAgbWFpbm5ldCxcbiAgICBwb2x5Z29uLFxuICAgIG9wdGltaXNtLFxuICAgIGFyYml0cnVtLFxuICAgIC4uLihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTkFCTEVfVEVTVE5FVFMgPT09IFwidHJ1ZVwiID8gW2xvY2FsaG9zdF0gOiBbXSksXG4gIF0sXG4gIFtwdWJsaWNQcm92aWRlcigpXVxuKTtcblxuY29uc29sZS5sb2coXCJUZXN0IG5ldHdvcmtcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU5BQkxFX1RFU1RORVRTKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiUmFpbmJvd0tpdCBBcHBcIixcbiAgcHJvamVjdElkOiBcIllPVVJfUFJPSkVDVF9JRFwiLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDb25maWcgPSBjcmVhdGVDb25maWcoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHVibGljQ2xpZW50LFxuICB3ZWJTb2NrZXRQdWJsaWNDbGllbnQsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8TWFpbkxheW91dD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L01haW5MYXlvdXQ+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsIldhZ21pQ29uZmlnIiwiYXJiaXRydW0iLCJtYWlubmV0Iiwib3B0aW1pc20iLCJwb2x5Z29uIiwibG9jYWxob3N0IiwicHVibGljUHJvdmlkZXIiLCJNYWluTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsImNoYWlucyIsInB1YmxpY0NsaWVudCIsIndlYlNvY2tldFB1YmxpY0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19FTkFCTEVfVEVTVE5FVFMiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJwcm9qZWN0SWQiLCJ3YWdtaUNvbmZpZyIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./state_management/slices/group.js":
/*!******************************************!*\
  !*** ./state_management/slices/group.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fetchGroup\": () => (/* binding */ fetchGroup),\n/* harmony export */   \"updateGroup\": () => (/* binding */ updateGroup)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst groupSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"group\",\n    initialState: {\n        list: [],\n        info: {}\n    },\n    reducers: {\n        fetchGroup (state, action) {\n            state?.list.push(action.payload);\n            return state;\n        },\n        updateGroup (state, action) {\n            let oldInfo = state.info[action.payload.address] || {};\n            let newInfo = action?.payload?.info;\n            state.info[action.payload.address] = {\n                ...oldInfo,\n                ...newInfo\n            };\n            return state;\n        }\n    }\n});\n// Extract the action creators object and the reducer\nconst { actions , reducer  } = groupSlice;\n// Extract and export each action creator by name\nconst { fetchGroup , updateGroup  } = actions;\n// Export the reducer, either as a default or named export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZV9tYW5hZ2VtZW50L3NsaWNlcy9ncm91cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUMvQyxNQUFNQyxVQUFVLEdBQUdELDZEQUFXLENBQUM7SUFDN0JFLElBQUksRUFBRSxPQUFPO0lBQ2JDLFlBQVksRUFBRTtRQUFFQyxJQUFJLEVBQUUsRUFBRTtRQUFFQyxJQUFJLEVBQUUsRUFBRTtLQUFFO0lBQ3BDQyxRQUFRLEVBQUU7UUFDUkMsVUFBVSxFQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUN4QkQsS0FBSyxFQUFFSixJQUFJLENBQUNNLElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQztZQUNqQyxPQUFPSCxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0RJLFdBQVcsRUFBQ0osS0FBSyxFQUFFQyxNQUFNLEVBQUU7WUFDekIsSUFBSUksT0FBTyxHQUFHTCxLQUFLLENBQUNILElBQUksQ0FBQ0ksTUFBTSxDQUFDRSxPQUFPLENBQUNHLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdEQsSUFBSUMsT0FBTyxHQUFHTixNQUFNLEVBQUVFLE9BQU8sRUFBRU4sSUFBSTtZQUNuQ0csS0FBSyxDQUFDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDRyxPQUFPLENBQUMsR0FBRztnQkFBRSxHQUFHRCxPQUFPO2dCQUFFLEdBQUdFLE9BQU87YUFBRSxDQUFDO1lBQ2hFLE9BQU9QLEtBQUssQ0FBQztRQUNmLENBQUM7S0FDRjtDQUNGLENBQUM7QUFFRixxREFBcUQ7QUFDckQsTUFBTSxFQUFFUSxPQUFPLEdBQUVDLE9BQU8sR0FBRSxHQUFHaEIsVUFBVTtBQUN2QyxpREFBaUQ7QUFDMUMsTUFBTSxFQUFFTSxVQUFVLEdBQUVLLFdBQVcsR0FBRSxHQUFHSSxPQUFPLENBQUM7QUFDbkQsMERBQTBEO0FBQzFELGlFQUFlQyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1yYWluYm93a2l0LWFwcC8uL3N0YXRlX21hbmFnZW1lbnQvc2xpY2VzL2dyb3VwLmpzP2RmZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuY29uc3QgZ3JvdXBTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJncm91cFwiLFxuICBpbml0aWFsU3RhdGU6IHsgbGlzdDogW10sIGluZm86IHt9IH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgZmV0Y2hHcm91cChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZT8ubGlzdC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuICAgIHVwZGF0ZUdyb3VwKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIGxldCBvbGRJbmZvID0gc3RhdGUuaW5mb1thY3Rpb24ucGF5bG9hZC5hZGRyZXNzXSB8fCB7fTtcbiAgICAgIGxldCBuZXdJbmZvID0gYWN0aW9uPy5wYXlsb2FkPy5pbmZvO1xuICAgICAgc3RhdGUuaW5mb1thY3Rpb24ucGF5bG9hZC5hZGRyZXNzXSA9IHsgLi4ub2xkSW5mbywgLi4ubmV3SW5mbyB9O1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gRXh0cmFjdCB0aGUgYWN0aW9uIGNyZWF0b3JzIG9iamVjdCBhbmQgdGhlIHJlZHVjZXJcbmNvbnN0IHsgYWN0aW9ucywgcmVkdWNlciB9ID0gZ3JvdXBTbGljZTtcbi8vIEV4dHJhY3QgYW5kIGV4cG9ydCBlYWNoIGFjdGlvbiBjcmVhdG9yIGJ5IG5hbWVcbmV4cG9ydCBjb25zdCB7IGZldGNoR3JvdXAsIHVwZGF0ZUdyb3VwIH0gPSBhY3Rpb25zO1xuLy8gRXhwb3J0IHRoZSByZWR1Y2VyLCBlaXRoZXIgYXMgYSBkZWZhdWx0IG9yIG5hbWVkIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImdyb3VwU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibGlzdCIsImluZm8iLCJyZWR1Y2VycyIsImZldGNoR3JvdXAiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwidXBkYXRlR3JvdXAiLCJvbGRJbmZvIiwiYWRkcmVzcyIsIm5ld0luZm8iLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./state_management/slices/group.js\n");

/***/ }),

/***/ "./state_management/store.js":
/*!***********************************!*\
  !*** ./state_management/store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/group */ \"./state_management/slices/group.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        group: _slices_group__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZV9tYW5hZ2VtZW50L3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDYjtBQUM5QixNQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7SUFDbENDLE9BQU8sRUFBRTtRQUNQRSxLQUFLLEVBQUVGLHFEQUFPO0tBQ2Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1yYWluYm93a2l0LWFwcC8uL3N0YXRlX21hbmFnZW1lbnQvc3RvcmUuanM/NjVjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9zbGljZXMvZ3JvdXBcIjtcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGdyb3VwOiByZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwic3RvcmUiLCJncm91cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./state_management/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();