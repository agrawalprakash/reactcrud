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
require("./App.css");
var AppNavbar_1 = require("./AppNavbar");
var reactstrap_1 = require("reactstrap");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(AppNavbar_1.default, null),
            React.createElement(reactstrap_1.Container, { fluid: true },
                React.createElement(reactstrap_1.Button, { color: "link", href: "http://localhost:3000/groups" }, "Manage Development Tours"))));
    };
    return Home;
}(React.Component));
exports.default = Home;
