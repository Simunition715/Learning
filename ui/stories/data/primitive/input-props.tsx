import { IInput } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IInput {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const InputProps = () => new Store();
