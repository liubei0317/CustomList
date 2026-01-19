const { ccclass, property } = cc._decorator;

@ccclass
export default class ScrollItem extends cc.Component {
  /** 序列id */
  listId: number;
  /** 位置 */
  pos: cc.Vec2;
  /** 锚点 */
  anchor: cc.Vec2;
  /** 宽度 */
  width: number;
  /** 高度 */
  height: number;
}
