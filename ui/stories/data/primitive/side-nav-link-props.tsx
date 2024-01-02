import React from "react";
import { action, makeObservable, observable, toJS } from "mobx";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { ISideNavLink } from "../../../components/primitive/side-nav-link/side-nav-link";

class Store implements ISideNavLink {
  @observable className?: string = void 0;
  @observable icon?: React.ReactNode = void 0;
  @observable text? = "";

  constructor() {
    makeObservable(this);
  }

  @action
  global() {
    this.text = "Global Styles";

    return this;
  }
}

export const SideNavLinkProps = () => new Store();
