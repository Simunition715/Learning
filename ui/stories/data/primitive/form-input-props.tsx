import { IFormInput } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IFormInput {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const FormInputProps = () => new Store();
