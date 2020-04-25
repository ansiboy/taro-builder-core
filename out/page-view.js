"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const components_1 = require("@tarojs/components");
const maishu_jueying_core_1 = require("maishu-jueying-core");
const callback_1 = require("maishu-toolkit/out/callback");
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