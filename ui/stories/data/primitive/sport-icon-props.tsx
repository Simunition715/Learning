import { action, makeObservable, observable } from "mobx";
import { ISportIcon } from "../../../components";

class Store implements ISportIcon {
  @observable className?: string = void 0;
  @observable name?: string = void 0;

  constructor() {
    makeObservable(this);
  }

  @action
  football() {
    this.name = "Football";

    return this;
  }

  @action
  basketball() {
    this.name = "Basketball";

    return this;
  }

  @action
  baseball() {
    this.name = "Baseball";

    return this;
  }

  @action
  beachVolleyball() {
    this.name = "Beach Volleyball";

    return this;
  }

  @action
  crossCountry() {
    this.name = "Cross Country";

    return this;
  }

  @action
  golf() {
    this.name = "Golf";

    return this;
  }

  @action
  gymnastics() {
    this.name = "Gymnastics";

    return this;
  }

  @action
  hockey() {
    this.name = "Hockey";

    return this;
  }

  @action
  lacrosse() {
    this.name = "Lacrosse";

    return this;
  }

  @action
  skiing() {
    this.name = "Skiing";

    return this;
  }

  @action
  soccer() {
    this.name = "Soccer";

    return this;
  }

  @action
  softball() {
    this.name = "Softball";

    return this;
  }

  @action
  swimmingDiving() {
    this.name = "Swimming & Diving";

    return this;
  }

  @action
  tennis() {
    this.name = "Tennis";

    return this;
  }

  @action
  trackField() {
    this.name = "Track & Field";

    return this;
  }

  @action
  volleyball() {
    this.name = "Volleyball";

    return this;
  }
}

export const SportIconProps = () => new Store();
