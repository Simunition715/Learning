import { CSSProperties, HTMLProps } from "react";
import { IListView } from "../../../components/primitive/list-view/list.view";
import { makeObservable, observable } from "mobx";

class Store implements IListView {
  @observable className?: string = void 0;
  @observable allowTouchInertia?: boolean | undefined = void 0;
  @observable rowSize:
    | number
    | ((index: number, isEnd: boolean) => number) = 80;
  @observable rowUpdate?: any = void 0;
  @observable rowGap?: number | undefined = void 0;
  @observable containerProps?: HTMLProps<HTMLDivElement> | undefined = void 0;
  @observable emptyLabel?: string | undefined = void 0;
  @observable style?: CSSProperties | undefined = void 0;
  @observable total = 50;
  @observable scrollToOnce?: number | undefined = void 0;
  @observable autoScrollDuration?: number | undefined = void 0;
  @observable rowDisplayCount?: number | undefined = void 0;
  @observable useScrollRegion?: boolean | undefined = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ListViewProps = () => new Store();
