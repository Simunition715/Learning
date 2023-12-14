import { IExperienceCardLabel } from "../../../components/primitive/experience-card-label/experience-card-label";
import { makeObservable, observable } from "mobx";

class Store implements IExperienceCardLabel {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperienceCardLabelProps = () => new Store();
