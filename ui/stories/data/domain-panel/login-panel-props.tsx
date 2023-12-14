import { ILoginPanel } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements ILoginPanel {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const LoginPanelProps = () => new Store();
