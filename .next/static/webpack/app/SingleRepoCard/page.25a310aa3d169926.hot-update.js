"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/SingleRepoCard/page",{

/***/ "(app-pages-browser)/./app/SingleRepoCard/page.tsx":
/*!*************************************!*\
  !*** ./app/SingleRepoCard/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SingleRepoCard = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const name = searchParams.get(\"name\");\n    const forks = searchParams.get(\"forks\");\n    const description = searchParams.get(\"description\");\n    const createdAt = searchParams.get(\"createdAt\");\n    const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString(\"en-US\", {\n        year: \"numeric\",\n        month: \"long\",\n        day: \"numeric\",\n        hour: \"2-digit\",\n        minute: \"2-digit\"\n    }) : \"Unknown Date\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto mt-12 bg-white p-10 rounded-lg shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-gray-800 mb-6\",\n                children: name === null || name === void 0 ? void 0 : name.slice(0, 1).toUpperCase()\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg text-gray-700 mb-4\",\n                children: description\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-lg\",\n                        children: [\n                            \"Forks: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-gray-800\",\n                                children: forks\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 18\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-lg\",\n                        children: [\n                            \"Created At: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-gray-800\",\n                                children: formattedDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-8  bg-green-600 hover:bg-green-700 w-[5rem] text-white py-3 px-6 rounded-lg text-xl focus:outline-none  \",\n                children: \"Fork\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleRepoCard, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = SingleRepoCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleRepoCard);\nvar _c;\n$RefreshReg$(_c, \"SingleRepoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TaW5nbGVSZXBvQ2FyZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUNrRDtBQUVsRCxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxPQUFPRCxhQUFhRSxHQUFHLENBQUM7SUFDOUIsTUFBTUMsUUFBUUgsYUFBYUUsR0FBRyxDQUFDO0lBQy9CLE1BQU1FLGNBQWNKLGFBQWFFLEdBQUcsQ0FBQztJQUNyQyxNQUFNRyxZQUFZTCxhQUFhRSxHQUFHLENBQUM7SUFFbkMsTUFBTUksZ0JBQWdCRCxZQUNsQixJQUFJRSxLQUFLRixXQUFXRyxrQkFBa0IsQ0FBQyxTQUFTO1FBQzlDQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLFFBQVE7SUFDVixLQUNBO0lBRUoscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUNkLGlCQUFBQSwyQkFBQUEsS0FBTWdCLEtBQUssQ0FBQyxHQUFFLEdBQUdDLFdBQVc7Ozs7OzswQkFDbkYsOERBQUNDO2dCQUFFSixXQUFVOzBCQUE4Qlg7Ozs7OzswQkFFM0MsOERBQUNVO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUVKLFdBQVU7OzRCQUF3QjswQ0FDNUIsOERBQUNLO2dDQUFLTCxXQUFVOzBDQUErQlo7Ozs7Ozs7Ozs7OztrQ0FFeEQsOERBQUNnQjt3QkFBRUosV0FBVTs7NEJBQXdCOzBDQUN2Qiw4REFBQ0s7Z0NBQUtMLFdBQVU7MENBQStCVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvRCw4REFBQ2U7Z0JBQU9OLFdBQVU7MEJBQThHOzs7Ozs7Ozs7Ozs7QUFLdEk7R0FwQ01oQjs7UUFDaUJELDREQUFlQTs7O0tBRGhDQztBQXNDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvU2luZ2xlUmVwb0NhcmQvcGFnZS50c3g/OTBlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgU2luZ2xlUmVwb0NhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGZvcmtzID0gc2VhcmNoUGFyYW1zLmdldChcImZvcmtzXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gc2VhcmNoUGFyYW1zLmdldChcImRlc2NyaXB0aW9uXCIpO1xyXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJjcmVhdGVkQXRcIik7XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjcmVhdGVkQXQgXHJcbiAgICA/IG5ldyBEYXRlKGNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgIH0pXHJcbiAgICA6IFwiVW5rbm93biBEYXRlXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIG10LTEyIGJnLXdoaXRlIHAtMTAgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTZcIj57bmFtZT8uc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpIH08L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgbWItNFwiPntkZXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICBGb3JrczogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+e2ZvcmtzfTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICBDcmVhdGVkIEF0OiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj57Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtOCAgYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB3LVs1cmVtXSB0ZXh0LXdoaXRlIHB5LTMgcHgtNiByb3VuZGVkLWxnIHRleHQteGwgZm9jdXM6b3V0bGluZS1ub25lICBcIj5cclxuICAgICAgICBGb3JrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVJlcG9DYXJkO1xyXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiU2luZ2xlUmVwb0NhcmQiLCJzZWFyY2hQYXJhbXMiLCJuYW1lIiwiZ2V0IiwiZm9ya3MiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRBdCIsImZvcm1hdHRlZERhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2xpY2UiLCJ0b1VwcGVyQ2FzZSIsInAiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SingleRepoCard/page.tsx\n"));

/***/ })

});