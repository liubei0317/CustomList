import ScrollItem from "./ScrollItem";

const { ccclass, property, menu, requireComponent } = cc._decorator;

@ccclass
@menu("自定义组件/ScrollList")
@requireComponent(cc.ScrollView)
export default class ScrollList extends cc.Component {
  private _scrollView: cc.ScrollView;
  get scrollView() {
    return this._scrollView;
  }

  // 模板Item（Node）
  @property({
    type: cc.Node,
    tooltip: CC_DEV && "模板Item",
  })
  tmpNode: cc.Node = null;

  // 渲染事件（渲染器）
  @property({
    type: cc.Component.EventHandler,
    tooltip: CC_DEV && "渲染事件（渲染器）",
  })
  private renderEvent: cc.Component.EventHandler =
    new cc.Component.EventHandler();

  @property({
    tooltip: CC_DEV && "是否启用 Graphics",
  })
  isGraphics: boolean = false;

  @property({
    type: cc.Graphics,
    tooltip: CC_DEV && "Graphics渲染，在list子节点下",
    visible() {
      return this.isGraphics;
    },
  })
  graphics: cc.Graphics = null;

  private _numItems: number = 0;
  set numItems(value: number) {
    if (value == null || value < 0) {
      cc.warn("numItems must be greater than or equal to 0");
      return;
    }

    this._scrollView.stopAutoScroll();

    this.recycleItems();

    // this._numItems = value;
    if (this._layout.type == cc.Layout.Type.VERTICAL) {
      this.setContentV(value);
    } else if (this._layout.type == cc.Layout.Type.HORIZONTAL) {
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
  }

  private _view: cc.Node = null;
  private _content: cc.Node = null;
  private _layout: cc.Layout = null;

  // 视口矩形（单位：像素）
  private _viewRect: cc.Rect = null;

  private _pool: cc.NodePool = new cc.NodePool();
  private _lastContentPos: cc.Vec3 = cc.Vec3.ZERO;
  private _scrollDir: number = 0;
  private _checkBottom: boolean = false;
  private _checkTop: boolean = false;
  private _topIndex: number = 0;
  private _bottomIndex: number = 0;
  private _isTotalHeight: boolean = false;
  private _itemsPos: cc.Vec2[] = [];

  protected onLoad(): void {
    this._registerEvent();
    this.init();
  }

  protected onDestroy(): void {
    this._unregisterEvent();
  }

  /** 注册事件 */
  private _registerEvent() {
    this.node.on("touchstart", this.onTouchStart, this);
    this.node.on("scrolling", this.onScrolling, this);
  }

  /** 卸载事件 */
  private _unregisterEvent() {
    this.node.off("touchstart", this.onTouchStart, this);
    this.node.off("scrolling", this.onScrolling, this);
  }

  /** 初始化列表 */
  private init() {
    this._scrollView = this.node.getComponent(cc.ScrollView);
    this._view = this._scrollView.node;
    this._content = this._scrollView.content;
    this._layout = this._content.getComponent(cc.Layout);
    this._content.removeAllChildren();
    this._content.height = this._layout.paddingTop;
    this._layout.enabled = false;

    // 这里要刷新适配，不然rect会错位
    let widget = this.node.getComponent(cc.Widget);
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
  }

  /** 回收所有元素 */
  private recycleItems() {
    for (let i = this._content.children.length - 1; i >= 0; i--) {
      let item = this._content.children[i];
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
  }

  private setContentV(value: number) {
    cc.log("setContentV:", value);
    this._content.y = 0;

    this._itemsPos = [];
    this._content.height = this._layout.paddingTop;
    for (let i = 0; i < value; i++) {
      let setPos = (i, size) => {
        if (i == 0) {
          const itemY = -this._content.height + this.tmpNode.anchorY * size.height;
          const itemX = 0;
          this._itemsPos.push(cc.v2(itemX, itemY));
        } else if (i == value - 1) {
          const itemY = -this._content.height + this._layout.paddingBottom + this.tmpNode.anchorY * size.height;
          const itemX = 0;
          this._itemsPos.push(cc.v2(itemX, itemY));
        } else {
          const itemY = -this._content.height + this.tmpNode.anchorY * size.height;
          const itemX = 0;
          this._itemsPos.push(cc.v2(itemX, itemY));
        }
      };

      let isCallback = false;
      // 这里需要修改高度/宽度
      if (this.renderEvent) {
        cc.Component.EventHandler.emitEvents(
          [this.renderEvent],
          null,
          i,
          (size: cc.Size) => {
            cc.log("isCallback = true;");
            isCallback = true;
            if (i == 0) {
              this._content.height += size.height;
            } else if (i == value - 1) {
              this._content.height += this._layout.spacingY + size.height + this._layout.paddingBottom;
            } else {
              this._content.height += this._layout.spacingY + size.height;
            }
            setPos(i, size);
          },
        );
      }
      if (!isCallback) {
        cc.log("!isCallback");
        const size = cc.size(this.tmpNode.width, this.tmpNode.height);
        if (i == 0) {
          this._content.height += size.height;
        } else if (i == value - 1) {
          this._content.height += this._layout.spacingY + size.height + this._layout.paddingBottom;
        } else {
          this._content.height += this._layout.spacingY + size.height;
        }
        setPos(i, size);
      }
    }
    cc.log("this._content.height:", this._content.height);
    cc.log("this._itemsPos:" + this._itemsPos);
  }

  /** 设置元素数量 */
  private setNumItems(value: number) {
    this._numItems = value;

    this._mapItems.clear();
    let tempArray = [];
    for (let i = 0; i < this._numItems; i++) {
      let item = null;

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
      } else {
        this._content.height += this._layout.spacingY + item.height;
        if (i == this._numItems - 1) {
          this._content.height += this._layout.paddingBottom;
        }
      }
      item.y -= this._content.height - item.anchorY * item.height;

      let out = this.isContainsView(item);
      cc.log("===out:" + out + ", name:" + i);
      if (!out) {
        tempArray.push(item);
        if (i == 0) {
          this._content.height -= item.height;
        } else {
          this._content.height -= this._layout.spacingY + item.height;
          if (i == this._numItems - 1) {
            this._content.height -= this._layout.paddingBottom;
          }
        }
      } else {
        this._mapItems.set(i, cc.v2(item.x, item.y));
      }

      cc.log("tempArray length:" + tempArray.length);
      if (tempArray.length == 2) {
        break;
      }
    }

    for (let i = 0; i < tempArray.length; i++) {
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
  }

  /** 创建元素 */
  private async createItem(listId: number, complete?: Function) {
    let item = this._content.children[listId];
    if (!item) {
      item = cc.instantiate(this.tmpNode);
      // 这里需要修改高度/宽度
      if (this.renderEvent) {
        item.getComponent(ScrollItem).listId = listId;
        cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
      }
      this._content.addChild(item);
      await this.waitFrame();
    }

    complete && complete();
  }

  /** 更新所有元素 */
  private updateListItems() {
    for (let i = 0; i < this._content.children.length; i++) {
      this.updateItem(this._content.children[i], i);
    }
  }

  /** 更新元素 */
  private updateItem(item: cc.Node, listId: number) {
    item.getComponent(ScrollItem).listId = listId;
    const itemRect = this.getWorldRect(item);

    // ⭐ 完全超出视口判断
    const isCompletelyOut =
      itemRect.xMax < this._viewRect.xMin ||
      itemRect.xMin > this._viewRect.xMax ||
      itemRect.yMax < this._viewRect.yMin ||
      itemRect.yMin > this._viewRect.yMax;

    // 只有完全不在视口内才隐藏
    item.active = !isCompletelyOut;
  }

  /** 删除元素 */
  deleteItem(listId: number) {
    for (let i = this._content.children.length - 1; i >= 0; i--) {
      let item = this._content.children[i];
      let itemHeight = item.height;
      let itemWidth = item.width;

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
        } else if (this._scrollView.horizontal) {
          this._content.width -=
            itemWidth + this._layout.paddingRight + this._layout.spacingX;
        }
        this.scrollTo(i - 1);
      }
    }
  }

