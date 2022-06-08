"use strict";
exports.id = 6684;
exports.ids = [6684];
exports.modules = {

/***/ 6684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var app_auth_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(app_auth_validations__WEBPACK_IMPORTED_MODULE_3__/* .Signup */ .Al), async ({
  email,
  password
}, ctx) => {
  const hashedPassword = await next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.SecurePassword.hash(password.trim());
  const user = await db__WEBPACK_IMPORTED_MODULE_2__.default.user.create({
    data: {
      email: email.toLowerCase().trim(),
      hashedPassword,
      role: "USER"
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true
    }
  });
  await ctx.session.$create({
    userId: user.id,
    role: user.role
  });
  return user;
}), {
  "resolverName": "signup",
  "resolverType": "mutation",
  "routePath": "/api/rpc/signup"
}));

/***/ }),

/***/ 4478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": () => (/* binding */ Signup),
/* harmony export */   "m3": () => (/* binding */ Login),
/* harmony export */   "oP": () => (/* binding */ ForgotPassword),
/* harmony export */   "tq": () => (/* binding */ ResetPassword),
/* harmony export */   "GR": () => (/* binding */ ChangePassword)
/* harmony export */ });
/* unused harmony exports email, password */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);

const email = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email().transform(str => str.toLowerCase().trim());
const password = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(10).max(100).transform(str => str.trim());
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email,
  password
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email,
  password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  password: password,
  passwordConfirmation: password,
  token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"] // set the path of the error

});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
  newPassword: password
});

/***/ })

};
;