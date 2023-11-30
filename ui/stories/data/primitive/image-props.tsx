import { IImage } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IImage {
  @observable className?: string = void 0;

  constructor() {
    makeObservable(this);
  }
}

export const ImageProps = () => new Store();
