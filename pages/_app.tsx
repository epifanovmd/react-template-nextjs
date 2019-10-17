import App, {Container} from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import {Provider} from "react-redux";
import {Store} from "redux";
import {IAppState} from "../src/store/IAppState";
import "../src/assets/clearfix.scss";

interface IComponentWithStoreProps {
  store: Store<IAppState>;
}

class MyApp extends App<IComponentWithStoreProps> {
  public render() {
    const {Component, pageProps, store} = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

//tslint:disable-next-line:no-default-export
export default withReduxStore(MyApp);
