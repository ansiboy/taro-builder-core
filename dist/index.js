/*!
 * 
 *  taro-builder-core v1.0.11
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tarojs/components"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@tarojs/components", "react"], factory);
	else if(typeof exports === 'object')
		exports["taro-builder-core"] = factory(require("@tarojs/components"), require("react"));
	else
		root["taro-builder-core"] = factory(root["@tarojs/components"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__tarojs_components__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/maishu-jueying-core/out/decorators.js":
/*!************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/decorators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __webpack_require__(/*! ./register */ "./node_modules/maishu-jueying-core/out/register.js");
/** 组件标记，用于将指定的组件标记为可被外部加载 */
function component(options) {
    return function classDecorator(constructor) {
        let type = (options === null || options === void 0 ? void 0 : options.type) || constructor.name;
        register_1.registerComponent(type, constructor);
    };
}
exports.component = component;
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = {
    pathFieldRequired(name) {
        let msg = `Path field of '${name}' component config can not be null or empty.`;
        return new Error(msg);
    },
    canntFindModule(name, path) {
        let msg = `Can not find component '${name}' in the module, module path is: '${path}'.`;
        return new Error(msg);
    },
    componentTypeNotExists(name) {
        let msg = `Component '${name}' not exists.`;
        return new Error(msg);
    },
    argumentNull(name) {
        let msg = `Argument '${name}' can not be null or empty.`;
        return new Error(msg);
    }
};
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(/*! ./decorators */ "./node_modules/maishu-jueying-core/out/decorators.js");
exports.component = decorators_1.component;
var parse_component_data_1 = __webpack_require__(/*! ./parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
exports.parseComponentData = parse_component_data_1.parseComponentData;
var register_1 = __webpack_require__(/*! ./register */ "./node_modules/maishu-jueying-core/out/register.js");
exports.registerComponent = register_1.registerComponent;
exports.componentTypes = register_1.componentTypes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/parse-component-data.js":
/*!**********************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/parse-component-data.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const register_1 = __webpack_require__(/*! ./register */ "./node_modules/maishu-jueying-core/out/register.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/maishu-jueying-core/out/errors.js");
function parseComponentData(componentData) {
    let type = register_1.componentTypes[componentData.type];
    if (type == null) {
        throw errors_1.errors.componentTypeNotExists(componentData.type);
    }
    let children = [];
    if (componentData.children != null) {
        children = componentData.children.map(c => typeof c == "string" ? c : parseComponentData(c));
    }
    return React.createElement(type, componentData.props, ...children);
}
exports.parseComponentData = parseComponentData;
//# sourceMappingURL=parse-component-data.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/register.js":
/*!**********************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/register.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/maishu-jueying-core/out/errors.js");
exports.componentTypes = {};
function registerComponent(componentName, componentType) {
    if (componentType == null && typeof componentName == 'function') {
        componentType = componentName;
        componentName = componentType.name;
        componentType['componentName'] = componentName;
    }
    if (!componentName)
        throw errors_1.errors.argumentNull('componentName');
    if (!componentType)
        throw errors_1.errors.argumentNull('componentType');
    exports.componentTypes[componentName] = componentType;
}
exports.registerComponent = registerComponent;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./node_modules/maishu-toolkit/out/callback.js":
/*!*****************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/callback.js ***!
  \*****************************************************/
/*! exports provided: Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
class Callback {
    constructor() {
        this.funcs = new Array();
    }
    add(func) {
        this.funcs.push(func);
    }
    remove(func) {
        this.funcs = this.funcs.filter(o => o != func);
    }
    fire(args) {
        this.funcs.forEach(o => o(args));
    }
    static create() {
        return new Callback();
    }
}


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! maishu-jueying-core */ "./node_modules/maishu-jueying-core/out/index.js"));
var page_view_1 = __webpack_require__(/*! ./page-view */ "./out/page-view.js");
exports.PageView = page_view_1.PageView;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/page-view.js":
/*!**************************!*\
  !*** ./out/page-view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! @tarojs/components */ "@tarojs/components");
const maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "./node_modules/maishu-jueying-core/out/index.js");
const callback_1 = __webpack_require__(/*! maishu-toolkit/out/callback */ "./node_modules/maishu-toolkit/out/callback.js");
let PageViewContext = React.createContext({});
let PageView = class PageView extends React.Component {
    constructor(props) {
        super(props);
        this.childComponentCreated = new callback_1.Callback();
        this.childComponentCreated.add((args) => {
        });
    }
    render() {
        let pageStyle = {};
        return React.createElement(components_1.View, { className: "page-view", style: pageStyle },
            React.createElement(PageViewContext.Provider, { value: { pageView: this } }, this.props.children));
    }
};
PageView.headerTypeName = "header";
PageView.footerTypeName = "footer";
PageView.bodyTypeName = "section";
PageView = __decorate([
    maishu_jueying_core_1.component()
], PageView);
exports.PageView = PageView;
let PageViewHeader = class PageViewHeader extends React.Component {
    render() {
        return React.createElement(components_1.View, { className: "header" }, this.props.children);
    }
};
PageViewHeader.defaultProps = { height: 50 };
PageViewHeader = __decorate([
    maishu_jueying_core_1.component({ type: PageView.headerTypeName })
], PageViewHeader);
exports.PageViewHeader = PageViewHeader;
let PageViewFooter = class PageViewFooter extends React.Component {
    render() {
        return React.createElement(components_1.View, { className: "footer" }, this.props.children);
    }
};
PageViewFooter.defaultProps = { height: 50 };
PageViewFooter = __decorate([
    maishu_jueying_core_1.component({ type: PageView.footerTypeName })
], PageViewFooter);
exports.PageViewFooter = PageViewFooter;
let PageViewBody = class PageViewBody extends React.Component {
    render() {
        return React.createElement(components_1.View, { className: "body" }, this.props.children);
    }
};
PageViewBody = __decorate([
    maishu_jueying_core_1.component({ type: PageView.bodyTypeName })
], PageViewBody);
exports.PageViewBody = PageViewBody;
class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.fired = false;
        let render = this.render;
        this.render = () => {
            return React.createElement(PageViewContext.Consumer, null, args => {
                var _a;
                console.assert(args.pageView != null);
                if (this.fired == false) {
                    this.fired = true;
                    (_a = args.pageView) === null || _a === void 0 ? void 0 : _a.childComponentCreated.fire({ component: this });
                }
                return render.apply(this);
            });
        };
    }
}
exports.BaseComponent = BaseComponent;
BaseComponent.contextType = PageViewContext;
//# sourceMappingURL=page-view.js.map

/***/ }),

/***/ "@tarojs/components":
/*!*************************************!*\
  !*** external "@tarojs/components" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tarojs_components__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map