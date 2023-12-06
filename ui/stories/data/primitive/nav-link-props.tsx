import { INavLink } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements INavLink {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const NavLinkProps = () => new Store();
