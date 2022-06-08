"use strict";
exports.id = 4403;
exports.ids = [4403];
exports.modules = {

/***/ 4403:
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
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_3__);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const UpdateSheet = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
  boatId: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
  skipperName: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().optional(),
  boatType: zod__WEBPACK_IMPORTED_MODULE_3__.z.enum(["PROTO", "SERIE"]).optional(),
  form: zod__WEBPACK_IMPORTED_MODULE_3__.z.string(),
  completed: zod__WEBPACK_IMPORTED_MODULE_3__.z.boolean()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(UpdateSheet), next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async (_ref) => {
  let {
    boatId
  } = _ref,
      data = _objectWithoutProperties(_ref, ["boatId"]);

  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const sheet = await db__WEBPACK_IMPORTED_MODULE_2__.default.sheet.update({
    where: {
      boatId
    },
    data
  });
  return sheet;
}), {
  "resolverName": "updateSheet",
  "resolverType": "mutation",
  "routePath": "/api/rpc/updateSheet"
}));

/***/ })

};
;