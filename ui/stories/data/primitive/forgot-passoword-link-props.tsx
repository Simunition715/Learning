import { IForgotPassowordLink } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IForgotPassowordLink {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ForgotPassowordLinkProps = () => new Store();
