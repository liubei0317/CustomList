import ItemCell from "./ItemCell";
import ScrollList from "./ScrollList";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
  @property(ScrollList)
  list: ScrollList = null;

  onLoad() { }

  start() {
    this.list.numItems = 20;
    // this.list2.numItems = 10;
  }

  onRenderList(item: cc.Node, listId: number, callback?: Function) {
    if (callback) {
      let bb = listId % 2 == 0 ? true : false;
      let aa = bb ? 100 : 50;
      let size = cc.size(this.list.tmpNode.width, 100);
      return callback?.(size);
    }

    item?.getComponent(ItemCell).setContent(this.list, listId);
  }

  btnCallback(event, customEventData) {
    switch (customEventData) {
      case "btnNum5":
        this.list.numItems = 5;
        break;
      default:
        break;
    }
  }
}
