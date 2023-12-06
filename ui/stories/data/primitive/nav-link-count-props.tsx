import { INavLinkCount } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements INavLinkCount {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const NavLinkCountProps = () => new Store();
