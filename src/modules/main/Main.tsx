import React, {Component} from "react";
import {mainSelector} from "./mainSelector";
import {connect} from "react-redux";
import {MainComponent} from "../../components/mainComponent/mainComponent";
import "../../assets/clearfix.scss";

interface IProps {
}

type TProps = IProps &
  ReturnType<typeof mainSelector.mapState> &
  ReturnType<typeof mainSelector.mapDispatch>;

class MainStatic extends Component<TProps> {

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
