import {IAppState} from "../../store/IAppState";
import {UsersPageThunk} from "./usersPageThunk";
import {SimpleDispatch} from "../../common/simpleThunk";
import {IUsers} from "../../api/dto/Users.g";

class UsersSelector {
  mapState = ({usersPage}: IAppState) => (
    {
      users: usersPage.users,
    }
  );

  mapDispatch = (dispatch: SimpleDispatch) => (
    {
      getUsers: (callback?: (users: IUsers[]) => void): void => {
        return dispatch(UsersPageThunk.getUsers(callback));
      },
    });
}

export const usersSelector = new UsersSelector();
