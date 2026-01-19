
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ItemCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JdGVtQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVU7SUFBaEQ7UUFBQSxxRUFpREM7UUEvQ0MsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFlLElBQUksQ0FBQzs7SUF5Q3RDLENBQUM7SUF2Q0MsNkJBQVUsR0FBVixVQUFXLE9BQW1CLEVBQUUsTUFBYztRQUM1Qyw4Q0FBOEM7UUFFOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsd0JBQU8sSUFBSSxDQUFDLE1BQVEsQ0FBQztRQUU3QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTdDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVyRCxRQUFRLGVBQWUsRUFBRTtZQUN2QixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1lBQ1IsS0FBSyxXQUFXO2dCQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFOUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUQ1QjtJQUFELGVBQUM7Q0FqREQsQUFpREMsQ0FqRHFDLG9CQUFVLEdBaUQvQztrQkFqRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2Nyb2xsSXRlbSBmcm9tIFwiLi9TY3JvbGxJdGVtXCI7XG5pbXBvcnQgU2Nyb2xsTGlzdCBmcm9tIFwiLi9TY3JvbGxMaXN0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtQ2VsbCBleHRlbmRzIFNjcm9sbEl0ZW0ge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYmcxOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGJnMjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgaXRlbUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfY3VyTGlzdDogU2Nyb2xsTGlzdCA9IG51bGw7XG5cbiAgc2V0Q29udGVudChjdXJMaXN0OiBTY3JvbGxMaXN0LCBsaXN0SWQ6IG51bWJlcikge1xuICAgIC8vIGNjLmxvZyhcIkxpc3RJdGVtIHNldENvbnRlbnRcIiwgdGhpcy5saXN0SWQpO1xuXG4gICAgdGhpcy5fY3VyTGlzdCA9IGN1ckxpc3Q7XG4gICAgdGhpcy5saXN0SWQgPSBsaXN0SWQ7XG5cbiAgICB0aGlzLml0ZW1MYWJlbC5zdHJpbmcgPSBg5YiX6KGo6aG5OiR7dGhpcy5saXN0SWR9YDtcblxuICAgIGxldCBiYiA9IHRoaXMubGlzdElkICUgMiA9PSAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdGhpcy5iZzEuYWN0aXZlID0gYmI7XG4gICAgdGhpcy5iZzIuYWN0aXZlID0gIWJiO1xuXG4gICAgdGhpcy5ub2RlLmhlaWdodCA9IGJiID8gMTAwIDogNTA7XG4gIH1cblxuICBkb0RlbGV0ZSgpIHtcbiAgICBjYy5sb2coXCJMaXN0SXRlbSBkb0RlbGV0ZTpcIiwgdGhpcy5saXN0SWQpO1xuICAgIHRoaXMuX2N1ckxpc3QuZGVsZXRlSXRlbSh0aGlzLmxpc3RJZCk7XG4gIH1cblxuICBkb0hlaWdodCgpIHtcbiAgICBjYy5sb2coXCJMaXN0SXRlbSBkb0hlaWdodFwiKTtcbiAgfVxuXG4gIGJ0bkNhbGxiYWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICBjYy5sb2coXCJMaXN0SXRlbSBjdXN0b21FdmVudERhdGE6XCIsIGN1c3RvbUV2ZW50RGF0YSk7XG5cbiAgICBzd2l0Y2ggKGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgY2FzZSBcImJ0bkRlbGV0ZVwiOlxuICAgICAgICB0aGlzLmRvRGVsZXRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJ0bkhlaWdodFwiOlxuICAgICAgICB0aGlzLmRvSGVpZ2h0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=