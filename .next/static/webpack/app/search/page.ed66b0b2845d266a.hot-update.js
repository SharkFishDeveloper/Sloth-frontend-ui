"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./app/components/RepoCard.tsx":
/*!*************************************!*\
  !*** ./app/components/RepoCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\nconst RepoCard = (repository)=>{\n    const { name, forks, description, createdAt, creatorName } = repository;\n    const capitalizeFirstLetter = (str)=>{\n        return str.charAt(0).toUpperCase() + str.slice(1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[30rem] mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition duration-500 hover:shadow-lg hover:scale-105\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 py-4 bg-blue-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold text-gray-800\",\n                        children: capitalizeFirstLetter(name)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600\",\n                        children: [\n                            \"By \",\n                            capitalizeFirstLetter(creatorName)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700 text-sm mb-4\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Forks:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \" \",\n                                    forks\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Created:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \" \",\n                                    new Date(createdAt).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-3 hover:scale-105 transition-all\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full text-white bg-black font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 hover:text-gray-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: {\n                            pathname: \"/SingleRepoCard\",\n                            query: {\n                                name,\n                                description,\n                                forks,\n                                createdAt,\n                                creatorName\n                            }\n                        },\n                        children: \"View details\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = RepoCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoCard);\nvar _c;\n$RefreshReg$(_c, \"RepoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JlcG9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFSTtBQUU3QixNQUFNRSxXQUFXLENBQUNDO0lBQ2QsTUFBTSxFQUFDQyxJQUFJLEVBQUNDLEtBQUssRUFBQ0MsV0FBVyxFQUFDQyxTQUFTLEVBQUNDLFdBQVcsRUFBQyxHQUFHTDtJQUd2RCxNQUFNTSx3QkFBd0IsQ0FBQ0M7UUFDM0IsT0FBT0EsSUFBSUMsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0YsSUFBSUcsS0FBSyxDQUFDO0lBQ25EO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUNYTixzQkFBc0JMOzs7Ozs7a0NBRXpCLDhEQUFDYTt3QkFBRUYsV0FBVTs7NEJBQXdCOzRCQUMvQk4sc0JBQXNCRDs7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQThCVDs7Ozs7O2tDQUMzQyw4REFBQ1E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBS0gsV0FBVTs7a0RBQ2QsOERBQUNJO2tEQUFPOzs7Ozs7b0NBQWU7b0NBQUVkOzs7Ozs7OzBDQUUzQiw4REFBQ2E7Z0NBQUtILFdBQVU7O2tEQUNkLDhEQUFDSTtrREFBTzs7Ozs7O29DQUFpQjtvQ0FBRSxJQUFJQyxLQUFLYixXQUFXYyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXZFLDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ087b0JBQU9QLFdBQVU7OEJBQ2hCLDRFQUFDZCxpREFBSUE7d0JBQ0hzQixNQUFNOzRCQUNKQyxVQUFVOzRCQUNWQyxPQUFPO2dDQUNMckI7Z0NBQ0FFO2dDQUNBRDtnQ0FDQUU7Z0NBQ0FDOzRCQUNGO3dCQUNGO2tDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7S0FqRE1OO0FBbUROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1JlcG9DYXJkLnRzeD82YTFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmVwbyB9IGZyb20gJy4uL3NlYXJjaC9wYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUmVwb0NhcmQgPSAocmVwb3NpdG9yeTpSZXBvKSA9PiB7XHJcbiAgICBjb25zdCB7bmFtZSxmb3JrcyxkZXNjcmlwdGlvbixjcmVhdGVkQXQsY3JlYXRvck5hbWV9ID0gcmVwb3NpdG9yeTtcclxuXHJcblxyXG4gICAgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVszMHJlbV0gbXgtYXV0byBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gbXktNCB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNjYWxlLTEwNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTQgYmctYmx1ZS0xMDBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAge2NhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgQnkge2NhcGl0YWxpemVGaXJzdExldHRlcihjcmVhdG9yTmFtZSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LXNtIG1iLTRcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Gb3Jrczo8L3N0cm9uZz4ge2ZvcmtzfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNyZWF0ZWQ6PC9zdHJvbmc+IHtuZXcgRGF0ZShjcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS0zIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsYWNrIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNDAwIGZvY3VzOnJpbmctb3BhY2l0eS03NSBob3Zlcjp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1NpbmdsZVJlcG9DYXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBmb3JrcyxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWaWV3IGRldGFpbHNcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9DYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJlcG9DYXJkIiwicmVwb3NpdG9yeSIsIm5hbWUiLCJmb3JrcyIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0IiwiY3JlYXRvck5hbWUiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwic3BhbiIsInN0cm9uZyIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJidXR0b24iLCJocmVmIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/RepoCard.tsx\n"));

/***/ })

});