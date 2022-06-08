"use strict";
exports.id = 9638;
exports.ids = [9638];
exports.modules = {

/***/ 9638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ forgotPassword)
});

// EXTERNAL MODULE: external "next/data-client"
var data_client_ = __webpack_require__(3136);
// EXTERNAL MODULE: external "next/stdlib-server"
var stdlib_server_ = __webpack_require__(9986);
// EXTERNAL MODULE: ./db/index.js
var db = __webpack_require__(128);
;// CONCATENATED MODULE: ./mailers/forgotPasswordMailer.js
/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */
function forgotPasswordMailer({
  to,
  token
}) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN;
  const resetUrl = `${origin}/reset-password?token=${token}`;
  const msg = {
    from: "TODO@example.com",
    to,
    subject: "Your Password Reset Instructions",
    html: `
      <h1>Reset Your Password</h1>
      <h3>NOTE: You must set up a production email integration in mailers/forgotPasswordMailer.ts</h3>

      <a href="${resetUrl}">
        Click here to set a new password
      </a>
    `
  };
  return {
    async send() {
      if (true) {
        // TODO - send the production email, like this:
        // await postmark.sendEmail(msg)
        throw new Error("No production email implementation in mailers/forgotPasswordMailer");
      } else {}
    }

  };
}
// EXTERNAL MODULE: ./app/auth/validations.js
var validations = __webpack_require__(4478);
;// CONCATENATED MODULE: ./app/auth/mutations/forgotPassword.js







const RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS = 4;
/* harmony default export */ const forgotPassword = ((0,data_client_.buildRpcResolver)(stdlib_server_.resolver.pipe(stdlib_server_.resolver.zod(validations/* ForgotPassword */.oP), async ({
  email
}) => {
  // 1. Get the user
  const user = await db.default.user.findFirst({
    where: {
      email: email.toLowerCase()
    }
  }); // 2. Generate the token and expiration date.

  const token = (0,stdlib_server_.generateToken)();
  const hashedToken = (0,stdlib_server_.hash256)(token);
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS); // 3. If user with this email was found

  if (user) {
    // 4. Delete any existing password reset tokens
    await db.default.token.deleteMany({
      where: {
        type: "RESET_PASSWORD",
        userId: user.id
      }
    }); // 5. Save this new token in the database.

    await db.default.token.create({
      data: {
        user: {
          connect: {
            id: user.id
          }
        },
        type: "RESET_PASSWORD",
        expiresAt,
        hashedToken,
        sentTo: user.email
      }
    }); // 6. Send the email

    await forgotPasswordMailer({
      to: user.email,
      token
    }).send();
  } else {
    // 7. If no user found wait the same time so attackers can't tell the difference
    await new Promise(resolve => setTimeout(resolve, 750));
  } // 8. Return the same result whether a password reset email was sent or not


  return;
}), {
  "resolverName": "forgotPassword",
  "resolverType": "mutation",
  "routePath": "/api/rpc/forgotPassword"
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