  scrollTo(listId: number, time = 0.3) {
    let item = this._content.children[listId];
    if (!item) {
      return;
    }
    // item 在 content 中的本地坐标
    const itemPos = item.getPosition();

    // 垂直
    if (this._scrollView.vertical) {
      // content 当前锚点（通常是 (0.5, 1)）
      const contentAnchor = this._content.anchorY;
      const viewAnchor = this._view.anchorY;

      // content 和 view 的高度
      const contentHeight = this._content.height;
      const viewHeight = this._view.height;

      /** 关键公式（纵向）ScrollView 的 offset.y 是： content 顶部 到 view 顶部 的距离 */
      let offsetY =
        contentHeight * (1 - contentAnchor) - // content 顶部
        itemPos.y - // item 位置
        viewHeight * (1 - viewAnchor); // view 顶部

      // 防止滚动超界
      const maxOffset = contentHeight - viewHeight;
      offsetY = Math.max(0, Math.min(offsetY, maxOffset));

      this._scrollView.scrollToOffset(cc.v2(0, offsetY), time);
    }
    // 水平
    else if (this._scrollView.horizontal) {
      let offsetX = itemPos.x - this._view.width / 2 + this._content.width / 2;

      const maxOffset = this._content.width - this._view.width;
      offsetX = Math.max(0, Math.min(offsetX, maxOffset));

      this.scrollView.scrollToOffset(cc.v2(offsetX, 0), time);
    }
  }

