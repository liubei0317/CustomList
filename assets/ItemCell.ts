import ScrollItem from "./ScrollItem";
import ScrollList from "./ScrollList";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemCell extends ScrollItem {
  @property(cc.Node)
  bg1: cc.Node = null;
  @property(cc.Node)
  bg2: cc.Node = null;
  @property(cc.Label)
  itemLabel: cc.Label = null;

  private _curList: ScrollList = null;

  setContent(curList: ScrollList, listId: number) {
    // cc.log("ListItem setContent", this.listId);

    this._curList = curList;
    this.listId = listId;

    this.itemLabel.string = `列表项:${this.listId}`;

    let bb = this.listId % 2 == 0 ? true : false;

    this.bg1.active = bb;
    this.bg2.active = !bb;

    this.node.height = bb ? 100 : 50;
  }

  doDelete() {
    cc.log("ListItem doDelete:", this.listId);
    this._curList.deleteItem(this.listId);
  }

  doHeight() {
    cc.log("ListItem doHeight");
  }

  btnCallback(event, customEventData) {
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
  }
}
