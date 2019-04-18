import React, {Component} from "react";
import {mainSelector} from "./mainSelector";
import {connect} from "react-redux";
import {LoadState} from "../../common/loadState";
import {MainComponent} from "../../components/mainComponent/mainComponent";
import "../../assets/clearfix.scss";
import {Users} from "../../api/dto/Users.g";

export interface IMainPageStateProps {
  users: Users[];
  usersLoadState: LoadState;
}

export interface IMainPageDispatchProps {
  getUsers: () => void;
}

interface IProps {
  initialProps: {
    users: Users[];
  }
}

type TProps = IProps & IMainPageStateProps & IMainPageDispatchProps;

class MainStatic extends Component<TProps> {
  componentDidMount(): void {
    this.props.getUsers();
  }

  public render(): JSX.Element {
    const {users, initialProps} = this.props;

    return (
      <>
        <MainComponent users={initialProps ? initialProps.users : users} />
      </>
    );
  }
}

export const Main = connect(mainSelector.mapState, mainSelector.mapDispatch)(MainStatic);
