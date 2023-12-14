import { IUserProfile } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IUserProfile {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const UserProfileProps = () => new Store();
