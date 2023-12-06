import { ILogo } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements ILogo {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const LogoProps = () => new Store();
