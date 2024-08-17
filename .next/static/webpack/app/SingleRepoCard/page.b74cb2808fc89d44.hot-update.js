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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SingleRepoCard = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const name = searchParams.get(\"name\") || \"\";\n    const forks = searchParams.get(\"forks\");\n    const description = searchParams.get(\"description\") || \"\";\n    const createdAt = searchParams.get(\"createdAt\");\n    const creatorName = searchParams.get(\"creatorName\") || \"\";\n    const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString(\"en-US\", {\n        year: \"numeric\",\n        month: \"long\",\n        day: \"numeric\",\n        hour: \"2-digit\",\n        minute: \"2-digit\"\n    }) : \"Unknown Date\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto mt-12 bg-white p-10 rounded-lg shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-gray-800 mb-6\",\n                children: name.slice(0, 1).toUpperCase() + name.slice(1)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg text-gray-700 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold\",\n                        children: \"Creator -\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \" \",\n                            creatorName.slice(0, 1).toUpperCase() + creatorName.slice(1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg text-gray-700 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold\",\n                        children: \"Description -\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \" \",\n                            description.slice(0, 1).toUpperCase() + description.slice(1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-lg\",\n                        children: [\n                            \"Forks: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-gray-800\",\n                                children: forks\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 18\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-lg\",\n                        children: [\n                            \"Created At: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-gray-800\",\n                                children: formattedDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-8 bg-green-600 hover:bg-green-700 w-[5rem] text-white py-3 px-6 rounded-lg text-xl focus:outline-none justify-center items-center flex\",\n                children: \"Fork\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-500 mt-4 text-center\",\n                children: [\n                    \"By clicking \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-green-600 font-bold\",\n                        children: \"Fork\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined),\n                    \" you will fork (download) this repository.\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\SingleRepoCard\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleRepoCard, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = SingleRepoCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleRepoCard);\nvar _c;\n$RefreshReg$(_c, \"SingleRepoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TaW5nbGVSZXBvQ2FyZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUNrRDtBQUVsRCxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxPQUFPRCxhQUFhRSxHQUFHLENBQUMsV0FBVztJQUN6QyxNQUFNQyxRQUFRSCxhQUFhRSxHQUFHLENBQUM7SUFDL0IsTUFBTUUsY0FBY0osYUFBYUUsR0FBRyxDQUFDLGtCQUFrQjtJQUN2RCxNQUFNRyxZQUFZTCxhQUFhRSxHQUFHLENBQUM7SUFDbkMsTUFBTUksY0FBY04sYUFBYUUsR0FBRyxDQUFDLGtCQUFrQjtJQUV2RCxNQUFNSyxnQkFBZ0JGLFlBQ2xCLElBQUlHLEtBQUtILFdBQVdJLGtCQUFrQixDQUFDLFNBQVM7UUFDOUNDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsUUFBUTtJQUNWLEtBQ0E7SUFFSixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUNYZixLQUFLaUIsS0FBSyxDQUFDLEdBQUcsR0FBR0MsV0FBVyxLQUFLbEIsS0FBS2lCLEtBQUssQ0FBQzs7Ozs7OzBCQUcvQyw4REFBQ0U7Z0JBQUVKLFdBQVU7O2tDQUNYLDhEQUFDSzt3QkFBS0wsV0FBVTtrQ0FBZ0I7Ozs7OztrQ0FDaEMsOERBQUNLOzs0QkFBSzs0QkFBRWYsWUFBWVksS0FBSyxDQUFDLEdBQUcsR0FBR0MsV0FBVyxLQUFLYixZQUFZWSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7MEJBR3BFLDhEQUFDRTtnQkFBRUosV0FBVTs7a0NBQ1gsOERBQUNLO3dCQUFLTCxXQUFVO2tDQUFnQjs7Ozs7O2tDQUNoQyw4REFBQ0s7OzRCQUFLOzRCQUFFakIsWUFBWWMsS0FBSyxDQUFDLEdBQUcsR0FBR0MsV0FBVyxLQUFLZixZQUFZYyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7MEJBR3BFLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFFSixXQUFVOzs0QkFBd0I7MENBQzVCLDhEQUFDSztnQ0FBS0wsV0FBVTswQ0FBK0JiOzs7Ozs7Ozs7Ozs7a0NBRXhELDhEQUFDaUI7d0JBQUVKLFdBQVU7OzRCQUF3QjswQ0FDdkIsOERBQUNLO2dDQUFLTCxXQUFVOzBDQUErQlQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0QsOERBQUNlO2dCQUFPTixXQUFVOzBCQUE0STs7Ozs7OzBCQUk5Siw4REFBQ0k7Z0JBQUVKLFdBQVU7O29CQUF5QztrQ0FDeEMsOERBQUNLO3dCQUFLTCxXQUFVO2tDQUEyQjs7Ozs7O29CQUFXOzs7Ozs7Ozs7Ozs7O0FBSTFFO0dBcERNakI7O1FBQ2lCRCw0REFBZUE7OztLQURoQ0M7QUFzRE4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1NpbmdsZVJlcG9DYXJkL3BhZ2UudHN4PzkwZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5jb25zdCBTaW5nbGVSZXBvQ2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBuYW1lID0gc2VhcmNoUGFyYW1zLmdldChcIm5hbWVcIikgfHwgXCJcIjtcclxuICBjb25zdCBmb3JrcyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJmb3Jrc1wiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHNlYXJjaFBhcmFtcy5nZXQoXCJkZXNjcmlwdGlvblwiKSB8fCBcIlwiO1xyXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJjcmVhdGVkQXRcIik7XHJcbiAgY29uc3QgY3JlYXRvck5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY3JlYXRvck5hbWVcIikgfHwgXCJcIjtcclxuXHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGNyZWF0ZWRBdCBcclxuICAgID8gbmV3IERhdGUoY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgfSlcclxuICAgIDogXCJVbmtub3duIERhdGVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gbXQtMTIgYmctd2hpdGUgcC0xMCByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItNlwiPlxyXG4gICAgICAgIHtuYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpfVxyXG4gICAgICA8L2gxPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwIG1iLTRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q3JlYXRvciAtPC9zcGFuPiBcclxuICAgICAgICA8c3Bhbj4ge2NyZWF0b3JOYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBjcmVhdG9yTmFtZS5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTcwMCBtYi00XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkRlc2NyaXB0aW9uIC08L3NwYW4+IFxyXG4gICAgICAgIDxzcGFuPiB7ZGVzY3JpcHRpb24uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIGRlc2NyaXB0aW9uLnNsaWNlKDEpfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgRm9ya3M6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPntmb3Jrc308L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgQ3JlYXRlZCBBdDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+e2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTggYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB3LVs1cmVtXSB0ZXh0LXdoaXRlIHB5LTMgcHgtNiByb3VuZGVkLWxnIHRleHQteGwgZm9jdXM6b3V0bGluZS1ub25lIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4XCI+XHJcbiAgICAgICAgRm9ya1xyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtdC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgQnkgY2xpY2tpbmcgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgZm9udC1ib2xkXCI+Rm9yazwvc3Bhbj4geW91IHdpbGwgZm9yayAoZG93bmxvYWQpIHRoaXMgcmVwb3NpdG9yeS5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVJlcG9DYXJkO1xyXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiU2luZ2xlUmVwb0NhcmQiLCJzZWFyY2hQYXJhbXMiLCJuYW1lIiwiZ2V0IiwiZm9ya3MiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRBdCIsImNyZWF0b3JOYW1lIiwiZm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwicCIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SingleRepoCard/page.tsx\n"));

/***/ })

});