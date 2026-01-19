"use strict";
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