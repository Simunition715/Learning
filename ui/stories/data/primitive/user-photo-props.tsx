import { IUserPhoto } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IUserPhoto {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const UserPhotoProps = () => new Store();
