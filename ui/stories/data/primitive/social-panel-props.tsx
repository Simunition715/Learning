import { ISocialPanel } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements ISocialPanel {
  @observable className?: string = void 0;
  @observable icon?: React.ReactNode = void 0;
  @observable name?: string = void 0;
  @observable refresh?: string = void 0;
  @observable share?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const SocialPanelProps = () => new Store();
