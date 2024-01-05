import { IExperienceInformationAlert } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IExperienceInformationAlert {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperienceInformationAlertProps = () => new Store();
