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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SingleRepoCard = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const name = searchParams.get(\"name\");\n    const forks = searchParams.get(\"forks\");\n    const description = searchParams.get(\"description\");\n    const createdAt = searchParams.get(\"createdAt\");\n    const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString(\"en-US\", {\n        year: \"numeric\",\n        month: \"long\",\n        day: \"numeric\",\n        hour: \"2-digit\",\n        minute: \"2-digit\"\n    }) : \"Unknown Date\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto mt-12 bg-white p-10 rounded-lg shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-gray-800 mb-6\",\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg text-gray-700 mb-4\",\n                children: description\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-lg\",\n                        children: [\n                            \"Forks: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-gray-800\",\n                                children: forks\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 18\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-lg\",\n                        children: [\n                            \"Created At: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-gray-800\",\n                                children: formattedDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-8  bg-green-600 hover:bg-green-700 w-[5rem] text-white py-3 px-6 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-400\",\n                children: \"Fork\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleRepoCard, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = SingleRepoCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleRepoCard);\nvar _c;\n$RefreshReg$(_c, \"SingleRepoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TaW5nbGVSZXBvQ2FyZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUNrRDtBQUVsRCxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxPQUFPRCxhQUFhRSxHQUFHLENBQUM7SUFDOUIsTUFBTUMsUUFBUUgsYUFBYUUsR0FBRyxDQUFDO0lBQy9CLE1BQU1FLGNBQWNKLGFBQWFFLEdBQUcsQ0FBQztJQUNyQyxNQUFNRyxZQUFZTCxhQUFhRSxHQUFHLENBQUM7SUFFbkMsTUFBTUksZ0JBQWdCRCxZQUNsQixJQUFJRSxLQUFLRixXQUFXRyxrQkFBa0IsQ0FBQyxTQUFTO1FBQzlDQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLFFBQVE7SUFDVixLQUNBO0lBRUoscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUNkOzs7Ozs7MEJBQ3ZELDhEQUFDZ0I7Z0JBQUVGLFdBQVU7MEJBQThCWDs7Ozs7OzBCQUUzQyw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTs7NEJBQXdCOzBDQUM1Qiw4REFBQ0c7Z0NBQUtILFdBQVU7MENBQStCWjs7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ2M7d0JBQUVGLFdBQVU7OzRCQUF3QjswQ0FDdkIsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUErQlQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0QsOERBQUNhO2dCQUFPSixXQUFVOzBCQUE2STs7Ozs7Ozs7Ozs7O0FBS3JLO0dBcENNaEI7O1FBQ2lCRCw0REFBZUE7OztLQURoQ0M7QUFzQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1NpbmdsZVJlcG9DYXJkL3BhZ2UudHN4PzkwZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IFNpbmdsZVJlcG9DYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IG5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibmFtZVwiKTtcclxuICBjb25zdCBmb3JrcyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJmb3Jrc1wiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHNlYXJjaFBhcmFtcy5nZXQoXCJkZXNjcmlwdGlvblwiKTtcclxuICBjb25zdCBjcmVhdGVkQXQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY3JlYXRlZEF0XCIpO1xyXG5cclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3JlYXRlZEF0IFxyXG4gICAgPyBuZXcgRGF0ZShjcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICB9KVxyXG4gICAgOiBcIlVua25vd24gRGF0ZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBtdC0xMiBiZy13aGl0ZSBwLTEwIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi02XCI+e25hbWV9PC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwIG1iLTRcIj57ZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgRm9ya3M6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPntmb3Jrc308L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgQ3JlYXRlZCBBdDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+e2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTggIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgdy1bNXJlbV0gdGV4dC13aGl0ZSBweS0zIHB4LTYgcm91bmRlZC1sZyB0ZXh0LXhsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMFwiPlxyXG4gICAgICAgIEZvcmtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUmVwb0NhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZWFyY2hQYXJhbXMiLCJTaW5nbGVSZXBvQ2FyZCIsInNlYXJjaFBhcmFtcyIsIm5hbWUiLCJnZXQiLCJmb3JrcyIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0IiwiZm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SingleRepoCard/page.tsx\n"));

/***/ })

});