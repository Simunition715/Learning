import { IInformationLabel } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IInformationLabel {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const InformationLabelProps = () => new Store();
