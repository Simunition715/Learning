import { IProfileDropdown } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IProfileDropdown {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ProfileDropdownProps = () => new Store();
