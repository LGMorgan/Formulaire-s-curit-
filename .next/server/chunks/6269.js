"use strict";
exports.id = 6269;
exports.ids = [6269];
exports.modules = {

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticateUser": () => (/* binding */ authenticateUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4478);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const authenticateUser = async (rawEmail, rawPassword) => {
  const {
    email,
    password
  } = _validations__WEBPACK_IMPORTED_MODULE_4__/* .Login.parse */ .m3.parse({
    email: rawEmail,
    password: rawPassword
  });
  const user = await db__WEBPACK_IMPORTED_MODULE_3__.default.user.findFirst({
    where: {
      email
    }
  });
  if (!user) throw new next_stdlib__WEBPACK_IMPORTED_MODULE_1__.AuthenticationError();
  const result = await next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.SecurePassword.verify(user.hashedPassword, password);

  if (result === next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.SecurePassword.VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.SecurePassword.hash(password);
    await db__WEBPACK_IMPORTED_MODULE_3__.default.user.update({
      where: {
        id: user.id
      },
      data: {
        hashedPassword: improvedHash
      }
    });
  }

  const {
    hashedPassword
  } = user,
        rest = _objectWithoutProperties(user, ["hashedPassword"]);

  return rest;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.zod(_validations__WEBPACK_IMPORTED_MODULE_4__/* .Login */ .m3), async ({
  email,
  password
}, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password);
  await ctx.session.$create({
    userId: user.id,
    role: user.role
  });
  return user;
}), {
  "resolverName": "login",
  "resolverType": "mutation",
  "routePath": "/api/rpc/login"
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