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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _util_backendUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/util/backendUrl */ \"(app-pages-browser)/./util/backendUrl.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"(app-pages-browser)/./app/components/Loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session) {\n            const userProfile = async ()=>{\n                setLoading(true);\n                try {\n                    const id = session.user.id;\n                    const result = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_util_backendUrl__WEBPACK_IMPORTED_MODULE_1__.backend_url, \"/api/profile\"), {\n                        id\n                    });\n                    if (result.data.status === 200) {\n                        setProfile(result.data.message);\n                    }\n                } catch (error) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please try again later\");\n                } finally{\n                    setLoading(false);\n                }\n            };\n            userProfile();\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-gray-100\",\n        children: !session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Please sign in first\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg\",\n            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-6\",\n                        children: \"User Profile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 43\n                            }, undefined),\n                            \" \",\n                            //@ts-ignore\n                            session.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 43\n                            }, undefined),\n                            \" \",\n                            //@ts-ignore\n                            session.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-yellow-300\",\n                        children: \"Only 10 repositories are selected by default\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Repositories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined),\n                    profile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-4\",\n                        children: profile.map((repo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"p-4 border rounded-lg shadow-sm bg-gray-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-lg font-bold\",\n                                        children: repo.name.slice(0, 1).toUpperCase() + repo.name.slice(1)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Forks:\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 46\n                                            }, undefined),\n                                            \" \",\n                                            repo.forks\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Created At:\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 46\n                                            }, undefined),\n                                            \" \",\n                                            new Date(repo.createdAt).toLocaleDateString()\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No repositories found.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"5kGVxj/JKHNYBoCMRu/2MeGsD/U=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNnRDtBQUN0QjtBQUNtQjtBQUNNO0FBQ2Y7QUFDTTtBQVExQyxNQUFNUSxjQUFjOztJQUNsQixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHUiwyREFBVUE7SUFDcEMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFtQjtJQUN6RCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sU0FBUztZQUNYLE1BQU1LLGNBQWM7Z0JBQ2xCRCxXQUFXO2dCQUNYLElBQUk7b0JBQ0YsTUFBTUUsS0FBS04sUUFBUU8sSUFBSSxDQUFDRCxFQUFFO29CQUMxQixNQUFNRSxTQUFTLE1BQU1qQiw2Q0FBS0EsQ0FBQ2tCLElBQUksQ0FBQyxHQUFlLE9BQVpuQix5REFBV0EsRUFBQyxpQkFBZTt3QkFBRWdCO29CQUFHO29CQUNuRSxJQUFJRSxPQUFPVCxJQUFJLENBQUNXLE1BQU0sS0FBSyxLQUFLO3dCQUM5QlIsV0FBV00sT0FBT1QsSUFBSSxDQUFDWSxPQUFPO29CQUNoQztnQkFDRixFQUFFLE9BQU9DLE9BQU87b0JBQ2RoQix1REFBS0EsQ0FBQ2dCLEtBQUssQ0FBQztnQkFDZCxTQUFVO29CQUNSUixXQUFXO2dCQUNiO1lBQ0Y7WUFDQUM7UUFDRjtJQUNGLEdBQUc7UUFBQ0w7S0FBUTtJQUVaLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNaLENBQUNkLHdCQUNBLDhEQUFDYTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7Ozs7Ozs7c0NBRzFDLDhEQUFDRDtZQUFJQyxXQUFVO3NCQUNaWCx3QkFDQyw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQiwwREFBTUE7Ozs7Ozs7OzswQ0FHVCw4REFBQ2dCOztrQ0FDQyw4REFBQ0U7d0JBQUdELFdBQVU7a0NBQTBCOzs7Ozs7a0NBQ3hDLDhEQUFDRTt3QkFBRUYsV0FBVTs7MENBQWUsOERBQUNHOzBDQUFPOzs7Ozs7NEJBQWtCOzRCQUN0RCxZQUFZOzRCQUNaakIsUUFBUU8sSUFBSSxDQUFDVyxJQUFJOzs7Ozs7O2tDQUNqQiw4REFBQ0Y7d0JBQUVGLFdBQVU7OzBDQUFlLDhEQUFDRzswQ0FBTzs7Ozs7OzRCQUFlOzRCQUNuRCxZQUFZOzRCQUNaakIsUUFBUU8sSUFBSSxDQUFDWSxLQUFLOzs7Ozs7O2tDQUNKLDhEQUFDSDt3QkFBRUYsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDckQsOERBQUNNO3dCQUFHTixXQUFVO2tDQUE2Qjs7Ozs7O29CQUUxQ2Isd0JBQ0MsOERBQUNvQjt3QkFBR1AsV0FBVTtrQ0FDWGIsUUFBUXFCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNDO2dDQUFlWCxXQUFVOztrREFDeEIsOERBQUNZO3dDQUFHWixXQUFVO2tEQUFxQlMsS0FBS0wsSUFBSSxDQUFDUyxLQUFLLENBQUMsR0FBRSxHQUFHQyxXQUFXLEtBQUtMLEtBQUtMLElBQUksQ0FBQ1MsS0FBSyxDQUFDOzs7Ozs7a0RBQ3hGLDhEQUFDWDt3Q0FBRUYsV0FBVTs7MERBQVUsOERBQUNHOzBEQUFPOzs7Ozs7NENBQWU7NENBQUVNLEtBQUtNLEtBQUs7Ozs7Ozs7a0RBQzFELDhEQUFDYjt3Q0FBRUYsV0FBVTs7MERBQVUsOERBQUNHOzBEQUFPOzs7Ozs7NENBQW9COzRDQUFFLElBQUlhLEtBQUtQLEtBQUtRLFNBQVMsRUFBRUMsa0JBQWtCOzs7Ozs7OzsrQkFIekZSOzs7Ozs7Ozs7a0RBUWIsOERBQUNSO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CO0dBcEVNbEI7O1FBQ3NCTix1REFBVUE7OztLQURoQ007QUFzRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2ZpbGUvcGFnZS50c3g/MWY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gJ0AvdXRpbC9iYWNrZW5kVXJsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvZmlsZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGZvcmtzOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPFByb2ZpbGVbXSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGlkID0gc2Vzc2lvbi51c2VyLmlkO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYWNrZW5kX3VybH0vYXBpL3Byb2ZpbGVgLCB7IGlkIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGUocmVzdWx0LmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB1c2VyUHJvZmlsZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICB7IXNlc3Npb24gPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+UGxlYXNlIHNpZ24gaW4gZmlyc3Q8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTN4bCBwLTggYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTZcIj5Vc2VyIFByb2ZpbGU8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPjxzdHJvbmc+VXNlcm5hbWU6PC9zdHJvbmc+IHtcclxuICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi02XCI+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4ge1xyXG4gICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgIHNlc3Npb24udXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQteWVsbG93LTMwMFwiPk9ubHkgMTAgcmVwb3NpdG9yaWVzIGFyZSBzZWxlY3RlZCBieSBkZWZhdWx0PC9wPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlJlcG9zaXRvcmllczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIHtwcm9maWxlID8gKFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5tYXAoKHJlcG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZC1sZyBzaGFkb3ctc20gYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e3JlcG8ubmFtZS5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyByZXBvLm5hbWUuc2xpY2UoMSl9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj48c3Ryb25nPkZvcmtzOjwvc3Ryb25nPiB7cmVwby5mb3Jrc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+PHN0cm9uZz5DcmVhdGVkIEF0Ojwvc3Ryb25nPiB7bmV3IERhdGUocmVwby5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwPk5vIHJlcG9zaXRvcmllcyBmb3VuZC48L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xyXG4iXSwibmFtZXMiOlsiYmFja2VuZF91cmwiLCJheGlvcyIsInVzZVNlc3Npb24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJMb2FkZXIiLCJQcm9maWxlUGFnZSIsImRhdGEiLCJzZXNzaW9uIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJQcm9maWxlIiwiaWQiLCJ1c2VyIiwicmVzdWx0IiwicG9zdCIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInN0cm9uZyIsIm5hbWUiLCJlbWFpbCIsImgzIiwidWwiLCJtYXAiLCJyZXBvIiwiaW5kZXgiLCJsaSIsImg0Iiwic2xpY2UiLCJ0b1VwcGVyQ2FzZSIsImZvcmtzIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/page.tsx\n"));

/***/ })

});