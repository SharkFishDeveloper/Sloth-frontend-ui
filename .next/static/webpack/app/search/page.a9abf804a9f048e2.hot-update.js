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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\nconst RepoCard = (repository)=>{\n    const { name, forks, description, createdAt, creatorName, pullRequest } = repository;\n    const capitalizeFirstLetter = (str)=>{\n        return str.charAt(0).toUpperCase() + str.slice(1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[30rem] mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition duration-500 hover:shadow-lg hover:scale-105\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 py-4 bg-blue-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold text-gray-800\",\n                        children: capitalizeFirstLetter(name)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600\",\n                        children: [\n                            \"By \",\n                            capitalizeFirstLetter(creatorName)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700 text-sm mb-4\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Forks:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \" \",\n                                    forks\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Created:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \" \",\n                                    new Date(createdAt).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-3 hover:scale-105 transition-all\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full text-white bg-black font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 hover:text-gray-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: {\n                            pathname: \"/SingleRepoCard\",\n                            query: {\n                                name,\n                                description,\n                                forks,\n                                createdAt,\n                                creatorName\n                            }\n                        },\n                        children: \"View details\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\components\\\\RepoCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = RepoCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoCard);\nvar _c;\n$RefreshReg$(_c, \"RepoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JlcG9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFSTtBQUU3QixNQUFNRSxXQUFXLENBQUNDO0lBQ2QsTUFBTSxFQUFDQyxJQUFJLEVBQUNDLEtBQUssRUFBQ0MsV0FBVyxFQUFDQyxTQUFTLEVBQUNDLFdBQVcsRUFBQ0MsV0FBVyxFQUFDLEdBQUdOO0lBR25FLE1BQU1PLHdCQUF3QixDQUFDQztRQUMzQixPQUFPQSxJQUFJQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixJQUFJRyxLQUFLLENBQUM7SUFDbkQ7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQ1hOLHNCQUFzQk47Ozs7OztrQ0FFekIsOERBQUNjO3dCQUFFRixXQUFVOzs0QkFBd0I7NEJBQy9CTixzQkFBc0JGOzs7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ087Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBOEJWOzs7Ozs7a0NBQzNDLDhEQUFDUzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLSCxXQUFVOztrREFDZCw4REFBQ0k7a0RBQU87Ozs7OztvQ0FBZTtvQ0FBRWY7Ozs7Ozs7MENBRTNCLDhEQUFDYztnQ0FBS0gsV0FBVTs7a0RBQ2QsOERBQUNJO2tEQUFPOzs7Ozs7b0NBQWlCO29DQUFFLElBQUlDLEtBQUtkLFdBQVdlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkUsOERBQUNQO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTztvQkFBT1AsV0FBVTs4QkFDaEIsNEVBQUNmLGlEQUFJQTt3QkFDSHVCLE1BQU07NEJBQ0pDLFVBQVU7NEJBQ1ZDLE9BQU87Z0NBQ0x0QjtnQ0FDQUU7Z0NBQ0FEO2dDQUNBRTtnQ0FDQUM7NEJBQ0Y7d0JBQ0Y7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZjtLQWpETU47QUFtRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUmVwb0NhcmQudHN4PzZhMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSZXBvIH0gZnJvbSAnLi4vc2VhcmNoL3BhZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBSZXBvQ2FyZCA9IChyZXBvc2l0b3J5OlJlcG8pID0+IHtcclxuICAgIGNvbnN0IHtuYW1lLGZvcmtzLGRlc2NyaXB0aW9uLGNyZWF0ZWRBdCxjcmVhdG9yTmFtZSxwdWxsUmVxdWVzdH0gPSByZXBvc2l0b3J5O1xyXG5cclxuXHJcbiAgICBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzMwcmVtXSBteC1hdXRvIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBteS00IHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6c2NhbGUtMTA1XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNCBiZy1ibHVlLTEwMFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICBCeSB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGNyZWF0b3JOYW1lKX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtc20gbWItNFwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZvcmtzOjwvc3Ryb25nPiB7Zm9ya3N9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q3JlYXRlZDo8L3N0cm9uZz4ge25ldyBEYXRlKGNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTMgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmxhY2sgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6cmluZy1vcGFjaXR5LTc1IGhvdmVyOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvU2luZ2xlUmVwb0NhcmRcIixcclxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmtzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZpZXcgZGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb0NhcmQiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiUmVwb0NhcmQiLCJyZXBvc2l0b3J5IiwibmFtZSIsImZvcmtzIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkQXQiLCJjcmVhdG9yTmFtZSIsInB1bGxSZXF1ZXN0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsInNwYW4iLCJzdHJvbmciLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiYnV0dG9uIiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/RepoCard.tsx\n"));

/***/ })

});