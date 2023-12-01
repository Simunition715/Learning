import { IEditUserPanel } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IEditUserPanel {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const EditUserPanelProps = () => new Store();
