import { IUsers } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IUsers {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const UsersProps = () => new Store();
