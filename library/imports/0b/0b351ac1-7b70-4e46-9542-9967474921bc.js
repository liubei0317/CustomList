"use strict";
cc._RF.push(module, '0b351rBe3BORpVCmWdHSSG8', 'ItemCell');
// ItemCell.ts

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
var ScrollItem_1 = require("./ScrollItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemCell = /** @class */ (function (_super) {
    __extends(ItemCell, _super);
    function ItemCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg1 = null;
        _this.bg2 = null;
        _this.itemLabel = null;
        _this._curList = null;
        return _this;
    }
    ItemCell.prototype.setContent = function (curList, listId) {
        // cc.log("ListItem setContent", this.listId);
        this._curList = curList;
        this.listId = listId;
        this.itemLabel.string = "\u5217\u8868\u9879:" + this.listId;
        var bb = this.listId % 2 == 0 ? true : false;
        this.bg1.active = bb;
        this.bg2.active = !bb;
        this.node.height = bb ? 100 : 50;
    };
    ItemCell.prototype.doDelete = function () {
        cc.log("ListItem doDelete:", this.listId);
        this._curList.deleteItem(this.listId);
    };
    ItemCell.prototype.doHeight = function () {
        cc.log("ListItem doHeight");
    };
    ItemCell.prototype.btnCallback = function (event, customEventData) {
        cc.log("ListItem customEventData:", customEventData);
        switch (customEventData) {
            case "btnDelete":
                this.doDelete();
                break;
            case "btnHeight":
                this.doHeight();
                break;
            default:
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], ItemCell.prototype, "bg1", void 0);
    __decorate([
        property(cc.Node)
    ], ItemCell.prototype, "bg2", void 0);
    __decorate([
        property(cc.Label)
    ], ItemCell.prototype, "itemLabel", void 0);
    ItemCell = __decorate([
        ccclass
    ], ItemCell);
    return ItemCell;
}(ScrollItem_1.default));
exports.default = ItemCell;

cc._RF.pop();