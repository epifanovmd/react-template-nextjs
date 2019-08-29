import {IMainState} from "../modules/main/IMainState";
import {ISsrState} from "./ISsrState";

export interface IAppState {
  mainPage: IMainState;
  ssr: ISsrState;
}
