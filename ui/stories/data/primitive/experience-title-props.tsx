import { IExperienceTitle } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IExperienceTitle {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperienceTitleProps = () => new Store();
