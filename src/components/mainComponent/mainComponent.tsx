import * as React from "react";
import "./styles.scss";
import {Users} from "../../api/dto/Users.g";

interface IProps {
  users: Users[];
}

export class MainComponent extends React.Component<IProps> {
  public render(): JSX.Element {
    const {users} = this.props;
    return (
      <>
        <p className={"container"}>Main Component</p>
        {
          users.map((item: Users) => (<div key={item.id}>{item.name}</div>))
        }
      </>
    );
  }
}
