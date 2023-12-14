import { faker } from "@faker-js/faker";
import { IUserRow } from "../../../components";
import { makeObservable, observable } from "mobx";

class Store implements IUserRow {
  @observable className?: string = void 0;
  @observable profilePicture?: string = faker.image.avatar();
  @observable name?: string = faker.person.fullName();
  @observable email?: string = faker.internet.email();
  @observable role?: string = faker.person.jobTitle();

  constructor() {
    makeObservable(this);
  }
}

export const UserRowProps = () => new Store();
