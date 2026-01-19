"use strict";
cc._RF.push(module, '58a56qTOQNPwYsN2sEU3pU9', 'Main');
// Main.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ItemCell_1 = require("./ItemCell");
var ScrollList_1 = require("./ScrollList");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = null;
        return _this;
    }
    Main.prototype.onLoad = function () { };
    Main.prototype.start = function () {
        this.list.numItems = 20;
        // this.list2.numItems = 10;
    };
    Main.prototype.onRenderList = function (item, listId, callback) {
        if (callback) {
            var bb = listId % 2 == 0 ? true : false;
            var aa = bb ? 100 : 50;
            var size = cc.size(this.list.tmpNode.width, 100);
            return callback === null || callback === void 0 ? void 0 : callback(size);
        }
        item === null || item === void 0 ? void 0 : item.getComponent(ItemCell_1.default).setContent(this.list, listId);
    };
    Main.prototype.btnCallback = function (event, customEventData) {
        switch (customEventData) {
            case "btnNum5":
                this.list.numItems = 5;
                break;
            default:
                break;
        }
    };
    __decorate([
        property(ScrollList_1.default)
    ], Main.prototype, "list", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();