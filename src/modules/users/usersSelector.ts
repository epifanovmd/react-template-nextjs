import {IAppState} from "../../store/IAppState";
import {SimpleDispatch} from "../../common/simpleThunk";
import {IUsers} from "../../api/dto/Users.g";
import {UsersThunk} from "./usersThunk";

class UsersSelector {
  mapState = ({usersPage}: IAppState) => (
    {
      users: usersPage.users,
    }
  );

  mapDispatch = (dispatch: SimpleDispatch) => (
    {
      getUsers: (callback?: (users: IUsers[]) => void) => {
        return dispatch(UsersThunk.getUsers(callback));
      },
    });
}

export const usersSelector = new UsersSelector();
