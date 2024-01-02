import { ISideNavBar } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements ISideNavBar {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const SideNavBarProps = () => new Store();
