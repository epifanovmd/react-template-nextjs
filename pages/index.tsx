import React from "react";
import Head from "next/head";
import {Main} from "../src/modules/main/Main";
import fetch from "isomorphic-unfetch";
import {NextContext} from "next";
import {Users} from "../src/api/dto/Users.g";
import {NotificationPopup} from "../src/components/popupNotification/popupNotification";

interface IProps {
  users: Users[];
}

//tslint:disable-next-line:no-default-export
export default class Index extends React.Component<IProps> {
  public static async getInitialProps({}: NextContext): Promise<any> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {users};
  }

  public render(): JSX.Element {
    const {users} = this.props;
    return (
      <>
        <Head>
          <title>{`Main Page`}</title>
          <link rel={"shortcut icon"} type={"image/x-icon"} href="../static/images/favicon.ico" />
          <meta name="title" content={"Next App"} />
          <meta name="description" content={"Next App"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <NotificationPopup />
        <Main initialProps={{users}} />
      </>
    );
  }
}