  private onTouchStart() {
    cc.log("onTouchStart");

    // if (this.scrollView.isScrolling()) {
    //   this._scrollView.stopAutoScroll();
    // }
  }

  private onScrolling() {
    // this.updateListItems();

    // if (!this.scrollView.isScrolling()) return;

    const pos = this._content.position;
    const deltaY = pos.y - this._lastContentPos.y;

    // if (Math.abs(deltaY) < this._layout.spacingY) return;

    // if (deltaY > 0) {
    //   this.handleScrollUp();
    // } else {
    //   this.handleScrollDown();
    // }

    this._lastContentPos = pos.clone();
  }

  handleScrollUp() {
    cc.log("handleScrollUp");

    const totalIndex = this._numItems - 1;
    if (this._bottomIndex == totalIndex) {
      cc.log("拉到底了");
      cc.log("this._content0 position:" + this._content.children[0].position);
      cc.log(
        "this._content.height:" +
        this._content.height +
        ", this._isTotalHeight:" +
        this._isTotalHeight,
      );
      return;
    }

    // 首端的item
    const firstItem = this._content.children[0];
    const firstItemOut = this.isOutView(firstItem);
    cc.log("firstItemOut:" + firstItemOut);
    if (firstItemOut) {
      this._pool.put(firstItem);
      this._topIndex++;
    }

    // 末端的item
    const lastItem = this._content.children[this._content.children.length - 1];
    const lastContains = this.isContainsView(lastItem);
    cc.log("lastContains:" + lastContains);
    if (lastContains) {
      if (this._bottomIndex < totalIndex) {
        this._bottomIndex++;
        let newItem = this._pool.get();
        if (!newItem) {
          newItem = cc.instantiate(this.tmpNode);
        }
        this._content.addChild(newItem);
        newItem.zIndex = this._bottomIndex;
        // 这里需要修改高度/宽度
        if (this.renderEvent) {
          cc.Component.EventHandler.emitEvents(
            [this.renderEvent],
            newItem,
            this._bottomIndex,
          );
        }

        if (!this._isTotalHeight) {
          this._content.height += this._layout.spacingY + newItem.height;
        }

        if (this._mapItems.has(this._bottomIndex)) {
          const mapPos = this._mapItems.get(this._bottomIndex);
          newItem.setPosition(mapPos);
        } else {
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
          cc.log(
            "this._content.height:" +
            this._content.height +
            ", this._isTotalHeight:" +
            this._isTotalHeight,
          );
        }
      }
    }
    cc.log("this._topIndex:" + this._topIndex);
    cc.log(
      "this._bottomIndex:" + this._bottomIndex + ", totalIndex:" + totalIndex,
    );
    cc.log("this._mapItems:", this._mapItems);
  }

