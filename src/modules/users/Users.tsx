import React, {Component} from "react";
import {usersSelector} from "./usersSelector";
import {connect} from "react-redux";
import "../../assets/clearfix.scss";
import {UserList} from "../../components/userList/userList";

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
        <UserList users={users.items} />
      </>
    );
  }
}

export const Users = connect(usersSelector.mapState, usersSelector.mapDispatch)(UsersStatic);
