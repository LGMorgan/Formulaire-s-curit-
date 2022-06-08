"use strict";
exports.id = 1810;
exports.ids = [1810];
exports.modules = {

/***/ 1810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordError": () => (/* binding */ ResetPasswordError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6269);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ResetPasswordError extends Error {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", "ResetPasswordError");

    _defineProperty(this, "message", "Reset password link is invalid or it has expired.");
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_validations__WEBPACK_IMPORTED_MODULE_3__/* .ResetPassword */ .tq), async ({
  password,
  token
}, ctx) => {
  // 1. Try to find this token in the database
  const hashedToken = (0,next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.hash256)(token);
  const possibleToken = await db__WEBPACK_IMPORTED_MODULE_2__.default.token.findFirst({
    where: {
      hashedToken,
      type: "RESET_PASSWORD"
    },
    include: {
      user: true
    }
  }); // 2. If token not found, error

  if (!possibleToken) {
    throw new ResetPasswordError();
  }

  const savedToken = possibleToken; // 3. Delete token so it can't be used again

  await db__WEBPACK_IMPORTED_MODULE_2__.default.token.delete({
    where: {
      id: savedToken.id
    }
  }); // 4. If token has expired, error

  if (savedToken.expiresAt < new Date()) {
    throw new ResetPasswordError();
  } // 5. Since token is valid, now we can update the user's password


  const hashedPassword = await next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.SecurePassword.hash(password.trim());
  const user = await db__WEBPACK_IMPORTED_MODULE_2__.default.user.update({
    where: {
      id: savedToken.userId
    },
    data: {
      hashedPassword
    }
  }); // 6. Revoke all existing login sessions for this user

  await db__WEBPACK_IMPORTED_MODULE_2__.default.session.deleteMany({
    where: {
      userId: user.id
    }
  }); // 7. Now log the user in with the new credentials

  await (0,_login__WEBPACK_IMPORTED_MODULE_4__.default)({
    email: user.email,
    password
  }, ctx);
  return true;
}), {
  "resolverName": "resetPassword",
  "resolverType": "mutation",
  "routePath": "/api/rpc/resetPassword"
}));

/***/ })

};
;