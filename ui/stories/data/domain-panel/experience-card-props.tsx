import { IExperienceCard } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IExperienceCard {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperienceCardProps = () => new Store();
