"use strict";
exports.id = 1154;
exports.ids = [1154];
exports.modules = {

/***/ 5429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Y": () => (/* binding */ ANSWER_TYPE)
/* harmony export */ });
/* unused harmony exports BOAT_TYPE, NIVEAU */
const BOAT_TYPE = {
  SERIE: "SERIE",
  PROTO: "PROTO"
};
const NIVEAU = {
  GLOBAL: "GLOBAL",
  A: "A",
  B: "B",
  C: "C"
};
const ANSWER_TYPE = {
  OK: "OK",
  TEXT: "TEXT",
  NUMBER: "NUMBER",
  CLOSED: "CLOSED"
};

/***/ }),

/***/ 9977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_4__);





const GetSheet = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
  // This accepts type of undefined, but is required at runtime
  boatId: zod__WEBPACK_IMPORTED_MODULE_4__.z.number().optional().refine(Boolean, "Required")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.zod(GetSheet), next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.authorize(), async ({
  boatId
}) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const sheet = await db__WEBPACK_IMPORTED_MODULE_3__.default.sheet.findFirst({
    where: {
      boatId
    }
  }); // if (!sheet) throw new NotFoundError()

  return sheet;
}), {
  "resolverName": "getSheet",
  "resolverType": "query",
  "routePath": "/api/rpc/getSheet"
}));

/***/ })

};
;