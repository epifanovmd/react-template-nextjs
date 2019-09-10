import {SimpleDispatch} from "./simpleThunk";
import {NextContext} from "next";

export interface IGetInitialProps extends NextContext{
  reduxStore: { dispatch: SimpleDispatch };
}
