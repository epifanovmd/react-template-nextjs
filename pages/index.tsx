import React from "react";
import Head from "next/head";
import {NotificationPopup} from "../src/components/popupNotification/popupNotification";
import {IGetInitialProps} from "../src/common/nextTypes";
import {Users} from "../src/modules/users/Users";
import {Header} from "../src/components/layout/header/header";
import {UsersThunk} from "../src/modules/users/usersThunk";

//tslint:disable-next-line:no-default-export
export default class Index extends React.Component {
  public static async getInitialProps({reduxStore}: IGetInitialProps) {
    await reduxStore.dispatch(UsersThunk.getUsers());

    return {};
  }

  public render() {
    return (
      <>
        <Head>
          <title>{`Users Page`}</title>
          <link rel={"shortcut icon"} type={"image/x-icon"} href="../static/images/favicon.ico" />
          <meta name="title" content={"Next App"} />
          <meta name="description" content={"Next App"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <NotificationPopup />
        <Header/>
        <Users />
      </>
    );
  }
}
