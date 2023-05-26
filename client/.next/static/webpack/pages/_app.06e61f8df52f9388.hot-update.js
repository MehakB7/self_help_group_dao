"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./state_management/slices/group.js":
/*!******************************************!*\
  !*** ./state_management/slices/group.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateGroup\": function() { return /* binding */ updateGroup; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar groupSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"group\",\n    initialState: {\n        list: [],\n        info: {}\n    },\n    reducers: {\n        fetchGroup: function fetchGroup(state, action) {\n            state.list.push(action.payload);\n            return state;\n        }\n    }\n});\n// Extract the action creators object and the reducer\nvar actions = groupSlice.actions, reducer = groupSlice.reducer;\n// Extract and export each action creator by name\nvar updateGroup = actions.updateGroup;\n// Export the reducer, either as a default or named export\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZV9tYW5hZ2VtZW50L3NsaWNlcy9ncm91cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUMvQyxJQUFNQyxVQUFVLEdBQUdELDZEQUFXLENBQUM7SUFDN0JFLElBQUksRUFBRSxPQUFPO0lBQ2JDLFlBQVksRUFBRTtRQUFFQyxJQUFJLEVBQUUsRUFBRTtRQUFFQyxJQUFJLEVBQUUsRUFBRTtLQUFFO0lBQ3BDQyxRQUFRLEVBQUU7UUFDUkMsVUFBVSxFQUFWQSxTQUFBQSxVQUFVLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO1lBQ3hCRCxLQUFLLENBQUNKLElBQUksQ0FBQ00sSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLE9BQU9ILEtBQUssQ0FBQztRQUNmLENBQUM7S0FDRjtDQUNGLENBQUM7QUFFRixxREFBcUQ7QUFDckQsSUFBUUksT0FBTyxHQUFjWCxVQUFVLENBQS9CVyxPQUFPLEVBQUVDLE9BQU8sR0FBS1osVUFBVSxDQUF0QlksT0FBTztBQUN4QixpREFBaUQ7QUFDMUMsSUFBTSxXQUFhLEdBQUtELE9BQU8sQ0FBdkJFLFdBQVcsQ0FBYTtBQUN2QywwREFBMEQ7QUFDMUQsK0RBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdGF0ZV9tYW5hZ2VtZW50L3NsaWNlcy9ncm91cC5qcz9kZmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmNvbnN0IGdyb3VwU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiZ3JvdXBcIixcbiAgaW5pdGlhbFN0YXRlOiB7IGxpc3Q6IFtdLCBpbmZvOiB7fSB9LFxuICByZWR1Y2Vyczoge1xuICAgIGZldGNoR3JvdXAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUubGlzdC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIEV4dHJhY3QgdGhlIGFjdGlvbiBjcmVhdG9ycyBvYmplY3QgYW5kIHRoZSByZWR1Y2VyXG5jb25zdCB7IGFjdGlvbnMsIHJlZHVjZXIgfSA9IGdyb3VwU2xpY2U7XG4vLyBFeHRyYWN0IGFuZCBleHBvcnQgZWFjaCBhY3Rpb24gY3JlYXRvciBieSBuYW1lXG5leHBvcnQgY29uc3QgeyB1cGRhdGVHcm91cCB9ID0gYWN0aW9ucztcbi8vIEV4cG9ydCB0aGUgcmVkdWNlciwgZWl0aGVyIGFzIGEgZGVmYXVsdCBvciBuYW1lZCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJncm91cFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImxpc3QiLCJpbmZvIiwicmVkdWNlcnMiLCJmZXRjaEdyb3VwIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwidXBkYXRlR3JvdXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./state_management/slices/group.js\n"));

/***/ })

});