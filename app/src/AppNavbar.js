"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var AppNavbar = (function (_super) {
    __extends(AppNavbar, _super);
    function AppNavbar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { isOpen: false };
        _this.state = { isOpen: false };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    AppNavbar.prototype.toggle = function () {
        this.state.isOpen = !this.state.isOpen;
    };
    AppNavbar.prototype.render = function () {
        return React.createElement(reactstrap_1.Navbar, { color: "dark", dark: true, expand: "md" },
            React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/" }, "Home"),
            React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle }),
            React.createElement(reactstrap_1.Collapse, { isOpen: this.state.isOpen, navbar: true },
                React.createElement(reactstrap_1.Nav, { className: "ml-auto", navbar: true },
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "https://www.linkedin.com" }, "Linkedin")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "https://www.facebook.com" }, "Facebook")))));
    };
    return AppNavbar;
}(React.Component));
exports.default = AppNavbar;
