import React, {Component} from "react";
import {usersSelector} from "./usersSelector";
import {connect} from "react-redux";
import {MainComponent} from "../../components/mainComponent/mainComponent";
import "../../assets/clearfix.scss";

interface IProps {
}

type TProps = IProps &
  ReturnType<typeof usersSelector.mapState> &
  ReturnType<typeof usersSelector.mapDispatch>;

class UsersStatic extends Component<TProps> {
  componentDidMount(): void {
    const {getUsers} = this.props;
    getUsers((result) => console.log(result));
  }

  public render(): JSX.Element {
    const {users} = this.props;

    return (
      <>
        <MainComponent users={users.items} />
      </>
    );
  }
}

export const Users = connect(usersSelector.mapState, usersSelector.mapDispatch)(UsersStatic);