import { IExperiences } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IExperiences {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperiencesProps = () => new Store();
