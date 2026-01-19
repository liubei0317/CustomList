
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQywyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErQkM7UUE3QkMsVUFBSSxHQUFlLElBQUksQ0FBQzs7SUE2QjFCLENBQUM7SUEzQkMscUJBQU0sR0FBTixjQUFXLENBQUM7SUFFWixvQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLElBQWEsRUFBRSxNQUFjLEVBQUUsUUFBbUI7UUFDN0QsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxPQUFPLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRyxJQUFJLEVBQUU7U0FDekI7UUFFRCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxDQUFDLGtCQUFRLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQzdELENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDaEMsUUFBUSxlQUFlLEVBQUU7WUFDdkIsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztzQ0FDRztJQUZMLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErQnhCO0lBQUQsV0FBQztDQS9CRCxBQStCQyxDQS9CaUMsRUFBRSxDQUFDLFNBQVMsR0ErQjdDO2tCQS9Cb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtQ2VsbCBmcm9tIFwiLi9JdGVtQ2VsbFwiO1xuaW1wb3J0IFNjcm9sbExpc3QgZnJvbSBcIi4vU2Nyb2xsTGlzdFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoU2Nyb2xsTGlzdClcbiAgbGlzdDogU2Nyb2xsTGlzdCA9IG51bGw7XG5cbiAgb25Mb2FkKCkgeyB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5saXN0Lm51bUl0ZW1zID0gMjA7XG4gICAgLy8gdGhpcy5saXN0Mi5udW1JdGVtcyA9IDEwO1xuICB9XG5cbiAgb25SZW5kZXJMaXN0KGl0ZW06IGNjLk5vZGUsIGxpc3RJZDogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgYmIgPSBsaXN0SWQgJSAyID09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICBsZXQgYWEgPSBiYiA/IDEwMCA6IDUwO1xuICAgICAgbGV0IHNpemUgPSBjYy5zaXplKHRoaXMubGlzdC50bXBOb2RlLndpZHRoLCAxMDApO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrPy4oc2l6ZSk7XG4gICAgfVxuXG4gICAgaXRlbT8uZ2V0Q29tcG9uZW50KEl0ZW1DZWxsKS5zZXRDb250ZW50KHRoaXMubGlzdCwgbGlzdElkKTtcbiAgfVxuXG4gIGJ0bkNhbGxiYWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICBzd2l0Y2ggKGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgY2FzZSBcImJ0bk51bTVcIjpcbiAgICAgICAgdGhpcy5saXN0Lm51bUl0ZW1zID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==