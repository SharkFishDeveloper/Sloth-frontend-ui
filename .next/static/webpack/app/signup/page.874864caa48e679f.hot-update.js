"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./app/signup/page.tsx":
/*!*****************************!*\
  !*** ./app/signup/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _util_backendUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/util/backendUrl */ \"(app-pages-browser)/./util/backendUrl.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"(app-pages-browser)/./app/components/Loader.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Signup = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        setLoading(true);\n        e.preventDefault();\n        setError(null);\n        try {\n            if (username.length < 6 || password.length < 6) {\n                return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Name or password is too small \");\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(_util_backendUrl__WEBPACK_IMPORTED_MODULE_3__.backend_url, \"/api/signup\"), {\n                email,\n                password,\n                username\n            });\n            if (response.data.status === 200) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Signup successfull !!\");\n                await new Promise((resolve)=>setTimeout(resolve, 400));\n                return await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)();\n            } else if (response.data.status === 300) {\n                return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"User already exists !!\");\n            } else {\n                console.log(response.data.message);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"An unexpected error occurred\");\n                return setError(\"An unexpected error occurred\");\n            }\n        } catch (error) {\n            console.log(error);\n            return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"An unexpected error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-8 bg-white shadow-lg rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold mb-4\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-4\",\n                    children: [\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-red-500 mb-4\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-green-500 mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    name: \"username\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    required: true,\n                                    className: \"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true,\n                                    className: \"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true,\n                                    className: \"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Code-Forge\\\\sloth-hub-frontend\\\\app\\\\signup\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Signup, \"hrfXeU+UJEcdgEr7ATC+7qIMH2Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zaWdudXAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNpQztBQUNXO0FBQ2xCO0FBQ3NCO0FBQ1o7QUFDTTtBQUNEO0FBRXpDLE1BQU1PLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFjO0lBQ2hELE1BQU1nQixTQUFTZiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDZ0IsU0FBUUMsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFFdEMsTUFBTW1CLGVBQWUsT0FBT0M7UUFDMUJGLFdBQVc7UUFDWEUsRUFBRUMsY0FBYztRQUNoQk4sU0FBUztRQUNULElBQUk7WUFDRixJQUFJUCxTQUFTYyxNQUFNLEdBQUcsS0FBTVYsU0FBU1UsTUFBTSxHQUFHLEdBQUU7Z0JBQzlDLE9BQU9sQix1REFBS0EsQ0FBQ1UsS0FBSyxDQUFDO1lBQ3JCO1lBQ0EsTUFBTVMsV0FBVyxNQUFNckIsNkNBQUtBLENBQUNzQixJQUFJLENBQUMsR0FBZSxPQUFackIseURBQVdBLEVBQUMsZ0JBQWE7Z0JBQzVETztnQkFBTUU7Z0JBQVNKO1lBQ2pCO1lBQ0EsSUFBSWUsU0FBU0UsSUFBSSxDQUFDQyxNQUFNLEtBQUcsS0FBSztnQkFDOUJ0Qix1REFBS0EsQ0FBQ3VCLE9BQU8sQ0FBQztnQkFDZCxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBUztnQkFDbkQsT0FBTyxNQUFNdkIsdURBQU1BO1lBQ3JCLE9BQ0ssSUFBSWlCLFNBQVNFLElBQUksQ0FBQ0MsTUFBTSxLQUFHLEtBQUs7Z0JBQ25DLE9BQU90Qix1REFBS0EsQ0FBQ1UsS0FBSyxDQUFDO1lBQ3JCLE9BQVE7Z0JBQ05pQixRQUFRQyxHQUFHLENBQUNULFNBQVNFLElBQUksQ0FBQ1EsT0FBTztnQkFDakM3Qix1REFBS0EsQ0FBQ1UsS0FBSyxDQUFDO2dCQUNaLE9BQU9DLFNBQVM7WUFDbEI7UUFDRixFQUFFLE9BQU9ELE9BQU87WUFDWmlCLFFBQVFDLEdBQUcsQ0FBQ2xCO1lBQ1osT0FBT1YsdURBQUtBLENBQUNVLEtBQUssQ0FBQztRQUN2QixTQUFRO1lBQ0pJLFdBQVc7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3hDLDhEQUFDRTtvQkFBS0MsVUFBVW5CO29CQUFjZ0IsV0FBVTs7d0JBQ3JDckIsdUJBQ0MsOERBQUNvQjs0QkFBSUMsV0FBVTtzQ0FDWnJCOzs7Ozs7d0JBR0pHLHlCQUNDLDhEQUFDaUI7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUM5QiwwREFBTUE7Ozs7Ozs7Ozs7c0NBR1gsOERBQUM2Qjs7OENBQ0MsOERBQUNLO29DQUFNQyxTQUFRO29DQUFXTCxXQUFVOzhDQUEwQzs7Ozs7OzhDQUc5RSw4REFBQ007b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLE9BQU9yQztvQ0FDUHNDLFVBQVUsQ0FBQzFCLElBQU1YLFlBQVlXLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7b0NBQzNDRyxRQUFRO29DQUNSYixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzs4Q0FDQyw4REFBQ0s7b0NBQU1DLFNBQVE7b0NBQVFMLFdBQVU7OENBQTBDOzs7Ozs7OENBRzNFLDhEQUFDTTtvQ0FDQ0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsT0FBT25DO29DQUNQb0MsVUFBVSxDQUFDMUIsSUFBTVQsU0FBU1MsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDeENHLFFBQVE7b0NBQ1JiLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7OzhDQUNDLDhEQUFDSztvQ0FBTUMsU0FBUTtvQ0FBV0wsV0FBVTs4Q0FBMEM7Ozs7Ozs4Q0FHOUUsOERBQUNNO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMQyxPQUFPakM7b0NBQ1BrQyxVQUFVLENBQUMxQixJQUFNUCxZQUFZTyxFQUFFMkIsTUFBTSxDQUFDRixLQUFLO29DQUMzQ0csUUFBUTtvQ0FDUmIsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDYzs0QkFDQ1AsTUFBSzs0QkFDTFAsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTFHTTVCOztRQUtXTixzREFBU0E7OztLQUxwQk07QUE0R04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NpZ251cC9wYWdlLnRzeD83Mjc5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gJ0AvdXRpbC9iYWNrZW5kVXJsJztcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nfG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTphbnkpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmKCB1c2VybmFtZS5sZW5ndGggPCA2ICB8fCBwYXNzd29yZC5sZW5ndGggPCA2KXtcclxuICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoXCJOYW1lIG9yIHBhc3N3b3JkIGlzIHRvbyBzbWFsbCBcIilcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFja2VuZF91cmx9L2FwaS9zaWdudXBgLHtcclxuICAgICAgICBlbWFpbCxwYXNzd29yZCx1c2VybmFtZVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXM9PT0yMDApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiU2lnbnVwIHN1Y2Nlc3NmdWxsICEhXCIpXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNDAwKSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHNpZ25JbigpOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cz09PTMwMCkge1xyXG4gICAgICAgIHJldHVybiB0b2FzdC5lcnJvcihcIlVzZXIgYWxyZWFkeSBleGlzdHMgISFcIilcclxuICAgICAgfSAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIHRvYXN0LmVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJylcclxuICAgICAgICByZXR1cm4gc2V0RXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnKVxyXG4gICAgfWZpbmFsbHl7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHAtOCBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlNpZ24gVXA8L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbWItNFwiPlxyXG4gICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1iLTRcIj5cclxuICAgICAgICAgICAgICA8TG9hZGVyLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIFVzZXJuYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbWQgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImJhY2tlbmRfdXJsIiwidG9hc3QiLCJMb2FkZXIiLCJzaWduSW4iLCJTaWdudXAiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwic3RhdHVzIiwic3VjY2VzcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/signup/page.tsx\n"));

/***/ })

});