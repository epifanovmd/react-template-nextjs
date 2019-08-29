import React, {Component} from "react";
import {mainSelector} from "./mainSelector";
import {connect} from "react-redux";
import {MainComponent} from "../../components/mainComponent/mainComponent";
import "../../assets/clearfix.scss";
import {Users} from "../../api/dto/Users.g";

interface IProps {
  initialProps: {
    users: Users[];
  }
}

type TProps = IProps &
  ReturnType<typeof mainSelector.mapState> &
  ReturnType<typeof mainSelector.mapDispatch>;

class MainStatic extends Component<TProps> {
  componentDidMount(): void {
    // this.props.getUsers();
    const {setInitialUsers, initialProps} = this.props;
    setInitialUsers(initialProps.users);
  }

  public render(): JSX.Element {
    const {users} = this.props;

    return (
      <>
        <MainComponent users={users} />
      </>
    );
  }
}

export const Main = connect(mainSelector.mapState, mainSelector.mapDispatch)(MainStatic);
