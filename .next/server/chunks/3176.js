exports.id = 3176;
exports.ids = [3176];
exports.modules = {

/***/ 3630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ LoginForm),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6982);
/* harmony import */ var app_core_components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5011);
/* harmony import */ var app_auth_mutations_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6269);
/* harmony import */ var app_auth_validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const LoginForm = props => {
  const [loginMutation] = (0,next_data_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(app_auth_mutations_login__WEBPACK_IMPORTED_MODULE_5__.default);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h1", {
      children: "Login"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .l0, {
      submitText: "Login",
      schema: app_auth_validations__WEBPACK_IMPORTED_MODULE_6__/* .Login */ .m3,
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: async values => {
        try {
          var _props$onSuccess;

          const user = await loginMutation(values);
          (_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props, user);
        } catch (error) {
          if (error instanceof next_stdlib__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError) {
            return {
              [app_core_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .FORM_ERROR */ .Ck]: "Sorry, those credentials are invalid"
            };
          } else {
            return {
              [app_core_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .FORM_ERROR */ .Ck]: "Sorry, we had an unexpected error. Please try again. - " + error.toString()
            };
          }
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__/* .LabeledTextField */ .I, {
        name: "email",
        label: "Email",
        placeholder: "Email"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__/* .LabeledTextField */ .I, {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.Link, {
          href: next_stdlib__WEBPACK_IMPORTED_MODULE_0__.Routes.ForgotPasswordPage(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            children: "Forgot your password?"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      style: {
        marginTop: "1rem"
      },
      children: ["Or ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.Link, {
        href: next_stdlib__WEBPACK_IMPORTED_MODULE_0__.Routes.SignupPage(),
        children: "Sign Up"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;