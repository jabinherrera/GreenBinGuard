exports.ids = [4,1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DashboardGBG.vue?vue&type=template&id=2dcadd8e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h1>Dashboard de Contenedores de Reciclaje</h1> " + (_vm.telemetryData ? "<div><h2>Datos de Telemetría</h2> " + (_vm.device in _vm.telemetryData ? "<div><h3>" + _vm._ssrEscape("Dispositivo: " + _vm._s(_vm.device)) + "</h3></div>" : "<!---->") + "</div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DashboardGBG.vue?vue&type=template&id=2dcadd8e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DashboardGBG.vue?vue&type=script&lang=js
/* harmony default export */ var DashboardGBGvue_type_script_lang_js = ({
  data() {
    return {
      telemetryData: null
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get('/v1/a6oh4oh9qcp2q8flk3b4/attributes/updates');
      this.telemetryData = response.data;
    } catch (error) {
      console.error('Error fetching telemetry data:', error);
    }
  }
});
// CONCATENATED MODULE: ./components/DashboardGBG.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DashboardGBGvue_type_script_lang_js = (DashboardGBGvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/DashboardGBG.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DashboardGBGvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "28e0dbae"
  
)

/* harmony default export */ var DashboardGBG = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=05ab4ace
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('DashboardGBG');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=05ab4ace

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: 'IndexPage'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f25fb4ec"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DashboardGBG: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=index.js.map