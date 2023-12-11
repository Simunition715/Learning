import { IInformationPanel } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IInformationPanel {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const InformationPanelProps = () => new Store();
