"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./app/profile/page.tsx":
/*!******************************!*\
  !*** ./app/profile/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _util_backendUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/util/backendUrl */ \"(app-pages-browser)/./util/backendUrl.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"(app-pages-browser)/./app/components/Loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session) {\n            const userProfile = async ()=>{\n                setLoading(true);\n                try {\n                    const id = session.user.id;\n                    const result = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_util_backendUrl__WEBPACK_IMPORTED_MODULE_1__.backend_url, \"/api/profile\"), {\n                        id\n                    });\n                    if (result.data.status === 200) {\n                        setProfile(result.data.message);\n                    }\n                } catch (error) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please try again later\");\n                } finally{\n                    setLoading(false);\n                }\n            };\n            userProfile();\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-gray-100\",\n        children: !session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Please sign in first\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg\",\n            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-6\",\n                        children: \"User Profile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 43\n                            }, undefined),\n                            \" \",\n                            //@ts-ignore\n                            session.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 43\n                            }, undefined),\n                            \" \",\n                            //@ts-ignore\n                            session.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Repositories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-yellow-300\",\n                        children: \"Only 10 repositories are selected by default\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 15\n                    }, undefined),\n                    profile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-4\",\n                        children: profile.map((repo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"p-4 border rounded-lg shadow-sm bg-gray-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-lg font-bold\",\n                                        children: repo.name.slice(0, 1).toUpperCase() + repo.name.slice(1)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Forks:\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 46\n                                            }, undefined),\n                                            \" \",\n                                            repo.forks\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Created At:\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 46\n                                            }, undefined),\n                                            \" \",\n                                            new Date(repo.createdAt).toLocaleDateString()\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No repositories found.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"5kGVxj/JKHNYBoCMRu/2MeGsD/U=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNnRDtBQUN0QjtBQUNtQjtBQUNNO0FBQ2Y7QUFDTTtBQVExQyxNQUFNUSxjQUFjOztJQUNsQixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHUiwyREFBVUE7SUFDcEMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFtQjtJQUN6RCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sU0FBUztZQUNYLE1BQU1LLGNBQWM7Z0JBQ2xCRCxXQUFXO2dCQUNYLElBQUk7b0JBQ0YsTUFBTUUsS0FBS04sUUFBUU8sSUFBSSxDQUFDRCxFQUFFO29CQUMxQixNQUFNRSxTQUFTLE1BQU1qQiw2Q0FBS0EsQ0FBQ2tCLElBQUksQ0FBQyxHQUFlLE9BQVpuQix5REFBV0EsRUFBQyxpQkFBZTt3QkFBRWdCO29CQUFHO29CQUNuRSxJQUFJRSxPQUFPVCxJQUFJLENBQUNXLE1BQU0sS0FBSyxLQUFLO3dCQUM5QlIsV0FBV00sT0FBT1QsSUFBSSxDQUFDWSxPQUFPO29CQUNoQztnQkFDRixFQUFFLE9BQU9DLE9BQU87b0JBQ2RoQix1REFBS0EsQ0FBQ2dCLEtBQUssQ0FBQztnQkFDZCxTQUFVO29CQUNSUixXQUFXO2dCQUNiO1lBQ0Y7WUFDQUM7UUFDRjtJQUNGLEdBQUc7UUFBQ0w7S0FBUTtJQUVaLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNaLENBQUNkLHdCQUNBLDhEQUFDYTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7Ozs7Ozs7c0NBRzFDLDhEQUFDRDtZQUFJQyxXQUFVO3NCQUNaWCx3QkFDQyw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQiwwREFBTUE7Ozs7Ozs7OzswQ0FHVCw4REFBQ2dCOztrQ0FDQyw4REFBQ0U7d0JBQUdELFdBQVU7a0NBQTBCOzs7Ozs7a0NBQ3hDLDhEQUFDRTt3QkFBRUYsV0FBVTs7MENBQWUsOERBQUNHOzBDQUFPOzs7Ozs7NEJBQWtCOzRCQUN0RCxZQUFZOzRCQUNaakIsUUFBUU8sSUFBSSxDQUFDVyxJQUFJOzs7Ozs7O2tDQUNqQiw4REFBQ0Y7d0JBQUVGLFdBQVU7OzBDQUFlLDhEQUFDRzswQ0FBTzs7Ozs7OzRCQUFlOzRCQUNuRCxZQUFZOzRCQUNaakIsUUFBUU8sSUFBSSxDQUFDWSxLQUFLOzs7Ozs7O2tDQUVsQiw4REFBQ0M7d0JBQUdOLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzNDLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBMEI7Ozs7OztvQkFDdENiLHdCQUNDLDhEQUFDb0I7d0JBQUdQLFdBQVU7a0NBQ1hiLFFBQVFxQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDQztnQ0FBZVgsV0FBVTs7a0RBQ3hCLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBcUJTLEtBQUtMLElBQUksQ0FBQ1MsS0FBSyxDQUFDLEdBQUUsR0FBR0MsV0FBVyxLQUFLTCxLQUFLTCxJQUFJLENBQUNTLEtBQUssQ0FBQzs7Ozs7O2tEQUN4Riw4REFBQ1g7d0NBQUVGLFdBQVU7OzBEQUFVLDhEQUFDRzswREFBTzs7Ozs7OzRDQUFlOzRDQUFFTSxLQUFLTSxLQUFLOzs7Ozs7O2tEQUMxRCw4REFBQ2I7d0NBQUVGLFdBQVU7OzBEQUFVLDhEQUFDRzswREFBTzs7Ozs7OzRDQUFvQjs0Q0FBRSxJQUFJYSxLQUFLUCxLQUFLUSxTQUFTLEVBQUVDLGtCQUFrQjs7Ozs7Ozs7K0JBSHpGUjs7Ozs7Ozs7O2tEQVFiLDhEQUFDUjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQjtHQXBFTWxCOztRQUNzQk4sdURBQVVBOzs7S0FEaENNO0FBc0VOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4PzFmODIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgYmFja2VuZF91cmwgfSBmcm9tICdAL3V0aWwvYmFja2VuZFVybCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb2ZpbGUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmb3Jrczogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZTxQcm9maWxlW10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBpZCA9IHNlc3Npb24udXNlci5pZDtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFja2VuZF91cmx9L2FwaS9wcm9maWxlYCwgeyBpZCB9KTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKHJlc3VsdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdXNlclByb2ZpbGUoKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS0xMDBcIj5cclxuICAgICAgeyFzZXNzaW9uID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlBsZWFzZSBzaWduIGluIGZpcnN0PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0zeGwgcC04IGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi02XCI+VXNlciBQcm9maWxlPC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTRcIj48c3Ryb25nPlVzZXJuYW1lOjwvc3Ryb25nPiB7XHJcbiAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNlwiPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IHtcclxuICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlJlcG9zaXRvcmllczwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXllbGxvdy0zMDBcIj5Pbmx5IDEwIHJlcG9zaXRvcmllcyBhcmUgc2VsZWN0ZWQgYnkgZGVmYXVsdDwvcD5cclxuICAgICAgICAgICAgICB7cHJvZmlsZSA/IChcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUubWFwKChyZXBvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWQtbGcgc2hhZG93LXNtIGJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPntyZXBvLm5hbWUuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgcmVwby5uYW1lLnNsaWNlKDEpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+PHN0cm9uZz5Gb3Jrczo8L3N0cm9uZz4ge3JlcG8uZm9ya3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPjxzdHJvbmc+Q3JlYXRlZCBBdDo8L3N0cm9uZz4ge25ldyBEYXRlKHJlcG8uY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cD5ObyByZXBvc2l0b3JpZXMgZm91bmQuPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIl0sIm5hbWVzIjpbImJhY2tlbmRfdXJsIiwiYXhpb3MiLCJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiTG9hZGVyIiwiUHJvZmlsZVBhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VyUHJvZmlsZSIsImlkIiwidXNlciIsInJlc3VsdCIsInBvc3QiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJzdHJvbmciLCJuYW1lIiwiZW1haWwiLCJoMyIsInVsIiwibWFwIiwicmVwbyIsImluZGV4IiwibGkiLCJoNCIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJmb3JrcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/page.tsx\n"));

/***/ })

});