  handleScrollDown() {
    cc.log("handleScrollDown");

    if (this._topIndex == 0) {
      cc.log("拉到顶了");
      cc.log("this._content0 position:" + this._content.children[0].position);
      cc.log(
        "this._content.height:" +
        this._content.height +
        ", this._isTotalHeight:" +
        this._isTotalHeight,
      );
      return;
    }

    // 首端的item
    const firstItem = this._content.children[0];
    const firstContains = this.isContainsView(firstItem);
    cc.log("firstContains:" + firstContains);
    if (firstContains) {
      this._topIndex--;
      let newItem = this._pool.get();
      if (!newItem) {
        newItem = cc.instantiate(this.tmpNode);
      }
      this._content.addChild(newItem);
      newItem.zIndex = this._topIndex;
      // 这里需要修改高度/宽度
      if (this.renderEvent) {
        cc.Component.EventHandler.emitEvents(
          [this.renderEvent],
          newItem,
          this._topIndex,
        );
      }
      const mapPos = this._mapItems.get(this._topIndex);
      cc.log("mapPos:" + mapPos);
      newItem.setPosition(mapPos);
      // newItem.y = firstItem.y + (1 - firstItem.anchorY) * firstItem.height + this._layout.spacingY + newItem.anchorY * newItem.height;

      cc.log("newItem.y:" + newItem.y);
    }

    // 末端的item
    const lastItem = this._content.children[this._content.children.length - 1];
    const lastItemOut = this.isOutView(lastItem);
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
  }

  getScrollUpTopY(index: number) {
    const item = this._content.children[index];
    const itemY = item.y - item.anchorY * item.height;
    const localItemY = itemY + this._content.y;
    const topY = 0;
    const deltaTopY = topY - localItemY;
    return deltaTopY;
  }

  getScrollUpBottomY(index: number) {
    const item = this._content.children[index];
    const itemY = item.y - item.anchorY * item.height;
    const localItemY = itemY + this._content.y;
    const bottomY = -this.node.anchorY * this.node.height;
    const deltaBottomY = localItemY - bottomY;
    return deltaBottomY;
  }

  getScrollDownTopY(index: number) {
    const item = this._content.children[index];
    const itemY = item.y + (1 - item.anchorY) * item.height;
    const localItemY = itemY + this._content.y;
    const topY = 0;
    const deltaTopY = topY - localItemY;
    return deltaTopY;
  }

  getScrollDownBottomY(index: number) {
    const item = this._content.children[index];
    const itemY = item.y + (1 - item.anchorY) * item.height;
    const localItemY = itemY + this._content.y;
    const bottomY = -this.node.anchorY * this.node.height;
    const deltaBottomY = localItemY - bottomY;
    return deltaBottomY;
  }

  /** 分帧等待 */
  private waitFrame(): Promise<void> {
    return new Promise((resolve) => {
      cc.director.once(cc.Director.EVENT_AFTER_UPDATE, resolve);
    });
  }

  /** 获取节点的世界矩形 */
  private getWorldRect(node: cc.Node): cc.Rect {
    const worldPos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);

    const xMin = worldPos.x - node.anchorX * node.width;
    const yMin = worldPos.y - node.anchorY * node.height;

    return new cc.Rect(xMin, yMin, node.width, node.height);
  }

  /** 世界 Rect → 本地 Rect */
  private drawWorldRect(worldRect: cc.Rect) {
    if (!this.graphics) {
      return;
    }
    const g = this.graphics.getComponent(cc.Graphics);
    g.clear();

    // 世界 Rect 四个角
    const lb = cc.v2(worldRect.xMin, worldRect.yMin); // 左下
    const rt = cc.v2(worldRect.xMax, worldRect.yMax); // 右上

    // 转换到 Graphics 节点的本地坐标
    const localLB = this.graphics.node.convertToNodeSpaceAR(lb);
    const localRT = this.graphics.node.convertToNodeSpaceAR(rt);

    const width = localRT.x - localLB.x;
    const height = localRT.y - localLB.y;

    g.rect(localLB.x, localLB.y, width, height);
    g.stroke();
  }

  /** 判断元素是否完全超出视口 */
  private isOutView(item: cc.Node) {
    const itemRect = this.getWorldRect(item);

    // ⭐ 完全超出视口判断
    const isCompletelyOut =
      itemRect.xMax < this._viewRect.xMin ||
      itemRect.xMin > this._viewRect.xMax ||
      itemRect.yMax < this._viewRect.yMin ||
      itemRect.yMin > this._viewRect.yMax;

    return isCompletelyOut;
  }

  /** 判断元素是否与视口相交 */
  private isIntersectView(item: cc.Node) {
    const itemRect = this.getWorldRect(item);
    return itemRect.intersects(this._viewRect);
  }

  /** 判断元素是否完全包含在视口内 */
  private isContainsView(item: cc.Node) {
    const itemRect = this.getWorldRect(item);
    return this._viewRect.containsRect(itemRect);
  }
}
