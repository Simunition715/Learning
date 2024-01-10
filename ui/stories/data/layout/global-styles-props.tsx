import { IGlobalStyles } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IGlobalStyles {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const GlobalStylesProps = () => new Store();
