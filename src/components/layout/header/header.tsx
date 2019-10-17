import React, {Component} from "react";
import Link from "next/link";

interface IProps {
}

interface IState {
}

export class Header extends Component<IProps, IState> {
  render() {
    return (
      <>
        <header className="header">
          <nav>
            <Link href="/">
              <a>Users</a>
            </Link>
            <Link href="/useform">
              <a>UseForm</a>
            </Link>
          </nav>
        </header>
      </>
    );
  }
}
