function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui/auth/signin/signin.component */
    "./src/app/ui/auth/signin/signin.component.ts");
    /* harmony import */


    var _ui_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ui/auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _ui_auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui/auth/signout/signout.component */
    "./src/app/ui/auth/signout/signout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var _c0 = function _c0() {
      return ["/dashboard/account"];
    };

    function AppComponent_a_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/admin"];
    };

    function AppComponent_a_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function AppComponent_a_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_40_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_41_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.loginDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["signup"];
    };

    function AppComponent_a_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function AppComponent_button_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r6.cartService.getCartItems().length);
      }
    }

    var _c3 = function _c3() {
      return ["/"];
    };

    var _c4 = function _c4() {
      return ["/tyres"];
    };

    var _c5 = function _c5() {
      return ["/services"];
    };

    var _c6 = function _c6() {
      return ["/contactus"];
    };

    var _c7 = function _c7() {
      return ["/aboutus"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cartService, dialog, authService) {
        _classCallCheck(this, AppComponent);

        this.cartService = cartService;
        this.dialog = dialog;
        this.authService = authService;
        this.date = new Date();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginDialog",
        value: function loginDialog() {
          this.dialog.open(_ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.dialog.open(_ui_auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_5__["SignoutComponent"]).afterClosed().subscribe(function (data) {
            if (data && _this.authService.authenticated) {
              _this.authService.logout();
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 68,
      vars: 33,
      consts: [[1, "row"], [1, "col-12"], [1, "top-mini-bar"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "mat-elevation-z4"], ["routerLink", "/", 1, "navbar-brand"], ["src", "/assets/pic/logo.png", 1, "logo"], [1, "spacer"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["mat-button", "", 2, "color", "red", 3, "routerLink"], [2, "color", "red"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "material-icons"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["style", "margin-right: 10px;", "mat-icon-button", "", "routerLink", "/cart", 4, "ngIf"], [1, "container"], [2, "heigh", "200px"], [1, "page-footer", "font-small", "teal", "pt-4", 2, "background", "black", "color", "white"], [1, "container-fluid", "text-center", "text-md-left", 2, "padding", "30px 50px"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase", "font-weight-bold"], [2, "font-family", "RobotoLight"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-6", "mb-md-0", "mb-3"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://mdbootstrap.com/", 2, "color", "white"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "routerLink", "/cart", 2, "margin-right", "10px"], ["matBadgeOverlap", "false", "matBadgeColor", "warn", 1, "material-icons", 3, "matBadge"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "account_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-menu", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppComponent_a_38_Template, 2, 2, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AppComponent_a_39_Template, 2, 2, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AppComponent_a_40_Template, 2, 0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_a_41_Template, 2, 0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppComponent_a_42_Template, 2, 2, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AppComponent_button_43_Template, 3, 1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "footer", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat. Itaque, culpa?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " InnoSimm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 18, "home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 20, "tyres"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, "services"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 24, "contact us"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 26, "about us"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.authenticated == true && ctx.authService.getLoggedInUser().superuser == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.authenticated == true && ctx.authService.getLoggedInUser().superuser == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.authenticated == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.authenticated == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.authenticated == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.authenticated == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9 2020-", ctx.date.getFullYear(), " Copyright: ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadge"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background: white;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  color: black;\n}\n\na[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n  color: black;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  height: 64px;\n  width: 120px;\n  border-radius: 0;\n  display: flex;\n  justify-content: center;\n  align-items: inherit;\n  text-decoration: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white;\n  background: black;\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  color: red;\n  background: white;\n}\n\n.top-mini-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 100%;\n  display: block;\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmEgOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5uYXYtYnRuIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b3AtbWluaS1iYXIge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _ui_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppRoutes, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/data */
    "./node_modules/@ngrx/data/__ivy_ngcc__/fesm2015/data.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _data_entity_metadata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./data/entity-metadata */
    "./src/app/data/entity-metadata.ts");
    /* harmony import */


    var _ui_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ui/home/home.component */
    "./src/app/ui/home/home.component.ts");
    /* harmony import */


    var _ui_tires_tires_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ui/tires/tires.component */
    "./src/app/ui/tires/tires.component.ts");
    /* harmony import */


    var _ui_wheels_wheels_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ui/wheels/wheels.component */
    "./src/app/ui/wheels/wheels.component.ts");
    /* harmony import */


    var _ui_services_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./ui/services/services.component */
    "./src/app/ui/services/services.component.ts");
    /* harmony import */


    var _ui_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ui/contactus/contactus.component */
    "./src/app/ui/contactus/contactus.component.ts");
    /* harmony import */


    var _ui_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./ui/aboutus/aboutus.component */
    "./src/app/ui/aboutus/aboutus.component.ts");
    /* harmony import */


    var _utils_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./utils/cart/cart.component */
    "./src/app/utils/cart/cart.component.ts");
    /* harmony import */


    var _ui_ad_to_cart_ad_to_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ui/ad-to-cart/ad-to-cart.component */
    "./src/app/ui/ad-to-cart/ad-to-cart.component.ts");
    /* harmony import */


    var _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./ui/auth/signin/signin.component */
    "./src/app/ui/auth/signin/signin.component.ts");
    /* harmony import */


    var _ui_auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ui/auth/signout/signout.component */
    "./src/app/ui/auth/signout/signout.component.ts");
    /* harmony import */


    var _ui_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./ui/auth/signup/signup.component */
    "./src/app/ui/auth/signup/signup.component.ts");
    /* harmony import */


    var _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ui/dashboard/dashboard.component */
    "./src/app/ui/dashboard/dashboard.component.ts");
    /* harmony import */


    var _ui_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./ui/dashboard/orders/orders.component */
    "./src/app/ui/dashboard/orders/orders.component.ts");
    /* harmony import */


    var _ui_dashboard_addressbook_addressbook_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./ui/dashboard/addressbook/addressbook.component */
    "./src/app/ui/dashboard/addressbook/addressbook.component.ts");
    /* harmony import */


    var _ui_dashboard_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./ui/dashboard/myaccount/myaccount.component */
    "./src/app/ui/dashboard/myaccount/myaccount.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _ui_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./ui/auth/services/auth-guard.service */
    "./src/app/ui/auth/services/auth-guard.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _ui_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./ui/admin/add-product/add-product.component */
    "./src/app/ui/admin/add-product/add-product.component.ts");
    /* harmony import */


    var _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./ui/admin/view-products/view-products.component */
    "./src/app/ui/admin/view-products/view-products.component.ts");
    /* harmony import */


    var _ui_admin_home_home_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./ui/admin/home/home.component */
    "./src/app/ui/admin/home/home.component.ts");
    /* harmony import */


    var _ui_admin_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./ui/admin/services/auth-guard.service */
    "./src/app/ui/admin/services/auth-guard.service.ts");
    /* harmony import */


    var _ui_admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./ui/admin/overview/overview.component */
    "./src/app/ui/admin/overview/overview.component.ts");
    /* harmony import */


    var _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./ui/admin/brands/brands.component */
    "./src/app/ui/admin/brands/brands.component.ts");
    /* harmony import */


    var _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./ui/admin/types/types.component */
    "./src/app/ui/admin/types/types.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _utils_put_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./utils/put-interceptor.interceptor */
    "./src/app/utils/put-interceptor.interceptor.ts");

    var AppRoutes = [{
      path: '',
      component: _ui_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
    }, {
      path: 'admin',
      component: _ui_admin_home_home_component__WEBPACK_IMPORTED_MODULE_45__["HomeComponent"],
      canActivate: [_ui_admin_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AdminAuthGuardService"]],
      children: [{
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }, {
        path: 'brands',
        component: _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["BrandsComponent"]
      }, {
        path: 'types',
        component: _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["TypesComponent"]
      }, {
        path: 'products',
        component: _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["ViewProductsComponent"]
      }]
    }, {
      path: 'dashboard',
      component: _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
      canActivate: [_ui_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_41__["AuthGuardService"]],
      children: [{
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      }, {
        path: 'account',
        component: _ui_dashboard_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_28__["MyaccountComponent"]
      }, {
        path: 'orders',
        component: _ui_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"]
      }, {
        path: 'address',
        component: _ui_dashboard_addressbook_addressbook_component__WEBPACK_IMPORTED_MODULE_27__["AddressbookComponent"]
      }]
    }, {
      path: 'tyres',
      component: _ui_tires_tires_component__WEBPACK_IMPORTED_MODULE_15__["TiresComponent"]
    }, {
      path: 'wheels',
      component: _ui_wheels_wheels_component__WEBPACK_IMPORTED_MODULE_16__["WheelsComponent"]
    }, {
      path: 'services',
      component: _ui_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"]
    }, {
      path: 'contactus',
      component: _ui_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_18__["ContactusComponent"]
    }, {
      path: 'aboutus',
      component: _ui_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"]
    }, {
      path: 'cart',
      component: _utils_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"]
    }, {
      path: 'signin',
      component: _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"]
    }, {
      path: 'signout',
      component: _ui_auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_23__["SignoutComponent"]
    }, {
      path: 'signup',
      component: _ui_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"]
    }];
    var dataServiceConfig = {
      root: 'https://noblesiteapi.herokuapp.com/api/'
    };
    var pluralizer = {
      pluralize: function pluralize(name) {
        return name;
      }
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["DefaultDataServiceConfig"],
        useValue: dataServiceConfig
      }, {
        provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["Pluralizer"],
        useValue: pluralizer
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _utils_put_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_52__["PutInterceptorInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(AppRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]), _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["EntityDataModule"].forRoot(_data_entity_metadata__WEBPACK_IMPORTED_MODULE_13__["entityConfig"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
      }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_32__["MatBadgeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_36__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_50__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__["MatPaginatorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _ui_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _ui_tires_tires_component__WEBPACK_IMPORTED_MODULE_15__["TiresComponent"], _ui_wheels_wheels_component__WEBPACK_IMPORTED_MODULE_16__["WheelsComponent"], _ui_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"], _ui_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_18__["ContactusComponent"], _ui_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"], _utils_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"], _ui_ad_to_cart_ad_to_cart_component__WEBPACK_IMPORTED_MODULE_21__["AdToCartComponent"], _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"], _ui_auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_23__["SignoutComponent"], _ui_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"], _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"], _ui_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"], _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["IconButtonComponent"], _ui_dashboard_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_28__["EditUserComponent"], _ui_dashboard_addressbook_addressbook_component__WEBPACK_IMPORTED_MODULE_27__["AddressbookComponent"], _ui_dashboard_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_28__["MyaccountComponent"], _ui_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_43__["AddProductComponent"], _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["ViewProductsComponent"], _ui_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _ui_admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_47__["OverviewComponent"], _ui_admin_home_home_component__WEBPACK_IMPORTED_MODULE_45__["HomeComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["BrandsComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["TypesComponent"], _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["EditProductComponent"], _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["DeleteProductComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["EditBrandComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["DeleteBrandComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["EditTypeComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["DeleteTypeComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["NewBrandComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["NewTyreTypeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["EntityDataModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_32__["MatBadgeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_36__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_50__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _ui_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _ui_tires_tires_component__WEBPACK_IMPORTED_MODULE_15__["TiresComponent"], _ui_wheels_wheels_component__WEBPACK_IMPORTED_MODULE_16__["WheelsComponent"], _ui_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"], _ui_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_18__["ContactusComponent"], _ui_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"], _utils_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"], _ui_ad_to_cart_ad_to_cart_component__WEBPACK_IMPORTED_MODULE_21__["AdToCartComponent"], _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"], _ui_auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_23__["SignoutComponent"], _ui_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"], _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"], _ui_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"], _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["IconButtonComponent"], _ui_dashboard_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_28__["EditUserComponent"], _ui_dashboard_addressbook_addressbook_component__WEBPACK_IMPORTED_MODULE_27__["AddressbookComponent"], _ui_dashboard_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_28__["MyaccountComponent"], _ui_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_43__["AddProductComponent"], _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["ViewProductsComponent"], _ui_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _ui_admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_47__["OverviewComponent"], _ui_admin_home_home_component__WEBPACK_IMPORTED_MODULE_45__["HomeComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["BrandsComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["TypesComponent"], _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["EditProductComponent"], _ui_admin_view_products_view_products_component__WEBPACK_IMPORTED_MODULE_44__["DeleteProductComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["EditBrandComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["DeleteBrandComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["EditTypeComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["DeleteTypeComponent"], _ui_admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_48__["NewBrandComponent"], _ui_admin_types_types_component__WEBPACK_IMPORTED_MODULE_49__["NewTyreTypeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(AppRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]), _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["EntityDataModule"].forRoot(_data_entity_metadata__WEBPACK_IMPORTED_MODULE_13__["entityConfig"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
          }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_32__["MatBadgeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_36__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_50__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__["MatPaginatorModule"]],
          providers: [{
            provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["DefaultDataServiceConfig"],
            useValue: dataServiceConfig
          }, {
            provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_9__["Pluralizer"],
            useValue: pluralizer
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _utils_put_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_52__["PutInterceptorInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/brand/brand.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/data/brand/brand.service.ts ***!
    \*********************************************/

  /*! exports provided: BrandService */

  /***/
  function srcAppDataBrandBrandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandService", function () {
      return BrandService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/data */
    "./node_modules/@ngrx/data/__ivy_ngcc__/fesm2015/data.js");

    var BrandService = /*#__PURE__*/function (_ngrx_data__WEBPACK_I) {
      _inherits(BrandService, _ngrx_data__WEBPACK_I);

      var _super = _createSuper(BrandService);

      function BrandService(serviceElementsFactory) {
        _classCallCheck(this, BrandService);

        return _super.call(this, 'Brand', serviceElementsFactory);
      }

      return BrandService;
    }(_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceBase"]);

    BrandService.ɵfac = function BrandService_Factory(t) {
      return new (t || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]));
    };

    BrandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrandService,
      factory: BrandService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/entity-metadata.ts":
  /*!*****************************************!*\
    !*** ./src/app/data/entity-metadata.ts ***!
    \*****************************************/

  /*! exports provided: entityConfig */

  /***/
  function srcAppDataEntityMetadataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "entityConfig", function () {
      return entityConfig;
    });

    var entityMetadata = {
      Product: {},
      Brand: {},
      Users: {},
      Contact: {},
      Address: {},
      Type: {}
    };
    var pluralsNames = {
      Hero: 'Heroes'
    };
    var entityConfig = {
      entityMetadata: entityMetadata,
      pluralsNames: pluralsNames
    };
    /***/
  },

  /***/
  "./src/app/data/product/product.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/data/product/product.service.ts ***!
    \*************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppDataProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/data */
    "./node_modules/@ngrx/data/__ivy_ngcc__/fesm2015/data.js");

    var ProductService = /*#__PURE__*/function (_ngrx_data__WEBPACK_I2) {
      _inherits(ProductService, _ngrx_data__WEBPACK_I2);

      var _super2 = _createSuper(ProductService);

      function ProductService(serviceElementsFactory) {
        _classCallCheck(this, ProductService);

        return _super2.call(this, 'Product', serviceElementsFactory);
      }

      return ProductService;
    }(_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceBase"]);

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/type/type.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/data/type/type.service.ts ***!
    \*******************************************/

  /*! exports provided: TypeService */

  /***/
  function srcAppDataTypeTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeService", function () {
      return TypeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/data */
    "./node_modules/@ngrx/data/__ivy_ngcc__/fesm2015/data.js");

    var TypeService = /*#__PURE__*/function (_ngrx_data__WEBPACK_I3) {
      _inherits(TypeService, _ngrx_data__WEBPACK_I3);

      var _super3 = _createSuper(TypeService);

      function TypeService(serviceElementsFactory) {
        _classCallCheck(this, TypeService);

        return _super3.call(this, 'Type', serviceElementsFactory);
      }

      return TypeService;
    }(_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceBase"]);

    TypeService.ɵfac = function TypeService_Factory(t) {
      return new (t || TypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]));
    };

    TypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TypeService,
      factory: TypeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/users/users.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/data/users/users.service.ts ***!
    \*********************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppDataUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/data */
    "./node_modules/@ngrx/data/__ivy_ngcc__/fesm2015/data.js");

    var UsersService = /*#__PURE__*/function (_ngrx_data__WEBPACK_I4) {
      _inherits(UsersService, _ngrx_data__WEBPACK_I4);

      var _super4 = _createSuper(UsersService);

      function UsersService(serviceElementsFactory) {
        _classCallCheck(this, UsersService);

        return _super4.call(this, 'Users', serviceElementsFactory);
      }

      return UsersService;
    }(_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceBase"]);

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_data__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionServiceElementsFactory"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartService = /*#__PURE__*/function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.items = [];
      }

      _createClass(CartService, [{
        key: "clear",
        value: function clear() {
          this.items = [];
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return this.items;
        }
      }, {
        key: "add",
        value: function add(product, quantity) {
          var p = this.items.findIndex(function (i) {
            return product.id === i.product.id;
          });

          if (p <= 0) {
            return this.items.push({
              product: product,
              quantity: quantity
            });
          } else {
            if (this.items[p].quantity < quantity) {
              throw new Error('sorry we you can buy more than we than we have.');
            }

            return this.items[p].quantity += quantity;
          }
        }
      }, {
        key: "remove",
        value: function remove(item) {
          if (item == null) {
            return;
          } else {
            return this.items.splice(this.items.findIndex(function (i) {
              return i === item;
            }), 1);
          }
        }
      }, {
        key: "update",
        value: function update(id, quantity) {
          var position = this.items.findIndex(function (i) {
            return i.product.id === id;
          });

          if (position <= 0) {
            return;
          } else {
            return this.items[id].quantity = quantity;
          }
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/paynow.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/paynow.service.ts ***!
    \********************************************/

  /*! exports provided: PaynowService */

  /***/
  function srcAppServicesPaynowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaynowService", function () {
      return PaynowService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PaynowService = /*#__PURE__*/function () {
      function PaynowService(cartService, http) {
        _classCallCheck(this, PaynowService);

        this.cartService = cartService;
        this.http = http;
      }

      _createClass(PaynowService, [{
        key: "makePayment",
        value: function makePayment() {
          console.log(this.cartService.getCartItems());
          this.http.post('http://localhost:8000/api/payment/checkout', this.cartService.getCartItems()).subscribe(function (data) {
            return console.log(data);
          }, function (err) {
            return console.log(err);
          }, function () {
            return console.log('done');
          });
        }
      }]);

      return PaynowService;
    }();

    PaynowService.ɵfac = function PaynowService_Factory(t) {
      return new (t || PaynowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PaynowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaynowService,
      factory: PaynowService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaynowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/aboutus/aboutus.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/ui/aboutus/aboutus.component.ts ***!
    \*************************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppUiAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutusComponent = /*#__PURE__*/function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
      return new (t || AboutusComponent)();
    };

    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusComponent,
      selectors: [["app-aboutus"]],
      decls: 35,
      vars: 0,
      consts: [[1, "mat-elevation-z4", "about-section", "paddingTB60", "gray-bg"], [1, "container"], [1, "row"], [1, "col-md-7", "col-sm-6"], [1, "about-title", "clearfix"], [2, "color", "black"], [2, "color", "red"], [1, "about-paddingB"], [1, "about-icons"], ["href", "https://www.facebook.com/"], ["id", "social-fb", 1, "fa", "fa-facebook-square", "fa-3x", "social"], ["href", "https://twitter.com/"], ["id", "social-tw", 1, "fa", "fa-twitter-square", "fa-3x", "social"], ["href", "https://plus.google.com/"], ["id", "social-gp", 1, "fa", "fa-google-plus-square", "fa-3x", "social"], ["href", "mailto:bootsnipp@gmail.com"], ["id", "social-em", 1, "fa", "fa-envelope-square", "fa-3x", "social"], [1, "col-md-5", "col-sm-6"], [1, "about-img"], ["src", "https://devitems.com/preview/appmom/img/mobile/2.png", "alt", ""]],
      template: function AboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "InnoSimm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        }
      },
      styles: [".paddingTB60[_ngcontent-%COMP%] {\n  padding: 60px 0px 60px 0px;\n}\n\n.gray-bg[_ngcontent-%COMP%] {\n  background: #F1F1F1 !important;\n}\n\n.about-title[_ngcontent-%COMP%] {\n}\n\n.about-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #535353;\n  font-size: 45px;\n  font-weight: 600;\n}\n\n.about-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #AF0808;\n  font-size: 45px;\n  font-weight: 700;\n}\n\n.about-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #535353;\n  font-size: 23px;\n  margin-bottom: 24px;\n}\n\n.about-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7a7a;\n  line-height: 1.8;\n  margin: 0 0 15px;\n}\n\n.about-paddingB[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n\n.about-img[_ngcontent-%COMP%] {\n  padding-left: 57px;\n}\n\n\n\n.about-icons[_ngcontent-%COMP%] {\n  margin: 48px 0px 48px 0px;\n}\n\n.about-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 0px;\n  font-size: 35px;\n  color: #323232;\n  box-shadow: 0 0 3px rgba(0, 0, 0, .2);\n}\n\n.about-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0;\n  display: inline-block;\n}\n\n#social-fb[_ngcontent-%COMP%]:hover {\n  color: #3B5998;\n  transition: all .001s;\n}\n\n#social-tw[_ngcontent-%COMP%]:hover {\n  color: #4099FF;\n  transition: all .001s;\n}\n\n#social-gp[_ngcontent-%COMP%]:hover {\n  color: #d34836;\n  transition: all .001s;\n}\n\n#social-em[_ngcontent-%COMP%]:hover {\n  color: #f39c12;\n  transition: all .001s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdWkvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZ1RCNjAge1xuICBwYWRkaW5nOiA2MHB4IDBweCA2MHB4IDBweDtcbn1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxICFpbXBvcnRhbnQ7XG59XG5cbi5hYm91dC10aXRsZSB7XG59XG5cbi5hYm91dC10aXRsZSBoMSB7XG4gIGNvbG9yOiAjNTM1MzUzO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hYm91dC10aXRsZSBzcGFuIHtcbiAgY29sb3I6ICNBRjA4MDg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFib3V0LXRpdGxlIGgzIHtcbiAgY29sb3I6ICM1MzUzNTM7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmFib3V0LXRpdGxlIHAge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbn1cblxuLmFib3V0LXBhZGRpbmdCIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5hYm91dC1pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDU3cHg7XG59XG5cbi8qIFNvY2lhbCBJY29ucyAqL1xuLmFib3V0LWljb25zIHtcbiAgbWFyZ2luOiA0OHB4IDBweCA0OHB4IDBweDtcbn1cblxuLmFib3V0LWljb25zIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cblxuLmFib3V0LWljb25zIGxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3NvY2lhbC1mYjpob3ZlciB7XG4gIGNvbG9yOiAjM0I1OTk4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjAwMXM7XG59XG5cbiNzb2NpYWwtdHc6aG92ZXIge1xuICBjb2xvcjogIzQwOTlGRjtcbiAgdHJhbnNpdGlvbjogYWxsIC4wMDFzO1xufVxuXG4jc29jaWFsLWdwOmhvdmVyIHtcbiAgY29sb3I6ICNkMzQ4MzY7XG4gIHRyYW5zaXRpb246IGFsbCAuMDAxcztcbn1cblxuI3NvY2lhbC1lbTpob3ZlciB7XG4gIGNvbG9yOiAjZjM5YzEyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjAwMXM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus',
          templateUrl: './aboutus.component.html',
          styleUrls: ['./aboutus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/ad-to-cart/ad-to-cart.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui/ad-to-cart/ad-to-cart.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdToCartComponent */

  /***/
  function srcAppUiAdToCartAdToCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdToCartComponent", function () {
      return AdToCartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AdToCartComponent = /*#__PURE__*/function () {
      function AdToCartComponent(cartService, fb) {
        _classCallCheck(this, AdToCartComponent);

        this.cartService = cartService;
        this.fb = fb;
        this.form = this.fb.group({
          quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1)
        });
        this.err = null;
      }

      _createClass(AdToCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItemTOCart",
        value: function addItemTOCart() {
          if (Number(this.form.controls.quantity.value) > this.product.quantity) {
            return this.err = 'Sorry. we cant give you more than we have in stock';
          }

          return this.cartService.add(this.product, Number(this.form.controls.quantity.value));
        }
      }]);

      return AdToCartComponent;
    }();

    AdToCartComponent.ɵfac = function AdToCartComponent_Factory(t) {
      return new (t || AdToCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AdToCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdToCartComponent,
      selectors: [["app-ad-to-cart"]],
      inputs: {
        product: "product"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "row", 2, "padding", "10px 20px"], [1, "col-sm-4", 3, "formGroup"], ["matInput", "", "formControlName", "quantity"], ["mat-raised-button", "", 1, "col-sm-4", 3, "click"]],
      template: function AdToCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdToCartComponent_Template_button_click_5_listener() {
            return ctx.addItemTOCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkLXRvLWNhcnQvYWQtdG8tY2FydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdToCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ad-to-cart',
          templateUrl: './ad-to-cart.component.html',
          styleUrls: ['./ad-to-cart.component.css']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/add-product/add-product.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui/admin/add-product/add-product.component.ts ***!
    \***************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppUiAdminAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../data/product/product.service */
    "./src/app/data/product/product.service.ts");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");
    /* harmony import */


    var _data_type_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../data/type/type.service */
    "./src/app/data/type/type.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AddProductComponent_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r50.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r50.name);
      }
    }

    function AddProductComponent_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r51.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r51.name);
      }
    }

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(fb, productService, brandService, typeService, dialogRef) {
        _classCallCheck(this, AddProductComponent);

        this.fb = fb;
        this.productService = productService;
        this.brandService = brandService;
        this.typeService = typeService;
        this.dialogRef = dialogRef;
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.brandService.getAll();
          this.productService.getAll();
          this.typeService.getAll();
          this.form = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            tyre_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
        }
      }, {
        key: "save",
        value: function save() {
          console.log(this.form.value);

          try {
            this.productService.add(this.form.value);
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]));
    };

    AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["app-add-product"]],
      decls: 41,
      vars: 13,
      consts: [[1, "container"], [1, "row"], [1, "col-md-6", 3, "formGroup"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "tyre_code"], ["matInput", "", "formControlName", "brand"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "type"], ["matInput", "", "formControlName", "price", "type", "number"], ["matInput", "", "formControlName", "description"], ["matInput", "", "formControlName", "quantity", "type", "number"], [1, "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tyre Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddProductComponent_mat_option_14_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddProductComponent_mat_option_20_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_36_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_39_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, ctx.brandService.entities$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, ctx.typeService.entities$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-product',
          templateUrl: './add-product.component.html',
          styleUrls: ['./add-product.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/brands/brands.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/admin/brands/brands.component.ts ***!
    \*****************************************************/

  /*! exports provided: BrandsComponent, EditBrandComponent, DeleteBrandComponent, NewBrandComponent */

  /***/
  function srcAppUiAdminBrandsBrandsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandsComponent", function () {
      return BrandsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBrandComponent", function () {
      return EditBrandComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteBrandComponent", function () {
      return DeleteBrandComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewBrandComponent", function () {
      return NewBrandComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function BrandsComponent_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BrandsComponent_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r94.id);
      }
    }

    function BrandsComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BrandsComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r95 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r95.name);
      }
    }

    function BrandsComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
      }
    }

    function BrandsComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var element_r96 = ctx.$implicit;

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.edit(element_r96);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_td_10_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var element_r96 = ctx.$implicit;

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99["delete"](element_r96);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BrandsComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function BrandsComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20, 50];
    };

    var BrandsComponent = /*#__PURE__*/function () {
      function BrandsComponent(brandService, dialog) {
        _classCallCheck(this, BrandsComponent);

        this.brandService = brandService;
        this.dialog = dialog;
        this.table_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.table_columns = ['id', 'name', ' '];
        this.brands = [];
      }

      _createClass(BrandsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.brandService.getAll();
          this.brandService.entities$.subscribe(function (data) {
            return _this2.table_datasource.data = data;
          });
          this.table_datasource.paginator = this.paginator;
        }
      }, {
        key: "newBrand",
        value: function newBrand() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.dialog.open(NewBrandComponent).afterClosed().subscribe(function () {
                      return __awaiter(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.ngOnInit();

                              case 2:
                                return _context.abrupt("return", _context.sent);

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit(element) {
          var _this4 = this;

          this.dialog.open(EditBrandComponent, {
            data: element
          }).afterClosed().subscribe(function () {
            return __awaiter(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.ngOnInit();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "delete",
        value: function _delete(element) {
          var _this5 = this;

          this.dialog.open(DeleteBrandComponent, {
            data: element
          }).afterClosed().subscribe(function () {
            return __awaiter(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.ngOnInit();

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          });
        }
      }]);

      return BrandsComponent;
    }();

    BrandsComponent.ɵfac = function BrandsComponent_Factory(t) {
      return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrandsComponent,
      selectors: [["app-brands"]],
      viewQuery: function BrandsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 20,
      vars: 5,
      consts: [[2, "width", "100%", "height", "100%"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", " "], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "row"], [1, "col-3"], ["mat-raised-button", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function BrandsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BrandsComponent_th_3_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrandsComponent_td_4_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BrandsComponent_th_6_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BrandsComponent_td_7_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BrandsComponent_th_9_Template, 1, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BrandsComponent_td_10_Template, 7, 0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BrandsComponent_tr_11_Template, 1, 0, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BrandsComponent_tr_12_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-paginator", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_Template_button_click_16_listener() {
            return ctx.newBrand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.table_datasource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.table_columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.table_columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-brands',
          templateUrl: './brands.component.html',
          styleUrls: ['./brands.component.css']
        }]
      }], function () {
        return [{
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }]
      });
    })();

    var EditBrandComponent = /*#__PURE__*/function () {
      function EditBrandComponent(dialogRef, brandService, data) {
        _classCallCheck(this, EditBrandComponent);

        this.dialogRef = dialogRef;
        this.brandService = brandService;
        this.data = data;
        this.name = data.name;
      }

      _createClass(EditBrandComponent, [{
        key: "save",
        value: function save() {
          try {
            console.log("editted ".concat(this.data.name));
            this.brandService.update({
              id: this.data.id,
              name: this.name
            });
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return EditBrandComponent;
    }();

    EditBrandComponent.ɵfac = function EditBrandComponent_Factory(t) {
      return new (t || EditBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    EditBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditBrandComponent,
      selectors: [["ng-component"]],
      decls: 14,
      vars: 2,
      consts: [[1, "container"], [1, "col-md-12"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function EditBrandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Brand Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBrandComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBrandComponent_Template_button_click_9_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBrandComponent_Template_button_click_12_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editing Brand ", ctx.data.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n  <div class=\"container\">\n    <h4>Editing Brand {{data.name}}</h4>\n      <mat-form-field class=\"col-md-12\">\n      \t<mat-label>Brand Name</mat-label>\n      \t<input matInput [(ngModel)]=\"name\" />\n      </mat-form-field>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n      </div>\n      <div class=\"col-6\">\n        <button mat-raised-button color=\"warn\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n  ",
          styleUrls: ['brands.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var DeleteBrandComponent = /*#__PURE__*/function () {
      function DeleteBrandComponent(dialogRef, brandService, data) {
        _classCallCheck(this, DeleteBrandComponent);

        this.dialogRef = dialogRef;
        this.brandService = brandService;
        this.data = data;
      }

      _createClass(DeleteBrandComponent, [{
        key: "delete",
        value: function _delete() {
          try {
            console.log("deleted ".concat(this.data.name));
            this.brandService["delete"](this.data);
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return DeleteBrandComponent;
    }();

    DeleteBrandComponent.ɵfac = function DeleteBrandComponent_Factory(t) {
      return new (t || DeleteBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    DeleteBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteBrandComponent,
      selectors: [["ng-component"]],
      decls: 13,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-6"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function DeleteBrandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteBrandComponent_Template_button_click_8_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes, Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteBrandComponent_Template_button_click_11_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No, Do Not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, "");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n    <div class=\"container\">\n      <h4>Are you sure you want to <b>Delete</b> {{data.name}}</h4>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"warn\" (click)=\"delete()\">Yes, Delete</button>\n        </div>\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"primary\" (click)=\"close()\">No, Do Not</button>\n        </div>\n      </div>\n    </div>\n  ",
          styleUrls: ['brands.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var NewBrandComponent = /*#__PURE__*/function () {
      function NewBrandComponent(brandService, dialogRef) {
        _classCallCheck(this, NewBrandComponent);

        this.brandService = brandService;
        this.dialogRef = dialogRef;
        this.name = '';
      }

      _createClass(NewBrandComponent, [{
        key: "save",
        value: function save() {
          console.log(this.name);

          if (this.name === '') {
            return;
          }

          try {
            this.brandService.add({
              name: this.name
            });
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return NewBrandComponent;
    }();

    NewBrandComponent.ɵfac = function NewBrandComponent_Factory(t) {
      return new (t || NewBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]));
    };

    NewBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewBrandComponent,
      selectors: [["ng-component"]],
      decls: 12,
      vars: 1,
      consts: [[1, "container"], [1, "col-md-6"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function NewBrandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brand Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBrandComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBrandComponent_Template_button_click_7_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBrandComponent_Template_button_click_10_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n  <div class=\"container\">\n    <mat-form-field class=\"col-md-6\">\n    \t<mat-label>Brand Name</mat-label>\n      <input matInput [(ngModel)]=\"name\"/>\n    </mat-form-field>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n      </div>\n      <div class=\"col-6\">\n        <button mat-raised-button color=\"warn\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>",
          styleUrls: ['brands.component.css']
        }]
      }], function () {
        return [{
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/home/home.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/ui/admin/home/home.component.ts ***!
    \*************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppUiAdminHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");
    /* harmony import */


    var _data_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../data/product/product.service */
    "./src/app/data/product/product.service.ts");
    /* harmony import */


    var _data_type_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../data/type/type.service */
    "./src/app/data/type/type.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../dashboard/dashboard.component */
    "./src/app/ui/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, brandService, productService, typeService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.brandService = brandService;
        this.productService = productService;
        this.typeService = typeService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setbrand",
        value: function setbrand(id) {
          var name;
          this.brandService.entities$.subscribe(function (data) {
            data.forEach(function (i) {
              if (i.id === id) {
                name = i.name;
              }
            });
          });
          return name;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_4__["TypeService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 26,
      vars: 10,
      consts: [[1, "mat-elevation-z4", "row"], [1, "col-md-3", 2, "background", "red", "color", "white", "padding", "0", "height", "490px"], [2, "position", "absolute", "width", "100%"], [2, "display", "block"], [2, "display", "flex"], [1, "spacer"], [1, "material-icons", 2, "font-size", "50px", "padding-top", "15px"], [1, "text-center"], [2, "padding", "0 20px"], ["link", "products", "icon_name", "graphic_eq", 3, "button_text"], ["link", "brands", "icon_name", "format_bold", 3, "button_text"], ["link", "types", "icon_name", "title", 3, "button_text"], [2, "background", "white", "padding", "20px", "position", "absolute", "bottom", "0"], ["src", "/assets/pic/logo.png", 1, "img-fluid"], [1, "col-md-9"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-icon-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-icon-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-icon-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.getLoggedInUser().username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("button_text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 4, "products"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("button_text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 6, "brands"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("button_text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, "tyre types"));
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["IconButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_4__["TypeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/overview/overview.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/admin/overview/overview.component.ts ***!
    \*********************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppUiAdminOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OverviewComponent = /*#__PURE__*/function () {
      function OverviewComponent() {
        _classCallCheck(this, OverviewComponent);
      }

      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OverviewComponent;
    }();

    OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
      return new (t || OverviewComponent)();
    };

    OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-overview"]],
      decls: 2,
      vars: 0,
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "overview works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-overview',
          templateUrl: './overview.component.html',
          styleUrls: ['./overview.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/services/auth-guard.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/admin/services/auth-guard.service.ts ***!
    \*********************************************************/

  /*! exports provided: AdminAuthGuardService */

  /***/
  function srcAppUiAdminServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function () {
      return AdminAuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");

    var AdminAuthGuardService = /*#__PURE__*/function () {
      function AdminAuthGuardService(authService, router) {
        _classCallCheck(this, AdminAuthGuardService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AdminAuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.authService.authenticated && !this.authService.getLoggedInUser().superuser) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AdminAuthGuardService;
    }();

    AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) {
      return new (t || AdminAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AdminAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminAuthGuardService,
      factory: AdminAuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/types/types.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui/admin/types/types.component.ts ***!
    \***************************************************/

  /*! exports provided: TypesComponent, EditTypeComponent, DeleteTypeComponent, NewTyreTypeComponent */

  /***/
  function srcAppUiAdminTypesTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypesComponent", function () {
      return TypesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditTypeComponent", function () {
      return EditTypeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteTypeComponent", function () {
      return DeleteTypeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTyreTypeComponent", function () {
      return NewTyreTypeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _data_type_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data/type/type.service */
    "./src/app/data/type/type.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function TypesComponent_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypesComponent_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r109 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r109.id);
      }
    }

    function TypesComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypesComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r110 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r110.name);
      }
    }

    function TypesComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
      }
    }

    function TypesComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypesComponent_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

          var element_r111 = ctx.$implicit;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r112.edit(element_r111);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypesComponent_td_10_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

          var element_r111 = ctx.$implicit;

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114["delete"](element_r111);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypesComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function TypesComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
      }
    }

    var _c0 = function _c0() {
      return [5];
    };

    var TypesComponent = /*#__PURE__*/function () {
      function TypesComponent(typeService, dialog) {
        _classCallCheck(this, TypesComponent);

        this.typeService = typeService;
        this.dialog = dialog;
        this.table_columns = ['id', 'name', ' '];
        this.table_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
      }

      _createClass(TypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.typeService.getAll().subscribe(function (data) {
            return _this6.table_datasource.data = data;
          });
          this.table_datasource.paginator = this.paginator;
        }
      }, {
        key: "edit",
        value: function edit(element) {
          var _this7 = this;

          this.dialog.open(EditTypeComponent, {
            data: element
          }).afterClosed().subscribe(function () {
            return __awaiter(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", this.ngOnInit());

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "delete",
        value: function _delete(element) {
          var _this8 = this;

          this.dialog.open(DeleteTypeComponent, {
            data: element
          }).afterClosed().subscribe(function () {
            return __awaiter(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", this.ngOnInit());

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "newType",
        value: function newType() {
          var _this9 = this;

          this.dialog.open(NewTyreTypeComponent).afterClosed().subscribe(function () {
            return __awaiter(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", this.ngOnInit());

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }]);

      return TypesComponent;
    }();

    TypesComponent.ɵfac = function TypesComponent_Factory(t) {
      return new (t || TypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    TypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypesComponent,
      selectors: [["app-types"]],
      viewQuery: function TypesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 20,
      vars: 5,
      consts: [[2, "width", "100%", "height", "100%"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", " "], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "row"], [1, "col-3"], ["mat-raised-button", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function TypesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TypesComponent_th_3_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TypesComponent_td_4_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TypesComponent_th_6_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TypesComponent_td_7_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TypesComponent_th_9_Template, 1, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TypesComponent_td_10_Template, 7, 0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TypesComponent_tr_11_Template, 1, 0, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TypesComponent_tr_12_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-paginator", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypesComponent_Template_button_click_16_listener() {
            return ctx.newType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.table_datasource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.table_columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.table_columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3R5cGVzL3R5cGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-types',
          templateUrl: './types.component.html',
          styleUrls: ['./types.component.css']
        }]
      }], function () {
        return [{
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }]
      });
    })();

    var EditTypeComponent = /*#__PURE__*/function () {
      function EditTypeComponent(dialogRef, typeService, data) {
        _classCallCheck(this, EditTypeComponent);

        this.dialogRef = dialogRef;
        this.typeService = typeService;
        this.data = data;
        this.name = '';
        this.name = data.name;
      }

      _createClass(EditTypeComponent, [{
        key: "save",
        value: function save() {
          try {
            console.log("editted ".concat(this.data.name));
            this.typeService.update({
              id: this.data.id,
              name: this.name
            });
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return EditTypeComponent;
    }();

    EditTypeComponent.ɵfac = function EditTypeComponent_Factory(t) {
      return new (t || EditTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    EditTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditTypeComponent,
      selectors: [["ng-component"]],
      decls: 14,
      vars: 2,
      consts: [[1, "container"], [1, "col-md-6"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function EditTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tyre Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTypeComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTypeComponent_Template_button_click_9_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTypeComponent_Template_button_click_12_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editing Tyre Type ", ctx.data.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3R5cGVzL3R5cGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "<div class=\"container\">\n      <h4>Editing Tyre Type {{data.name}}</h4>\n      <mat-form-field class=\"col-md-6\">\n      \t<mat-label>Tyre Type</mat-label>\n      \t<input matInput [(ngModel)]=\"name\" />\n      </mat-form-field>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"warn\" (click)=\"close()\">Close</button>\n        </div>\n      </div>\n    </div>",
          styleUrls: ['types.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var DeleteTypeComponent = /*#__PURE__*/function () {
      function DeleteTypeComponent(dialogRef, typeService, data) {
        _classCallCheck(this, DeleteTypeComponent);

        this.dialogRef = dialogRef;
        this.typeService = typeService;
        this.data = data;
      }

      _createClass(DeleteTypeComponent, [{
        key: "delete",
        value: function _delete() {
          try {
            console.log("deleted ".concat(this.data.name));
            this.typeService["delete"](this.data);
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return DeleteTypeComponent;
    }();

    DeleteTypeComponent.ɵfac = function DeleteTypeComponent_Factory(t) {
      return new (t || DeleteTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    DeleteTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteTypeComponent,
      selectors: [["ng-component"]],
      decls: 10,
      vars: 1,
      consts: [[1, "container"], [1, "text-danger"], [1, "row"], [1, "col-6"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function DeleteTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteTypeComponent_Template_button_click_5_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes, Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteTypeComponent_Template_button_click_8_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No, Do Not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to delete ", ctx.data.name, "");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3R5cGVzL3R5cGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n    <div class=\"container\">\n      <h4 class=\"text-danger\">Are you sure you want to delete {{data.name}}</h4>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"warn\" (click)=\"delete()\">Yes, Delete</button>\n        </div>\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"primary\" (click)=\"close()\">No, Do Not</button>\n        </div>\n      </div>\n    </div>\n  ",
          styleUrls: ['types.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var NewTyreTypeComponent = /*#__PURE__*/function () {
      function NewTyreTypeComponent(typeService, dialogRef) {
        _classCallCheck(this, NewTyreTypeComponent);

        this.typeService = typeService;
        this.dialogRef = dialogRef;
        this.name = '';
      }

      _createClass(NewTyreTypeComponent, [{
        key: "save",
        value: function save() {
          if (this.name === '') {
            return;
          }

          try {
            this.typeService.add({
              name: this.name
            });
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return NewTyreTypeComponent;
    }();

    NewTyreTypeComponent.ɵfac = function NewTyreTypeComponent_Factory(t) {
      return new (t || NewTyreTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]));
    };

    NewTyreTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewTyreTypeComponent,
      selectors: [["ng-component"]],
      decls: 14,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-md-6"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function NewTyreTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Tyre Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTyreTypeComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTyreTypeComponent_Template_button_click_9_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTyreTypeComponent_Template_button_click_12_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3R5cGVzL3R5cGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTyreTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n    <div class=\"container\">\n      <h4>New Tyre Type</h4>\n      <div class=\"row\">\n        <mat-form-field class=\"col-md-6\">\n        \t<mat-label></mat-label>\n        \t<input matInput [(ngModel)]=\"name\" />\n        </mat-form-field>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"warn\" (click)=\"close()\">Close</button>\n        </div>\n      </div>\n    </div>\n  ",
          styleUrls: ['types.component.css']
        }]
      }], function () {
        return [{
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin/view-products/view-products.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/admin/view-products/view-products.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ViewProductsComponent, EditProductComponent, DeleteProductComponent */

  /***/
  function srcAppUiAdminViewProductsViewProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProductsComponent", function () {
      return ViewProductsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
      return EditProductComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteProductComponent", function () {
      return DeleteProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../data/product/product.service */
    "./src/app/data/product/product.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../add-product/add-product.component */
    "./src/app/ui/admin/add-product/add-product.component.ts");
    /* harmony import */


    var _data_type_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../data/type/type.service */
    "./src/app/data/type/type.service.ts");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function ViewProductsComponent_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r70.name);
      }
    }

    function ViewProductsComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tyre Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r71 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r71.tyre_code);
      }
    }

    function ViewProductsComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r72.quantity);
      }
    }

    function ViewProductsComponent_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r73 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r73.price));
      }
    }

    function ViewProductsComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r74 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r74.description || "Not available");
      }
    }

    function ViewProductsComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Brand");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r75 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r75.brand);
      }
    }

    function ViewProductsComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tyre Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r76 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r76.type);
      }
    }

    function ViewProductsComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 18);
      }
    }

    function ViewProductsComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProductsComponent_td_25_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var element_r77 = ctx.$implicit;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.edit(element_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProductsComponent_td_25_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var element_r77 = ctx.$implicit;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80["delete"](element_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewProductsComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    function ViewProductsComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    var _c0 = function _c0() {
      return [5, 10];
    };

    function EditProductComponent_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r84 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r84.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r84.name);
      }
    }

    function EditProductComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r85.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r85.name);
      }
    }

    var ViewProductsComponent = /*#__PURE__*/function () {
      function ViewProductsComponent(productService, dialog) {
        _classCallCheck(this, ViewProductsComponent);

        this.productService = productService;
        this.dialog = dialog;
        this.table_columns = ['name', 'tyre_code', 'price', 'description', 'quantity', 'brand', 'type', ' '];
        this.table_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.info = [];
      }

      _createClass(ViewProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.productService.getAll().subscribe(function (data) {
                      return _this10.table_datasource.data = data;
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit(element) {
          var _this11 = this;

          this.dialog.open(EditProductComponent, {
            data: element
          }).afterClosed().subscribe(function () {
            return __awaiter(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.ngOnInit();

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          });
        }
      }, {
        key: "delete",
        value: function _delete(element) {
          var _this12 = this;

          this.dialog.open(DeleteProductComponent, {
            data: element
          }).afterClosed().subscribe(function () {
            return __awaiter(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.ngOnInit();

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          });
        }
      }, {
        key: "addProductDialog",
        value: function addProductDialog() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.dialog.open(_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"]).afterClosed().subscribe(function () {
                      return __awaiter(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this.ngOnInit();

                              case 2:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return ViewProductsComponent;
    }();

    ViewProductsComponent.ɵfac = function ViewProductsComponent_Factory(t) {
      return new (t || ViewProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    ViewProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewProductsComponent,
      selectors: [["app-view-products"]],
      viewQuery: function ViewProductsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 35,
      vars: 5,
      consts: [[2, "width", "100%"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tyre_code"], ["matColumnDef", "quantity"], ["matColumnDef", "price"], ["matColumnDef", "description"], ["matColumnDef", "brand"], ["matColumnDef", "type"], ["matColumnDef", " "], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "row"], [1, "col-3"], ["mat-raised-button", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ViewProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewProductsComponent_th_3_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProductsComponent_td_4_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewProductsComponent_th_6_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewProductsComponent_td_7_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewProductsComponent_th_9_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewProductsComponent_td_10_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewProductsComponent_th_12_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewProductsComponent_td_13_Template, 3, 3, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewProductsComponent_th_15_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewProductsComponent_td_16_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewProductsComponent_th_18_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewProductsComponent_td_19_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewProductsComponent_th_21_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewProductsComponent_td_22_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ViewProductsComponent_th_24_Template, 1, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewProductsComponent_td_25_Template, 7, 0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewProductsComponent_tr_26_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewProductsComponent_tr_27_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewProductsComponent_Template_button_click_31_listener() {
            return ctx.addProductDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.table_datasource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.table_columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.table_columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3ZpZXctcHJvZHVjdHMvdmlldy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-products',
          templateUrl: './view-products.component.html',
          styleUrls: ['./view-products.component.css']
        }]
      }], function () {
        return [{
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }]
      });
    })();

    var EditProductComponent = /*#__PURE__*/function () {
      function EditProductComponent(dialogRef, brandService, typeService, productService, data) {
        _classCallCheck(this, EditProductComponent);

        this.dialogRef = dialogRef;
        this.brandService = brandService;
        this.typeService = typeService;
        this.productService = productService;
        this.data = data;
        this.prod = {
          quantity: data.quantity,
          description: data.description,
          brand: data.brand,
          tyre_code: data.tyre_code,
          name: data.name,
          type: data.type,
          id: data.id,
          price: data.price
        };
        console.log(this.prod);
      }

      _createClass(EditProductComponent, [{
        key: "save",
        value: function save() {
          try {
            console.log(this.prod);
            this.productService.update(this.prod);
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return EditProductComponent;
    }();

    EditProductComponent.ɵfac = function EditProductComponent_Factory(t) {
      return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_7__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    EditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditProductComponent,
      selectors: [["ng-component"]],
      decls: 46,
      vars: 16,
      consts: [[1, "container"], [1, "row"], [1, "col-md-6"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "value", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"]],
      template: function EditProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.prod.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tyre Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.prod.tyre_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_17_listener($event) {
            return ctx.prod.brand = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditProductComponent_mat_option_18_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_23_listener($event) {
            return ctx.prod.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditProductComponent_mat_option_24_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.prod.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.prod.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.prod.quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_41_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_44_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editing ", ctx.data.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.tyre_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.brand)("value", ctx.prod.brand);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, ctx.brandService.entities$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.type)("value", ctx.prod.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 14, ctx.typeService.entities$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prod.quantity);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3ZpZXctcHJvZHVjdHMvdmlldy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n    <div class=\"container\">\n      <h4>Editing {{data.name}}</h4>\n      <mat-divider></mat-divider>\n      <div class=\"container\">\n        <div class=\"row\">\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Name</mat-label>\n            <input matInput [(ngModel)]=\"prod.name\" />\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Tyre Code</mat-label>\n            <input matInput [(ngModel)]=\"prod.tyre_code\"/>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Brand</mat-label>\n            <mat-select [(ngModel)]=\"prod.brand\" [value]=\"prod.brand\">\n              <mat-option *ngFor=\"let i of (brandService.entities$ | async)\" value=\"{{i.id}}\">{{i.name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Type</mat-label>\n            <mat-select [(ngModel)]=\"prod.type\" [value]=\"prod.type\">\n              <mat-option *ngFor=\"let i of (typeService.entities$ | async)\" value=\"{{i.id}}\">{{i.name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Price</mat-label>\n            <input matInput [(ngModel)]=\"prod.price\" type=\"number\"/>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Description</mat-label>\n            <input matInput [(ngModel)]=\"prod.description\"/>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <mat-label>Quantity</mat-label>\n            <input matInput [(ngModel)]=\"prod.quantity\" type=\"number\"/>\n          </mat-form-field>\n        </div>\n      <mat-divider></mat-divider>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n          <button mat-raised-button color=\"warn\" (click)=\"close()\">Close</button>\n        </div>\n      </div>\n    </div>\n  ",
          styleUrls: ['view-products.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_7__["BrandService"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"]
        }, {
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var DeleteProductComponent = /*#__PURE__*/function () {
      function DeleteProductComponent(dialogRef, productService, data) {
        _classCallCheck(this, DeleteProductComponent);

        this.dialogRef = dialogRef;
        this.productService = productService;
        this.data = data;
      }

      _createClass(DeleteProductComponent, [{
        key: "delete",
        value: function _delete() {
          try {
            console.log("deleted ".concat(this.data.name));
            this.productService["delete"](this.data);
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return DeleteProductComponent;
    }();

    DeleteProductComponent.ɵfac = function DeleteProductComponent_Factory(t) {
      return new (t || DeleteProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    DeleteProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteProductComponent,
      selectors: [["ng-component"]],
      decls: 11,
      vars: 1,
      consts: [[1, "container"], [1, "text-danger", "h4"], [1, "row"], [1, "col-6"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function DeleteProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProductComponent_Template_button_click_6_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Yes, Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProductComponent_Template_button_click_9_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No, Do Not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to delete ", ctx.data.name, " from the database");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluL3ZpZXctcHJvZHVjdHMvdmlldy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n  <div class=\"container\">\n    <p class=\"text-danger h4\"><b>Are you sure you want to delete {{data.name}} from the database</b></p>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <button mat-raised-button color=\"warn\" (click)=\"delete()\">Yes, Delete</button>\n      </div>\n      <div class=\"col-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"close()\">No, Do Not</button>\n      </div>\n    </div>\n  </div>\n  ",
          styleUrls: ['view-products.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/auth/auth/auth.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/ui/auth/auth/auth.service.ts ***!
    \**********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppUiAuthAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpClient) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.authenticated = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(form) {
          var _this14 = this;

          console.log(form.value);
          this.httpClient.post("https://noblesiteapi.herokuapp.com/api/auth/login", form.value).subscribe( // this.httpClient.post(`http://localhost:8000/api/auth/login`, form.value).subscribe(
          function (data) {
            _this14.user = data['user'];
            _this14.authenticated = true;
            console.log(_this14.user);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticated = false;
          this.user = null;
        }
      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          if (this.user == null) {
            return null;
          }

          return this.user;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/auth/services/auth-guard.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/ui/auth/services/auth-guard.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppUiAuthServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authService, router) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.authService.authenticated) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/auth/signin/signin.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ui/auth/signin/signin.component.ts ***!
    \****************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppUiAuthSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(dialogRef, fb, router, authService, snackBar) {
        _classCallCheck(this, SigninComponent);

        this.dialogRef = dialogRef;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "login",
        value: function login() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.authService.login(this.form);

                  case 2:
                    _context13.next = 4;
                    return this.router.navigateByUrl('/dashboard');

                  case 4:
                    this.dialogRef.close();
                    setTimeout(function () {
                      if (_this15.authService.authenticated) {
                        _this15.snackBar.open("You are now logged", null, {
                          duration: 10000
                        });
                      } else {
                        _this15.snackBar.open("Login failed", null, {
                          duration: 5000
                        });
                      }
                    }, 2000);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 35,
      vars: 2,
      consts: [[1, "container", 2, "padding", "20px"], [1, "row"], [1, "spacer"], [1, "text-center"], [1, "material-icons", 2, "color", "red", "font-size", "100px"], [1, "mat-h2"], [1, ""], ["color", "warn", 1, "col-md-12", 3, "formGroup"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "formControlName", "password", "type", "password"], [2, "color", "red"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "text-center", 2, "color", "red", "padding-top", "30px"], [2, "color", "black"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forget password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_25_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "InnoSimm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/auth/signout/signout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ui/auth/signout/signout.component.ts ***!
    \******************************************************/

  /*! exports provided: SignoutComponent */

  /***/
  function srcAppUiAuthSignoutSignoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignoutComponent", function () {
      return SignoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var SignoutComponent = /*#__PURE__*/function () {
      function SignoutComponent(dialogRef) {
        _classCallCheck(this, SignoutComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(SignoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close(false);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.dialogRef.close(true);
        }
      }]);

      return SignoutComponent;
    }();

    SignoutComponent.ɵfac = function SignoutComponent_Factory(t) {
      return new (t || SignoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    SignoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignoutComponent,
      selectors: [["app-signout"]],
      decls: 16,
      vars: 0,
      consts: [[1, "container"], [2, "display", "flex"], [1, "spacer"], [1, ""], [1, "row"], [1, "col-6"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-outline-info", 3, "click"]],
      template: function SignoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Signing Out Confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to sign out?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignoutComponent_Template_button_click_11_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignoutComponent_Template_button_click_14_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2F1dGgvc2lnbm91dC9zaWdub3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signout',
          templateUrl: './signout.component.html',
          styleUrls: ['./signout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/auth/signup/signup.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ui/auth/signup/signup.component.ts ***!
    \****************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUiAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _data_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data/users/users.service */
    "./src/app/data/users/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, usersService, router) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.usersService = usersService;
        this.router = router;
        this.confirm_pass = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }
      }, {
        key: "checkPassword",
        value: function checkPassword() {
          this.clearErr();
          var p1 = this.form.controls.password.value;
          var p2 = this.confirm_pass;

          if (p1 === '' || p2 === '') {
            return this.err = 'one password fields is empty';
          } else if (p1 !== p2) {
            return this.err = 'your passwords are no matching';
          }
        }
      }, {
        key: "clearErr",
        value: function clearErr() {
          this.err = '';
        }
      }, {
        key: "signup",
        value: function signup() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.checkPassword();

                    if (!(this.err !== '')) {
                      _context14.next = 3;
                      break;
                    }

                    return _context14.abrupt("return");

                  case 3:
                    _context14.prev = 3;
                    _context14.next = 6;
                    return this.usersService.add(this.form.value);

                  case 6:
                    _context14.next = 8;
                    return this.router.navigateByUrl('signin');

                  case 8:
                    _context14.next = 13;
                    break;

                  case 10:
                    _context14.prev = 10;
                    _context14.t0 = _context14["catch"](3);
                    console.log(_context14.t0);

                  case 13:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[3, 10]]);
          }));
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 45,
      vars: 7,
      consts: [[1, "mat-elevation-z4", "row", 2, "height", "100%", "padding", "15px"], [1, "col-md-6"], ["src", "/assets/images/tire.png", 1, "img-fluid", "rounded"], [1, "col-md-6", 2, "padding", "30px 40px"], [2, "color", "red"], [1, "row"], ["color", "warn", 1, "", 3, "formGroup"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "first_name"], ["matInput", "", "formControlName", "last_name"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "formControlName", "password", "type", "password", 3, "keypress"], ["p1", ""], ["color", "warn", 1, ""], ["matInput", "", "type", "password", 3, "ngModel", "keypress", "ngModelChange"], [1, "mat-warn"], [1, "col-6"], [1, "btn", "btn-outline-danger", 3, "click"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Signup Up with");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " InnoSimm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SignupComponent_Template_input_keypress_31_listener() {
            return ctx.clearErr();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SignupComponent_Template_input_keypress_36_listener() {
            return ctx.clearErr();
          })("ngModelChange", function SignupComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.confirm_pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_41_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirm_pass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.err);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _data_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/contactus/contactus.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/contactus/contactus.component.ts ***!
    \*****************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppUiContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactusComponent = /*#__PURE__*/function () {
      function ContactusComponent() {
        _classCallCheck(this, ContactusComponent);
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ɵfac = function ContactusComponent_Factory(t) {
      return new (t || ContactusComponent)();
    };

    ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactusComponent,
      selectors: [["app-contactus"]],
      decls: 61,
      vars: 0,
      consts: [[1, "Material-contact-section", "section-padding", "section-dark", "mat-elevation-z4"], [1, "container"], [1, "row"], ["data-wow-delay", ".2s", 1, "col-md-12", "wow", "animated", "fadeInLeft"], [1, "section-title"], ["data-wow-delay", ".2s", 1, "col-md-6", "mt-3", "contact-widget-section2", "wow", "animated", "fadeInLeft"], [1, "find-widget"], ["href", "https://hostriver.ro"], ["href", "#"], ["href", "https://uny.ro"], ["data-wow-delay", ".2s", 1, "col-md-6", "wow", "animated", "fadeInRight"], ["role", "form", "method", "post", "id", "contactForm", "name", "contact-form", "data-toggle", "validator", 1, "shake"], [1, "form-group", "label-floating"], ["for", "name", 1, "control-label"], ["id", "name", "type", "text", "name", "name", "required", "", "data-error", "Please enter your name", 1, "form-control"], [1, "help-block", "with-errors"], ["for", "email", 1, "control-label"], ["id", "email", "type", "email", "name", "email", "required", "", "data-error", "Please enter your Email", 1, "form-control"], [1, "control-label"], ["id", "msg_subject", "type", "text", "name", "subject", "required", "", "data-error", "Please enter your message subject", 1, "form-control"], ["for", "message", 1, "control-label"], ["rows", "3", "id", "message", "name", "message", "required", "", "data-error", "Write your message", 1, "form-control"], [1, "form-submit", "mt-5"], [1, "btn", "btn-outline-danger"], [1, "material-icons", "mdi", "mdi-message-outline"], ["id", "msgSubmit", 1, "h3", "text-center", "hidden"], [1, "clearfix"]],
      template: function ContactusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Love to Hear From You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Company: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HostRiver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4435 Berkshire Circle Knoxville");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Phone: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+ 879-890-9767");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Website: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "www.uny.ro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Program: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mon to Sat: 09:30 AM - 10.30 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Send Message ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Rubik:500,700|Roboto:400,600\");\n\n.section-padding[_ngcontent-%COMP%] {\n  padding: 45px 0;\n}\n\n.section-dark[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  z-index: -2;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 0;\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0\n}\n\n.form-control[_ngcontent-%COMP%]::-moz-placeholder, .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-control[_ngcontent-%COMP%]:-ms-input-placeholder, .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder, .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-control[disabled][_ngcontent-%COMP%], .form-control[readonly][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .form-control[disabled][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .form-control[readonly][_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0)\n}\n\n.form-control[disabled][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .form-control[disabled][_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative\n}\n\n.form-group.label-floating[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.label-placeholder[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.label-static[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  transition: .3s ease all\n}\n\n.form-group.label-floating[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  will-change: left, top, contents\n}\n\n.form-group.label-placeholder[_ngcontent-%COMP%]:not(.is-empty)   label.control-label[_ngcontent-%COMP%] {\n  display: none\n}\n\n.form-group[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none\n}\n\n.form-group.is-focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  outline: 0;\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  transition-duration: .3s\n}\n\n.form-group.is-focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .material-input[_ngcontent-%COMP%]:after {\n  background-color: #009688\n}\n\n.form-group.is-focused[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group.is-focused[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #009688\n}\n\n.form-group.is-focused.label-placeholder[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group.is-focused.label-placeholder[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #BDBDBD\n}\n\n.form-group.is-focused[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\n  display: block\n}\n\n.form-group.has-warning[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: none\n}\n\n.form-group.has-warning.is-focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#ff5722, #ff5722), linear-gradient(#D2D2D2, #D2D2D2)\n}\n\n.form-group.has-warning[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%], .form-group.has-warning[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #ff5722\n}\n\n.form-group.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: none\n}\n\n.form-group.has-error[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%], .form-group.has-error[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #f44336\n}\n\n.form-group.has-success[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: none\n}\n\n.form-group.has-success.is-focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2)\n}\n\n.form-group.has-success[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%], .form-group.has-success[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #4caf50\n}\n\n.form-group.has-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: none\n}\n\n.form-group.has-info.is-focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2)\n}\n\n.form-group.has-info[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%], .form-group.has-info[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #03a9f4\n}\n\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none\n}\n\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]    ~ .form-control-highlight[_ngcontent-%COMP%] {\n  margin-top: -11px\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]    ~ .material-input[_ngcontent-%COMP%]:after {\n  display: none\n}\n\n.form-control[_ngcontent-%COMP%] {\n  margin-bottom: 7px\n}\n\n.form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\nlabel.control-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.07142857;\n  font-weight: 400;\n  margin: 16px 0 0 0\n}\n\n.help-block[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 12px\n}\n\n.form-group[_ngcontent-%COMP%] {\n  padding-bottom: 7px;\n  margin: 28px 0 0 0\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 7px\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.07142857;\n  font-weight: 400;\n  margin: 16px 0 0 0\n}\n\n.form-group[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 12px\n}\n\n.form-group.label-floating[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.label-placeholder[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -7px;\n  font-size: 16px;\n  line-height: 1.42857143\n}\n\n.form-group.label-floating.is-focused[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.label-floating[_ngcontent-%COMP%]:not(.is-empty)   label.control-label[_ngcontent-%COMP%], .form-group.label-static[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857\n}\n\n.form-group.label-floating[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:-webkit-autofill    ~ label.control-label[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%] {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 3px\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group.form-group-sm[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group.form-group-sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  line-height: 1.125;\n  font-weight: 400;\n  margin: 16px 0 0 0\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 9px\n}\n\n.form-group.form-group-sm.label-floating[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.form-group-sm.label-placeholder[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5\n}\n\n.form-group.form-group-sm.label-floating.is-focused[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.form-group-sm.label-floating[_ngcontent-%COMP%]:not(.is-empty)   label.control-label[_ngcontent-%COMP%], .form-group.form-group-sm.label-static[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125\n}\n\n.form-group.form-group-sm.label-floating[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:-webkit-autofill    ~ label.control-label[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%] {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 9px\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group.form-group-lg[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group.form-group-lg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: .99999998;\n  font-weight: 400;\n  margin: 16px 0 0 0\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 14px\n}\n\n.form-group.form-group-lg.label-floating[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.form-group-lg.label-placeholder[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.3333333\n}\n\n.form-group.form-group-lg.label-floating.is-focused[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%], .form-group.form-group-lg.label-floating[_ngcontent-%COMP%]:not(.is-empty)   label.control-label[_ngcontent-%COMP%], .form-group.form-group-lg.label-static[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: .99999998\n}\n\n.form-group.form-group-lg.label-floating[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:-webkit-autofill    ~ label.control-label[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: .99999998\n}\n\nselect.form-control[_ngcontent-%COMP%] {\n  border: 0;\n  box-shadow: none;\n  border-radius: 0\n}\n\n.form-group.is-focused[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-color: #D2D2D2\n}\n\n.form-group.is-focused[_ngcontent-%COMP%]   select.form-control[multiple][_ngcontent-%COMP%], select.form-control[multiple][_ngcontent-%COMP%] {\n  height: 85px\n}\n\n.input-group-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 0 7px 0\n}\n\n.form-group.form-group-sm[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 0 3px 0\n}\n\n.form-group.form-group-lg[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 0 9px 0\n}\n\n.input-group[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%] {\n  padding: 0 12px\n}\n\n.input-group[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  border: 0;\n  background: 0 0\n}\n\n.form-group[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100\n}\n\n.contact-widget-section[_ngcontent-%COMP%]   .single-contact-widget[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  padding: 20px 25px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);\n  height: 260px;\n  margin-top: 25px;\n  transition: all 0.3s ease-in-out\n}\n\n.contact-widget-section[_ngcontent-%COMP%]   .single-contact-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 75px\n}\n\n.contact-widget-section[_ngcontent-%COMP%]   .single-contact-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  font-weight: 700;\n  padding-bottom: 10px\n}\n\n.contact-widget-section[_ngcontent-%COMP%]   .single-contact-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 16px\n}\n\n.contact-widget-section[_ngcontent-%COMP%]   .single-contact-widget[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.46);\n  cursor: pointer;\n  transition: all 0.3s ease-in-out\n}\n\n#contactForm[_ngcontent-%COMP%] {\n  margin-top: -10px\n}\n\n#contactForm[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label.control-label[_ngcontent-%COMP%] {\n  color: #8c8c8c\n}\n\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-weight: 500;\n  height: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQUFtRjs7QUFFbkY7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxTQUFTO0VBSVQsc0ZBQXNGO0VBRXRGLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFFNUIsMkRBQTJEO0VBQzNELGtDQUFrQztFQUdsQyxrQ0FBa0M7RUFDbEMsV0FBVztFQUVYLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBOztFQUVFLGNBQWM7RUFDZDtBQUNGOztBQUVBOztFQUVFLGNBQWM7RUFDZDtBQUNGOztBQUVBOztFQUVFLGNBQWM7RUFDZDtBQUNGOztBQUVBOzs7Ozs7RUFNRTtBQUNGOztBQUVBOzs7O0VBSUUsc0JBQXNCO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBR3BCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUlWLHNGQUFzRjtFQUV0RixtQ0FBbUM7RUFFbkMsZ0JBQWdCO0VBR2hCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFO0FBQ0Y7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFFRTtBQUNGOztBQUVBO0VBSUU7QUFDRjs7QUFFQTs7RUFFRTtBQUNGOztBQUVBO0VBRUU7QUFDRjs7QUFFQTs7RUFFRTtBQUNGOztBQUVBO0VBRUU7QUFDRjs7QUFFQTtFQUlFO0FBQ0Y7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUVFO0FBQ0Y7O0FBRUE7RUFJRTtBQUNGOztBQUVBOztFQUVFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZDtBQUNGOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZDtBQUNGOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBOztFQUVFLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7QUFDRjs7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLE9BQU87RUFDUCxlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0VBQ1AsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZjtBQUNGOztBQUVBOzs7RUFHRSxVQUFVO0VBQ1YsT0FBTztFQUNQLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Q7QUFDRjs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7QUFDRjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7OztFQUdFLFVBQVU7RUFDVixPQUFPO0VBQ1AsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztFQUNQLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0UsU0FBUztFQUVULGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBRUUsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1Q7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWkvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6NTAwLDcwMHxSb2JvdG86NDAwLDYwMFwiKTtcblxuLnNlY3Rpb24tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDQ1cHggMDtcbn1cblxuLnNlY3Rpb24tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IC0yO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mb3JtLWNvbnRyb2wsXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMwMDk2ODgpLCB0bygjMDA5Njg4KSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0QyRDJEMiksIHRvKCNEMkQyRDIpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzAwOTY4OCwgIzAwOTY4OCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNEMkQyRDIsICNEMkQyRDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoIzAwOTY4OCwgIzAwOTY4OCksIC1vLWxpbmVhci1ncmFkaWVudCgjRDJEMkQyLCAjRDJEMkQyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDk2ODgsICMwMDk2ODgpLCBsaW5lYXItZ3JhZGllbnQoI0QyRDJEMiwgI0QyRDJEMik7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAwIDJweCwgMTAwJSAxcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHgsIDEwMCUgMXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tLCBjZW50ZXIgLXdlYmtpdC1jYWxjKDEwMCUgLSAxcHgpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tLCBjZW50ZXIgY2FsYygxMDAlIC0gMXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzIGVhc2Utb3V0O1xuICBmbG9hdDogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwXG59XG5cbi5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIsXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQkRCREJEO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLmZvcm0tY29udHJvbFtkaXNhYmxlZF0sXG4uZm9ybS1jb250cm9sW3JlYWRvbmx5XSxcbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLFxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbFtyZWFkb25seV0sXG5maWVsZHNldFtkaXNhYmxlZF0gLmZvcm0tY29udHJvbCxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uZm9ybS1jb250cm9sW2Rpc2FibGVkXSxcbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5mb3JtLWNvbnRyb2wsXG5maWVsZHNldFtkaXNhYmxlZF0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0QyRDJEMlxufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uZm9ybS1ncm91cC5sYWJlbC1mbG9hdGluZyBsYWJlbC5jb250cm9sLWxhYmVsLFxuLmZvcm0tZ3JvdXAubGFiZWwtcGxhY2Vob2xkZXIgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmxhYmVsLXN0YXRpYyBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XG4gIC1vLXRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UgYWxsXG59XG5cbi5mb3JtLWdyb3VwLmxhYmVsLWZsb2F0aW5nIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICB3aWxsLWNoYW5nZTogbGVmdCwgdG9wLCBjb250ZW50c1xufVxuXG4uZm9ybS1ncm91cC5sYWJlbC1wbGFjZWhvbGRlcjpub3QoLmlzLWVtcHR5KSBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZVxufVxuXG4uZm9ybS1ncm91cCAuaGVscC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZVxufVxuXG4uZm9ybS1ncm91cC5pcy1mb2N1c2VkIC5mb3JtLWNvbnRyb2wge1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMwMDk2ODgpLCB0bygjMDA5Njg4KSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0QyRDJEMiksIHRvKCNEMkQyRDIpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzAwOTY4OCwgIzAwOTY4OCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNEMkQyRDIsICNEMkQyRDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoIzAwOTY4OCwgIzAwOTY4OCksIC1vLWxpbmVhci1ncmFkaWVudCgjRDJEMkQyLCAjRDJEMkQyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDk2ODgsICMwMDk2ODgpLCBsaW5lYXItZ3JhZGllbnQoI0QyRDJEMiwgI0QyRDJEMik7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwgMTAwJSAxcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHgsIDEwMCUgMXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zc1xufVxuXG4uZm9ybS1ncm91cC5pcy1mb2N1c2VkIC5mb3JtLWNvbnRyb2wgLm1hdGVyaWFsLWlucHV0OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4OFxufVxuXG4uZm9ybS1ncm91cC5pcy1mb2N1c2VkIGxhYmVsLFxuLmZvcm0tZ3JvdXAuaXMtZm9jdXNlZCBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6ICMwMDk2ODhcbn1cblxuLmZvcm0tZ3JvdXAuaXMtZm9jdXNlZC5sYWJlbC1wbGFjZWhvbGRlciBsYWJlbCxcbi5mb3JtLWdyb3VwLmlzLWZvY3VzZWQubGFiZWwtcGxhY2Vob2xkZXIgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjQkRCREJEXG59XG5cbi5mb3JtLWdyb3VwLmlzLWZvY3VzZWQgLmhlbHAtYmxvY2sge1xuICBkaXNwbGF5OiBibG9ja1xufVxuXG4uZm9ybS1ncm91cC5oYXMtd2FybmluZyAuZm9ybS1jb250cm9sIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lXG59XG5cbi5mb3JtLWdyb3VwLmhhcy13YXJuaW5nLmlzLWZvY3VzZWQgLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmNTcyMiksIHRvKCNmZjU3MjIpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRDJEMkQyKSwgdG8oI0QyRDJEMikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmY1NzIyLCAjZmY1NzIyKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0QyRDJEMiwgI0QyRDJEMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgjZmY1NzIyLCAjZmY1NzIyKSwgLW8tbGluZWFyLWdyYWRpZW50KCNEMkQyRDIsICNEMkQyRDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmNTcyMiwgI2ZmNTcyMiksIGxpbmVhci1ncmFkaWVudCgjRDJEMkQyLCAjRDJEMkQyKVxufVxuXG4uZm9ybS1ncm91cC5oYXMtd2FybmluZyAuaGVscC1ibG9jayxcbi5mb3JtLWdyb3VwLmhhcy13YXJuaW5nIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICBjb2xvcjogI2ZmNTcyMlxufVxuXG4uZm9ybS1ncm91cC5oYXMtZXJyb3IgLmZvcm0tY29udHJvbCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZVxufVxuXG4uZm9ybS1ncm91cC5oYXMtZXJyb3IgLmhlbHAtYmxvY2ssXG4uZm9ybS1ncm91cC5oYXMtZXJyb3IgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjZjQ0MzM2XG59XG5cbi5mb3JtLWdyb3VwLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmVcbn1cblxuLmZvcm0tZ3JvdXAuaGFzLXN1Y2Nlc3MuaXMtZm9jdXNlZCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjNGNhZjUwKSwgdG8oIzRjYWY1MCkpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNEMkQyRDIpLCB0bygjRDJEMkQyKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM0Y2FmNTAsICM0Y2FmNTApLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRDJEMkQyLCAjRDJEMkQyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCM0Y2FmNTAsICM0Y2FmNTApLCAtby1saW5lYXItZ3JhZGllbnQoI0QyRDJEMiwgI0QyRDJEMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNGNhZjUwLCAjNGNhZjUwKSwgbGluZWFyLWdyYWRpZW50KCNEMkQyRDIsICNEMkQyRDIpXG59XG5cbi5mb3JtLWdyb3VwLmhhcy1zdWNjZXNzIC5oZWxwLWJsb2NrLFxuLmZvcm0tZ3JvdXAuaGFzLXN1Y2Nlc3MgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjNGNhZjUwXG59XG5cbi5mb3JtLWdyb3VwLmhhcy1pbmZvIC5mb3JtLWNvbnRyb2wge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmVcbn1cblxuLmZvcm0tZ3JvdXAuaGFzLWluZm8uaXMtZm9jdXNlZCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMDNhOWY0KSwgdG8oIzAzYTlmNCkpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNEMkQyRDIpLCB0bygjRDJEMkQyKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwM2E5ZjQsICMwM2E5ZjQpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRDJEMkQyLCAjRDJEMkQyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCMwM2E5ZjQsICMwM2E5ZjQpLCAtby1saW5lYXItZ3JhZGllbnQoI0QyRDJEMiwgI0QyRDJEMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDNhOWY0LCAjMDNhOWY0KSwgbGluZWFyLWdyYWRpZW50KCNEMkQyRDIsICNEMkQyRDIpXG59XG5cbi5mb3JtLWdyb3VwLmhhcy1pbmZvIC5oZWxwLWJsb2NrLFxuLmZvcm0tZ3JvdXAuaGFzLWluZm8gbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjMDNhOWY0XG59XG5cbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lXG59XG5cbi5mb3JtLWdyb3VwIHRleHRhcmVhIH4gLmZvcm0tY29udHJvbC1oaWdobGlnaHQge1xuICBtYXJnaW4tdG9wOiAtMTFweFxufVxuXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZVxufVxuXG4uZm9ybS1ncm91cCBzZWxlY3QgfiAubWF0ZXJpYWwtaW5wdXQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiA3cHhcbn1cblxuLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjQkRCREJEO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjQkRCREJEO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5jaGVja2JveCBsYWJlbCxcbi5yYWRpbyBsYWJlbCxcbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxubGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMDcxNDI4NTc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMTZweCAwIDAgMFxufVxuXG4uaGVscC1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTJweFxufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIG1hcmdpbjogMjhweCAwIDAgMFxufVxuXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4XG59XG5cbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogI0JEQkRCRDtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjQkRCREJEO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogI0JEQkRCRDtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uZm9ybS1ncm91cCAuY2hlY2tib3ggbGFiZWwsXG4uZm9ybS1ncm91cCAucmFkaW8gbGFiZWwsXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjQkRCREJEO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjA3MTQyODU3O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDE2cHggMCAwIDBcbn1cblxuLmZvcm0tZ3JvdXAgLmhlbHAtYmxvY2sge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDEycHhcbn1cblxuLmZvcm0tZ3JvdXAubGFiZWwtZmxvYXRpbmcgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmxhYmVsLXBsYWNlaG9sZGVyIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICB0b3A6IC03cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDNcbn1cblxuLmZvcm0tZ3JvdXAubGFiZWwtZmxvYXRpbmcuaXMtZm9jdXNlZCBsYWJlbC5jb250cm9sLWxhYmVsLFxuLmZvcm0tZ3JvdXAubGFiZWwtZmxvYXRpbmc6bm90KC5pcy1lbXB0eSkgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmxhYmVsLXN0YXRpYyBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgdG9wOiAtMzBweDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1N1xufVxuXG4uZm9ybS1ncm91cC5sYWJlbC1mbG9hdGluZyBpbnB1dC5mb3JtLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCB+IGxhYmVsLmNvbnRyb2wtbGFiZWwgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIHRvcDogLTMwcHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMDcxNDI4NTdcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1zbSB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIG1hcmdpbjogMjFweCAwIDAgMFxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiAzcHhcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI0JEQkRCRDtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI0JEQkRCRDtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjQkRCREJEO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20gLmNoZWNrYm94IGxhYmVsLFxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1zbSAucmFkaW8gbGFiZWwsXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXNtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI0JEQkRCRDtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXNtIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDE2cHggMCAwIDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1zbSAuaGVscC1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogOXB4XG59XG5cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20ubGFiZWwtZmxvYXRpbmcgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20ubGFiZWwtcGxhY2Vob2xkZXIgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIHRvcDogLTExcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNVxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXNtLmxhYmVsLWZsb2F0aW5nLmlzLWZvY3VzZWQgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20ubGFiZWwtZmxvYXRpbmc6bm90KC5pcy1lbXB0eSkgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20ubGFiZWwtc3RhdGljIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1XG59XG5cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20ubGFiZWwtZmxvYXRpbmcgaW5wdXQuZm9ybS1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgfiBsYWJlbC5jb250cm9sLWxhYmVsIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1XG59XG5cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtbGcge1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICBtYXJnaW46IDMwcHggMCAwIDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4XG59XG5cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBjb2xvcjogI0JEQkRCRDtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLWxnIC5jaGVja2JveCBsYWJlbCxcbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtbGcgLnJhZGlvIGxhYmVsLFxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgY29sb3I6ICNCREJEQkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogLjk5OTk5OTk4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDE2cHggMCAwIDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyAuaGVscC1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTRweFxufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLWxnLmxhYmVsLWZsb2F0aW5nIGxhYmVsLmNvbnRyb2wtbGFiZWwsXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLWxnLmxhYmVsLXBsYWNlaG9sZGVyIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICB0b3A6IC01cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzM1xufVxuXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLWxnLmxhYmVsLWZsb2F0aW5nLmlzLWZvY3VzZWQgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtbGcubGFiZWwtZmxvYXRpbmc6bm90KC5pcy1lbXB0eSkgbGFiZWwuY29udHJvbC1sYWJlbCxcbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtbGcubGFiZWwtc3RhdGljIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICB0b3A6IC0zMnB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAuOTk5OTk5OThcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZy5sYWJlbC1mbG9hdGluZyBpbnB1dC5mb3JtLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCB+IGxhYmVsLmNvbnRyb2wtbGFiZWwgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIHRvcDogLTMycHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IC45OTk5OTk5OFxufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBcbn1cblxuLmZvcm0tZ3JvdXAuaXMtZm9jdXNlZCBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICNEMkQyRDJcbn1cblxuLmZvcm0tZ3JvdXAuaXMtZm9jdXNlZCBzZWxlY3QuZm9ybS1jb250cm9sW211bHRpcGxlXSxcbnNlbGVjdC5mb3JtLWNvbnRyb2xbbXVsdGlwbGVdIHtcbiAgaGVpZ2h0OiA4NXB4XG59XG5cbi5pbnB1dC1ncm91cC1idG4gLmJ0biB7XG4gIG1hcmdpbjogMCAwIDdweCAwXG59XG5cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc20gLmlucHV0LWdyb3VwLWJ0biAuYnRuIHtcbiAgbWFyZ2luOiAwIDAgM3B4IDBcbn1cblxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1sZyAuaW5wdXQtZ3JvdXAtYnRuIC5idG4ge1xuICBtYXJnaW46IDAgMCA5cHggMFxufVxuXG4uaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biB7XG4gIHBhZGRpbmc6IDAgMTJweFxufVxuXG4uaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAwIDBcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1maWxlXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDBcbn1cblxuLmNvbnRhY3Qtd2lkZ2V0LXNlY3Rpb24gLnNpbmdsZS1jb250YWN0LXdpZGdldCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGhlaWdodDogMjYwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0XG59XG5cbi5jb250YWN0LXdpZGdldC1zZWN0aW9uIC5zaW5nbGUtY29udGFjdC13aWRnZXQgaSB7XG4gIGZvbnQtc2l6ZTogNzVweFxufVxuXG4uY29udGFjdC13aWRnZXQtc2VjdGlvbiAuc2luZ2xlLWNvbnRhY3Qtd2lkZ2V0IGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHhcbn1cblxuLmNvbnRhY3Qtd2lkZ2V0LXNlY3Rpb24gLnNpbmdsZS1jb250YWN0LXdpZGdldCBwIHtcbiAgbGluZS1oZWlnaHQ6IDE2cHhcbn1cblxuLmNvbnRhY3Qtd2lkZ2V0LXNlY3Rpb24gLnNpbmdsZS1jb250YWN0LXdpZGdldDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0XG59XG5cbiNjb250YWN0Rm9ybSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4XG59XG5cbiNjb250YWN0Rm9ybSAuZm9ybS1ncm91cCBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6ICM4YzhjOGNcbn1cblxuI2NvbnRhY3RGb3JtIC5mb3JtLWNvbnRyb2wge1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IGF1dG9cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contactus',
          templateUrl: './contactus.component.html',
          styleUrls: ['./contactus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/dashboard/addressbook/addressbook.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/dashboard/addressbook/addressbook.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddressbookComponent */

  /***/
  function srcAppUiDashboardAddressbookAddressbookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressbookComponent", function () {
      return AddressbookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var AddressbookComponent = /*#__PURE__*/function () {
      function AddressbookComponent(authService, fb) {
        _classCallCheck(this, AddressbookComponent);

        this.authService = authService;
        this.fb = fb;
      }

      _createClass(AddressbookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = this.fb.group({
            recipient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cell1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cell2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.addressForm = this.fb.group({
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "save",
        value: function save() {}
      }]);

      return AddressbookComponent;
    }();

    AddressbookComponent.ɵfac = function AddressbookComponent_Factory(t) {
      return new (t || AddressbookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    AddressbookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddressbookComponent,
      selectors: [["app-addressbook"]],
      decls: 73,
      vars: 11,
      consts: [[1, "container"], [2, "color", "red"], [1, "row"], [1, "col-md-8"], [1, "col-md-4"], [3, "formGroup"], ["matInput", "", "formControlName", "recipient"], ["matInput", "", "formControlName", "cell1"], ["matInput", "", "formControlName", "cell2"], ["matInput", "", "formControlName", "tel"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "address1"], ["matInput", "", "formControlName", "address2"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "province"], ["matInput", "", "formControlName", "country"], [1, "spacer"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "text-center", 2, "color", "red"]],
      template: function AddressbookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fill and submit the form to add your delivery address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Recipient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cell 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cell 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Address 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Address 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Province");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressbookComponent_Template_button_click_65_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Address List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Addresses goes here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.authService.getLoggedInUser().username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Rhc2hib2FyZC9hZGRyZXNzYm9vay9hZGRyZXNzYm9vay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressbookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addressbook',
          templateUrl: './addressbook.component.html',
          styleUrls: ['./addressbook.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/dashboard/dashboard.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/dashboard/dashboard.component.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardComponent, IconButtonComponent */

  /***/
  function srcAppUiDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function () {
      return IconButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DashboardComponent_app_icon_button_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon-button", 13);
      }

      if (rf & 2) {
        var btn_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_text", btn_r45.text)("icon_name", btn_r45.icon)("link", btn_r45.link);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(authService) {
        _classCallCheck(this, DashboardComponent);

        this.authService = authService;
        this.nav_buttons = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nav_buttons = [{
            link: 'account',
            icon: 'account_box',
            text: 'My Account'
          }, {
            link: 'address',
            icon: 'book',
            text: 'Address Book'
          }, {
            link: 'orders',
            icon: 'reorder',
            text: 'Orders'
          }, {
            link: '',
            icon: 'verified',
            text: 'Whitelist'
          }, {
            link: 'receipt',
            icon: 'account_box',
            text: 'Newsletter'
          }, {
            link: '',
            icon: 'card_giftcard',
            text: 'Gift Cards'
          }, {
            link: '',
            icon: 'fact_check',
            text: 'Bookings'
          }, {
            link: '',
            icon: 'exit_to_app',
            text: 'Log Out'
          }];
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 21,
      vars: 2,
      consts: [[1, "mat-elevation-z4", "row"], [1, "col-2", 2, "background", "red", "color", "white", "padding", "0px"], [1, "block"], [1, "col-2"], [1, "spacer"], [1, "material-icons", 2, "font-size", "50px"], [1, "text-center"], [2, "padding", "0 20px"], [2, "padding", "20px"], [3, "button_text", "icon_name", "link", 4, "ngFor", "ngForOf"], [2, "background", "white", "padding", "20px"], ["src", "/assets/pic/logo.png", 1, "img-fluid"], [1, "col-10"], [3, "button_text", "icon_name", "link"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_app_icon_button_14_Template, 1, 3, "app-icon-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.getLoggedInUser().username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav_buttons);
        }
      },
      directives: function directives() {
        return [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], IconButtonComponent];
      },
      styles: [".m-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 10px;\n  color: lightgray;\n  display: flex;\n  align-items: end;\n}\n\ni[_ngcontent-%COMP%] {\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91aS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbmkge1xuICB3aWR0aDogMjRweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();

    var IconButtonComponent = function IconButtonComponent() {
      _classCallCheck(this, IconButtonComponent);
    };

    IconButtonComponent.ɵfac = function IconButtonComponent_Factory(t) {
      return new (t || IconButtonComponent)();
    };

    IconButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconButtonComponent,
      selectors: [["app-icon-button"]],
      inputs: {
        icon_name: "icon_name",
        button_text: "button_text",
        link: "link"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "m-btn", 3, "routerLink"], [1, "material-icons"], [2, "padding", "1px 5px"]],
      template: function IconButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_text);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".m-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 10px;\n  color: lightgray;\n  display: flex;\n  align-items: end;\n}\n\ni[_ngcontent-%COMP%] {\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91aS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbmkge1xuICB3aWR0aDogMjRweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-icon-button',
          template: "\n    <button class=\"m-btn\" routerLink=\"{{link}}\">\n      <i class=\"material-icons\">{{icon_name}}</i>\n      <p style=\"padding: 1px 5px;\">{{button_text}}</p>\n\n  ",
          styleUrls: ['dashboard.component.css']
        }]
      }], null, {
        icon_name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        button_text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/dashboard/myaccount/myaccount.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui/dashboard/myaccount/myaccount.component.ts ***!
    \***************************************************************/

  /*! exports provided: MyaccountComponent, EditUserComponent */

  /***/
  function srcAppUiDashboardMyaccountMyaccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function () {
      return MyaccountComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
      return EditUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _data_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../data/users/users.service */
    "./src/app/data/users/users.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function MyaccountComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have not logged in yet.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MyaccountComponent = /*#__PURE__*/function () {
      function MyaccountComponent(authService, dialog) {
        _classCallCheck(this, MyaccountComponent);

        this.authService = authService;
        this.dialog = dialog;
      }

      _createClass(MyaccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.getLoggedInUser();
        }
      }, {
        key: "accountEditDialog",
        value: function accountEditDialog() {
          this.dialog.open(EditUserComponent, {
            data: this.authService.getLoggedInUser()
          });
        }
      }]);

      return MyaccountComponent;
    }();

    MyaccountComponent.ɵfac = function MyaccountComponent_Factory(t) {
      return new (t || MyaccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyaccountComponent,
      selectors: [["app-myaccount"]],
      decls: 24,
      vars: 4,
      consts: [[1, "container"], [1, "mat-h2", 2, "color", "red"], [2, "color", "red"], [1, "text"], [1, "mat-elevation-z4", 2, "padding", "20px"], [1, "mat-h4", 2, "color", "red"], [1, "row"], [1, "spacer"], [1, "btn", "btn-outline-danger", 2, "margin-left", "20px", "padding", "5px 30px", 3, "click"], ["nologged", ""], [1, "text-center"]],
      template: function MyaccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is your account dashboard from here you will be able to view all your previous account activity and update your account information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Account Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_Template_button_click_20_listener() {
            return ctx.accountEditDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MyaccountComponent_ng_template_22_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.authService.getLoggedInUser().username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First Name : ", ctx.authService.getLoggedInUser().first_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Name : ", ctx.authService.getLoggedInUser().last_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email : ", ctx.authService.getLoggedInUser().email, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Rhc2hib2FyZC9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyaccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myaccount',
          templateUrl: './myaccount.component.html',
          styleUrls: ['./myaccount.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();

    var EditUserComponent = /*#__PURE__*/function () {
      function EditUserComponent(authService, fb, data, usersService) {
        _classCallCheck(this, EditUserComponent);

        this.authService = authService;
        this.fb = fb;
        this.data = data;
        this.usersService = usersService;
        this.form = this.fb.group({
          first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.getLoggedInUser().first_name),
          last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.getLoggedInUser().last_name),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.getLoggedInUser().email)
        });
      }

      _createClass(EditUserComponent, [{
        key: "save",
        value: function save() {
          var user = this.authService.getLoggedInUser();
          user.first_name = this.form.controls.first_name.value;
          user.last_name = this.form.controls.last_name.value;
          user.email = this.form.controls.email.value;
          console.log(user);
          this.usersService.update(user).subscribe(function (data) {
            return console.log(data);
          });
        }
      }]);

      return EditUserComponent;
    }();

    EditUserComponent.ɵfac = function EditUserComponent_Factory(t) {
      return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]));
    };

    EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditUserComponent,
      selectors: [["ng-component"]],
      decls: 21,
      vars: 3,
      consts: [[1, "container"], [1, "text-center"], [1, "mat-h2"], [1, "col-md-12", 3, "formGroup"], ["matInput", "", "formControlName", "first_name"], [1, "col-md-6", 3, "formGroup"], ["matInput", "", "formControlName", "last_name"], ["matInput", "", "formControlName", "email", "type", "email"], [1, "row"], [1, "spacer"], [1, "btn", "btn-danger", 3, "click"]],
      template: function EditUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit User Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_18_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Rhc2hib2FyZC9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n    <div class=\"container\">\n      <div class=\"text-center\"><p class=\"mat-h2\">Edit User Details</p></div>\n      <mat-form-field class=\"col-md-12\" [formGroup]=\"form\">\n      \t<mat-label>First Name</mat-label>\n      \t<input matInput formControlName=\"first_name\" />\n      </mat-form-field>\n      <mat-form-field class=\"col-md-6\" [formGroup]=\"form\">\n      \t<mat-label>Last Name</mat-label>\n      \t<input matInput formControlName=\"last_name\" />\n      </mat-form-field>\n      <mat-form-field class=\"col-md-6\" [formGroup]=\"form\">\n      \t<mat-label>Email</mat-label>\n      \t<input matInput formControlName=\"email\" type=\"email\" />\n      </mat-form-field>\n      <div class=\"row\">\n        <div class=\"spacer\"></div>\n        <button class=\"btn btn-danger\" (click)=\"save()\" >Save</button>\n        <div class=\"spacer\"></div>\n      </div>\n    </div>\n\n  ",
          styleUrls: ['myaccount.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _data_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/dashboard/orders/orders.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/dashboard/orders/orders.component.ts ***!
    \*********************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppUiDashboardOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(authService) {
        _classCallCheck(this, OrdersComponent);

        this.authService = authService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 16,
      vars: 1,
      consts: [[2, "color", "red"], [1, "container"], [1, "col-md-4", "mat-elevation-z4", 2, "padding", "20px"], [1, "text-center"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Orders List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Order 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.authService.getLoggedInUser().username, "");
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Rhc2hib2FyZC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/home/home.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/ui/home/home.component.ts ***!
    \*******************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppUiHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../data/product/product.service */
    "./src/app/data/product/product.service.ts");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");
    /* harmony import */


    var _data_type_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../data/type/type.service */
    "./src/app/data/type/type.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomeComponent_div_30_div_8_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, i_r16.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, i_r16.tyre_code));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx_r17.setbrand(i_r16.brand)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("each ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, i_r16.price), "");
      }
    }

    function HomeComponent_div_30_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_30_div_8_div_1_div_1_Template, 20, 12, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r16 = ctx.$implicit;

        var brand_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var type_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r16.brand == brand_r14.id && i_r16.type == type_r12.id && i_r16.quantity > 0);
      }
    }

    function HomeComponent_div_30_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_30_div_8_div_1_Template, 2, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r13.productService.entities$));
      }
    }

    function HomeComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_30_div_8_Template, 3, 3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r12 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, type_r12.name), " Vehicles");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx_r11.brandService.entities$));
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(productService, brandService, typeService) {
        _classCallCheck(this, HomeComponent);

        this.productService = productService;
        this.brandService = brandService;
        this.typeService = typeService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productService.getAll();
          this.brandService.getAll();
          this.typeService.getAll();
        }
      }, {
        key: "setbrand",
        value: function setbrand(id) {
          var name;
          this.brandService.entities$.subscribe(function (data) {
            data.forEach(function (i) {
              if (i.id === id) {
                name = i.name;
              }
            });
          });
          return name;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 108,
      vars: 9,
      consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "mat-elevation-z4", "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/assets/images/carousel/wallslide1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "/assets/images/carousel/wallslide2.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "/assets/images/carousel/wallslide3.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "mat-elevation-z4", 2, "padding", "10px 20px"], [1, "mat-h4"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "row", 2, "margin-bottom", "20px"], [1, "spacer"], ["routerLink", "/tyres", 1, "btn", "btn-lg", "btn-danger", 2, "height", "50px", "width", "200px"], [1, "mat-elevation-z4"], [1, "mdiv", 2, "background", "red", "color", "white"], [2, "color", "white", "padding", "10px 20px", "font-size", "20px"], [1, "row", 2, "margin", "20px 40px"], [1, "col-md-8"], [1, "paragraph"], [1, "text", 2, "color", "red"], [1, "text"], [1, "text", 2, "padding", "0 30px"], [1, "col-md-4"], [1, "text-body", 2, "color", "red !important"], [1, "text-body"], [1, "text-body", 2, "padding", "0 30px"], ["routerLink", "/services", 1, "btn", "btn-lg", "btn-danger", 2, "height", "50px", "width", "200px"], [2, "height", "30px"], [1, "container"], [2, "color", "red"], [1, "row", 2, "border-radius", "20px", "padding", "0 20px !important"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [4, "ngFor", "ngForOf"], ["class", "", 4, "ngIf"], [1, "card", 2, "margin", "5px 10px", "width", "15rem", "border-radius", "10px"], [2, "height", "20px", "background", "red", "border-radius", "10px 10px 0 0"], [1, "card-img-top", 2, "height", "120px"], [1, "card-body", 2, "color", "white", "background", "black", "border-radius", "0 0 10px 10px"], [1, "card-text"], [2, "font-weight", "bolder"], [1, "row", 2, "padding-right", "20px"], [1, "card-text", "mat-h3"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 10, 6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Wheel Alignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Align your wheels for longer-lasting tyres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Tyres need looking after in order for them to last. One way to care for them is to check your car\u2019s wheel alignment regularly \u2013 and not just when you feel a shudder or a shake.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "When a wheel is not aligned, other wheels have to work harder to drag the misaligned wheel. This can cause a number of problems, like:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "A directional pull on your steering wheel, forcing you to counter-steer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Uneven tyre wear.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Future mechanical problems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Image 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Wheel Balancing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Balance your wheels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Regardless of how well or how little you drive, tyres do eventually wear down over time. It is unlikely that they will wear down evenly, and this can cause:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Changes in the mass of rubber on your tyres.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "A weight imbalance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "The steering wheel to shimmy and shake.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Image 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 3, "view tyres"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 5, ctx.typeService.entities$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 7, "services"));
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/services/services.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui/services/services.component.ts ***!
    \***************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppUiServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 77,
      vars: 0,
      consts: [[1, "mat-elevation-z4"], [1, "mdiv", 2, "background", "red", "color", "white"], [2, "color", "white", "padding", "10px 20px", "font-size", "20px"], [1, "row", 2, "margin", "20px 40px"], [1, "col-md-8"], [1, "paragraph"], [1, "text", 2, "color", "red"], [1, "text"], [1, "text", 2, "padding", "0 30px"], [1, "paragraph", "row"], [1, "col-4"], [1, "text-body"], [1, "col-md-4"], [1, "text-body", 2, "color", "red !important"], [1, "text-body", 2, "padding", "0 30px"], [1, "text-center"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wheel Alignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Align your wheels for longer-lasting tyres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tyres need looking after in order for them to last. One way to care for them is to check your car\u2019s wheel alignment regularly \u2013 and not just when you feel a shudder or a shake.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "When a wheel is not aligned, other wheels have to work harder to drag the misaligned wheel. This can cause a number of problems, like:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A directional pull on your steering wheel, forcing you to counter-steer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Uneven tyre wear.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Future mechanical problems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "What can you do about it?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Visit one of our wheel alignment centre, and a qualified alignment technician will make sure that all your wheels are.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "This is done by checking and perfecting these three wheel alignment angles: Camber angle: the angle at which wheels are tilted in or out in relation to the top of the tyre. Toe angle: the angle at which the leading edge of a pair of wheels points towards (\u201Ctoe-in\u201D) or away from (\u201Ctoe-out\u201D) each other. Caster angle: the angle between the pivot line to the upper ball joint and vertical. This angle affects how your steering wheel will return to its position after completing a turn.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Image 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Wheel Balancing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Balance your wheels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Regardless of how well or how little you drive, tyres do eventually wear down over time. It is unlikely that they will wear down evenly, and this can cause:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Changes in the mass of rubber on your tyres.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "A weight imbalance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "The steering wheel to shimmy and shake.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Despite advanced rubber compounds and manufacturing processes, even new tyres need to be balanced sometimes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "What can you do about it?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "What can you do about it? Get the best out of your tyres by making sure that they are all properly balanced. During wheel balancing, one of our technicians will:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mount each tyre to its rim, and inflate it to the correct air pressure. Fit a new valve stem. Using a special machine, find the imbalance and determine its severity. Balance the wheel by affixing wheel balancing weights to the rim. Spin the wheel on the machine again to make sure it is correctly balanced.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "This is done by checking and perfecting these three wheel alignment angles: Camber angle: the angle at which wheels are tilted in or out in relation to the top of the tyre. Toe angle: the angle at which the leading edge of a pair of wheels points towards (\u201Ctoe-in\u201D) or away from (\u201Ctoe-out\u201D) each other. Caster angle: the angle between the pivot line to the upper ball joint and vertical. This angle affects how your steering wheel will return to its position after completing a turn.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Image 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Wheel balancing, wheel alignment & tyre rotation should be done every 10 000kms or once per annum. Visit your nearest InnoSimm garadge today.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/tires/tires.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/ui/tires/tires.component.ts ***!
    \*********************************************/

  /*! exports provided: TiresComponent */

  /***/
  function srcAppUiTiresTiresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiresComponent", function () {
      return TiresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _data_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data/product/product.service */
    "./src/app/data/product/product.service.ts");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");
    /* harmony import */


    var _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth/auth.service */
    "./src/app/ui/auth/auth/auth.service.ts");
    /* harmony import */


    var _data_type_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data/type/type.service */
    "./src/app/data/type/type.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ad_to_cart_ad_to_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../ad-to-cart/ad-to-cart.component */
    "./src/app/ui/ad-to-cart/ad-to-cart.component.ts");

    function TiresComponent_div_7_div_8_div_1_div_1_app_ad_to_cart_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ad-to-cart", 21);
      }

      if (rf & 2) {
        var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", i_r26);
      }
    }

    function TiresComponent_div_7_div_8_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TiresComponent_div_7_div_8_div_1_div_1_app_ad_to_cart_20_Template, 1, 1, "app-ad-to-cart", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, i_r26.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, i_r26.tyre_code));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx_r27.setbrand(i_r26.brand)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("each ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, i_r26.price), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.authService.authenticated == true);
      }
    }

    function TiresComponent_div_7_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TiresComponent_div_7_div_8_div_1_div_1_Template, 21, 13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r26 = ctx.$implicit;

        var typey_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var brand_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26.brand == brand_r22.id && i_r26.type == typey_r24.id && i_r26.quantity > 0);
      }
    }

    function TiresComponent_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TiresComponent_div_7_div_8_div_1_Template, 2, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r23.productService.entities$));
      }
    }

    function TiresComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TiresComponent_div_7_div_8_Template, 3, 3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brand_r22 = ctx.$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, brand_r22.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx_r21.typeService.entities$));
      }
    }

    var TiresComponent = /*#__PURE__*/function () {
      function TiresComponent(productService, brandService, typeService, authService) {
        _classCallCheck(this, TiresComponent);

        this.productService = productService;
        this.brandService = brandService;
        this.typeService = typeService;
        this.authService = authService;
        this.tyre_types = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.tyre_brand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.currency = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
      }

      _createClass(TiresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productService.getAll();
          this.brandService.getAll();
          this.typeService.getAll();
        }
      }, {
        key: "setbrand",
        value: function setbrand(id) {
          var name;
          this.brandService.entities$.subscribe(function (data) {
            data.forEach(function (i) {
              if (i.id === id) {
                name = i.name;
              }
            });
          });
          return name;
        }
      }]);

      return TiresComponent;
    }();

    TiresComponent.ɵfac = function TiresComponent_Factory(t) {
      return new (t || TiresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_3__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_type_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    TiresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TiresComponent,
      selectors: [["app-tires"]],
      decls: 17,
      vars: 6,
      consts: [[1, "mat-elevation-z4", 2, "padding", "10px 20px"], [1, "mat-h4"], ["class", "container", 4, "ngFor", "ngForOf"], [2, "height", "30px"], [1, "container"], [2, "color", "red"], [1, "row", 2, "border-radius", "20px", "padding", "0 20px !important"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [4, "ngFor", "ngForOf"], ["class", "", 4, "ngIf"], [1, "card", 2, "margin", "5px 10px", "width", "15rem", "border-radius", "10px"], [2, "height", "20px", "background", "red", "border-radius", "10px 10px 0 0"], [1, "card-img-top", 2, "height", "120px"], [1, "card-body", 2, "color", "white", "background", "black", "border-radius", "0 0 10px 10px"], [1, "card-text"], [2, "font-weight", "bolder"], [1, "row", 2, "padding-right", "20px"], [1, "spacer"], [1, "card-text", "mat-h3"], [3, "product", 4, "ngIf"], [3, "product"]],
      template: function TiresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TiresComponent_div_7_Template, 10, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "buy tyres"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.brandService.entities$));
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ad_to_cart_ad_to_cart_component__WEBPACK_IMPORTED_MODULE_8__["AdToCartComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3RpcmVzL3RpcmVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tires',
          templateUrl: './tires.component.html',
          styleUrls: ['./tires.component.css']
        }]
      }], function () {
        return [{
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_3__["BrandService"]
        }, {
          type: _data_type_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"]
        }, {
          type: _auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();

    var Pic = function Pic() {
      _classCallCheck(this, Pic);
    };
    /***/

  },

  /***/
  "./src/app/ui/wheels/wheels.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui/wheels/wheels.component.ts ***!
    \***********************************************/

  /*! exports provided: WheelsComponent */

  /***/
  function srcAppUiWheelsWheelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WheelsComponent", function () {
      return WheelsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../data/product/product.service */
    "./src/app/data/product/product.service.ts");
    /* harmony import */


    var _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data/brand/brand.service */
    "./src/app/data/brand/brand.service.ts");

    var WheelsComponent = /*#__PURE__*/function () {
      function WheelsComponent(productService, brandService) {
        _classCallCheck(this, WheelsComponent);

        this.productService = productService;
        this.brandService = brandService;
      }

      _createClass(WheelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productService.getAll();
          this.brandService.getAll();
        }
      }, {
        key: "setbrand",
        value: function setbrand(id) {
          var name;
          this.brandService.entities$.subscribe(function (data) {
            data.forEach(function (i) {
              if (i.id === id) {
                name = i.name;
              }
            });
          });
          return name;
        }
      }]);

      return WheelsComponent;
    }();

    WheelsComponent.ɵfac = function WheelsComponent_Factory(t) {
      return new (t || WheelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]));
    };

    WheelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WheelsComponent,
      selectors: [["app-wheels"]],
      decls: 24,
      vars: 0,
      consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "mat-elevation-z4", "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/assets/images/carousel/wallslide1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "/assets/images/carousel/wallslide2.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "/assets/images/carousel/wallslide3.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [2, "height", "30px"]],
      template: function WheelsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3doZWVscy93aGVlbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WheelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wheels',
          templateUrl: './wheels.component.html',
          styleUrls: ['./wheels.component.css']
        }]
      }], function () {
        return [{
          type: _data_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _data_brand_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/cart/cart.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/utils/cart/cart.component.ts ***!
    \**********************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppUtilsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_paynow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/paynow.service */
    "./src/app/services/paynow.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CartComponent_div_1_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_div_21_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var item_r37 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.remove(item_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.product.brand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, item_r37.product.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, item_r37.quantity * item_r37.product.price));
      }
    }

    function CartComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.checkOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.cartService.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clear Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brand");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price per unit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CartComponent_div_1_div_21_Template, 17, 9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.cartService.getCartItems());
      }
    }

    function CartComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cart is empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(cartService, paynowService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.paynowService = paynowService;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartService.getCartItems();
        }
      }, {
        key: "remove",
        value: function remove(item) {
          this.cartService.remove(item);
        }
      }, {
        key: "update",
        value: function update(id, quantity) {
          this.cartService.update(id, quantity);
        }
      }, {
        key: "checkOut",
        value: function checkOut() {
          this.paynowService.makePayment();
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_paynow_service__WEBPACK_IMPORTED_MODULE_2__["PaynowService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 4,
      vars: 2,
      consts: [["class", "container mat-elevation-z4", "style", "margin: 20px;padding: 10px 20px;", 4, "ngIf", "ngIfElse"], ["no_items", ""], [1, "container", "mat-elevation-z4", 2, "margin", "20px", "padding", "10px 20px"], [1, "container"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "20px", 3, "click"], [1, "row", 2, "display", "flex", "align-items", "center"], [1, "col-md-2", "h4"], ["class", "row", "style", "display: flex;align-items: center;", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["mat-icon-button", "", "color", "warn", 3, "click"], [1, "material-icons"], [1, "mat-h2"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 22, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartService.getCartItems().length > 0)("ngIfElse", _r34);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _services_paynow_service__WEBPACK_IMPORTED_MODULE_2__["PaynowService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/put-interceptor.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/utils/put-interceptor.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: PutInterceptorInterceptor */

  /***/
  function srcAppUtilsPutInterceptorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PutInterceptorInterceptor", function () {
      return PutInterceptorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PutInterceptorInterceptor = /*#__PURE__*/function () {
      function PutInterceptorInterceptor() {
        _classCallCheck(this, PutInterceptorInterceptor);
      }

      _createClass(PutInterceptorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (request.method === 'PUT') {
            var newPut = request.clone({
              url: request.url + '/'
            });
            return next.handle(newPut);
          } else {
            return next.handle(request);
          }
        }
      }]);

      return PutInterceptorInterceptor;
    }();

    PutInterceptorInterceptor.ɵfac = function PutInterceptorInterceptor_Factory(t) {
      return new (t || PutInterceptorInterceptor)();
    };

    PutInterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PutInterceptorInterceptor,
      factory: PutInterceptorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PutInterceptorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/vamdara/PycharmProjects/innosimm/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map