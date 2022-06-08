exports.id = 9375;
exports.ids = [9375];
exports.modules = {

/***/ 9375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9151);
/* harmony import */ var app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_auth_mutations_logout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4061);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5198);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7427);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const Header = ({
  children,
  displayBackButton = false
}) => {
  const [logoutMutation] = (0,next_data_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(app_auth_mutations_logout__WEBPACK_IMPORTED_MODULE_0__.default);
  const router = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const width = children.length > 1 ? "750px" : "600px";
  console.log(width);
  const tabletScreen = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(`(min-width: ${width}) and (max-width: 900px)`);
  const phoneScreen = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(`(max-width: ${width})`);
  const {
    0: opened,
    1: setOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  console.log({
    tabletScreen,
    phoneScreen
  });
  const childrenWithProps = react__WEBPACK_IMPORTED_MODULE_5__.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.isValidElement)(child)) {
      let clone = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.cloneElement)(child, {
        compact: tabletScreen
      });
      return clone;
    }

    return child;
  });

  if (displayBackButton && !phoneScreen) {
    childrenWithProps.push( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.cloneElement)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => router.back(),
      children: "Retour"
    }), {
      compact: tabletScreen
    }));
  }

  console.log(children.length);

  if (phoneScreen) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
      className: (app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: "Formulaire"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().childrenDiv),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
          compact: true,
          onClick: () => router.back(),
          children: "Retour"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Burger, {
          opened: opened,
          onClick: () => setOpened(o => !o),
          title: "title"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
          position: "right",
          opened: opened,
          onClose: () => setOpened(false),
          title: "Vue d'ensemble",
          padding: "xl",
          overlayOpacity: 0.55,
          overlayBlur: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: (app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().drawer),
            children: [childrenWithProps, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
              onClick: async () => {
                await logoutMutation();
              },
              compact: tabletScreen,
              children: "D\xE9connexion"
            })]
          })
        })]
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
    className: (app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: "Formulaire"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (app_style_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().childrenDiv),
      children: [childrenWithProps, " | ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: async () => {
          await logoutMutation();
        },
        compact: tabletScreen,
        children: "D\xE9connexion"
      })]
    })]
  });
};

/***/ }),

/***/ 9151:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__3m5QB",
	"childrenDiv": "header_childrenDiv__1Qc7T",
	"drawer": "header_drawer__1URdt"
};


/***/ })

};
;