import { IProfile } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IProfile {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ProfileProps = () => new Store();
