import { INavBar } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements INavBar {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const NavBarProps = () => new Store();
