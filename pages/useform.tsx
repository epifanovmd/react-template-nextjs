import React from "react";
import Head from "next/head";;
import {NotificationPopup} from "../src/components/popupNotification/popupNotification";
import {IGetInitialProps} from "../src/common/nextTypes";
import {UsersPageThunk} from "../src/modules/users/usersPageThunk";
import {UseFormComponent} from "../src/modules/useForm/UseForm";
import {Header} from "../src/components/layout/header/header";

export default class UseForm extends React.Component {
  public static async getInitialProps({reduxStore}: IGetInitialProps): Promise<any> {
    await reduxStore.dispatch(UsersPageThunk.getUsers());
    return {};
  }

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <title>{`Use Form Page`}</title>
          <link rel={"shortcut icon"} type={"image/x-icon"} href="../static/images/favicon.ico" />
          <meta name="title" content={"Next App"} />
          <meta name="description" content={"Next App"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <NotificationPopup />
        <Header/>
        <UseFormComponent />
      </>
    );
  }
}
