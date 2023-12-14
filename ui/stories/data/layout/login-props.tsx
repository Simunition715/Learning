import { ILogin } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements ILogin {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const LoginProps = () => new Store();
