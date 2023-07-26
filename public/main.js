"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);




class AppComponent {
  constructor() {
    this.title = 'portfolio';
  }
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init({
      disable: 'mobile'
    });
    aos__WEBPACK_IMPORTED_MODULE_0__.refresh();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _material_module_1___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module (1) */ 5298);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_firestore___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore/ */ 2393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _pageup_pageup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageup/pageup.component */ 37);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);














class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _material_module_1___WEBPACK_IMPORTED_MODULE_3__.MaterialModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase), _angular_fire_compat_firestore___WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _pageup_pageup_component__WEBPACK_IMPORTED_MODULE_5__.PageupComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _material_module_1___WEBPACK_IMPORTED_MODULE_3__.MaterialModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule, _angular_fire_compat_firestore___WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule]
  });
})();

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);







function HeaderComponent_ng_template_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85)(4, "div", 86)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Team work design page & Services ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87)(8, "a", 88)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function HeaderComponent_ng_template_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85)(4, "div", 86)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Web page using angular material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87)(8, "a", 91)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function HeaderComponent_ng_template_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85)(4, "div", 86)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " NFT page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87)(8, "a", 93)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function HeaderComponent_ng_template_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85)(4, "div", 86)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Html, CSS, JS, Bootstrap project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87)(8, "a", 95)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function HeaderComponent_mat_error_203_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.titleAlert, " ");
  }
}
function HeaderComponent_mat_error_206_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.getErrorEmail(), " ");
  }
}
class HeaderComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.titleAlert = 'This field is required';
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i> '],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    };
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.myForm = this.formBuilder.group({
      'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(emailregex)]],
      'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      'validate': ''
    });
  }
  getErrorEmail() {
    return this.myForm.get('email').hasError('required') ? 'This field is required' : this.myForm.get('email').hasError('pattern') ? 'Not a valid emailaddress' : this.myForm.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  onSubmit() {
    this.myForm.reset();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 217,
  vars: 5,
  consts: [[1, "header"], ["aria-label", "Fourth navbar example", 1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarsExample04", "aria-controls", "navbarsExample04", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExample04", 1, "collapse", "navbar-collapse", "right-part"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-md-0"], [1, "nav-item"], ["aria-current", "page", "href", "#about", 1, "nav-link", "active"], ["href", "#education", 1, "nav-link"], ["href", "#skills", 1, "nav-link"], ["href", "#project", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], ["id", "about", 1, "container"], [1, "row"], [1, "col-lg-1"], [1, "col-lg-5", "info"], [1, "user", "shadow", "bg-color"], [1, "text-white", "fs-1", "bg-color"], [1, "text-white", "bg-color"], [1, "user1", "bg-color"], [1, "fa-regular", "fa-file", "bg-color", "color-red"], [1, "text-white", "ms-2", "bg-color"], [1, "fa-regular", "fa-envelope", "bg-color", "color-red"], [1, "fa-sharp", "fa-solid", "fa-location-dot", "bg-color", "color-red"], [1, "cv", "shadow", "bg-color"], [1, "bg-color", "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "bg-color"], [1, "bg-color", "color-red", "shadow"], ["href", "../../assets/document/Murad's Resume (1).pdf", 1, "bg-color", "color-red", "shadow", "text-decoration-none"], [1, "col-lg-5"], [1, "photo"], ["src", "../../assets/img/fotor_2023-5-4_23_39_11.png", "alt", ""], [1, "slider"], ["id", "education", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "1000"], [1, "education"], [1, "education-style"], [1, "education-left"], [1, "education-image"], ["src", "../../assets/img/download.jpg", "alt", ""], [1, "education-center"], [1, "date"], [1, "education-title"], [1, "subtitle"], [1, "disc"], [1, "education-right"], [1, "education-footer"], ["href", "#contact", 1, "rn-btn"], ["src", "../../assets/img/mizan.png", "alt", ""], [1, "slider1"], ["id", "skills", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1000"], [1, "row", "container", "mt-0", "mb-0", "ms-auto", "me-auto"], [1, "col-lg-6"], [1, "content"], [1, "progress-chart"], [1, "progress"], [1, "progress-bar"], [1, "progress-bar1"], [1, "progress-bar2"], [1, "progress-bar3"], ["id", "project", "data-aos", "fade-down", "data-aos-easing", "linear", "data-aos-duration", "1500"], [1, "carousel", "container"], [3, "options"], ["carouselSlide", ""], ["id", "contact", "data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "2000"], [1, "row", "container", "m-l"], [1, "communicate"], [1, "fa-solid", "fa-phone"], [1, "fa-regular", "fa-envelope"], [1, "fa-solid", "fa-location-dot"], [1, "col-lg-6", "form1"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-element"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "placeholder", "Email", "formControlName", "email"], ["matInput", "", "placeholder", "Message", "formControlName", "message"], [1, "form-element", "button1"], ["type", "submit", 1, "button", 3, "disabled"], ["id", "copyright", 1, "d-flex", "justify-content-center", "align-items-center"], [1, "description"], [1, "project"], [1, "inner", "screen1"], ["src", "../../assets/img/screen1.png", "alt", ""], [1, "category"], [1, "title"], [1, "category-button"], ["href", "https://tubanur313.github.io/summer-group-mizan/", 1, "rn-btn"], [1, "inner"], ["src", "../../assets/img/screen4.png", "alt", ""], ["href", "https://muradkarimov.github.io/hogwarts/", 1, "rn-btn"], ["src", "../../assets/img/screen3.png", "alt", ""], ["href", "https://muradkarimov.github.io/Mintify/", 1, "rn-btn"], ["src", "../../assets/img/screen2.png", "alt", ""], ["href", "https://muradkarimov.github.io/Koppee/", 1, "rn-btn"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Education");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8)(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8)(22, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hi, I'm Murad Karimov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I am 20 years old and student at Baku Higher Oil School");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "muradhafizoglu.kr@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Baku, Azerbaijan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26)(46, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Download my curriculum vitae: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28)(49, "button", 29)(50, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Download CV ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31)(53, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35)(58, "div", 36)(59, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Education");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37)(62, "div", 38)(63, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 41)(66, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2020-Present");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Baku Higher Oil School ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Petroleum Engineering ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Bachelor Degree");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46)(75, "div", 47)(76, "a", 48)(77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "CONTACT ME");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37)(80, "div", 38)(81, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41)(84, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2022-2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Mizan Academy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Front-end Developer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 46)(91, "div", 47)(92, "a", 48)(93, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "CONTACT ME");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 51)(97, "div", 36)(98, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Professional Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 52)(101, "div", 53)(102, "div", 54)(103, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Soft Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 55)(108, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Teamwork");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "95");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 55)(115, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Communication");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 55)(122, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Time Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 55)(129, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Adaptability");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 53)(136, "div", 54)(137, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Hard Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 55)(142, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "HTML");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 55)(149, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 55)(156, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "JavaScript");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 55)(163, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 61)(171, "div", 36)(172, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 62)(175, "owl-carousel-o", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, HeaderComponent_ng_template_176_Template, 11, 0, "ng-template", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, HeaderComponent_ng_template_177_Template, 11, 0, "ng-template", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](178, HeaderComponent_ng_template_178_Template, 11, 0, "ng-template", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, HeaderComponent_ng_template_179_Template, 11, 0, "ng-template", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 65)(182, "div", 36)(183, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Get in Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 66)(186, "div", 53)(187, "div", 67)(188, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " +9994507772611 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 67)(192, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " muradhafizoglu.kr@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 67)(196, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Baku, Azerbaijan ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 71)(200, "form", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_Template_form_ngSubmit_200_listener() {
        return ctx.onSubmit;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-form-field", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, HeaderComponent_mat_error_203_Template, 2, 1, "mat-error", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-form-field", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, HeaderComponent_mat_error_206_Template, 2, 1, "mat-error", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-form-field", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "textarea", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 78)(210, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 80)(214, "div", 81)(215, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " \u00A9 2023. All rights reserved ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](175);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["name"].valid && ctx.myForm.controls["name"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["email"].valid && ctx.myForm.controls["email"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.myForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective],
  styles: [".header[_ngcontent-%COMP%] {\n  background-color: #212428 !important;\n}\n\nnav[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  padding: 20px;\n  padding-top: 30px !important;\n  border-bottom: 1px solid #1e2024;\n  box-shadow: 0 8px 8px -4px #1c1e22;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.bg-color[_ngcontent-%COMP%] {\n  background-color: #1e2024 !important;\n}\n\n.right-part[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.right-part[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-right: 45px;\n}\n.right-part[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eee;\n}\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: green;\n}\n\n#about[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.user[_ngcontent-%COMP%] {\n  border: 1px solid #1e2024;\n  border-radius: 20px;\n  padding: 20px;\n}\n.user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-size: 15px;\n}\n.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n\n.user1[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  font-size: 15px;\n}\n\n.cv[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  border-radius: 20px;\n  padding: 20px;\n}\n.cv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.cv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #1e2024;\n  padding: 15px;\n  margin-top: 10px;\n  font-size: 20px;\n  transition: 0.5s;\n}\n.cv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translate(0, -10px);\n}\n\n.photo[_ngcontent-%COMP%] {\n  padding: 34px;\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  position: relative;\n  right: 0;\n  border-radius: 10px;\n  transition: 0.4s;\n  height: 100%;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  width: 100%;\n  height: 100%;\n}\n\n.photo[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.info[_ngcontent-%COMP%] {\n  position: relative;\n  transition: top 0.2s ease-in-out;\n}\n\n.info[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.slider[_ngcontent-%COMP%] {\n  background-color: #121415 !important;\n  margin-top: 100px;\n  width: 100%;\n  height: 3px;\n}\n\n.slider1[_ngcontent-%COMP%] {\n  background-color: #121415 !important;\n  margin-top: 100px;\n  width: 90%;\n  height: 3px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#education[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.education[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #c4cfde;\n  margin-top: 15px;\n  margin-bottom: 0;\n  letter-spacing: 3px;\n}\n\n.education-style[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px;\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  border-radius: 10px;\n  margin: 40px auto 0;\n  width: 90%;\n}\n.education-style[_ngcontent-%COMP%]   .education-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-basis: 80%;\n  flex-wrap: wrap;\n}\n.education-style[_ngcontent-%COMP%]   .education-image[_ngcontent-%COMP%] {\n  max-width: 250px;\n  height: auto;\n  border-radius: 8px;\n  transition: 0.4s;\n  overflow: hidden;\n}\n.education-style[_ngcontent-%COMP%]   .education-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 0;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: 1s;\n}\n.education-style[_ngcontent-%COMP%]   .education-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n.education-style[_ngcontent-%COMP%]   .education-center[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-top: 10px;\n}\n.education-style[_ngcontent-%COMP%]   .education-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 20px;\n  background-color: #545961 !important;\n  font-size: 14px;\n  color: #c4cfde;\n}\n.education-style[_ngcontent-%COMP%]   .education-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #878e99;\n}\n.education-style[_ngcontent-%COMP%]   .education-title[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n  font-size: 26px;\n  color: #c4cfde;\n  font-weight: 500;\n}\n.education-style[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 20px;\n  color: #545961;\n  font-weight: 400;\n  margin-bottom: 7px;\n  line-height: 1.4;\n}\n.education-style[_ngcontent-%COMP%]   .education-right[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  text-align: right;\n}\n\n.rn-btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: linear-gradient(145deg, #1e2024, #23272b);\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  transition: 0.4s;\n  position: relative;\n  z-index: 2;\n  font-size: 14px;\n  font-weight: 500;\n  border: 0 none;\n  text-decoration: none !important;\n  color: green !important;\n  display: inline-block;\n  padding: 15px 35px;\n  list-style: none;\n  transition: 0.5s;\n}\n\n.rn-btn[_ngcontent-%COMP%]:hover {\n  transform: translate(0, -10px);\n}\n\n.rn-btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  transition: 0.4s;\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  top: 0;\n  left: 0;\n  background: linear-gradient(to right bottom, #212428, #16181c);\n  opacity: 0;\n  z-index: -1;\n}\n\n#skills[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #50c878;\n  font-size: 14px;\n  letter-spacing: 2px;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 62px;\n  color: #c4cfde;\n}\n\n.progress-chart[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n}\n.progress-chart[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #c3cedd;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  opacity: 0.9;\n  font-weight: 400;\n}\n\n.progress[_ngcontent-%COMP%] {\n  padding: 4px;\n  border-radius: 30px;\n  background: rgba(0, 0, 0, 0.25);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);\n}\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n  top: 2px;\n  font-weight: 400;\n  color: #c3cedd;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  opacity: 0.9;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 30px;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));\n  transition: 0.4s linear;\n  transition-property: width, background-color;\n  width: 90%;\n  background-color: #00693e !important;\n  animation: _ngcontent-%COMP%_progressAnimation 3s;\n}\n\n.progress-bar1[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 30px;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));\n  transition: 0.4s linear;\n  transition-property: width, background-color;\n  width: 85%;\n  background-color: #00693e !important;\n  animation: _ngcontent-%COMP%_progressAnimation1 3s;\n}\n\n.progress-bar2[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 30px;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));\n  transition: 0.4s linear;\n  transition-property: width, background-color;\n  width: 80%;\n  background-color: #00693e !important;\n  animation: _ngcontent-%COMP%_progressAnimation2 3s;\n}\n\n.progress-bar3[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 30px;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));\n  transition: 0.4s linear;\n  transition-property: width, background-color;\n  width: 80%;\n  background-color: #00693e !important;\n  animation: _ngcontent-%COMP%_progressAnimation3 3s;\n}\n\n@keyframes _ngcontent-%COMP%_progressAnimation {\n  0% {\n    width: 5%;\n    background-color: #F9BCCA;\n  }\n  100% {\n    width: 90%;\n    background-color: #EF476F;\n  }\n}\n@keyframes _ngcontent-%COMP%_progressAnimation1 {\n  0% {\n    width: 5%;\n    background-color: #F9BCCA;\n  }\n  100% {\n    width: 85%;\n    background-color: #EF476F;\n  }\n}\n@keyframes _ngcontent-%COMP%_progressAnimation2 {\n  0% {\n    width: 5%;\n    background-color: #F9BCCA;\n  }\n  100% {\n    width: 80%;\n    background-color: #EF476F;\n  }\n}\n@keyframes _ngcontent-%COMP%_progressAnimation3 {\n  0% {\n    width: 5%;\n    background-color: #F9BCCA;\n  }\n  100% {\n    width: 80%;\n    background-color: #EF476F;\n  }\n}\n.carousel[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n#project[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.project[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 30px;\n  position: relative;\n  border-radius: 20px;\n  background: linear-gradient(145deg, #1e2024, #23272b);\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  z-index: 1;\n  height: 100%;\n  transition: 0.5s all ease-in-out;\n  display: inline-block;\n  margin: 20px;\n}\n.project[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  color: #c4cfde;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 34px;\n  display: inline-block;\n  cursor: pointer;\n}\n.project[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:hover {\n  color: green;\n}\n.project[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-bottom: 20px;\n  transition: 0.4s;\n  min-height: 200px;\n}\n.project[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n  .owl-next,   .owl-prev {\n  position: absolute !important;\n  bottom: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: #fff !important;\n  text-align: center !important;\n  opacity: 1 !important;\n  transition: opacity 0.15s ease !important;\n  width: 60px;\n  height: 60px;\n  top: 50% !important;\n  transform: translateY(-50%) !important;\n  border-radius: 50% !important;\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e !important;\n  background-color: #212428 !important;\n  border: 0 !important;\n  z-index: 2 !important;\n}\n\n  .owl-prev {\n  left: -27px;\n}\n\n  .owl-next {\n  right: -27px;\n}\n\n#contact[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-left: 80px;\n}\n#contact[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n\n.communicate[_ngcontent-%COMP%] {\n  color: #c4cfde;\n  margin-top: 50px;\n  background-color: linear-gradient(145deg, #1e2024, #23272b);\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  padding: 10px 5px;\n  cursor: pointer;\n}\n.communicate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: 2px;\n  background-color: #212428;\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  margin: 10px;\n  border-radius: 20px;\n  margin-right: 30px !important;\n}\n\n  .mat-typography h4 {\n  margin: 0px !important;\n}\n\n.form1[_ngcontent-%COMP%] {\n  background-color: #212428;\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  margin-top: 50px;\n}\n.form1[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black !important;\n  cursor: pointer !important;\n  margin-left: 50px;\n  padding: 10px 25px !important;\n  background-color: #c4cfde !important;\n  letter-spacing: 2px !important;\n}\n\n.m-l[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 20px;\n  margin-left: 45px;\n}\nmat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  color: #c4cfde !important;\n  border-color: darkgray !important;\n  letter-spacing: 2px;\n}\nmat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder { \n  color: #c4cfde !important;\n}\nmat-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  color: #c4cfde !important;\n  letter-spacing: 2px;\n}\nmat-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder { \n  color: #c4cfde !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: red !important;\n}\n\n#copyright[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n#copyright[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #878e99;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 992px) {\n  .photo[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media only screen and (max-width: 936px) {\n  .education-style[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (max-width: 681px) {\n  .education-image[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n  }\n  .education-center[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n  }\n  .education-footer[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n}\n@media only screen and (max-width: 305px) {\n  .user1[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 120px !important;\n  }\n}\n@media only screen and (min-width: 305px) and (max-width: 497px) {\n  .communicate[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .communicate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: 3px !important;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n  }\n  #contact[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  #contact[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n    padding-right: 10px;\n  }\n  mat-form-field[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .button[_ngcontent-%COMP%] {\n    margin-left: 20px !important;\n  }\n  .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 150px !important;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 817px) {\n  #contact[_ngcontent-%COMP%] {\n    padding-left: 100px !important;\n  }\n}\n@media only screen and (min-width: 497px) and (max-width: 1090px) {\n  #contact[_ngcontent-%COMP%] {\n    padding-left: 30px !important;\n  }\n}\n@media only screen and (max-width: 580px) {\n    .owl-prev,   .owl-next {\n    width: 45px !important;\n    height: 45px !important;\n    padding: 0px !important;\n    margin: 0px !important;\n  }\n    .owl-prev {\n    left: -1px;\n  }\n    .owl-next {\n    right: -1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUVJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLG9DQUFBO0FBSUo7O0FBRkE7RUFHSSxnQkFBQTtBQUdKO0FBRkk7RUFDSSxrQkFBQTtBQUlSO0FBRkk7RUFDSSxlQUFBO0FBSVI7O0FBQUE7RUFDSSxXQUFBO0FBR0o7QUFGSTtFQUNFLFlBQUE7QUFJTjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSkE7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU1KO0FBTEk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFPUjtBQUxJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQU9SOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVFKO0FBTkk7RUFDSSxlQUFBO0FBUVI7QUFOSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRUjtBQU5RO0VBQ0ksOEJBQUE7QUFRWjs7QUFMQTtFQUNJLGFBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUUo7QUFQSTtFQUVJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFRUjs7QUFKQTtFQUNJLDJCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0FBUUo7O0FBTEE7RUFDSSwyQkFBQTtBQVFKOztBQUxBO0VBQ0ksb0NBQUE7RUFDQSxpQkFB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cUJBQUE7QUF5Qko7O0FBdEJBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQXlCSjtBQXhCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBMEJSOztBQXZCQTtFQUNJO0lBQ0ksZ0JBQUE7RUEwQk47QUFDRjtBQXhCQTtFQUNJO0lBQ0kseUJBQUE7RUEwQk47QUFDRjtBQXZCQTtFQUNJO0lBQ0ksMEJBQUE7RUF5Qk47RUF2QkU7SUFDSSw0QkFBQTtFQXlCTjtFQXZCRTtJQUNJLDJCQUFBO0VBeUJOO0FBQ0Y7QUF2QkE7RUFDSTtJQUNJLGVBQUE7RUF5Qk47RUF2QkU7SUFFSSw0QkFBQTtFQXdCTjtBQUNGO0FBckJBO0VBRVE7SUFDSSxlQUFBO0VBc0JWO0VBcEJNO0lBQ0ksc0JBQUE7SUFDQSxXQUFBO0lBQ1IsWUFBQTtJQUNBLGlCQUFBO0VBc0JGO0VBbkJFO0lBQ0ksa0JBQUE7RUFxQk47RUFwQkU7SUFDSSxtQkFBQTtFQXNCTjtFQW5CRTtJQUNJLGlCQUFBO0VBcUJOO0VBbkJFO0lBQ0ksNEJBQUE7RUFxQk47RUFsQkU7SUFDSSw0QkFBQTtFQW9CTjtBQUNGO0FBbEJBO0VBQ0k7SUFDSSw4QkFBQTtFQW9CTjtBQUNGO0FBbEJBO0VBQ0k7SUFDSSw2QkFBQTtFQW9CTjtBQUNGO0FBbEJBO0VBRUk7SUFDRyxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQW1CTDtFQWpCRTtJQUNJLFVBQUE7RUFtQk47RUFqQkU7SUFDSSxXQUFBO0VBbUJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjQyOCAhaW1wb3J0YW50O1xyXG59XHJcbm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUyMDI0O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IC00cHggIzFjMWUyMjtcclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5jb2xvci1yZWR7XHJcbiAgICAvLyBjb2xvcjogI2ZmMDE0ZjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uYmctY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDI0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJpZ2h0LXBhcnR7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyByaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB1bHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi5uYXZiYXItbmF2IGxpIGEge1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjt9fVxyXG4jYWJvdXR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi51c2Vye1xyXG4gICAgLy8gaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTIwMjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG59XHJcbi51c2VyMXtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmN2e1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyMDI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCk7XHJcbiAgICAgICAgfVxyXG59XHJcbi5waG90byB7XHJcbiAgICBwYWRkaW5nOiAzNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggIzFjMWUyMiwgLTEwcHggLTEwcHggMTlweCAjMjYyYTJlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGltZ3tcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMWUyMDI0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG4ucGhvdG86aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuLmluZm97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5mbzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxufVxyXG5cclxuLnNsaWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjE0MTUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICBcclxufVxyXG4uc2xpZGVyMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjE0MTUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4jZWR1Y2F0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbi5lZHVjYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBjb2xvcjogI2M0Y2ZkZTs7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uZWR1Y2F0aW9uLXN0eWxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggIzFjMWUyMiwgLTEwcHggLTEwcHggMTlweCAjMjYyYTJlOztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICBcclxuICAgIC5lZHVjYXRpb24tbGVmdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIC5lZHVjYXRpb24taW1hZ2V7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIH1cclxuICAgIGltZzpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuZWR1Y2F0aW9uLWNlbnRlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1OTYxICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2M0Y2ZkZTs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjODc4ZTk5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lZHVjYXRpb24tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICNjNGNmZGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTQ1OTYxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZWR1Y2F0aW9uLXJpZ2h0e1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDIwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5ybi1idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxZTIwMjQsICMyMzI3MmIpO1xyXG5ib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCAjMWMxZTIyLCAtMTBweCAtMTBweCAxOXB4ICMyNjJhMmU7XHJcbnRyYW5zaXRpb246IDAuNHM7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuei1pbmRleDogMjtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5ib3JkZXI6IDAgbm9uZTtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBhZGRpbmc6IDE1cHggMzVweDtcclxubGlzdC1zdHlsZTogbm9uZTtcclxudHJhbnNpdGlvbjogMC41cztcclxufVxyXG4ucm4tYnRuOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpO1xyXG59XHJcbi5ybi1idG46YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMjEyNDI4LCAjMTYxODFjKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4jc2tpbGxze1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICM1MGM4Nzg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNjJweDtcclxuICAgIGNvbG9yOiAjYzRjZmRlO1xyXG4gICAgfVxyXG59XHJcbi5wcm9ncmVzcy1jaGFydHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBoNntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICNjM2NlZGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn1cclxuLnByb2dyZXNzIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAgXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICAgIHNwYW57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogI2MzY2VkZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2dyZXNzLWJhciB7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpKTtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgbGluZWFyOyAgXHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgYmFja2dyb3VuZC1jb2xvcjsgICAgXHJcbiAgICB3aWR0aDogOTAlOyBcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NzZGICFpbXBvcnRhbnQ7ICBcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwNjkzZSAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3NBbmltYXRpb24gM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzcy1iYXIxIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXI7ICBcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBiYWNrZ3JvdW5kLWNvbG9yOyAgICBcclxuICAgIHdpZHRoOiA4NSU7IFxyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNFRjQ3NkYgIWltcG9ydGFudDsgIFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTNlICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uOiBwcm9ncmVzc0FuaW1hdGlvbjEgM3M7XHJcbiAgfVxyXG4gIC5wcm9ncmVzcy1iYXIyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXI7ICBcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBiYWNrZ3JvdW5kLWNvbG9yOyAgICBcclxuICAgIHdpZHRoOiA4MCU7IFxyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNFRjQ3NkYgIWltcG9ydGFudDsgIFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTNlICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uOiBwcm9ncmVzc0FuaW1hdGlvbjIgM3M7XHJcbiAgfVxyXG4gIC5wcm9ncmVzcy1iYXIzIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXI7ICBcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBiYWNrZ3JvdW5kLWNvbG9yOyAgICBcclxuICAgIHdpZHRoOiA4MCU7IFxyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNFRjQ3NkYgIWltcG9ydGFudDsgIFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTNlICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uOiBwcm9ncmVzc0FuaW1hdGlvbjMgM3M7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3NBbmltYXRpb24ge1xyXG4gICAgMCUgICB7IHdpZHRoOiA1JTsgYmFja2dyb3VuZC1jb2xvcjogI0Y5QkNDQTt9XHJcbiAgICAxMDAlIHsgd2lkdGg6IDkwJTsgYmFja2dyb3VuZC1jb2xvcjogI0VGNDc2RjsgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHByb2dyZXNzQW5pbWF0aW9uMSB7XHJcbiAgICAwJSAgIHsgd2lkdGg6IDUlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlCQ0NBO31cclxuICAgIDEwMCUgeyB3aWR0aDogODUlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NzZGOyB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3NBbmltYXRpb24yIHtcclxuICAgIDAlICAgeyB3aWR0aDogNSU7IGJhY2tncm91bmQtY29sb3I6ICNGOUJDQ0E7fVxyXG4gICAgMTAwJSB7IHdpZHRoOiA4MCU7IGJhY2tncm91bmQtY29sb3I6ICNFRjQ3NkY7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBwcm9ncmVzc0FuaW1hdGlvbjMge1xyXG4gICAgMCUgICB7IHdpZHRoOiA1JTsgYmFja2dyb3VuZC1jb2xvcjogI0Y5QkNDQTt9XHJcbiAgICAxMDAlIHsgd2lkdGg6IDgwJTsgYmFja2dyb3VuZC1jb2xvcjogI0VGNDc2RjsgfVxyXG4gIH1cclxuXHJcbiAgLmNhcm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCA7XHJcbiAgfVxyXG5cclxuI3Byb2plY3R7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuLnByb2plY3R7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMWUyMDI0LCAjMjMyNzJiKTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4ICMxYzFlMjIsIC0xMHB4IC0xMHB4IDE5cHggIzI2MmEyZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgLnRpdGxlIGg1e1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgY29sb3I6I2M0Y2ZkZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIGg1OmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlubmVyIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5pbm5lciBpbWc6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gICAgLy8gLnNjcmVlbjF7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2NyZWVuMS5wbmcpO1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIH1cclxufVxyXG46Om5nLWRlZXAgLm93bC1uZXh0LCA6Om5nLWRlZXAgLm93bC1wcmV2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA2MHB4IDtcclxuICAgIGhlaWdodDogNjBweCA7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4ICMxYzFlMjIsIC0xMHB4IC0xMHB4IDE5cHggIzI2MmEyZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjQyOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5vd2wtcHJldntcclxuICAgIGxlZnQ6IC0yN3B4IDtcclxufVxyXG46Om5nLWRlZXAgLm93bC1uZXh0e1xyXG4gICAgcmlnaHQ6IC0yN3B4IDtcclxufVxyXG4gICNjb250YWN0e1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgLmNvbC1sZy02e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbi5jb21tdW5pY2F0ZXtcclxuICAgIGNvbG9yOiAjYzRjZmRlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxZTIwMjQsICMyMzI3MmIpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggIzFjMWUyMiwgLTEwcHggLTEwcHggMTlweCAjMjYyYTJlO1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpe1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNDI4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggIzFjMWUyMiwgLTEwcHggLTEwcHggMTlweCAjMjYyYTJlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCAubWF0LXR5cG9ncmFwaHkgaDR7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNDI4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggIzFjMWUyMiwgLTEwcHggLTEwcHggMTlweCAjMjYyYTJlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC5idXR0b257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4IDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGNmZGUgIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm0tbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggO1xyXG59XHJcbi5idXR0b24xe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYzRjZmRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gICAgICAgIGNvbG9yOiAjYzRjZmRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB0ZXh0YXJlYXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC8vIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2M0Y2ZkZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICAgICAgICBjb2xvcjogI2M0Y2ZkZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG4gICAgLy8gb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuI2NvcHlyaWdodHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgY29sb3I6ICM4NzhlOTk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgIC5waG90b3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDkzNnB4KXtcclxuICAgIC5lZHVjYXRpb24tc3R5bGV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDogNjgxcHgpe1xyXG4gICAgLmVkdWNhdGlvbi1pbWFnZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5lZHVjYXRpb24tY2VudGVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZWR1Y2F0aW9uLWZvb3RlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDogMzA1cHgpe1xyXG4gICAgLnVzZXIxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuICAgIC5pbm5lciBpbWd7XHJcbiAgICAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDVweCkgIGFuZCAobWF4LXdpZHRoOiA0OTdweCl7XHJcbiAgICAuY29tbXVuaWNhdGV7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjY29udGFjdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAuY29sLWxnLTZ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5pbm5lciBpbWd7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpICBhbmQgKG1heC13aWR0aDogODE3cHgpe1xyXG4gICAgI2NvbnRhY3R7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDk3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDkwcHgpe1xyXG4gICAgI2NvbnRhY3R7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDogNTgwcHgpe1xyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgLm93bC1wcmV2LCA6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICAgICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAub3dsLXByZXZ7XHJcbiAgICAgICAgbGVmdDogLTFweDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAub3dsLW5leHR7XHJcbiAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5298:
/*!****************************************!*\
  !*** ./src/app/material.module (1).ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



































// import {
//   MatDatetimepickerModule,
//   MatNativeDatetimeModule,
// } from '@mat-datetimepicker/core';
// import { MatSelectFilterModule } from 'mat-select-filter';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [
  // NgxMatSelectSearchModule,
  // MatSelectFilterModule,
  // MatDatetimepickerModule,
  // MatNativeDatetimeModule,
  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [
    // NgxMatSelectSearchModule,
    // MatSelectFilterModule,
    // MatDatetimepickerModule,
    // MatNativeDatetimeModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
  });
})();

/***/ }),

/***/ 37:
/*!********************************************!*\
  !*** ./src/app/pageup/pageup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageupComponent": () => (/* binding */ PageupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




const _c0 = function (a0) {
  return {
    "show-scrollTop": a0
  };
};
class PageupComponent {
  constructor(document) {
    this.document = document;
  }
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  ngOnInit() {}
}
PageupComponent.ɵfac = function PageupComponent_Factory(t) {
  return new (t || PageupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
PageupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageupComponent,
  selectors: [["app-pageup"]],
  hostBindings: function PageupComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PageupComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 3,
  vars: 3,
  consts: [[1, "scroll-to-top", 3, "ngClass"], ["mat-button", "", "type", "button", "data-toggle", "button", "aria-pressed", "true", 1, "btn", "active", 3, "click"], [1, "fas", "fa-chevron-up"]],
  template: function PageupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageupComponent_Template_button_click_1_listener() {
        return ctx.scrollToTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  width: 54px;\n  height: 40px;\n  opacity: 0;\n  background-color: #212428 !important;\n  z-index: 999;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;\n  border-radius: 50% !important;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: #E4E6EA !important;\n  padding: 0;\n  min-width: auto;\n  margin: 0 !important;\n}\n\n.mat-mdc-button.mat-unthemed[_ngcontent-%COMP%] {\n  color: #E4E6EA !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXVwL3BhZ2V1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNERBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLXRvLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI0MjggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggIzFjMWUyMiwgLTEwcHggLTEwcHggMTlweCAjMjYyYTJlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG93LXNjcm9sbFRvcCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI0U0RTZFQSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCA7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5tYXQtbWRjLWJ1dHRvbi5tYXQtdW50aGVtZWR7XHJcbiAgICBjb2xvcjogI0U0RTZFQSAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDcqpi75S6B10NNukx7bkr84BSgl-2RZ4Q",
    authDomain: "murad-karimov.firebaseapp.com",
    projectId: "murad-karimov",
    storageBucket: "murad-karimov.appspot.com",
    messagingSenderId: "539554444664",
    appId: "1:539554444664:web:b88eb39b2024aae792048d",
    measurementId: "G-LS1EW4DK6K"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map