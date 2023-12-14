import { INavLayout } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements INavLayout {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const NavLayoutProps = () => new Store();
