import { IBreadcrumbs } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IBreadcrumbs {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const BreadcrumbsProps = () => new Store();
