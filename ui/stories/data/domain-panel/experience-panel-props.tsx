import { IExperiencePanel } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IExperiencePanel {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ExperiencePanelProps = () => new Store();
