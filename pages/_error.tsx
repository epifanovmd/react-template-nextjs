import React from "react";
import Head from "next/head";
//tslint:disable-next-line:no-default-export
export default class Error extends React.Component {
  public render() {
    return (
      <>
        <Head>
          <title>{`Custom error page`}</title>
          <link rel={"shortcut icon"} type={"image/x-icon"} href="../static/images/favicon.ico" />
          <meta name="title" content={"Next App"} />
          <meta name="description" content={"Next App"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>{"Custom error page"}</div>
      </>
    );
  }
}
