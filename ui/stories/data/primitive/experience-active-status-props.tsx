import { IExperienceActiveStatus } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IExperienceActiveStatus {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperienceActiveStatusProps = () => new Store();
