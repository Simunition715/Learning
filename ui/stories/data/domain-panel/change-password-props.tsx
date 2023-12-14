import { IChangePassword } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IChangePassword {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ChangePasswordProps = () => new Store();
