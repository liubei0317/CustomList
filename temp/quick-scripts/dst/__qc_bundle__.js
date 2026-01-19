
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ItemCell');
require('./assets/Main');
require('./assets/ScrollItem');
require('./assets/ScrollList');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ScrollList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18d16e7EQdG84Bt1tN7e+6X', 'ScrollList');
// ScrollList.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollItem_1 = require("./ScrollItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
var ScrollList = /** @class */ (function (_super) {
    __extends(ScrollList, _super);
    function ScrollList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 模板Item（Node）
        _this.tmpNode = null;
        // 渲染事件（渲染器）
        _this.renderEvent = new cc.Component.EventHandler();
        _this.isGraphics = false;
        _this.graphics = null;
        _this._numItems = 0;
        _this._view = null;
        _this._content = null;
        _this._layout = null;
        // 视口矩形（单位：像素）
        _this._viewRect = null;
        _this._pool = new cc.NodePool();
        _this._lastContentPos = cc.Vec3.ZERO;
        _this._scrollDir = 0;
        _this._checkBottom = false;
        _this._checkTop = false;
        _this._topIndex = 0;
        _this._bottomIndex = 0;
        _this._isTotalHeight = false;
        _this._itemsPos = [];
        return _this;
    }
    Object.defineProperty(ScrollList.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScrollList.prototype, "numItems", {
        set: function (value) {
            if (value == null || value < 0) {
                cc.warn("numItems must be greater than or equal to 0");
                return;
            }
            this._scrollView.stopAutoScroll();
            this.recycleItems();
            // this._numItems = value;
            if (this._layout.type == cc.Layout.Type.VERTICAL) {
                this.setContentV(value);
            }
            else if (this._layout.type == cc.Layout.Type.HORIZONTAL) {
                this._content.x = 0;
            }
            // this.setNumItems(value);
            // let count = 0;
            // for (let i = 0; i < this._numItems; i++) {
            //   this.createItem(i, () => {
            //     count++;
            //     if (count == this._numItems) {
            //       this._layout.enabled = false;
            //       this.updateListItems();
            //     }
            //   });
            // }
        },
        enumerable: false,
        configurable: true
    });
    ScrollList.prototype.onLoad = function () {
        this._registerEvent();
        this.init();
    };
    ScrollList.prototype.onDestroy = function () {
        this._unregisterEvent();
    };
    /** 注册事件 */
    ScrollList.prototype._registerEvent = function () {
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("scrolling", this.onScrolling, this);
    };
    /** 卸载事件 */
    ScrollList.prototype._unregisterEvent = function () {
        this.node.off("touchstart", this.onTouchStart, this);
        this.node.off("scrolling", this.onScrolling, this);
    };
    /** 初始化列表 */
    ScrollList.prototype.init = function () {
        this._scrollView = this.node.getComponent(cc.ScrollView);
        this._view = this._scrollView.node;
        this._content = this._scrollView.content;
        this._layout = this._content.getComponent(cc.Layout);
        this._content.removeAllChildren();
        this._content.height = this._layout.paddingTop;
        this._layout.enabled = false;
        // 这里要刷新适配，不然rect会错位
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            widget.updateAlignment();
        }
        this._viewRect = this.getWorldRect(this.node);
        this.drawWorldRect(this._viewRect);
        this._pool.clear();
        this._lastContentPos = this._content.position.clone();
        this._scrollDir = 0;
        this._checkBottom = false;
        this._checkTop = false;
        this._topIndex = 0;
        this._bottomIndex = 0;
        this._isTotalHeight = false;
        this._itemsPos = [];
    };
    /** 回收所有元素 */
    ScrollList.prototype.recycleItems = function () {
        for (var i = this._content.children.length - 1; i >= 0; i--) {
            var item = this._content.children[i];
            this._pool.put(item);
        }
        this._content.height = this._layout.paddingTop;
        this._layout.enabled = false;
        this._lastContentPos = this._content.position.clone();
        this._scrollDir = 0;
        this._checkBottom = false;
        this._checkTop = false;
        this._topIndex = 0;
        this._bottomIndex = 0;
        this._isTotalHeight = false;
        this._itemsPos = [];
    };
    ScrollList.prototype.setContentV = function (value) {
        var _this = this;
        cc.log("setContentV:", value);
        this._content.y = 0;
        this._itemsPos = [];
        this._content.height = this._layout.paddingTop;
        var _loop_1 = function (i) {
            var setPos = function (i, size) {
                if (i == 0) {
                    var itemY = -_this._content.height + _this.tmpNode.anchorY * size.height;
                    var itemX = 0;
                    _this._itemsPos.push(cc.v2(itemX, itemY));
                }
                else if (i == value - 1) {
                    var itemY = -_this._content.height +
                        _this._layout.paddingBottom +
                        _this.tmpNode.anchorY * size.height;
                    var itemX = 0;
                    _this._itemsPos.push(cc.v2(itemX, itemY));
                }
                else {
                    var itemY = -_this._content.height + _this.tmpNode.anchorY * size.height;
                    var itemX = 0;
                    _this._itemsPos.push(cc.v2(itemX, itemY));
                }
            };
            var isCallback = false;
            // 这里需要修改高度/宽度
            if (this_1.renderEvent) {
                cc.Component.EventHandler.emitEvents([this_1.renderEvent], null, i, function (size) {
                    cc.log("isCallback = true;");
                    isCallback = true;
                    if (i == 0) {
                        _this._content.height += size.height;
                    }
                    else if (i == value - 1) {
                        _this._content.height +=
                            _this._layout.spacingY +
                                size.height +
                                _this._layout.paddingBottom;
                    }
                    else {
                        _this._content.height += _this._layout.spacingY + size.height;
                    }
                    setPos(i, size);
                });
            }
            if (!isCallback) {
                cc.log("!isCallback");
                var size = cc.size(this_1.tmpNode.width, this_1.tmpNode.height);
                if (i == 0) {
                    this_1._content.height += size.height;
                }
                else if (i == value - 1) {
                    this_1._content.height +=
                        this_1._layout.spacingY + size.height + this_1._layout.paddingBottom;
                }
                else {
                    this_1._content.height += this_1._layout.spacingY + size.height;
                }
                setPos(i, size);
            }
        };
        var this_1 = this;
        for (var i = 0; i < value; i++) {
            _loop_1(i);
        }
        cc.log("this._content.height:", this._content.height);
        cc.log("this._itemsPos:" + this._itemsPos);
    };
    /** 设置元素数量 */
    ScrollList.prototype.setNumItems = function (value) {
        this._numItems = value;
        this._mapItems.clear();
        var tempArray = [];
        for (var i = 0; i < this._numItems; i++) {
            var item = null;
            item = this._pool.get();
            if (!item) {
                item = cc.instantiate(this.tmpNode);
            }
            // 这里需要修改高度/宽度
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, i);
            }
            this._content.addChild(item);
            item.zIndex = i;
            if (i == 0) {
                this._content.height += item.height;
            }
            else {
                this._content.height += this._layout.spacingY + item.height;
                if (i == this._numItems - 1) {
                    this._content.height += this._layout.paddingBottom;
                }
            }
            item.y -= this._content.height - item.anchorY * item.height;
            var out = this.isContainsView(item);
            cc.log("===out:" + out + ", name:" + i);
            if (!out) {
                tempArray.push(item);
                if (i == 0) {
                    this._content.height -= item.height;
                }
                else {
                    this._content.height -= this._layout.spacingY + item.height;
                    if (i == this._numItems - 1) {
                        this._content.height -= this._layout.paddingBottom;
                    }
                }
            }
            else {
                this._mapItems.set(i, cc.v2(item.x, item.y));
            }
            cc.log("tempArray length:" + tempArray.length);
            if (tempArray.length == 2) {
                break;
            }
        }
        for (var i = 0; i < tempArray.length; i++) {
            this._pool.put(tempArray[i]);
        }
        cc.log("this._pool:", this._pool);
        this._topIndex = 0;
        this._bottomIndex = this._content.children.length - 1;
        if (this._bottomIndex == this._numItems - 1) {
            this._isTotalHeight = true;
        }
        cc.log("this._topIndex:", this._topIndex);
        cc.log("this._bottomIndex:", this._bottomIndex);
        cc.log("this._isTotalHeight:", this._isTotalHeight);
        cc.log("this._mapItems:", this._mapItems);
    };
    /** 创建元素 */
    ScrollList.prototype.createItem = function (listId, complete) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._content.children[listId];
                        if (!!item) return [3 /*break*/, 2];
                        item = cc.instantiate(this.tmpNode);
                        // 这里需要修改高度/宽度
                        if (this.renderEvent) {
                            item.getComponent(ScrollItem_1.default).listId = listId;
                            cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
                        }
                        this._content.addChild(item);
                        return [4 /*yield*/, this.waitFrame()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        complete && complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 更新所有元素 */
    ScrollList.prototype.updateListItems = function () {
        for (var i = 0; i < this._content.children.length; i++) {
            this.updateItem(this._content.children[i], i);
        }
    };
    /** 更新元素 */
    ScrollList.prototype.updateItem = function (item, listId) {
        item.getComponent(ScrollItem_1.default).listId = listId;
        var itemRect = this.getWorldRect(item);
        // ⭐ 完全超出视口判断
        var isCompletelyOut = itemRect.xMax < this._viewRect.xMin ||
            itemRect.xMin > this._viewRect.xMax ||
            itemRect.yMax < this._viewRect.yMin ||
            itemRect.yMin > this._viewRect.yMax;
        // 只有完全不在视口内才隐藏
        item.active = !isCompletelyOut;
    };
    /** 删除元素 */
    ScrollList.prototype.deleteItem = function (listId) {
        for (var i = this._content.children.length - 1; i >= 0; i--) {
            var item = this._content.children[i];
            var itemHeight = item.height;
            var itemWidth = item.width;
            if (i == listId) {
                item.removeFromParent();
            }
            if (i > listId) {
                item.position = this._content.children[i - 1].position;
                this.updateItem(item, i - 1);
            }
            if (i == listId) {
                if (this._scrollView.vertical) {
                    this._content.height -=
                        itemHeight + this._layout.paddingBottom + this._layout.spacingY;
                }
                else if (this._scrollView.horizontal) {
                    this._content.width -=
                        itemWidth + this._layout.paddingRight + this._layout.spacingX;
                }
                this.scrollTo(i - 1);
            }
        }
    };
    ScrollList.prototype.scrollTo = function (listId, time) {
        if (time === void 0) { time = 0.3; }
        var item = this._content.children[listId];
        if (!item) {
            return;
        }
        // item 在 content 中的本地坐标
        var itemPos = item.getPosition();
        // 垂直
        if (this._scrollView.vertical) {
            // content 当前锚点（通常是 (0.5, 1)）
            var contentAnchor = this._content.anchorY;
            var viewAnchor = this._view.anchorY;
            // content 和 view 的高度
            var contentHeight = this._content.height;
            var viewHeight = this._view.height;
            /** 关键公式（纵向）ScrollView 的 offset.y 是： content 顶部 到 view 顶部 的距离 */
            var offsetY = contentHeight * (1 - contentAnchor) - // content 顶部
                itemPos.y - // item 位置
                viewHeight * (1 - viewAnchor); // view 顶部
            // 防止滚动超界
            var maxOffset = contentHeight - viewHeight;
            offsetY = Math.max(0, Math.min(offsetY, maxOffset));
            this._scrollView.scrollToOffset(cc.v2(0, offsetY), time);
        }
        // 水平
        else if (this._scrollView.horizontal) {
            var offsetX = itemPos.x - this._view.width / 2 + this._content.width / 2;
            var maxOffset = this._content.width - this._view.width;
            offsetX = Math.max(0, Math.min(offsetX, maxOffset));
            this.scrollView.scrollToOffset(cc.v2(offsetX, 0), time);
        }
    };
    ScrollList.prototype.onTouchStart = function () {
        cc.log("onTouchStart");
        // if (this.scrollView.isScrolling()) {
        //   this._scrollView.stopAutoScroll();
        // }
    };
    ScrollList.prototype.onScrolling = function () {
        // this.updateListItems();
        // if (!this.scrollView.isScrolling()) return;
        var pos = this._content.position;
        var deltaY = pos.y - this._lastContentPos.y;
        // if (Math.abs(deltaY) < this._layout.spacingY) return;
        // if (deltaY > 0) {
        //   this.handleScrollUp();
        // } else {
        //   this.handleScrollDown();
        // }
        this._lastContentPos = pos.clone();
    };
    ScrollList.prototype.handleScrollUp = function () {
        cc.log("handleScrollUp");
        var totalIndex = this._numItems - 1;
        if (this._bottomIndex == totalIndex) {
            cc.log("拉到底了");
            cc.log("this._content0 position:" + this._content.children[0].position);
            cc.log("this._content.height:" +
                this._content.height +
                ", this._isTotalHeight:" +
                this._isTotalHeight);
            return;
        }
        // 首端的item
        var firstItem = this._content.children[0];
        var firstItemOut = this.isOutView(firstItem);
        cc.log("firstItemOut:" + firstItemOut);
        if (firstItemOut) {
            this._pool.put(firstItem);
            this._topIndex++;
        }
        // 末端的item
        var lastItem = this._content.children[this._content.children.length - 1];
        var lastContains = this.isContainsView(lastItem);
        cc.log("lastContains:" + lastContains);
        if (lastContains) {
            if (this._bottomIndex < totalIndex) {
                this._bottomIndex++;
                var newItem = this._pool.get();
                if (!newItem) {
                    newItem = cc.instantiate(this.tmpNode);
                }
                this._content.addChild(newItem);
                newItem.zIndex = this._bottomIndex;
                // 这里需要修改高度/宽度
                if (this.renderEvent) {
                    cc.Component.EventHandler.emitEvents([this.renderEvent], newItem, this._bottomIndex);
                }
                if (!this._isTotalHeight) {
                    this._content.height += this._layout.spacingY + newItem.height;
                }
                if (this._mapItems.has(this._bottomIndex)) {
                    var mapPos = this._mapItems.get(this._bottomIndex);
                    newItem.setPosition(mapPos);
                }
                else {
                    newItem.y =
                        lastItem.y -
                            lastItem.anchorY * lastItem.height -
                            this._layout.spacingY -
                            (1 - newItem.anchorY) * newItem.height;
                    this._mapItems.set(this._bottomIndex, cc.v2(newItem.x, newItem.y));
                }
                if (this._bottomIndex == totalIndex) {
                    if (!this._isTotalHeight) {
                        this._isTotalHeight = true;
                        this._content.height += this._layout.paddingBottom;
                    }
                    cc.log("this._content.height:" +
                        this._content.height +
                        ", this._isTotalHeight:" +
                        this._isTotalHeight);
                }
            }
        }
        cc.log("this._topIndex:" + this._topIndex);
        cc.log("this._bottomIndex:" + this._bottomIndex + ", totalIndex:" + totalIndex);
        cc.log("this._mapItems:", this._mapItems);
    };
    ScrollList.prototype.handleScrollDown = function () {
        cc.log("handleScrollDown");
        if (this._topIndex == 0) {
            cc.log("拉到顶了");
            cc.log("this._content0 position:" + this._content.children[0].position);
            cc.log("this._content.height:" +
                this._content.height +
                ", this._isTotalHeight:" +
                this._isTotalHeight);
            return;
        }
        // 首端的item
        var firstItem = this._content.children[0];
        var firstContains = this.isContainsView(firstItem);
        cc.log("firstContains:" + firstContains);
        if (firstContains) {
            this._topIndex--;
            var newItem = this._pool.get();
            if (!newItem) {
                newItem = cc.instantiate(this.tmpNode);
            }
            this._content.addChild(newItem);
            newItem.zIndex = this._topIndex;
            // 这里需要修改高度/宽度
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], newItem, this._topIndex);
            }
            var mapPos = this._mapItems.get(this._topIndex);
            cc.log("mapPos:" + mapPos);
            newItem.setPosition(mapPos);
            // newItem.y = firstItem.y + (1 - firstItem.anchorY) * firstItem.height + this._layout.spacingY + newItem.anchorY * newItem.height;
            cc.log("newItem.y:" + newItem.y);
        }
        // 末端的item
        var lastItem = this._content.children[this._content.children.length - 1];
        var lastItemOut = this.isOutView(lastItem);
        cc.log("lastItemOut:" + lastItemOut);
        if (lastItemOut) {
            this._pool.put(lastItem);
            this._bottomIndex--;
        }
        cc.log("this._topIndex:" + this._topIndex);
        cc.log("this._bottomIndex:" + this._bottomIndex);
        // 首端的item
        // const curItem = this._content.children[0];
        // const deltaTopY = this.getScrollDownTopY(0);
        // cc.log("deltaTopY:" + deltaTopY);
        // if (deltaTopY > 0) {
        //   if (!this._checkTop) {
        //     this._checkTop = true;
        //     let newItem = this._pool.get();
        //     if (!newItem) {
        //       newItem = cc.instantiate(this.tmpNode)
        //     }
        //     this._content.addChild(newItem);
        //     newItem.zIndex = 0;
        //     // 这里需要修改高度/宽度
        //     if (this.renderEvent) {
        //       cc.Component.EventHandler.emitEvents([this.renderEvent], newItem, 0);
        //     }
        //     newItem.y = curItem.y + (1 - curItem.anchorY) * curItem.height + this._layout.spacingY + newItem.anchorY * newItem.height
        //     this._checkTop = false;
        //   }
        // }
        // 末端的item
        // const deltaBottomY = this.getScrollDownBottomY(this._content.children.length - 1);
        // cc.log("deltaBottomY:" + deltaBottomY);
        // if (deltaBottomY < 0) {
        //   const bottomItem = this._content.children[this._content.children.length - 1];
        //   this._pool.put(bottomItem);
        //   // this._content.height -= bottomItem.height + this._layout.spacingY;
        // }
    };
    ScrollList.prototype.getScrollUpTopY = function (index) {
        var item = this._content.children[index];
        var itemY = item.y - item.anchorY * item.height;
        var localItemY = itemY + this._content.y;
        var topY = 0;
        var deltaTopY = topY - localItemY;
        return deltaTopY;
    };
    ScrollList.prototype.getScrollUpBottomY = function (index) {
        var item = this._content.children[index];
        var itemY = item.y - item.anchorY * item.height;
        var localItemY = itemY + this._content.y;
        var bottomY = -this.node.anchorY * this.node.height;
        var deltaBottomY = localItemY - bottomY;
        return deltaBottomY;
    };
    ScrollList.prototype.getScrollDownTopY = function (index) {
        var item = this._content.children[index];
        var itemY = item.y + (1 - item.anchorY) * item.height;
        var localItemY = itemY + this._content.y;
        var topY = 0;
        var deltaTopY = topY - localItemY;
        return deltaTopY;
    };
    ScrollList.prototype.getScrollDownBottomY = function (index) {
        var item = this._content.children[index];
        var itemY = item.y + (1 - item.anchorY) * item.height;
        var localItemY = itemY + this._content.y;
        var bottomY = -this.node.anchorY * this.node.height;
        var deltaBottomY = localItemY - bottomY;
        return deltaBottomY;
    };
    /** 分帧等待 */
    ScrollList.prototype.waitFrame = function () {
        return new Promise(function (resolve) {
            cc.director.once(cc.Director.EVENT_AFTER_UPDATE, resolve);
        });
    };
    /** 获取节点的世界矩形 */
    ScrollList.prototype.getWorldRect = function (node) {
        var worldPos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var xMin = worldPos.x - node.anchorX * node.width;
        var yMin = worldPos.y - node.anchorY * node.height;
        return new cc.Rect(xMin, yMin, node.width, node.height);
    };
    /** 世界 Rect → 本地 Rect */
    ScrollList.prototype.drawWorldRect = function (worldRect) {
        if (!this.graphics) {
            return;
        }
        var g = this.graphics.getComponent(cc.Graphics);
        g.clear();
        // 世界 Rect 四个角
        var lb = cc.v2(worldRect.xMin, worldRect.yMin); // 左下
        var rt = cc.v2(worldRect.xMax, worldRect.yMax); // 右上
        // 转换到 Graphics 节点的本地坐标
        var localLB = this.graphics.node.convertToNodeSpaceAR(lb);
        var localRT = this.graphics.node.convertToNodeSpaceAR(rt);
        var width = localRT.x - localLB.x;
        var height = localRT.y - localLB.y;
        g.rect(localLB.x, localLB.y, width, height);
        g.stroke();
    };
    /** 判断元素是否完全超出视口 */
    ScrollList.prototype.isOutView = function (item) {
        var itemRect = this.getWorldRect(item);
        // ⭐ 完全超出视口判断
        var isCompletelyOut = itemRect.xMax < this._viewRect.xMin ||
            itemRect.xMin > this._viewRect.xMax ||
            itemRect.yMax < this._viewRect.yMin ||
            itemRect.yMin > this._viewRect.yMax;
        return isCompletelyOut;
    };
    /** 判断元素是否与视口相交 */
    ScrollList.prototype.isIntersectView = function (item) {
        var itemRect = this.getWorldRect(item);
        return itemRect.intersects(this._viewRect);
    };
    /** 判断元素是否完全包含在视口内 */
    ScrollList.prototype.isContainsView = function (item) {
        var itemRect = this.getWorldRect(item);
        return this._viewRect.containsRect(itemRect);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "模板Item",
        })
    ], ScrollList.prototype, "tmpNode", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && "渲染事件（渲染器）",
        })
    ], ScrollList.prototype, "renderEvent", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && "是否启用 Graphics",
        })
    ], ScrollList.prototype, "isGraphics", void 0);
    __decorate([
        property({
            type: cc.Graphics,
            tooltip: CC_DEV && "Graphics渲染，在list子节点下",
            visible: function () {
                return this.isGraphics;
            },
        })
    ], ScrollList.prototype, "graphics", void 0);
    ScrollList = __decorate([
        ccclass,
        menu("自定义组件/ScrollList"),
        requireComponent(cc.ScrollView)
    ], ScrollList);
    return ScrollList;
}(cc.Component));
exports.default = ScrollList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtRQVBDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUTtZQUNqQixPQUFPLEVBQUUsTUFBTSxJQUFJLHNCQUFzQjtZQUN6QyxPQUFPO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6QixDQUFDO1NBQ0YsQ0FBQztnREFDMkI7SUFqQ1YsVUFBVTtRQUg5QixPQUFPO1FBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7T0FDWCxVQUFVLENBOHJCOUI7SUFBRCxpQkFBQztDQTlyQkQsQUE4ckJDLENBOXJCdUMsRUFBRSxDQUFDLFNBQVMsR0E4ckJuRDtrQkE5ckJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcm9sbEl0ZW0gZnJvbSBcIi4vU2Nyb2xsSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQG1lbnUoXCLoh6rlrprkuYnnu4Tku7YvU2Nyb2xsTGlzdFwiKVxuQHJlcXVpcmVDb21wb25lbnQoY2MuU2Nyb2xsVmlldylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbExpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBwcml2YXRlIF9zY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3O1xuICBnZXQgc2Nyb2xsVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlldztcbiAgfVxuXG4gIC8vIOaooeadv0l0ZW3vvIhOb2Rl77yJXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLmqKHmnb9JdGVtXCIsXG4gIH0pXG4gIHRtcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIC8vIOa4suafk+S6i+S7tu+8iOa4suafk+WZqO+8iVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5riy5p+T5LqL5Lu277yI5riy5p+T5Zmo77yJXCIsXG4gIH0pXG4gIHByaXZhdGUgcmVuZGVyRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPVxuICAgIG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLmmK/lkKblkK/nlKggR3JhcGhpY3NcIixcbiAgfSlcbiAgaXNHcmFwaGljczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuR3JhcGhpY3MsXG4gICAgdG9vbHRpcDogQ0NfREVWICYmIFwiR3JhcGhpY3PmuLLmn5PvvIzlnKhsaXN05a2Q6IqC54K55LiLXCIsXG4gICAgdmlzaWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzR3JhcGhpY3M7XG4gICAgfSxcbiAgfSlcbiAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICBwcml2YXRlIF9udW1JdGVtczogbnVtYmVyID0gMDtcbiAgc2V0IG51bUl0ZW1zKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA8IDApIHtcbiAgICAgIGNjLndhcm4oXCJudW1JdGVtcyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Njcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcblxuICAgIHRoaXMucmVjeWNsZUl0ZW1zKCk7XG5cbiAgICAvLyB0aGlzLl9udW1JdGVtcyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9sYXlvdXQudHlwZSA9PSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTCkge1xuICAgICAgdGhpcy5zZXRDb250ZW50Vih2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXlvdXQudHlwZSA9PSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMKSB7XG4gICAgICB0aGlzLl9jb250ZW50LnggPSAwO1xuICAgIH1cbiAgICAvLyB0aGlzLnNldE51bUl0ZW1zKHZhbHVlKTtcblxuICAgIC8vIGxldCBjb3VudCA9IDA7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1JdGVtczsgaSsrKSB7XG4gICAgLy8gICB0aGlzLmNyZWF0ZUl0ZW0oaSwgKCkgPT4ge1xuICAgIC8vICAgICBjb3VudCsrO1xuICAgIC8vICAgICBpZiAoY291bnQgPT0gdGhpcy5fbnVtSXRlbXMpIHtcbiAgICAvLyAgICAgICB0aGlzLl9sYXlvdXQuZW5hYmxlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgX3ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuICBwcml2YXRlIF9jb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGF5b3V0OiBjYy5MYXlvdXQgPSBudWxsO1xuXG4gIC8vIOinhuWPo+efqeW9ou+8iOWNleS9je+8muWDj+e0oO+8iVxuICBwcml2YXRlIF92aWV3UmVjdDogY2MuUmVjdCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfcG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgcHJpdmF0ZSBfbGFzdENvbnRlbnRQb3M6IGNjLlZlYzMgPSBjYy5WZWMzLlpFUk87XG4gIHByaXZhdGUgX3Njcm9sbERpcjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY2hlY2tCb3R0b206IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2hlY2tUb3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdG9wSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2JvdHRvbUluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9pc1RvdGFsSGVpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2l0ZW1zUG9zOiBjYy5WZWMyW10gPSBbXTtcblxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnQoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XG4gIH1cblxuICAvKiog5rOo5YaM5LqL5Lu2ICovXG4gIHByaXZhdGUgX3JlZ2lzdGVyRXZlbnQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMub25TY3JvbGxpbmcsIHRoaXMpO1xuICB9XG5cbiAgLyoqIOWNuOi9veS6i+S7tiAqL1xuICBwcml2YXRlIF91bnJlZ2lzdGVyRXZlbnQoKSB7XG4gICAgdGhpcy5ub2RlLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vZmYoXCJzY3JvbGxpbmdcIiwgdGhpcy5vblNjcm9sbGluZywgdGhpcyk7XG4gIH1cblxuICAvKiog5Yid5aeL5YyW5YiX6KGoICovXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLl9zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICB0aGlzLl92aWV3ID0gdGhpcy5fc2Nyb2xsVmlldy5ub2RlO1xuICAgIHRoaXMuX2NvbnRlbnQgPSB0aGlzLl9zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgdGhpcy5fbGF5b3V0ID0gdGhpcy5fY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICB0aGlzLl9jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgdGhpcy5fY29udGVudC5oZWlnaHQgPSB0aGlzLl9sYXlvdXQucGFkZGluZ1RvcDtcbiAgICB0aGlzLl9sYXlvdXQuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8g6L+Z6YeM6KaB5Yi35paw6YCC6YWN77yM5LiN54S2cmVjdOS8mumUmeS9jVxuICAgIGxldCB3aWRnZXQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgaWYgKHdpZGdldCkge1xuICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3ZpZXdSZWN0ID0gdGhpcy5nZXRXb3JsZFJlY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLmRyYXdXb3JsZFJlY3QodGhpcy5fdmlld1JlY3QpO1xuXG4gICAgdGhpcy5fcG9vbC5jbGVhcigpO1xuICAgIHRoaXMuX2xhc3RDb250ZW50UG9zID0gdGhpcy5fY29udGVudC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIHRoaXMuX3Njcm9sbERpciA9IDA7XG4gICAgdGhpcy5fY2hlY2tCb3R0b20gPSBmYWxzZTtcbiAgICB0aGlzLl9jaGVja1RvcCA9IGZhbHNlO1xuICAgIHRoaXMuX3RvcEluZGV4ID0gMDtcbiAgICB0aGlzLl9ib3R0b21JbmRleCA9IDA7XG4gICAgdGhpcy5faXNUb3RhbEhlaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuX2l0ZW1zUG9zID0gW107XG4gIH1cblxuICAvKiog5Zue5pS25omA5pyJ5YWD57SgICovXG4gIHByaXZhdGUgcmVjeWNsZUl0ZW1zKCkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jb250ZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5baV07XG4gICAgICB0aGlzLl9wb29sLnB1dChpdGVtKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb250ZW50LmhlaWdodCA9IHRoaXMuX2xheW91dC5wYWRkaW5nVG9wO1xuICAgIHRoaXMuX2xheW91dC5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdENvbnRlbnRQb3MgPSB0aGlzLl9jb250ZW50LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5fc2Nyb2xsRGlyID0gMDtcbiAgICB0aGlzLl9jaGVja0JvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuX2NoZWNrVG9wID0gZmFsc2U7XG4gICAgdGhpcy5fdG9wSW5kZXggPSAwO1xuICAgIHRoaXMuX2JvdHRvbUluZGV4ID0gMDtcbiAgICB0aGlzLl9pc1RvdGFsSGVpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5faXRlbXNQb3MgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGVudFYodmFsdWU6IG51bWJlcikge1xuICAgIGNjLmxvZyhcInNldENvbnRlbnRWOlwiLCB2YWx1ZSk7XG4gICAgdGhpcy5fY29udGVudC55ID0gMDtcblxuICAgIHRoaXMuX2l0ZW1zUG9zID0gW107XG4gICAgdGhpcy5fY29udGVudC5oZWlnaHQgPSB0aGlzLl9sYXlvdXQucGFkZGluZ1RvcDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgIGxldCBzZXRQb3MgPSAoaSwgc2l6ZSkgPT4ge1xuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgY29uc3QgaXRlbVkgPVxuICAgICAgICAgICAgLXRoaXMuX2NvbnRlbnQuaGVpZ2h0ICsgdGhpcy50bXBOb2RlLmFuY2hvclkgKiBzaXplLmhlaWdodDtcbiAgICAgICAgICBjb25zdCBpdGVtWCA9IDA7XG4gICAgICAgICAgdGhpcy5faXRlbXNQb3MucHVzaChjYy52MihpdGVtWCwgaXRlbVkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpID09IHZhbHVlIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1ZID1cbiAgICAgICAgICAgIC10aGlzLl9jb250ZW50LmhlaWdodCArXG4gICAgICAgICAgICB0aGlzLl9sYXlvdXQucGFkZGluZ0JvdHRvbSArXG4gICAgICAgICAgICB0aGlzLnRtcE5vZGUuYW5jaG9yWSAqIHNpemUuaGVpZ2h0O1xuICAgICAgICAgIGNvbnN0IGl0ZW1YID0gMDtcbiAgICAgICAgICB0aGlzLl9pdGVtc1Bvcy5wdXNoKGNjLnYyKGl0ZW1YLCBpdGVtWSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGl0ZW1ZID1cbiAgICAgICAgICAgIC10aGlzLl9jb250ZW50LmhlaWdodCArIHRoaXMudG1wTm9kZS5hbmNob3JZICogc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgY29uc3QgaXRlbVggPSAwO1xuICAgICAgICAgIHRoaXMuX2l0ZW1zUG9zLnB1c2goY2MudjIoaXRlbVgsIGl0ZW1ZKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBpc0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAvLyDov5nph4zpnIDopoHkv67mlLnpq5jluqYv5a695bqmXG4gICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xuICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoXG4gICAgICAgICAgW3RoaXMucmVuZGVyRXZlbnRdLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgaSxcbiAgICAgICAgICAoc2l6ZTogY2MuU2l6ZSkgPT4ge1xuICAgICAgICAgICAgY2MubG9nKFwiaXNDYWxsYmFjayA9IHRydWU7XCIpO1xuICAgICAgICAgICAgaXNDYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQuaGVpZ2h0ICs9IHNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IHZhbHVlIC0gMSkge1xuICAgICAgICAgICAgICB0aGlzLl9jb250ZW50LmhlaWdodCArPVxuICAgICAgICAgICAgICAgIHRoaXMuX2xheW91dC5zcGFjaW5nWSArXG4gICAgICAgICAgICAgICAgc2l6ZS5oZWlnaHQgK1xuICAgICAgICAgICAgICAgIHRoaXMuX2xheW91dC5wYWRkaW5nQm90dG9tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgKz0gdGhpcy5fbGF5b3V0LnNwYWNpbmdZICsgc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRQb3MoaSwgc2l6ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNDYWxsYmFjaykge1xuICAgICAgICBjYy5sb2coXCIhaXNDYWxsYmFja1wiKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGNjLnNpemUodGhpcy50bXBOb2RlLndpZHRoLCB0aGlzLnRtcE5vZGUuaGVpZ2h0KTtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRlbnQuaGVpZ2h0ICs9IHNpemUuaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT0gdmFsdWUgLSAxKSB7XG4gICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgKz1cbiAgICAgICAgICAgIHRoaXMuX2xheW91dC5zcGFjaW5nWSArIHNpemUuaGVpZ2h0ICsgdGhpcy5fbGF5b3V0LnBhZGRpbmdCb3R0b207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgKz0gdGhpcy5fbGF5b3V0LnNwYWNpbmdZICsgc2l6ZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UG9zKGksIHNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjYy5sb2coXCJ0aGlzLl9jb250ZW50LmhlaWdodDpcIiwgdGhpcy5fY29udGVudC5oZWlnaHQpO1xuICAgIGNjLmxvZyhcInRoaXMuX2l0ZW1zUG9zOlwiICsgdGhpcy5faXRlbXNQb3MpO1xuICB9XG5cbiAgLyoqIOiuvue9ruWFg+e0oOaVsOmHjyAqL1xuICBwcml2YXRlIHNldE51bUl0ZW1zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9udW1JdGVtcyA9IHZhbHVlO1xuXG4gICAgdGhpcy5fbWFwSXRlbXMuY2xlYXIoKTtcbiAgICBsZXQgdGVtcEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1JdGVtczsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IG51bGw7XG5cbiAgICAgIGl0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRtcE5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyDov5nph4zpnIDopoHkv67mlLnpq5jluqYv5a695bqmXG4gICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xuICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgIGl0ZW0uekluZGV4ID0gaTtcbiAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgKz0gaXRlbS5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb250ZW50LmhlaWdodCArPSB0aGlzLl9sYXlvdXQuc3BhY2luZ1kgKyBpdGVtLmhlaWdodDtcbiAgICAgICAgaWYgKGkgPT0gdGhpcy5fbnVtSXRlbXMgLSAxKSB7XG4gICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgKz0gdGhpcy5fbGF5b3V0LnBhZGRpbmdCb3R0b207XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl0ZW0ueSAtPSB0aGlzLl9jb250ZW50LmhlaWdodCAtIGl0ZW0uYW5jaG9yWSAqIGl0ZW0uaGVpZ2h0O1xuXG4gICAgICBsZXQgb3V0ID0gdGhpcy5pc0NvbnRhaW5zVmlldyhpdGVtKTtcbiAgICAgIGNjLmxvZyhcIj09PW91dDpcIiArIG91dCArIFwiLCBuYW1lOlwiICsgaSk7XG4gICAgICBpZiAoIW91dCkge1xuICAgICAgICB0ZW1wQXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRlbnQuaGVpZ2h0IC09IGl0ZW0uaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NvbnRlbnQuaGVpZ2h0IC09IHRoaXMuX2xheW91dC5zcGFjaW5nWSArIGl0ZW0uaGVpZ2h0O1xuICAgICAgICAgIGlmIChpID09IHRoaXMuX251bUl0ZW1zIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgLT0gdGhpcy5fbGF5b3V0LnBhZGRpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXBJdGVtcy5zZXQoaSwgY2MudjIoaXRlbS54LCBpdGVtLnkpKTtcbiAgICAgIH1cblxuICAgICAgY2MubG9nKFwidGVtcEFycmF5IGxlbmd0aDpcIiArIHRlbXBBcnJheS5sZW5ndGgpO1xuICAgICAgaWYgKHRlbXBBcnJheS5sZW5ndGggPT0gMikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fcG9vbC5wdXQodGVtcEFycmF5W2ldKTtcbiAgICB9XG4gICAgY2MubG9nKFwidGhpcy5fcG9vbDpcIiwgdGhpcy5fcG9vbCk7XG5cbiAgICB0aGlzLl90b3BJbmRleCA9IDA7XG4gICAgdGhpcy5fYm90dG9tSW5kZXggPSB0aGlzLl9jb250ZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgaWYgKHRoaXMuX2JvdHRvbUluZGV4ID09IHRoaXMuX251bUl0ZW1zIC0gMSkge1xuICAgICAgdGhpcy5faXNUb3RhbEhlaWdodCA9IHRydWU7XG4gICAgfVxuICAgIGNjLmxvZyhcInRoaXMuX3RvcEluZGV4OlwiLCB0aGlzLl90b3BJbmRleCk7XG4gICAgY2MubG9nKFwidGhpcy5fYm90dG9tSW5kZXg6XCIsIHRoaXMuX2JvdHRvbUluZGV4KTtcbiAgICBjYy5sb2coXCJ0aGlzLl9pc1RvdGFsSGVpZ2h0OlwiLCB0aGlzLl9pc1RvdGFsSGVpZ2h0KTtcbiAgICBjYy5sb2coXCJ0aGlzLl9tYXBJdGVtczpcIiwgdGhpcy5fbWFwSXRlbXMpO1xuICB9XG5cbiAgLyoqIOWIm+W7uuWFg+e0oCAqL1xuICBwcml2YXRlIGFzeW5jIGNyZWF0ZUl0ZW0obGlzdElkOiBudW1iZXIsIGNvbXBsZXRlPzogRnVuY3Rpb24pIHtcbiAgICBsZXQgaXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5bbGlzdElkXTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRtcE5vZGUpO1xuICAgICAgLy8g6L+Z6YeM6ZyA6KaB5L+u5pS56auY5bqmL+WuveW6plxuICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoU2Nyb2xsSXRlbSkubGlzdElkID0gbGlzdElkO1xuICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZyYW1lKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiDmm7TmlrDmiYDmnInlhYPntKAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVMaXN0SXRlbXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb250ZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW0odGhpcy5fY29udGVudC5jaGlsZHJlbltpXSwgaSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOabtOaWsOWFg+e0oCAqL1xuICBwcml2YXRlIHVwZGF0ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbGlzdElkOiBudW1iZXIpIHtcbiAgICBpdGVtLmdldENvbXBvbmVudChTY3JvbGxJdGVtKS5saXN0SWQgPSBsaXN0SWQ7XG4gICAgY29uc3QgaXRlbVJlY3QgPSB0aGlzLmdldFdvcmxkUmVjdChpdGVtKTtcblxuICAgIC8vIOKtkCDlrozlhajotoXlh7rop4blj6PliKTmlq1cbiAgICBjb25zdCBpc0NvbXBsZXRlbHlPdXQgPVxuICAgICAgaXRlbVJlY3QueE1heCA8IHRoaXMuX3ZpZXdSZWN0LnhNaW4gfHxcbiAgICAgIGl0ZW1SZWN0LnhNaW4gPiB0aGlzLl92aWV3UmVjdC54TWF4IHx8XG4gICAgICBpdGVtUmVjdC55TWF4IDwgdGhpcy5fdmlld1JlY3QueU1pbiB8fFxuICAgICAgaXRlbVJlY3QueU1pbiA+IHRoaXMuX3ZpZXdSZWN0LnlNYXg7XG5cbiAgICAvLyDlj6rmnInlrozlhajkuI3lnKjop4blj6PlhoXmiY3pmpDol49cbiAgICBpdGVtLmFjdGl2ZSA9ICFpc0NvbXBsZXRlbHlPdXQ7XG4gIH1cblxuICAvKiog5Yig6Zmk5YWD57SgICovXG4gIGRlbGV0ZUl0ZW0obGlzdElkOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY29udGVudC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGl0ZW1IZWlnaHQgPSBpdGVtLmhlaWdodDtcbiAgICAgIGxldCBpdGVtV2lkdGggPSBpdGVtLndpZHRoO1xuXG4gICAgICBpZiAoaSA9PSBsaXN0SWQpIHtcbiAgICAgICAgaXRlbS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID4gbGlzdElkKSB7XG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPSB0aGlzLl9jb250ZW50LmNoaWxkcmVuW2kgLSAxXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKGl0ZW0sIGkgLSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT0gbGlzdElkKSB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LnZlcnRpY2FsKSB7XG4gICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgLT1cbiAgICAgICAgICAgIGl0ZW1IZWlnaHQgKyB0aGlzLl9sYXlvdXQucGFkZGluZ0JvdHRvbSArIHRoaXMuX2xheW91dC5zcGFjaW5nWTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY3JvbGxWaWV3Lmhvcml6b250YWwpIHtcbiAgICAgICAgICB0aGlzLl9jb250ZW50LndpZHRoIC09XG4gICAgICAgICAgICBpdGVtV2lkdGggKyB0aGlzLl9sYXlvdXQucGFkZGluZ1JpZ2h0ICsgdGhpcy5fbGF5b3V0LnNwYWNpbmdYO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oaSAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKGxpc3RJZDogbnVtYmVyLCB0aW1lID0gMC4zKSB7XG4gICAgbGV0IGl0ZW0gPSB0aGlzLl9jb250ZW50LmNoaWxkcmVuW2xpc3RJZF07XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGl0ZW0g5ZyoIGNvbnRlbnQg5Lit55qE5pys5Zyw5Z2Q5qCHXG4gICAgY29uc3QgaXRlbVBvcyA9IGl0ZW0uZ2V0UG9zaXRpb24oKTtcblxuICAgIC8vIOWeguebtFxuICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LnZlcnRpY2FsKSB7XG4gICAgICAvLyBjb250ZW50IOW9k+WJjemUmueCue+8iOmAmuW4uOaYryAoMC41LCAxKe+8iVxuICAgICAgY29uc3QgY29udGVudEFuY2hvciA9IHRoaXMuX2NvbnRlbnQuYW5jaG9yWTtcbiAgICAgIGNvbnN0IHZpZXdBbmNob3IgPSB0aGlzLl92aWV3LmFuY2hvclk7XG5cbiAgICAgIC8vIGNvbnRlbnQg5ZKMIHZpZXcg55qE6auY5bqmXG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5fY29udGVudC5oZWlnaHQ7XG4gICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gdGhpcy5fdmlldy5oZWlnaHQ7XG5cbiAgICAgIC8qKiDlhbPplK7lhazlvI/vvIjnurXlkJHvvIlTY3JvbGxWaWV3IOeahCBvZmZzZXQueSDmmK/vvJogY29udGVudCDpobbpg6gg5YiwIHZpZXcg6aG26YOoIOeahOi3neemuyAqL1xuICAgICAgbGV0IG9mZnNldFkgPVxuICAgICAgICBjb250ZW50SGVpZ2h0ICogKDEgLSBjb250ZW50QW5jaG9yKSAtIC8vIGNvbnRlbnQg6aG26YOoXG4gICAgICAgIGl0ZW1Qb3MueSAtIC8vIGl0ZW0g5L2N572uXG4gICAgICAgIHZpZXdIZWlnaHQgKiAoMSAtIHZpZXdBbmNob3IpOyAvLyB2aWV3IOmhtumDqFxuXG4gICAgICAvLyDpmLLmraLmu5rliqjotoXnlYxcbiAgICAgIGNvbnN0IG1heE9mZnNldCA9IGNvbnRlbnRIZWlnaHQgLSB2aWV3SGVpZ2h0O1xuICAgICAgb2Zmc2V0WSA9IE1hdGgubWF4KDAsIE1hdGgubWluKG9mZnNldFksIG1heE9mZnNldCkpO1xuXG4gICAgICB0aGlzLl9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIG9mZnNldFkpLCB0aW1lKTtcbiAgICB9XG4gICAgLy8g5rC05bmzXG4gICAgZWxzZSBpZiAodGhpcy5fc2Nyb2xsVmlldy5ob3Jpem9udGFsKSB7XG4gICAgICBsZXQgb2Zmc2V0WCA9IGl0ZW1Qb3MueCAtIHRoaXMuX3ZpZXcud2lkdGggLyAyICsgdGhpcy5fY29udGVudC53aWR0aCAvIDI7XG5cbiAgICAgIGNvbnN0IG1heE9mZnNldCA9IHRoaXMuX2NvbnRlbnQud2lkdGggLSB0aGlzLl92aWV3LndpZHRoO1xuICAgICAgb2Zmc2V0WCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG9mZnNldFgsIG1heE9mZnNldCkpO1xuXG4gICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIob2Zmc2V0WCwgMCksIHRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaFN0YXJ0KCkge1xuICAgIGNjLmxvZyhcIm9uVG91Y2hTdGFydFwiKTtcblxuICAgIC8vIGlmICh0aGlzLnNjcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSkge1xuICAgIC8vICAgdGhpcy5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgb25TY3JvbGxpbmcoKSB7XG4gICAgLy8gdGhpcy51cGRhdGVMaXN0SXRlbXMoKTtcblxuICAgIC8vIGlmICghdGhpcy5zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2NvbnRlbnQucG9zaXRpb247XG4gICAgY29uc3QgZGVsdGFZID0gcG9zLnkgLSB0aGlzLl9sYXN0Q29udGVudFBvcy55O1xuXG4gICAgLy8gaWYgKE1hdGguYWJzKGRlbHRhWSkgPCB0aGlzLl9sYXlvdXQuc3BhY2luZ1kpIHJldHVybjtcblxuICAgIC8vIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgLy8gICB0aGlzLmhhbmRsZVNjcm9sbFVwKCk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuaGFuZGxlU2Nyb2xsRG93bigpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuX2xhc3RDb250ZW50UG9zID0gcG9zLmNsb25lKCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGxVcCgpIHtcbiAgICBjYy5sb2coXCJoYW5kbGVTY3JvbGxVcFwiKTtcblxuICAgIGNvbnN0IHRvdGFsSW5kZXggPSB0aGlzLl9udW1JdGVtcyAtIDE7XG4gICAgaWYgKHRoaXMuX2JvdHRvbUluZGV4ID09IHRvdGFsSW5kZXgpIHtcbiAgICAgIGNjLmxvZyhcIuaLieWIsOW6leS6hlwiKTtcbiAgICAgIGNjLmxvZyhcInRoaXMuX2NvbnRlbnQwIHBvc2l0aW9uOlwiICsgdGhpcy5fY29udGVudC5jaGlsZHJlblswXS5wb3NpdGlvbik7XG4gICAgICBjYy5sb2coXG4gICAgICAgIFwidGhpcy5fY29udGVudC5oZWlnaHQ6XCIgK1xuICAgICAgICB0aGlzLl9jb250ZW50LmhlaWdodCArXG4gICAgICAgIFwiLCB0aGlzLl9pc1RvdGFsSGVpZ2h0OlwiICtcbiAgICAgICAgdGhpcy5faXNUb3RhbEhlaWdodCxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g6aaW56uv55qEaXRlbVxuICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZmlyc3RJdGVtT3V0ID0gdGhpcy5pc091dFZpZXcoZmlyc3RJdGVtKTtcbiAgICBjYy5sb2coXCJmaXJzdEl0ZW1PdXQ6XCIgKyBmaXJzdEl0ZW1PdXQpO1xuICAgIGlmIChmaXJzdEl0ZW1PdXQpIHtcbiAgICAgIHRoaXMuX3Bvb2wucHV0KGZpcnN0SXRlbSk7XG4gICAgICB0aGlzLl90b3BJbmRleCsrO1xuICAgIH1cblxuICAgIC8vIOacq+err+eahGl0ZW1cbiAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5bdGhpcy5fY29udGVudC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBsYXN0Q29udGFpbnMgPSB0aGlzLmlzQ29udGFpbnNWaWV3KGxhc3RJdGVtKTtcbiAgICBjYy5sb2coXCJsYXN0Q29udGFpbnM6XCIgKyBsYXN0Q29udGFpbnMpO1xuICAgIGlmIChsYXN0Q29udGFpbnMpIHtcbiAgICAgIGlmICh0aGlzLl9ib3R0b21JbmRleCA8IHRvdGFsSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fYm90dG9tSW5kZXgrKztcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xuICAgICAgICBpZiAoIW5ld0l0ZW0pIHtcbiAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy50bXBOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250ZW50LmFkZENoaWxkKG5ld0l0ZW0pO1xuICAgICAgICBuZXdJdGVtLnpJbmRleCA9IHRoaXMuX2JvdHRvbUluZGV4O1xuICAgICAgICAvLyDov5nph4zpnIDopoHkv67mlLnpq5jluqYv5a695bqmXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XG4gICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFxuICAgICAgICAgICAgW3RoaXMucmVuZGVyRXZlbnRdLFxuICAgICAgICAgICAgbmV3SXRlbSxcbiAgICAgICAgICAgIHRoaXMuX2JvdHRvbUluZGV4LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2lzVG90YWxIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLl9jb250ZW50LmhlaWdodCArPSB0aGlzLl9sYXlvdXQuc3BhY2luZ1kgKyBuZXdJdGVtLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9tYXBJdGVtcy5oYXModGhpcy5fYm90dG9tSW5kZXgpKSB7XG4gICAgICAgICAgY29uc3QgbWFwUG9zID0gdGhpcy5fbWFwSXRlbXMuZ2V0KHRoaXMuX2JvdHRvbUluZGV4KTtcbiAgICAgICAgICBuZXdJdGVtLnNldFBvc2l0aW9uKG1hcFBvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SXRlbS55ID1cbiAgICAgICAgICAgIGxhc3RJdGVtLnkgLVxuICAgICAgICAgICAgbGFzdEl0ZW0uYW5jaG9yWSAqIGxhc3RJdGVtLmhlaWdodCAtXG4gICAgICAgICAgICB0aGlzLl9sYXlvdXQuc3BhY2luZ1kgLVxuICAgICAgICAgICAgKDEgLSBuZXdJdGVtLmFuY2hvclkpICogbmV3SXRlbS5oZWlnaHQ7XG4gICAgICAgICAgdGhpcy5fbWFwSXRlbXMuc2V0KHRoaXMuX2JvdHRvbUluZGV4LCBjYy52MihuZXdJdGVtLngsIG5ld0l0ZW0ueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvdHRvbUluZGV4ID09IHRvdGFsSW5kZXgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2lzVG90YWxIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzVG90YWxIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgKz0gdGhpcy5fbGF5b3V0LnBhZGRpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICAgIGNjLmxvZyhcbiAgICAgICAgICAgIFwidGhpcy5fY29udGVudC5oZWlnaHQ6XCIgK1xuICAgICAgICAgICAgdGhpcy5fY29udGVudC5oZWlnaHQgK1xuICAgICAgICAgICAgXCIsIHRoaXMuX2lzVG90YWxIZWlnaHQ6XCIgK1xuICAgICAgICAgICAgdGhpcy5faXNUb3RhbEhlaWdodCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNjLmxvZyhcInRoaXMuX3RvcEluZGV4OlwiICsgdGhpcy5fdG9wSW5kZXgpO1xuICAgIGNjLmxvZyhcbiAgICAgIFwidGhpcy5fYm90dG9tSW5kZXg6XCIgKyB0aGlzLl9ib3R0b21JbmRleCArIFwiLCB0b3RhbEluZGV4OlwiICsgdG90YWxJbmRleCxcbiAgICApO1xuICAgIGNjLmxvZyhcInRoaXMuX21hcEl0ZW1zOlwiLCB0aGlzLl9tYXBJdGVtcyk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGxEb3duKCkge1xuICAgIGNjLmxvZyhcImhhbmRsZVNjcm9sbERvd25cIik7XG5cbiAgICBpZiAodGhpcy5fdG9wSW5kZXggPT0gMCkge1xuICAgICAgY2MubG9nKFwi5ouJ5Yiw6aG25LqGXCIpO1xuICAgICAgY2MubG9nKFwidGhpcy5fY29udGVudDAgcG9zaXRpb246XCIgKyB0aGlzLl9jb250ZW50LmNoaWxkcmVuWzBdLnBvc2l0aW9uKTtcbiAgICAgIGNjLmxvZyhcbiAgICAgICAgXCJ0aGlzLl9jb250ZW50LmhlaWdodDpcIiArXG4gICAgICAgIHRoaXMuX2NvbnRlbnQuaGVpZ2h0ICtcbiAgICAgICAgXCIsIHRoaXMuX2lzVG90YWxIZWlnaHQ6XCIgK1xuICAgICAgICB0aGlzLl9pc1RvdGFsSGVpZ2h0LFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDpppbnq6/nmoRpdGVtXG4gICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5fY29udGVudC5jaGlsZHJlblswXTtcbiAgICBjb25zdCBmaXJzdENvbnRhaW5zID0gdGhpcy5pc0NvbnRhaW5zVmlldyhmaXJzdEl0ZW0pO1xuICAgIGNjLmxvZyhcImZpcnN0Q29udGFpbnM6XCIgKyBmaXJzdENvbnRhaW5zKTtcbiAgICBpZiAoZmlyc3RDb250YWlucykge1xuICAgICAgdGhpcy5fdG9wSW5kZXgtLTtcbiAgICAgIGxldCBuZXdJdGVtID0gdGhpcy5fcG9vbC5nZXQoKTtcbiAgICAgIGlmICghbmV3SXRlbSkge1xuICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy50bXBOb2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRlbnQuYWRkQ2hpbGQobmV3SXRlbSk7XG4gICAgICBuZXdJdGVtLnpJbmRleCA9IHRoaXMuX3RvcEluZGV4O1xuICAgICAgLy8g6L+Z6YeM6ZyA6KaB5L+u5pS56auY5bqmL+WuveW6plxuICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFxuICAgICAgICAgIFt0aGlzLnJlbmRlckV2ZW50XSxcbiAgICAgICAgICBuZXdJdGVtLFxuICAgICAgICAgIHRoaXMuX3RvcEluZGV4LFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgbWFwUG9zID0gdGhpcy5fbWFwSXRlbXMuZ2V0KHRoaXMuX3RvcEluZGV4KTtcbiAgICAgIGNjLmxvZyhcIm1hcFBvczpcIiArIG1hcFBvcyk7XG4gICAgICBuZXdJdGVtLnNldFBvc2l0aW9uKG1hcFBvcyk7XG4gICAgICAvLyBuZXdJdGVtLnkgPSBmaXJzdEl0ZW0ueSArICgxIC0gZmlyc3RJdGVtLmFuY2hvclkpICogZmlyc3RJdGVtLmhlaWdodCArIHRoaXMuX2xheW91dC5zcGFjaW5nWSArIG5ld0l0ZW0uYW5jaG9yWSAqIG5ld0l0ZW0uaGVpZ2h0O1xuXG4gICAgICBjYy5sb2coXCJuZXdJdGVtLnk6XCIgKyBuZXdJdGVtLnkpO1xuICAgIH1cblxuICAgIC8vIOacq+err+eahGl0ZW1cbiAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5bdGhpcy5fY29udGVudC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBsYXN0SXRlbU91dCA9IHRoaXMuaXNPdXRWaWV3KGxhc3RJdGVtKTtcbiAgICBjYy5sb2coXCJsYXN0SXRlbU91dDpcIiArIGxhc3RJdGVtT3V0KTtcbiAgICBpZiAobGFzdEl0ZW1PdXQpIHtcbiAgICAgIHRoaXMuX3Bvb2wucHV0KGxhc3RJdGVtKTtcbiAgICAgIHRoaXMuX2JvdHRvbUluZGV4LS07XG4gICAgfVxuXG4gICAgY2MubG9nKFwidGhpcy5fdG9wSW5kZXg6XCIgKyB0aGlzLl90b3BJbmRleCk7XG4gICAgY2MubG9nKFwidGhpcy5fYm90dG9tSW5kZXg6XCIgKyB0aGlzLl9ib3R0b21JbmRleCk7XG5cbiAgICAvLyDpppbnq6/nmoRpdGVtXG4gICAgLy8gY29uc3QgY3VySXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5bMF07XG4gICAgLy8gY29uc3QgZGVsdGFUb3BZID0gdGhpcy5nZXRTY3JvbGxEb3duVG9wWSgwKTtcbiAgICAvLyBjYy5sb2coXCJkZWx0YVRvcFk6XCIgKyBkZWx0YVRvcFkpO1xuICAgIC8vIGlmIChkZWx0YVRvcFkgPiAwKSB7XG4gICAgLy8gICBpZiAoIXRoaXMuX2NoZWNrVG9wKSB7XG4gICAgLy8gICAgIHRoaXMuX2NoZWNrVG9wID0gdHJ1ZTtcbiAgICAvLyAgICAgbGV0IG5ld0l0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xuICAgIC8vICAgICBpZiAoIW5ld0l0ZW0pIHtcbiAgICAvLyAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy50bXBOb2RlKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuX2NvbnRlbnQuYWRkQ2hpbGQobmV3SXRlbSk7XG4gICAgLy8gICAgIG5ld0l0ZW0uekluZGV4ID0gMDtcbiAgICAvLyAgICAgLy8g6L+Z6YeM6ZyA6KaB5L+u5pS56auY5bqmL+WuveW6plxuICAgIC8vICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xuICAgIC8vICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIG5ld0l0ZW0sIDApO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIG5ld0l0ZW0ueSA9IGN1ckl0ZW0ueSArICgxIC0gY3VySXRlbS5hbmNob3JZKSAqIGN1ckl0ZW0uaGVpZ2h0ICsgdGhpcy5fbGF5b3V0LnNwYWNpbmdZICsgbmV3SXRlbS5hbmNob3JZICogbmV3SXRlbS5oZWlnaHRcbiAgICAvLyAgICAgdGhpcy5fY2hlY2tUb3AgPSBmYWxzZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyDmnKvnq6/nmoRpdGVtXG4gICAgLy8gY29uc3QgZGVsdGFCb3R0b21ZID0gdGhpcy5nZXRTY3JvbGxEb3duQm90dG9tWSh0aGlzLl9jb250ZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgIC8vIGNjLmxvZyhcImRlbHRhQm90dG9tWTpcIiArIGRlbHRhQm90dG9tWSk7XG4gICAgLy8gaWYgKGRlbHRhQm90dG9tWSA8IDApIHtcbiAgICAvLyAgIGNvbnN0IGJvdHRvbUl0ZW0gPSB0aGlzLl9jb250ZW50LmNoaWxkcmVuW3RoaXMuX2NvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgLy8gICB0aGlzLl9wb29sLnB1dChib3R0b21JdGVtKTtcblxuICAgIC8vICAgLy8gdGhpcy5fY29udGVudC5oZWlnaHQgLT0gYm90dG9tSXRlbS5oZWlnaHQgKyB0aGlzLl9sYXlvdXQuc3BhY2luZ1k7XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0U2Nyb2xsVXBUb3BZKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5fY29udGVudC5jaGlsZHJlbltpbmRleF07XG4gICAgY29uc3QgaXRlbVkgPSBpdGVtLnkgLSBpdGVtLmFuY2hvclkgKiBpdGVtLmhlaWdodDtcbiAgICBjb25zdCBsb2NhbEl0ZW1ZID0gaXRlbVkgKyB0aGlzLl9jb250ZW50Lnk7XG4gICAgY29uc3QgdG9wWSA9IDA7XG4gICAgY29uc3QgZGVsdGFUb3BZID0gdG9wWSAtIGxvY2FsSXRlbVk7XG4gICAgcmV0dXJuIGRlbHRhVG9wWTtcbiAgfVxuXG4gIGdldFNjcm9sbFVwQm90dG9tWShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgIGNvbnN0IGl0ZW1ZID0gaXRlbS55IC0gaXRlbS5hbmNob3JZICogaXRlbS5oZWlnaHQ7XG4gICAgY29uc3QgbG9jYWxJdGVtWSA9IGl0ZW1ZICsgdGhpcy5fY29udGVudC55O1xuICAgIGNvbnN0IGJvdHRvbVkgPSAtdGhpcy5ub2RlLmFuY2hvclkgKiB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgIGNvbnN0IGRlbHRhQm90dG9tWSA9IGxvY2FsSXRlbVkgLSBib3R0b21ZO1xuICAgIHJldHVybiBkZWx0YUJvdHRvbVk7XG4gIH1cblxuICBnZXRTY3JvbGxEb3duVG9wWShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgIGNvbnN0IGl0ZW1ZID0gaXRlbS55ICsgKDEgLSBpdGVtLmFuY2hvclkpICogaXRlbS5oZWlnaHQ7XG4gICAgY29uc3QgbG9jYWxJdGVtWSA9IGl0ZW1ZICsgdGhpcy5fY29udGVudC55O1xuICAgIGNvbnN0IHRvcFkgPSAwO1xuICAgIGNvbnN0IGRlbHRhVG9wWSA9IHRvcFkgLSBsb2NhbEl0ZW1ZO1xuICAgIHJldHVybiBkZWx0YVRvcFk7XG4gIH1cblxuICBnZXRTY3JvbGxEb3duQm90dG9tWShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuX2NvbnRlbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgIGNvbnN0IGl0ZW1ZID0gaXRlbS55ICsgKDEgLSBpdGVtLmFuY2hvclkpICogaXRlbS5oZWlnaHQ7XG4gICAgY29uc3QgbG9jYWxJdGVtWSA9IGl0ZW1ZICsgdGhpcy5fY29udGVudC55O1xuICAgIGNvbnN0IGJvdHRvbVkgPSAtdGhpcy5ub2RlLmFuY2hvclkgKiB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgIGNvbnN0IGRlbHRhQm90dG9tWSA9IGxvY2FsSXRlbVkgLSBib3R0b21ZO1xuICAgIHJldHVybiBkZWx0YUJvdHRvbVk7XG4gIH1cblxuICAvKiog5YiG5bin562J5b6FICovXG4gIHByaXZhdGUgd2FpdEZyYW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2MuZGlyZWN0b3Iub25jZShjYy5EaXJlY3Rvci5FVkVOVF9BRlRFUl9VUERBVEUsIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOiOt+WPluiKgueCueeahOS4lueVjOefqeW9oiAqL1xuICBwcml2YXRlIGdldFdvcmxkUmVjdChub2RlOiBjYy5Ob2RlKTogY2MuUmVjdCB7XG4gICAgY29uc3Qgd29ybGRQb3MgPSBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuXG4gICAgY29uc3QgeE1pbiA9IHdvcmxkUG9zLnggLSBub2RlLmFuY2hvclggKiBub2RlLndpZHRoO1xuICAgIGNvbnN0IHlNaW4gPSB3b3JsZFBvcy55IC0gbm9kZS5hbmNob3JZICogbm9kZS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gbmV3IGNjLlJlY3QoeE1pbiwgeU1pbiwgbm9kZS53aWR0aCwgbm9kZS5oZWlnaHQpO1xuICB9XG5cbiAgLyoqIOS4lueVjCBSZWN0IOKGkiDmnKzlnLAgUmVjdCAqL1xuICBwcml2YXRlIGRyYXdXb3JsZFJlY3Qod29ybGRSZWN0OiBjYy5SZWN0KSB7XG4gICAgaWYgKCF0aGlzLmdyYXBoaWNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgZy5jbGVhcigpO1xuXG4gICAgLy8g5LiW55WMIFJlY3Qg5Zub5Liq6KeSXG4gICAgY29uc3QgbGIgPSBjYy52Mih3b3JsZFJlY3QueE1pbiwgd29ybGRSZWN0LnlNaW4pOyAvLyDlt6bkuItcbiAgICBjb25zdCBydCA9IGNjLnYyKHdvcmxkUmVjdC54TWF4LCB3b3JsZFJlY3QueU1heCk7IC8vIOWPs+S4ilxuXG4gICAgLy8g6L2s5o2i5YiwIEdyYXBoaWNzIOiKgueCueeahOacrOWcsOWdkOagh1xuICAgIGNvbnN0IGxvY2FsTEIgPSB0aGlzLmdyYXBoaWNzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobGIpO1xuICAgIGNvbnN0IGxvY2FsUlQgPSB0aGlzLmdyYXBoaWNzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocnQpO1xuXG4gICAgY29uc3Qgd2lkdGggPSBsb2NhbFJULnggLSBsb2NhbExCLng7XG4gICAgY29uc3QgaGVpZ2h0ID0gbG9jYWxSVC55IC0gbG9jYWxMQi55O1xuXG4gICAgZy5yZWN0KGxvY2FsTEIueCwgbG9jYWxMQi55LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBnLnN0cm9rZSgpO1xuICB9XG5cbiAgLyoqIOWIpOaWreWFg+e0oOaYr+WQpuWujOWFqOi2heWHuuinhuWPoyAqL1xuICBwcml2YXRlIGlzT3V0VmlldyhpdGVtOiBjYy5Ob2RlKSB7XG4gICAgY29uc3QgaXRlbVJlY3QgPSB0aGlzLmdldFdvcmxkUmVjdChpdGVtKTtcblxuICAgIC8vIOKtkCDlrozlhajotoXlh7rop4blj6PliKTmlq1cbiAgICBjb25zdCBpc0NvbXBsZXRlbHlPdXQgPVxuICAgICAgaXRlbVJlY3QueE1heCA8IHRoaXMuX3ZpZXdSZWN0LnhNaW4gfHxcbiAgICAgIGl0ZW1SZWN0LnhNaW4gPiB0aGlzLl92aWV3UmVjdC54TWF4IHx8XG4gICAgICBpdGVtUmVjdC55TWF4IDwgdGhpcy5fdmlld1JlY3QueU1pbiB8fFxuICAgICAgaXRlbVJlY3QueU1pbiA+IHRoaXMuX3ZpZXdSZWN0LnlNYXg7XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZWx5T3V0O1xuICB9XG5cbiAgLyoqIOWIpOaWreWFg+e0oOaYr+WQpuS4juinhuWPo+ebuOS6pCAqL1xuICBwcml2YXRlIGlzSW50ZXJzZWN0VmlldyhpdGVtOiBjYy5Ob2RlKSB7XG4gICAgY29uc3QgaXRlbVJlY3QgPSB0aGlzLmdldFdvcmxkUmVjdChpdGVtKTtcbiAgICByZXR1cm4gaXRlbVJlY3QuaW50ZXJzZWN0cyh0aGlzLl92aWV3UmVjdCk7XG4gIH1cblxuICAvKiog5Yik5pat5YWD57Sg5piv5ZCm5a6M5YWo5YyF5ZCr5Zyo6KeG5Y+j5YaFICovXG4gIHByaXZhdGUgaXNDb250YWluc1ZpZXcoaXRlbTogY2MuTm9kZSkge1xuICAgIGNvbnN0IGl0ZW1SZWN0ID0gdGhpcy5nZXRXb3JsZFJlY3QoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdSZWN0LmNvbnRhaW5zUmVjdChpdGVtUmVjdCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ScrollItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd72d19ZM7pKl5r21KofC2Q1', 'ScrollItem');
// ScrollItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollItem = /** @class */ (function (_super) {
    __extends(ScrollItem, _super);
    function ScrollItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollItem = __decorate([
        ccclass
    ], ScrollItem);
    return ScrollItem;
}(cc.Component));
exports.default = ScrollItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JvbGxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQVdBLENBQUM7SUFYb0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVc5QjtJQUFELGlCQUFDO0NBWEQsQUFXQyxDQVh1QyxFQUFFLENBQUMsU0FBUyxHQVduRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgLyoqIOW6j+WIl2lkICovXG4gIGxpc3RJZDogbnVtYmVyO1xuICAvKiog5L2N572uICovXG4gIHBvczogY2MuVmVjMjtcbiAgLyoqIOmUmueCuSAqL1xuICBhbmNob3I6IGNjLlZlYzI7XG4gIC8qKiDlrr3luqYgKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIOmrmOW6piAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
