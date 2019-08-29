import {IAppState} from "../../store/IAppState";
import {MainPageThunk} from "./mainPageThunk";
import {Dispatch} from "react";
import {SsrActions} from "../../store/ssrActions";
import {Users} from "../../api/dto/Users.g";

class MainSelector {
  mapState = ({mainPage}: IAppState) => (
    {
      users: mainPage.users,
      usersLoadState: mainPage.usersLoadState,
    }
  );

  mapDispatch = (dispatch: Dispatch<any>) => (
    {
      getUsers: (): void => {
        dispatch(MainPageThunk.getUsers());
      },
      setInitialUsers: (users: Users[]): void => {
        dispatch(SsrActions.ssrSetUsers(users));
      },
    });
}

export const mainSelector = new MainSelector();
